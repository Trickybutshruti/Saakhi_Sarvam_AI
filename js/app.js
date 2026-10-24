import { ui, topics, helplines, businessIdeas, studyPaths, funding } from './data.js';
import { respond, remedyReply } from './agent.js';
import { load, save, newId, toText } from './store.js';
import { canListen, canSpeak, listen, speak, stopSpeaking } from './voice.js';

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

const state = load();
let lang = state.lang;
const t = (key) => ui[lang][key];
const localize = (v) => (v && (v[lang] ?? v.en)) ?? '';

// Small DOM helper. Text always goes in as textContent, so user input is never parsed as HTML.
function el(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (v == null || v === false) continue;
    if (k === 'class') node.className = v;
    else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
    else if (k === 'href' || k === 'download' || k === 'type' || k === 'value' || k === 'name') node[k] = v;
    else node.setAttribute(k, v === true ? '' : v);
  }
  for (const c of children.flat()) {
    if (c == null || c === false) continue;
    node.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return node;
}

const now = () => new Date().toLocaleString(lang === 'hi' ? 'hi-IN' : 'en-IN', { dateStyle: 'medium', timeStyle: 'short' });
const persist = () => { state.lang = lang; save(state); };

function toast(message) {
  const node = $('#toast');
  node.textContent = message;
  node.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => { node.hidden = true; }, 2600);
}

// ---------- Tabs ----------
function switchTab(name) {
  $$('.tab').forEach((b) => {
    const on = b.dataset.tab === name;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', String(on));
  });
  $$('.view').forEach((v) => v.classList.toggle('active', v.dataset.view === name));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------- Chat ----------
const chat = $('#chat');

function addUser(text) {
  chat.append(el('div', { class: 'bubble me' }, text));
  scrollChat();
}

function sectionNode(section) {
  return el('div', { class: `section ${section.kind}` },
    el('h4', {}, section.title),
    el('ul', {}, section.items.map((i) => el('li', {}, i))));
}

function renderReply(reply) {
  const body = el('div', { class: 'bubble bot' });
  if (reply.title) body.append(el('div', { class: 'reply-title' }, reply.title));
  if (reply.text) body.append(el('p', {}, reply.text));
  (reply.sections || []).forEach((s) => body.append(sectionNode(s)));

  if (reply.helplines) {
    body.append(el('div', { class: 'helpline-list' },
      reply.helplines.map((h) => el('a', { class: 'helpline', href: `tel:${h.number}` },
        el('strong', {}, h.number), el('span', {}, h.name)))));
  }
  if (reply.funding) {
    body.append(el('ul', { class: 'bullets small' }, reply.funding.map((f) => el('li', {}, f))));
  }
  if (reply.ayushman) body.append(el('p', { class: 'note' }, reply.ayushman));
  if (reply.disclaimer) body.append(el('p', { class: 'disclaimer' }, reply.disclaimer));

  if (reply.action?.type === 'saveReport') {
    body.append(el('button', {
      type: 'button', class: 'btn small',
      onclick: () => saveDiaryEntry(reply.action.text, { silent: true }),
    }, reply.action.label));
  }
  if (reply.action?.type === 'openTab') {
    body.append(el('button', {
      type: 'button', class: 'btn ghost small',
      onclick: () => switchTab(reply.action.tab),
    }, reply.action.label));
  }

  chat.append(el('div', { class: 'bubble-row' }, el('div', { class: 'avatar', 'aria-hidden': 'true' }, 'स'), body));
  scrollChat();
  renderChips(reply.chips || []);
  if ($('#readAloud').checked && canSpeak()) speak(plainText(reply), lang);
}

function plainText(reply) {
  return [reply.title, reply.text, ...(reply.sections || []).flatMap((s) => s.items)]
    .filter(Boolean).join('. ');
}

function renderChips(list) {
  const box = $('#chips');
  box.replaceChildren(...list.map((label) =>
    el('button', { type: 'button', class: 'chip', onclick: () => send(label) }, label)));
}

function scrollChat() {
  chat.scrollTop = chat.scrollHeight;
}

function send(text) {
  const clean = String(text ?? '').trim();
  if (!clean) return;
  stopSpeaking();
  addUser(clean);
  renderReply(respond(clean, lang));
}

function greet() {
  chat.replaceChildren();
  chat.append(el('div', { class: 'bubble-row' }, el('div', { class: 'avatar', 'aria-hidden': 'true' }, 'स'),
    el('div', { class: 'bubble bot' }, el('p', {}, t('welcome')))));
  renderChips(t('menuChips'));
}

$('#composer').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = $('#msg');
  send(input.value);
  input.value = '';
});

// ---------- Voice ----------
function voiceButton(button, { onText, status }) {
  if (!canListen()) {
    button.disabled = true;
    button.title = t('voiceUnsupported');
    return;
  }
  let stop = null;
  button.addEventListener('click', () => {
    if (stop) { stop(); return; }
    button.classList.add('recording');
    status?.({ text: t('stopListening'), show: true });
    stop = listen(lang, {
      onText,
      onError: (code) => {
        status?.({ text: code === 'not-allowed' ? t('voiceUnsupported') : code, show: true });
      },
      onEnd: () => {
        stop = null;
        button.classList.remove('recording');
        status?.({ show: false });
      },
    });
  });
}

voiceButton($('#mic'), {
  onText: (text) => send(text),
  status: ({ text, show }) => { $('#voiceNote').hidden = !show; if (text) $('#voiceNote').textContent = text; },
});
voiceButton($('#diaryMic'), {
  onText: (text) => {
    const box = $('#diaryText');
    box.value = box.value ? `${box.value.trim()} ${text}` : text;
  },
  status: ({ text, show }) => { $('#diaryStatus').hidden = !show; if (text) $('#diaryStatus').textContent = text; },
});

// ---------- Health ----------
function renderTopics() {
  $('#topics').replaceChildren(...topics.map((tp) =>
    el('button', { type: 'button', class: 'topic', onclick: () => showTopic(tp.id) }, localize(tp.title))));
}

function showTopic(id) {
  const reply = remedyReply(id, lang);
  const panel = $('#topicPanel');
  panel.hidden = false;
  panel.replaceChildren(
    el('h3', {}, reply.title),
    el('p', {}, reply.text),
    ...reply.sections.map(sectionNode),
    el('p', { class: 'disclaimer' }, reply.disclaimer),
  );
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function renderFacilityOptions() {
  const select = $('#facility');
  const current = select.value;
  select.replaceChildren(...ui[lang].facilityOptions.map((label, i) =>
    el('option', { value: String(i) }, label)));
  if (current) select.value = current;
}

$('#locate').addEventListener('click', () => {
  const status = $('#locateStatus');
  status.hidden = false;
  if (!navigator.geolocation) {
    status.textContent = t('locationFailed');
    return;
  }
  status.textContent = t('locating');
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      // Opens Google Maps in a new tab. The location is shared only if the user opens the link.
      const q = lang === 'hi' ? 'प्राथमिक स्वास्थ्य केंद्र' : 'primary health centre';
      const url = `https://www.google.com/maps/search/${encodeURIComponent(q)}/@${coords.latitude},${coords.longitude},14z`;
      window.open(url, '_blank', 'noopener');
      status.textContent = '';
      status.hidden = true;
    },
    () => { status.textContent = t('locationFailed'); },
    { enableHighAccuracy: false, timeout: 10000 },
  );
});

$('#visitForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const facilityIdx = Number($('#facility').value || 0);
  state.visits.unshift({
    id: newId(),
    name: f.get('name').trim(),
    village: f.get('village').trim(),
    phone: f.get('phone').trim(),
    concern: f.get('concern').trim(),
    facility: ui[lang].facilityOptions[facilityIdx],
    date: f.get('date'),
    at: now(),
  });
  persist();
  e.target.reset();
  renderVisits();
  toast(lang === 'hi' ? 'अनुरोध सहेजा गया।' : 'Request saved on this device.');
});

function renderVisits() {
  const list = $('#visits');
  if (!state.visits.length) {
    list.replaceChildren(el('li', { class: 'empty' }, t('noVisits')));
    return;
  }
  list.replaceChildren(...state.visits.map((v) => el('li', { class: 'entry' },
    el('div', { class: 'entry-head' }, el('strong', {}, v.name), el('span', { class: 'muted' }, v.at)),
    el('div', {}, v.facility, v.date ? ` · ${v.date}` : ''),
    el('div', {}, v.concern),
    v.phone ? el('a', { href: `tel:${v.phone}` }, v.phone) : null,
    removeButton(() => { state.visits = state.visits.filter((x) => x.id !== v.id); persist(); renderVisits(); }),
  )));
}

function removeButton(onClick) {
  return el('button', { type: 'button', class: 'link-btn', onclick: onClick }, t('remove'));
}

// ---------- Safety ----------
function renderSafety() {
  $('#helplines').replaceChildren(...helplines.map((h) =>
    el('a', { class: 'sos-card', href: `tel:${h.number}` },
      el('strong', {}, h.number),
      el('span', {}, localize(h.name)))));
  $('#checklist').replaceChildren(...ui[lang].checklist.map((item) => el('li', {}, item)));
  renderIncidents();
}

$('#incidentForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  state.incidents.unshift({
    id: newId(),
    when: f.get('when') || now(),
    where: f.get('where').trim(),
    body: f.get('body').trim(),
  });
  persist();
  e.target.reset();
  renderIncidents();
  toast(lang === 'hi' ? 'एंट्री सहेजी गई।' : 'Entry saved on this device.');
});

function renderIncidents() {
  const list = $('#incidents');
  if (!state.incidents.length) {
    list.replaceChildren(el('li', { class: 'empty' }, t('noIncidents')));
    return;
  }
  list.replaceChildren(...state.incidents.map((i) => el('li', { class: 'entry' },
    el('div', { class: 'entry-head' }, el('strong', {}, i.when), el('span', { class: 'muted' }, i.where)),
    el('div', {}, i.body),
    removeButton(() => { state.incidents = state.incidents.filter((x) => x.id !== i.id); persist(); renderIncidents(); }),
  )));
}

// ---------- Grow ----------
function renderGrow() {
  $('#ideas').replaceChildren(...businessIdeas.map((b) => el('details', { class: 'card idea' },
    el('summary', {}, localize(b.title)),
    el('p', {}, localize(b.summary)),
    el('h4', {}, t('startSteps')),
    el('ol', {}, localize(b.steps).map((s) => el('li', {}, s))))));
  $('#studies').replaceChildren(...studyPaths.map((s) => el('details', { class: 'card idea' },
    el('summary', {}, localize(s.title)),
    el('p', {}, localize(s.summary)),
    el('h4', {}, t('startSteps')),
    el('ol', {}, localize(s.steps).map((x) => el('li', {}, x))))));
  $('#funding').replaceChildren(...funding.map((f) => el('li', {}, localize(f))));
}

// ---------- Diary ----------
function saveDiaryEntry(body, { silent = false } = {}) {
  const text = String(body ?? '').trim();
  if (!text) {
    if (!silent) toast(t('emptyEntry'));
    return false;
  }
  state.diary.unshift({ id: newId(), at: now(), body: text });
  persist();
  renderDiary();
  if (silent) toast(t('savedReport'));
  else toast(lang === 'hi' ? 'डायरी में सहेजा गया।' : 'Saved to your diary.');
  return true;
}

$('#saveDiary').addEventListener('click', () => {
  const box = $('#diaryText');
  if (saveDiaryEntry(box.value)) box.value = '';
});

function renderDiary() {
  const list = $('#diaryList');
  if (!state.diary.length) {
    list.replaceChildren(el('li', { class: 'empty' }, t('noEntries')));
    return;
  }
  list.replaceChildren(...state.diary.map((d) => el('li', { class: 'entry' },
    el('div', { class: 'entry-head' }, el('span', { class: 'muted' }, d.at)),
    el('div', { class: 'pre' }, d.body),
    removeButton(() => { state.diary = state.diary.filter((x) => x.id !== d.id); persist(); renderDiary(); }),
  )));
}

function download() {
  const blob = new Blob([toText(state, lang)], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = el('a', { href: url, download: 'sakhi-entries.txt' });
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

$('#exportDiary').addEventListener('click', download);
$('#exportSafety').addEventListener('click', download);

// ---------- Language and tabs ----------
function applyI18n() {
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach((node) => {
    const value = ui[lang][node.dataset.i18n];
    if (typeof value === 'string') node.textContent = value;
  });
  $$('[data-i18n-ph]').forEach((node) => {
    node.placeholder = ui[lang][node.dataset.i18nPh];
  });
  $$('.lang-btn').forEach((b) => {
    const on = b.dataset.lang === lang;
    b.classList.toggle('active', on);
    b.setAttribute('aria-pressed', String(on));
  });
}

function setLang(next) {
  if (next === lang) return;
  lang = next;
  stopSpeaking();
  persist();
  applyI18n();
  renderTopics();
  renderFacilityOptions();
  renderVisits();
  renderSafety();
  renderGrow();
  renderDiary();
  greet();
}

$$('.lang-btn').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));
$$('.tab').forEach((b) => b.addEventListener('click', () => switchTab(b.dataset.tab)));

// ---------- Start ----------
applyI18n();
renderTopics();
renderFacilityOptions();
renderVisits();
renderSafety();
renderGrow();
renderDiary();
greet();

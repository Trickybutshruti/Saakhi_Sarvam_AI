// Everything is kept on this device in localStorage. Private browsing or blocked storage
// must not break the app, so every read and write is wrapped and falls back to memory.

const KEY = 'sakhi.v1';
const empty = { lang: 'en', diary: [], visits: [], incidents: [] };

let memory = null;

export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    return { ...empty, ...(raw ? JSON.parse(raw) : {}) };
  } catch {
    return memory ? { ...memory } : { ...empty };
  }
}

export function save(state) {
  memory = { ...state };
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Storage unavailable: keep working for this session only.
  }
}

export function newId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// Plain-text export so the user can keep a copy of diary and incident entries.
export function toText(state, lang) {
  const line = (e) => `[${e.at}] ${e.body || ''}`;
  const parts = [];
  if (state.diary.length) parts.push('DIARY\n' + state.diary.map(line).join('\n'));
  if (state.incidents.length) {
    parts.push('INCIDENT LOG\n' + state.incidents.map((i) =>
      `[${i.when}] ${i.where ? `(${i.where}) ` : ''}${i.body}`).join('\n'));
  }
  return parts.join('\n\n') || (lang === 'hi' ? 'कोई एंट्री नहीं।' : 'No entries.');
}

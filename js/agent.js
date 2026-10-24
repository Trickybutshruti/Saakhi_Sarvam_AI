// Sakhi's agent: routes a message to an intent and builds a structured reply.
// It is rule-based and works offline. Replies are data objects so the UI can render
// them as cards, and so tests can check them without a browser.

import { DISCLAIMER, helplines, topics, businessIdeas, studyPaths, funding, ui } from './data.js';

const localize = (value, lang) => (value && (value[lang] ?? value.en)) ?? '';

// Lowercase and drop Devanagari nukta (़) so "कमज़ोरी" and "कमजोरी" match the same keyword.
export function normalize(text) {
  return String(text ?? '')
    .normalize('NFC')
    .replace(/़/g, '')
    .toLowerCase()
    .trim();
}

const EMERGENCY_WORDS = [
  'hit', 'beat', 'beaten', 'violen', 'threat', 'harass', 'stalk', 'molest', 'abuse',
  'assault', 'rape', 'dowry', 'blackmail', 'trafficking', 'unsafe', 'scared', 'follow me',
  'मारा', 'मारपीट', 'पीट', 'धमकी', 'छेड़', 'उत्पीड़न', 'दहेज', 'घरेलू हिंसा', 'डर लग',
  'बलात्कार', 'यौन', 'पीछा', 'शोषण', 'ज़बरदस्ती', 'जबरदस्ती', 'असुरक्षित',
].map(normalize);

const DOCTOR_WORDS = [
  'doctor', 'appointment', 'clinic', 'hospital', 'visit', 'phc', 'checkup', 'check-up',
  'डॉक्टर', 'डाक्टर', 'डॉक्टरी', 'अपॉइंट', 'क्लिनिक', 'अस्पताल', 'दवाखाना', 'जांच', 'चिकित्सक',
].map(normalize);

const BUSINESS_WORDS = [
  'business', 'shop', 'startup', 'start a', 'income', 'earn', 'loan', 'self help', 'shg',
  'बिजनेस', 'कारोबार', 'व्यापार', 'दुकान', 'कमाई', 'कमाना', 'पैसे कमा', 'लोन', 'रोज़गार', 'रोजगार', 'स्वरोज़गार', 'स्वयं सहायता',
].map(normalize);

const STUDY_WORDS = [
  'study', 'school', 'college', 'exam', 'scholarship', 'course', 'degree', 'learn', 'class 10', 'class 12',
  'पढ़ाई', 'पढ', 'स्कूल', 'कॉलेज', 'परीक्षा', 'छात्रवृत्ति', 'कोर्स', 'सीखना', 'सीख',
].map(normalize);

const GREETING_RE = /\b(hi|hello|hey)\b/;
const GREETING_WORDS = ['namaste', 'namaskar', 'नमस्ते', 'नमस्कार', 'हैलो', 'हेलो', 'हाय'].map(normalize);

const HELP_WORDS = ['help', 'menu', 'what can you', 'options', 'मदद', 'मेनू', 'क्या कर'].map(normalize);

// English keywords need a word start so "hit" does not match "white" and "earn" not "learn".
// Hindi keywords are matched as plain substrings, since \b does not work with Devanagari.
const isAscii = (w) => /^[\x00-\x7F]+$/.test(w);
const escapeRe = (w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function hasAny(q, words) {
  return words.some((w) => (isAscii(w) ? new RegExp(`\\b${escapeRe(w)}`).test(q) : q.includes(w)));
}

function topicFor(q) {
  return topics.find((t) => hasAny(q, t.keywords.map(normalize)));
}

function isGreeting(q) {
  return GREETING_RE.test(q) || hasAny(q, GREETING_WORDS);
}

// Routing order is deliberate: safety first, then specific health topics, then
// doctor visits, livelihood, greetings, and finally a listening fallback.
export function classify(text) {
  const q = normalize(text);
  if (!q) return { intent: 'empty' };
  if (hasAny(q, EMERGENCY_WORDS)) return { intent: 'emergency' };

  const topic = topicFor(q);
  if (topic) return { intent: 'remedy', topic: topic.id };

  if (hasAny(q, DOCTOR_WORDS)) return { intent: 'doctor' };
  if (hasAny(q, BUSINESS_WORDS)) return { intent: 'business' };
  if (hasAny(q, STUDY_WORDS)) return { intent: 'study' };
  if (isGreeting(q)) return { intent: 'greeting' };
  if (hasAny(q, HELP_WORDS)) return { intent: 'help' };
  return { intent: 'listen' };
}

const chips = (lang) => ui[lang].menuChips;

function helplineItems(lang) {
  return helplines.map((h) => ({ number: h.number, name: localize(h.name, lang) }));
}

export function remedyReply(topicId, lang = 'en') {
  const topic = topics.find((t) => t.id === topicId);
  if (!topic) return null;
  const u = ui[lang];
  const sections = [];
  const steps = localize(topic.steps, lang);
  if (steps.length) sections.push({ kind: 'steps', title: u.tryAtHome, items: steps });
  const careful = localize(topic.careful, lang);
  if (careful.length) sections.push({ kind: 'careful', title: u.careful, items: careful });
  sections.push({ kind: 'alert', title: u.seeDoctor, items: localize(topic.seeDoctor, lang) });

  return {
    intent: 'remedy',
    topic: topic.id,
    title: localize(topic.title, lang),
    text: localize(topic.intro, lang),
    sections,
    disclaimer: localize(DISCLAIMER, lang),
    chips: chips(lang),
  };
}

export function respond(text, lang = 'en') {
  const u = ui[lang];
  const route = classify(text);

  switch (route.intent) {
    case 'empty':
      return { intent: 'greeting', text: u.welcome, chips: chips(lang) };

    case 'emergency':
      return {
        intent: 'emergency',
        text: u.safetyTitle,
        sections: [{ kind: 'steps', title: u.checklistTitle, items: u.checklist.slice(0, 3) }],
        helplines: helplineItems(lang),
        action: { type: 'saveReport', text, label: u.saveReport },
        chips: [],
      };

    case 'remedy':
      return remedyReply(route.topic, lang);

    case 'doctor':
      return {
        intent: 'doctor',
        text: u.visitNote,
        sections: [{ kind: 'steps', title: u.seeDoctor, items: [
          lang === 'hi'
            ? 'उप-केंद्र या PHC: छोटी बीमारी और नियमित जांच'
            : 'Sub-centre or PHC: common illnesses and routine check-ups',
          lang === 'hi'
            ? 'CHC या ज़िला अस्पताल: जांच, भर्ती और विशेषज्ञ डॉक्टर'
            : 'CHC or district hospital: tests, admission and specialist doctors',
          u.callASHA,
        ] }],
        ayushman: u.ayushman,
        action: { type: 'openTab', tab: 'health', label: u.openHealth },
        chips: [],
      };

    case 'business': {
      const idea = businessIdeas[0];
      return {
        intent: 'business',
        text: lang === 'hi'
          ? 'बढ़िया सोच है! छोटे स्तर से शुरू करना सबसे सुरक्षित है। कुछ विचार नीचे हैं, और पूरी सूची "आगे बढ़ें" टैब में है।'
          : 'That is a good step. Starting small is the safest way. Here are some ideas, and the full list is in the Grow tab.',
        sections: [{ kind: 'steps', title: u.ideasTitle, items: businessIdeas.map((b) => localize(b.title, lang)) }],
        funding: funding.map((f) => localize(f, lang)),
        action: { type: 'openTab', tab: 'grow', label: u.openGrow },
        chips: chips(lang),
        example: localize(idea.summary, lang),
      };
    }

    case 'study':
      return {
        intent: 'study',
        text: lang === 'hi'
          ? 'पढ़ाई कभी भी शुरू की जा सकती है। अपनी स्थिति के हिसाब से ये रास्ते देखें:'
          : 'You can start studying at any age. Here are paths to consider:',
        sections: [{ kind: 'steps', title: u.studyTitle, items: studyPaths.map((s) => localize(s.title, lang)) }],
        action: { type: 'openTab', tab: 'grow', label: u.openGrow },
        chips: chips(lang),
      };

    case 'greeting':
      return { intent: 'greeting', text: u.welcome, chips: chips(lang) };

    case 'help':
      return { intent: 'help', text: u.welcome, chips: chips(lang) };

    default:
      return { intent: 'listen', text: u.listenFallback, chips: chips(lang) };
  }
}

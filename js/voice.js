// Speech input and output using the browser's built-in Web Speech API.
// No audio leaves the device through this module; the browser provider handles recognition.

import { LANGUAGES } from './data.js';

const Recognition = globalThis.SpeechRecognition || globalThis.webkitSpeechRecognition;

export const canListen = () => Boolean(Recognition);
export const canSpeak = () => Boolean('speechSynthesis' in globalThis);

const speechCode = (lang) => LANGUAGES.find((l) => l.code === lang)?.speech ?? 'en-IN';

// Calls onText with each final phrase. Returns a stop() function.
export function listen(lang, { onText, onEnd, onError }) {
  if (!Recognition) {
    onError?.('unsupported');
    return () => {};
  }
  const rec = new Recognition();
  rec.lang = speechCode(lang);
  rec.interimResults = false;
  rec.continuous = false;
  rec.onresult = (event) => {
    const text = Array.from(event.results).map((r) => r[0].transcript).join(' ').trim();
    if (text) onText?.(text);
  };
  rec.onerror = (event) => onError?.(event.error || 'error');
  rec.onend = () => onEnd?.();
  try {
    rec.start();
  } catch {
    onError?.('busy');
  }
  return () => {
    try { rec.stop(); } catch { /* already stopped */ }
  };
}

export function speak(text, lang) {
  if (!canSpeak() || !text) return;
  const synth = globalThis.speechSynthesis;
  synth.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = speechCode(lang);
  utter.rate = 0.95;
  synth.speak(utter);
}

export function stopSpeaking() {
  if (canSpeak()) globalThis.speechSynthesis.cancel();
}

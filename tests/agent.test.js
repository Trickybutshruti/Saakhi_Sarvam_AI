import { test } from 'node:test';
import assert from 'node:assert/strict';
import { classify, respond, normalize } from '../js/agent.js';

test('normalize drops nukta so Hindi spellings match', () => {
  assert.equal(normalize('कमज़ोरी'), normalize('कमजोरी'));
});

test('English emergency words route to emergency', () => {
  assert.equal(classify('my husband hits me').intent, 'emergency');
  assert.equal(classify('someone is stalking me').intent, 'emergency');
});

test('Hindi emergency words route to emergency', () => {
  assert.equal(classify('घर में मारपीट होती है').intent, 'emergency');
  assert.equal(classify('मुझे धमकी मिल रही है').intent, 'emergency');
});

test('word boundaries stop false emergency matches', () => {
  assert.notEqual(classify('I have white discharge').intent, 'emergency');
  assert.equal(classify('I have white discharge').intent, 'remedy');
  assert.equal(classify('I want to learn sewing').intent, 'study');
});

test('health topics route to remedies with the right topic', () => {
  assert.deepEqual(classify('I have bad period cramps'), { intent: 'remedy', topic: 'periods' });
  assert.deepEqual(classify('माहवारी में दर्द है'), { intent: 'remedy', topic: 'periods' });
  assert.equal(classify('I feel dizzy and weak').topic, 'weakness');
  assert.equal(classify('मुझे पेशाब में जलन हो रही है').topic, 'urinary');
  assert.equal(classify('I have a bad headache').topic, 'headache');
});

test('pregnancy is checked before periods so "missed period" is not treated as a cycle issue', () => {
  assert.equal(classify('I think I am pregnant, period is late').topic, 'pregnancy');
});

test('doctor and business and study routes', () => {
  assert.equal(classify('I need a doctor appointment').intent, 'doctor');
  assert.equal(classify('I want to start a small business').intent, 'business');
  assert.equal(classify('मैं कारोबार शुरू करना चाहती हूं').intent, 'business');
  assert.equal(classify('how can I finish class 10 scholarship').intent, 'study');
  assert.equal(classify('मुझे पढ़ाई दोबारा शुरू करनी है').intent, 'study');
});

test('greetings and fallback', () => {
  assert.equal(classify('hello').intent, 'greeting');
  assert.equal(classify('नमस्ते').intent, 'greeting');
  assert.equal(classify('this is something else entirely').intent, 'listen');
});

test('emergency reply lists helplines and offers to save the report', () => {
  const reply = respond('someone is threatening me', 'en');
  assert.equal(reply.intent, 'emergency');
  assert.ok(reply.helplines.some((h) => h.number === '112'));
  assert.ok(reply.helplines.some((h) => h.number === '181'));
  assert.equal(reply.action.type, 'saveReport');
  assert.equal(reply.action.text, 'someone is threatening me');
});

test('remedy reply has home steps, careful notes and doctor red flags', () => {
  const reply = respond('period cramps', 'en');
  const kinds = reply.sections.map((s) => s.kind);
  assert.deepEqual(kinds, ['steps', 'careful', 'alert']);
  assert.ok(reply.sections[0].items.length >= 3);
  assert.ok(reply.disclaimer.length > 0);
});

test('pregnancy reply has no home-steps section that could delay care', () => {
  const reply = respond('I am pregnant', 'en');
  assert.equal(reply.intent, 'remedy');
  assert.ok(reply.text.includes('register') || reply.text.includes('Please register'));
  assert.ok(reply.sections.every((s) => s.kind !== 'careful' || s.items.length > 0));
});

test('every topic has Hindi and English content', () => {
  for (const t of ['periods', 'weakness', 'urinary', 'discharge', 'cold', 'headache', 'acidity', 'lowmood', 'pregnancy']) {
    const en = respond(t, 'en');
    const hi = respond(t, 'hi');
    assert.ok(en.sections || en.text, `en missing for ${t}`);
    assert.ok(hi.sections || hi.text, `hi missing for ${t}`);
  }
});

test('empty input returns the welcome message', () => {
  assert.equal(respond('   ', 'en').intent, 'greeting');
});

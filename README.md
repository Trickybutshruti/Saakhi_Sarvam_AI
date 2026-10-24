# Sakhi (सखी)

A bilingual helper app for women in rural areas. It offers:

- **Talk**: an agent you can type or speak to (Hindi or English). It gives home remedies for common problems, clear "see a doctor if" warning signs, and helplines. For safety concerns it responds first with emergency steps.
- **Health**: topic guides, a button to find the nearest health centre, a doctor-visit request form, and information on Ayushman Bharat (PM-JAY).
- **Safety**: one-tap helplines (112, 181, 1091, 108, 102, 14416), a safety checklist, and a private incident log.
- **Grow**: business ideas, study and skill paths, and funding support to ask about.
- **My Diary**: a private place to write or speak what is on your mind. Entries can be exported as text.

Everything is stored on the device. Nothing is sent to a server.

## Run it

No install or build step is needed. Serve the folder with any static server:

```
python -m http.server 8080
```

Then open <http://localhost:8080>. Voice input and output use the browser's Web Speech API, which works best in Chrome and Edge. Typing works everywhere.

## Test

```
npm test
```

The tests cover the agent's routing in English and Hindi, emergency handling, and that every health topic has content in both languages.

## Project layout

```
index.html        page structure and tabs
css/styles.css    theme tokens (light and dark), layout, phone-width rules
js/data.js        all content: UI strings, helplines, health topics, business and study ideas
js/agent.js       intent routing and reply building (no DOM, works in Node)
js/voice.js       speech input and output
js/store.js       localStorage with safe fallbacks, plain-text export
js/app.js         rendering, tabs, language switching, forms
tests/            agent tests (node:test)
```

## Adding a language

1. Add the language to `LANGUAGES` in `js/data.js`, with its speech code (for example `ta-IN`).
2. Add a matching block under `ui`, and add `en`/`hi`-style keys to each topic, idea, and helpline.
3. Add the Hindi-style keywords for it in `js/agent.js` so the agent can recognise messages in that language.

The agent currently recognises English and Hindi keywords only. Other languages need step 3 before the agent can understand them.

## Important

- The app gives general information. It does not diagnose or treat. Its reminders about when to see a doctor are not a substitute for care.
- Helpline numbers are included for India. Check them against official sources before deploying, and update them if they change.
- The visit form saves a request on the device. It does not book an appointment with a clinic. Call the health centre to confirm.
- The emergency features help a person reach help. They do not replace police or emergency services.

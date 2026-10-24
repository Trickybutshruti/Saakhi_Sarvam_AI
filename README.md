# Sakhi (सखी)

Sakhi is a bilingual (English and Hindi) web app for women in rural areas. It gives general health guidance, safety help, and ideas for work and study, and it works through typing or voice. It is a static site with no dependencies: open it in a browser and it runs.

> Sakhi gives general information. It does not diagnose or treat, and it does not replace a doctor, the police, or emergency services.

## Features

| Tab | What it does |
| --- | --- |
| **Talk** | Chat with the Sakhi agent by typing or speaking. It gives home remedies, "see a doctor if" warning signs, and helplines. Messages about violence or threats get emergency steps first. |
| **Health** | Topic guides (periods, weakness and low iron, urinary burning, discharge, cold and cough, headache, acidity, low mood, pregnancy). Find the nearest health centre, request a doctor visit, and read about Ayushman Bharat (PM-JAY). |
| **Safety** | One-tap calls to 112, 181, 1091, 108, 102 and 14416. A safety checklist and a private incident log. |
| **Grow** | Business ideas, study and skill paths, and funding to ask about. |
| **My Diary** | Write or speak your thoughts. Entries stay on the device and can be downloaded as text. |

Everything you enter is stored only in your browser (`localStorage`). Nothing is sent to a server.

## Quick start

No install or build step is needed. Serve the folder with any static server:

```bash
python -m http.server 8080
```

Then open <http://localhost:8080>.

You can also open `index.html` directly, but voice features and some browsers block modules on `file://`, so serving it is recommended.

## Voice

Voice input and output use the browser's Web Speech API.

- Works best in **Chrome** and **Edge**.
- Speech recognition sends audio to the browser's speech provider. Sakhi does not record or store audio.
- If voice is unavailable, the mic button is disabled and typing still works.

## Running the tests

The tests check the agent's routing in English and Hindi, emergency handling, and that every health topic has content in both languages.

```bash
npm test
```

Requires Node.js 18 or later.

## Project structure

```
index.html          page structure, tabs, and forms
css/styles.css      theme tokens (light and dark), layout, phone-width rules
js/data.js          all content: UI strings, helplines, health topics, ideas, study paths
js/agent.js         intent routing and reply building (no DOM, runs in Node)
js/voice.js         speech input and output
js/store.js         localStorage with safe fallbacks, plain-text export
js/app.js           rendering, tabs, language switching, forms
tests/agent.test.js agent tests (node:test)
package.json        test and start scripts
```

### How the agent works

`classify()` in `js/agent.js` checks the message against keyword lists, in this order:

1. Emergency words (violence, threats, harassment)
2. Health topics (the first matching topic wins)
3. Doctor or appointment words
4. Business words
5. Study words
6. Greetings and help
7. A listening fallback

Each reply is a plain data object (title, sections, helplines, actions), so the UI renders it and the tests can check it without a browser. The agent is rule-based, not an AI model, so it works offline and never invents medical advice. Its limit is that it only understands the keywords it has.

## Customising

**Change content.** Health topics, helplines, business ideas, study paths, and funding are all in `js/data.js`. Each text field has an `en` and a `hi` value.

**Add a language.**

1. Add the language to `LANGUAGES` in `js/data.js`, with its speech code (for example `ta-IN`).
2. Add a matching block under `ui`, and add the new language's text to each topic, idea, study path, and helpline.
3. Add keywords for the new language to the lists in `js/agent.js`, so the agent recognises messages in it.

**Change the look.** Colours are CSS tokens on `:root` in `css/styles.css`. Dark mode is set in the same file and follows the device setting. Add `data-theme="light"` or `data-theme="dark"` to `<html>` to override it.

## Before you deploy

- **Check helpline numbers** (112, 181, 1091, 108, 102, 14416) against official sources. They are for India and can change.
- **Have Hindi text reviewed** by a native speaker, especially the medical wording.
- **Review the medical content** with a qualified health professional. The "see a doctor if" lists are meant to be conservative, but they are not clinical guidelines.
- **The visit form does not book appointments.** It saves a request on the device. Users need to call the health centre to confirm.
- **Privacy.** The diary and incident log live only in the browser. Clearing site data deletes them, and they cannot be recovered. Say this to users clearly.
- **Hosting.** Any static host works (for example GitHub Pages, Netlify, or an intranet server). Serve it over HTTPS, because browsers only allow location and speech features on secure origins (localhost is also allowed).

## Limitations

- Keyword matching misses messages phrased in ways the keyword lists do not cover. Users may need to try different words.
- Only English and Hindi are supported.
- Location lookup opens Google Maps in a new tab. Your coordinates are shared with Google only if you open that link.
- Voice recognition quality depends on the browser and the speech provider.

## Contributing

1. Make your change.
2. Run `npm test` and make sure all tests pass.
3. If you change routing in `js/agent.js`, add a test for the new case in `tests/agent.test.js`.
4. Keep user-supplied text out of `innerHTML`. Use `textContent`, as `js/app.js` does.

## License

Not yet specified. Add a license before sharing the project publicly.

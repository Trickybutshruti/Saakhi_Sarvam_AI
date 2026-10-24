// Content for Sakhi. Every user-facing string has an `en` and `hi` version.
// Add a language by adding the same keys under a new code and registering it in LANGUAGES.

export const LANGUAGES = [
  { code: 'en', label: 'English', speech: 'en-IN' },
  { code: 'hi', label: 'हिन्दी', speech: 'hi-IN' },
];

export const DISCLAIMER = {
  en: 'This is general information, not a diagnosis. Sakhi does not replace a doctor. In an emergency, call 112.',
  hi: 'यह सामान्य जानकारी है, इलाज या निदान नहीं। सखी डॉक्टर की जगह नहीं ले सकती। आपात स्थिति में 112 पर कॉल करें।',
};

export const ui = {
  en: {
    appName: 'Sakhi',
    tagline: 'Your friend for health, safety and growth',
    tabChat: 'Talk',
    tabHealth: 'Health',
    tabSafety: 'Safety',
    tabGrow: 'Grow',
    tabDiary: 'My Diary',
    sos: 'SOS 112',
    typeHere: 'Type or speak your problem…',
    send: 'Send',
    speak: 'Speak',
    stopListening: 'Listening… tap to stop',
    voiceUnsupported: 'Voice is not supported in this browser. Please type.',
    readAloud: 'Read replies aloud',
    welcome: 'Namaste. I am Sakhi. You can tell me about your health, a problem at home or outside, or your plans for work or study. You can type or speak.',
    menuChips: ['Period pain', 'Weakness', 'Cold and cough', 'Doctor visit', 'Safety help', 'Start a business', 'Study more'],
    tryAtHome: 'Try at home',
    careful: 'Be careful',
    seeDoctor: 'See a doctor if',
    helplines: 'Helplines',
    saveReport: 'Save this to my private diary',
    savedReport: 'Saved to your diary on this device.',
    openHealth: 'Go to Health tab',
    openSafety: 'Go to Safety tab',
    openGrow: 'Go to Grow tab',
    listenFallback: 'I hear you. Tell me a little more — what is happening, and what would help you most right now?',
    // Health tab
    healthTopics: 'Health topics',
    findCentre: 'Find a health centre near me',
    locating: 'Finding your location…',
    locationFailed: 'Could not get your location. Please allow location, or search "PHC near me" on the map.',
    callASHA: 'Call 102 (mother and child health)',
    visitTitle: 'Request a doctor visit',
    visitNote: 'This saves your request on this device. It does not book a slot. Call the health centre to confirm.',
    name: 'Your name',
    village: 'Village or town',
    phone: 'Phone (optional)',
    concern: 'What is the problem?',
    facility: 'Where would you like to go?',
    facilityOptions: ['Sub-centre / PHC', 'CHC', 'District hospital', 'Not sure'],
    preferredDate: 'Preferred date',
    submitVisit: 'Save request',
    noVisits: 'No requests yet.',
    remove: 'Remove',
    ayushman: 'Free treatment: check if your family is eligible for Ayushman Bharat (PM-JAY) at your nearest Common Service Centre or health centre.',
    // Safety tab
    safetyTitle: 'You are not alone',
    safetyIntro: 'Tap a number to call. These calls are free.',
    checklistTitle: 'Safety steps',
    checklist: [
      'Go to a place where other people are around, or to a trusted neighbour’s house.',
      'Write down what happened: date, time, place, and who was there.',
      'Keep messages, call records, photos or videos safe. Send copies to a trusted person.',
      'Tell one trusted person where you are and ask them to check on you.',
      'Visit a Sakhi One Stop Centre or the police station. You can ask for a woman officer.',
    ],
    incidentTitle: 'Private incident log',
    incidentNote: 'Stored only on this device. Export it if you want to keep a copy.',
    incidentWhen: 'Date and time',
    incidentWhere: 'Place',
    incidentWhat: 'What happened?',
    saveIncident: 'Save entry',
    noIncidents: 'No entries yet.',
    export: 'Download as text',
    // Grow tab
    growTitle: 'Start something of your own',
    ideasTitle: 'Business ideas',
    studyTitle: 'Study and skills',
    fundingTitle: 'Support you can ask about',
    startSteps: 'First steps',
    // Diary tab
    diaryTitle: 'Speak your heart',
    diaryNote: 'Write or speak. Entries stay on this device and are never sent anywhere.',
    diaryPlaceholder: 'Write what is on your mind…',
    saveEntry: 'Save entry',
    noEntries: 'Your diary is empty. Start with one line.',
    emptyEntry: 'Nothing to save yet.',
  },
  hi: {
    appName: 'सखी',
    tagline: 'सेहत, सुरक्षा और आगे बढ़ने में आपकी साथी',
    tabChat: 'बात करें',
    tabHealth: 'सेहत',
    tabSafety: 'सुरक्षा',
    tabGrow: 'आगे बढ़ें',
    tabDiary: 'मेरी डायरी',
    sos: 'SOS 112',
    typeHere: 'अपनी परेशानी लिखें या बोलें…',
    send: 'भेजें',
    speak: 'बोलें',
    stopListening: 'सुन रही हूं… रोकने के लिए दबाएं',
    voiceUnsupported: 'इस ब्राउज़र में आवाज़ से लिखना समर्थित नहीं है। कृपया लिखें।',
    readAloud: 'जवाब सुनाएं',
    welcome: 'नमस्ते, मैं सखी हूं। आप अपनी सेहत, घर या बाहर की किसी परेशानी, या काम और पढ़ाई की योजना के बारे में बता सकती हैं। लिखें या बोलें।',
    menuChips: ['माहवारी का दर्द', 'कमज़ोरी', 'सर्दी और खांसी', 'डॉक्टर से मिलना', 'सुरक्षा मदद', 'कारोबार शुरू करें', 'पढ़ाई जारी रखें'],
    tryAtHome: 'घर पर करें',
    careful: 'सावधानी',
    seeDoctor: 'इन स्थितियों में डॉक्टर को दिखाएं',
    helplines: 'हेल्पलाइन',
    saveReport: 'इसे मेरी निजी डायरी में सहेजें',
    savedReport: 'आपकी डायरी में इस डिवाइस पर सहेज दिया गया है।',
    openHealth: 'सेहत टैब पर जाएं',
    openSafety: 'सुरक्षा टैब पर जाएं',
    openGrow: 'आगे बढ़ें टैब पर जाएं',
    listenFallback: 'मैं आपकी बात सुन रही हूं। थोड़ा और बताइए — क्या हो रहा है, और अभी आपको सबसे ज़्यादा किस चीज़ से मदद मिलेगी?',
    healthTopics: 'सेहत के विषय',
    findCentre: 'मेरे पास का स्वास्थ्य केंद्र खोजें',
    locating: 'आपकी जगह खोजी जा रही है…',
    locationFailed: 'आपकी जगह नहीं मिल सकी। लोकेशन की अनुमति दें, या नक्शे पर "PHC near me" खोजें।',
    callASHA: '102 पर कॉल करें (मां और बच्चे की सेहत)',
    visitTitle: 'डॉक्टर से मिलने का अनुरोध',
    visitNote: 'यह अनुरोध इस डिवाइस पर सहेजता है। यह समय तय नहीं करता। पक्का करने के लिए स्वास्थ्य केंद्र को कॉल करें।',
    name: 'आपका नाम',
    village: 'गांव या शहर',
    phone: 'फ़ोन (वैकल्पिक)',
    concern: 'परेशानी क्या है?',
    facility: 'आप कहां जाना चाहेंगी?',
    facilityOptions: ['उप-केंद्र / PHC', 'CHC', 'ज़िला अस्पताल', 'पता नहीं'],
    preferredDate: 'पसंदीदा तारीख',
    submitVisit: 'अनुरोध सहेजें',
    noVisits: 'अभी कोई अनुरोध नहीं है।',
    remove: 'हटाएं',
    ayushman: 'मुफ़्त इलाज: अपने नज़दीकी कॉमन सर्विस सेंटर या स्वास्थ्य केंद्र पर जांचें कि आपका परिवार आयुष्मान भारत (PM-JAY) के लिए पात्र है या नहीं।',
    safetyTitle: 'आप अकेली नहीं हैं',
    safetyIntro: 'नंबर दबाकर कॉल करें। ये कॉल मुफ़्त हैं।',
    checklistTitle: 'सुरक्षा के कदम',
    checklist: [
      'ऐसी जगह जाएं जहां और लोग हों, या किसी भरोसेमंद पड़ोसी के घर।',
      'जो हुआ उसे लिखें: तारीख, समय, जगह, और वहां कौन था।',
      'मैसेज, कॉल रिकॉर्ड, फोटो या वीडियो सुरक्षित रखें। उनकी कॉपी किसी भरोसेमंद व्यक्ति को भेजें।',
      'किसी एक भरोसेमंद व्यक्ति को अपनी जगह बताएं और उनसे हाल पूछते रहने को कहें।',
      'सखी वन स्टॉप सेंटर या थाने में जाएं। आप महिला अधिकारी से मिलने की मांग कर सकती हैं।',
    ],
    incidentTitle: 'निजी घटना लॉग',
    incidentNote: 'यह सिर्फ इस डिवाइस पर रहता है। कॉपी चाहिए तो डाउनलोड करें।',
    incidentWhen: 'तारीख और समय',
    incidentWhere: 'जगह',
    incidentWhat: 'क्या हुआ?',
    saveIncident: 'एंट्री सहेजें',
    noIncidents: 'अभी कोई एंट्री नहीं है।',
    export: 'टेक्स्ट के रूप में डाउनलोड करें',
    growTitle: 'अपना कुछ शुरू करें',
    ideasTitle: 'कारोबार के विचार',
    studyTitle: 'पढ़ाई और हुनर',
    fundingTitle: 'मदद जो आप मांग सकती हैं',
    startSteps: 'पहले कदम',
    diaryTitle: 'मन की बात कहें',
    diaryNote: 'लिखें या बोलें। एंट्री इस डिवाइस पर रहती हैं और कहीं नहीं भेजी जातीं।',
    diaryPlaceholder: 'मन में जो है वह लिखें…',
    saveEntry: 'एंट्री सहेजें',
    noEntries: 'आपकी डायरी खाली है। एक पंक्ति से शुरू करें।',
    emptyEntry: 'सहेजने के लिए अभी कुछ नहीं है।',
  },
};

export const helplines = [
  { number: '112', name: { en: 'Emergency (police, fire, ambulance)', hi: 'आपातकाल (पुलिस, आग, एंबुलेंस)' } },
  { number: '181', name: { en: 'Women Helpline', hi: 'महिला हेल्पलाइन' } },
  { number: '1091', name: { en: 'Women in distress helpline', hi: 'संकट में महिलाओं के लिए हेल्पलाइन' } },
  { number: '108', name: { en: 'Ambulance (free)', hi: 'एंबुलेंस (मुफ़्त)' } },
  { number: '102', name: { en: 'Mother and child health', hi: 'मां और बच्चे की सेहत' } },
  { number: '14416', name: { en: 'Tele-MANAS mental health (free, 24x7)', hi: 'Tele-MANAS मानसिक स्वास्थ्य (मुफ़्त, 24x7)' } },
];

// Health topics. `keywords` are matched against the user's text (lowercase, nukta removed).
// Order matters: the first topic whose keywords match is used.
export const topics = [
  {
    id: 'pregnancy',
    keywords: ['pregnan', 'baby bump', 'गर्भ', 'प्रेग्नेंट', 'पेट में बच्चा'],
    title: { en: 'Pregnancy care', hi: 'गर्भावस्था की देखभाल' },
    intro: {
      en: 'Please register early at a government health centre or with your ASHA worker. Regular check-ups protect you and your baby. Do not take any medicine or herbal remedy without asking a doctor.',
      hi: 'कृपया जल्दी किसी सरकारी स्वास्थ्य केंद्र पर या अपनी ASHA कार्यकर्ता के पास पंजीकरण कराएं। नियमित जांच आपकी और बच्चे की रक्षा करती है। डॉक्टर से पूछे बिना कोई दवा या जड़ी-बूटी न लें।',
    },
    steps: {
      en: ['Register for antenatal check-ups at a PHC/CHC or through your ASHA worker.', 'Ask about Pradhan Mantri Matru Vandana Yojana (PMMVY), which gives cash support for eligible pregnant women.', 'Eat regular meals, drink safe water, and rest well.'],
      hi: ['PHC/CHC पर या ASHA कार्यकर्ता के ज़रिए गर्भावस्था की जांच के लिए पंजीकरण करवाएं।', 'प्रधानमंत्री मातृ वंदना योजना (PMMVY) के बारे में पूछें, जो पात्र गर्भवती महिलाओं को आर्थिक सहायता देती है।', 'समय पर खाना खाएं, साफ़ पानी पिएं और अच्छे से आराम करें।'],
    },
    careful: { en: [], hi: [] },
    seeDoctor: {
      en: ['Bleeding, severe belly pain, or fluid leaking', 'Severe headache, blurred vision, or swelling of face or hands', 'Baby moves much less than usual, or you have fever'],
      hi: ['खून आना, पेट में तेज़ दर्द, या पानी जैसा रिसाव', 'तेज़ सिर दर्द, धुंधला दिखना, या चेहरे/हाथों में सूजन', 'बच्चा सामान्य से बहुत कम हिले, या बुखार हो'],
    },
  },
  {
    id: 'periods',
    keywords: ['period', 'menstru', 'cramp', 'pcod', 'pcos', 'माहवार', 'महावार', 'पीरियड', 'मासिक', 'ऐंठन', 'ऐठन'],
    title: { en: 'Period pain and cramps', hi: 'माहवारी में दर्द और ऐंठन' },
    steps: {
      en: ['Place a warm water bottle or warm cloth on your lower belly or back for 15–20 minutes.', 'Sip warm water, lightly sweetened ginger tea, or cumin water through the day.', 'Rest, and do gentle movement such as slow walking or stretching.', 'Eat light, iron-rich food such as dal, leafy greens, and jaggery.'],
      hi: ['पेट के निचले हिस्से या कमर पर 15–20 मिनट तक गुनगुनी पानी की बोतल या गर्म कपड़ा रखें।', 'दिनभर गुनगुना पानी, हल्की मीठी अदरक की चाय या जीरे का पानी पिएं।', 'आराम करें और धीमी सैर या हल्का स्ट्रेचिंग करें।', 'दाल, हरी सब्ज़ियां और गुड़ जैसी हल्की, आयरन वाली चीज़ें खाएं।'],
    },
    careful: {
      en: ['On painful days, avoid very cold drinks and very oily food.'],
      hi: ['दर्द के दिनों में बहुत ठंडे पेय और ज़्यादा तले-भुने खाने से बचें।'],
    },
    seeDoctor: {
      en: ['Pain stops your daily work, or you need painkillers every month', 'Soaking a pad every hour for 2 hours or more, or periods lasting more than 7 days', 'Bleeding between periods, or after intercourse', 'Missed periods, fever, or very irregular cycles for many months (PCOS or thyroid may be the cause)'],
      hi: ['दर्द से रोज़ के काम रुक जाएं, या हर महीने दर्द की दवा लेनी पड़े', '2 घंटे या ज़्यादा तक हर घंटे पैड भीगे, या माहवारी 7 दिन से ज़्यादा चले', 'दो माहवारी के बीच खून आए, या शारीरिक संबंध के बाद खून आए', 'माहवारी छूटे, बुखार हो, या कई महीनों से चक्र बहुत अनियमित हो (PCOS या थायरॉइड वजह हो सकती है)'],
    },
  },
  {
    id: 'weakness',
    keywords: ['weak', 'dizzy', 'dizziness', 'anemi', 'anaemi', 'iron', 'hemoglobin', 'tired', 'कमजोर', 'कमज़ोर', 'चक्कर', 'खून की कमी', 'हीमोग्लोबिन', 'थकान', 'थकावट'],
    title: { en: 'Weakness, dizziness and low iron', hi: 'कमज़ोरी, चक्कर और खून की कमी' },
    steps: {
      en: ['Eat iron-rich foods daily: green leafy vegetables (spinach, methi), chana, dal, jaggery, and eggs or meat if you eat them.', 'Have a vitamin C food like amla, lemon, or guava with meals. It helps your body absorb iron.', 'Do not have tea or coffee right after meals, because it blocks iron absorption.', 'If you feel dizzy, stand up slowly and sit down if needed.'],
      hi: ['रोज़ आयरन वाली चीज़ें खाएं: हरी पत्तेदार सब्ज़ियां (पालक, मेथी), चना, दाल, गुड़, और अगर खाती हैं तो अंडा या मांस।', 'खाने के साथ आंवला, नींबू या अमरूद जैसी विटामिन C वाली चीज़ें लें। इससे आयरन बेहतर अवशोषित होता है।', 'खाने के तुरंत बाद चाय या कॉफी न पिएं, इससे आयरन कम अवशोषित होता है।', 'चक्कर आए तो धीरे उठें, ज़रूरत हो तो बैठ जाएं।'],
    },
    careful: {
      en: ['Take iron tablets only after a blood test and as advised by a doctor, ASHA, or ANM.'],
      hi: ['आयरन की गोलियां खून की जांच के बाद और डॉक्टर, ASHA या ANM की सलाह पर ही लें।'],
    },
    seeDoctor: {
      en: ['Breathlessness, chest pain, or fainting', 'Very pale skin or eyes with heavy tiredness, or very heavy bleeding', 'Weakness that does not improve after 2–3 weeks of good food', 'Any of these during pregnancy'],
      hi: ['सांस फूलना, सीने में दर्द, या बेहोशी', 'त्वचा या आंखें बहुत पीली हों और बहुत थकान हो, या माहवारी में बहुत ज़्यादा खून जाए', 'अच्छा खाने के बावजूद 2–3 हफ्ते में कमज़ोरी न सुधरे', 'गर्भावस्था में ऊपर की कोई भी परेशानी'],
    },
  },
  {
    id: 'urinary',
    keywords: ['urine', 'urinary', 'uti', 'burning urine', 'पेशाब', 'यूरिन'],
    title: { en: 'Burning while passing urine', hi: 'पेशाब में जलन' },
    steps: {
      en: ['Drink plenty of water through the day so your urine stays pale yellow.', 'Do not hold urine for long. Pass urine after intercourse and when you feel the urge.', 'Wipe from front to back and wear loose cotton underwear.', 'Avoid tea, coffee, and very spicy food while you have burning.'],
      hi: ['दिनभर खूब पानी पिएं ताकि पेशाब हल्के पीले रंग का रहे।', 'पेशाब को ज़्यादा देर न रोकें। शारीरिक संबंध के बाद और ज़रूरत लगते ही पेशाब करें।', 'पोंछते समय आगे से पीछे की ओर पोंछें और ढीले सूती अंदरूनी कपड़े पहनें।', 'जलन के दौरान चाय, कॉफी और बहुत मसालेदार खाने से बचें।'],
    },
    careful: {
      en: ['Do not take antibiotics without a doctor’s prescription. A urine test helps choose the right medicine.'],
      hi: ['बिना डॉक्टर के पर्चे के एंटीबायोटिक न लें। सही दवा के लिए पेशाब की जांच ज़रूरी है।'],
    },
    seeDoctor: {
      en: ['Fever, chills, or pain in the back or side (kidney infection can be serious)', 'Blood in urine, or no improvement in 2–3 days', 'Repeated infections, or you are pregnant'],
      hi: ['बुखार, कंपकंपी, या पीठ या कमर के किनारे में दर्द (किडनी का संक्रमण गंभीर हो सकता है)', 'पेशाब में खून, या 2–3 दिन में आराम न हो', 'बार-बार संक्रमण हो, या गर्भावस्था हो'],
    },
  },
  {
    id: 'discharge',
    keywords: ['discharge', 'itch', 'itching', 'smell', 'सफेद पानी', 'खुजली', 'बदबू'],
    title: { en: 'Discharge, itching or bad smell', hi: 'सफेद पानी, खुजली या बदबू' },
    intro: {
      en: 'Changes in discharge, itching, or smell need a proper check-up. Home remedies can hide or worsen an infection.',
      hi: 'सफेद पानी, खुजली या बदबू में सही जांच ज़रूरी है। घरेलू उपाय से संक्रमण छिप सकता है या बढ़ सकता है।',
    },
    steps: {
      en: ['Keep the genital area clean and dry. Wash with plain water.', 'Wear clean, breathable cotton underwear.'],
      hi: ['जननांग क्षेत्र को साफ़ और सूखा रखें। सादे पानी से धोएं।', 'साफ़, हवादार सूती अंदरूनी कपड़े पहनें।'],
    },
    careful: {
      en: ['Do not put anything inside the vagina, and avoid strong soaps or douches.'],
      hi: ['योनि के अंदर कुछ न डालें, और तेज़ साबुन या डूश का इस्तेमाल न करें।'],
    },
    seeDoctor: {
      en: ['Itching, burning, bad smell, or pain', 'Discharge that is green, yellow, grey, or has blood', 'Lower belly pain or fever'],
      hi: ['खुजली, जलन, बदबू या दर्द', 'पानी हरा, पीला, भूरा हो या उसमें खून हो', 'पेट के निचले हिस्से में दर्द या बुखार'],
    },
  },
  {
    id: 'cold',
    keywords: ['cold', 'cough', 'fever', 'sore throat', 'flu', 'बुखार', 'सर्दी', 'खांसी', 'जुकाम', 'गला खराब'],
    title: { en: 'Cold, cough and mild fever', hi: 'सर्दी, खांसी और हल्का बुखार' },
    steps: {
      en: ['Rest, and drink warm fluids often: soup, warm water, or tulsi and ginger tea.', 'For a sore throat, gargle with warm salted water.', 'Steam inhalation twice a day can ease a blocked nose. Be careful not to burn yourself.', 'Honey in warm water can soothe a cough. Never give honey to a baby under 1 year.'],
      hi: ['आराम करें और बार-बार गर्म तरल लें: सूप, गुनगुना पानी, या तुलसी-अदरक की चाय।', 'गले में खराश हो तो नमक वाले गुनगुने पानी से गरारे करें।', 'दिन में दो बार भाप लेने से बंद नाक में राहत मिल सकती है। जलने से बचें।', 'गुनगुने पानी में शहद खांसी में आराम देता है। 1 साल से छोटे बच्चे को शहद कभी न दें।'],
    },
    careful: {
      en: ['Follow the label or doctor’s advice for paracetamol. Check before combining it with other cold medicines.'],
      hi: ['पैरासिटामॉल की खुराक पैकेट या डॉक्टर की सलाह के अनुसार लें। दूसरी सर्दी की दवाओं के साथ मिलाने से पहले जांच लें।'],
    },
    seeDoctor: {
      en: ['Fever above 38.5°C for more than 3 days, or fever that keeps coming back', 'Trouble breathing, chest pain, or coughing blood', 'Confusion, severe weakness, or very little urine (signs of dehydration)'],
      hi: ['3 दिन से ज़्यादा 38.5°C से ऊपर बुखार, या बार-बार बुखार आना', 'सांस लेने में दिक्कत, सीने में दर्द, या खून वाली खांसी', 'भ्रम, बहुत कमज़ोरी, या पेशाब बहुत कम होना (पानी की कमी के संकेत)'],
    },
  },
  {
    id: 'headache',
    keywords: ['headache', 'head pain', 'migraine', 'सिर दर्द', 'सिरदर्द', 'माइग्रेन'],
    title: { en: 'Headache', hi: 'सिर दर्द' },
    steps: {
      en: ['Rest in a quiet, dim room for a while.', 'Drink a glass of water. Dehydration is a common trigger.', 'Apply a cold or warm compress to your forehead or neck.', 'Avoid painkillers on most days, because frequent use can cause more headaches.'],
      hi: ['कुछ देर शांत, कम रोशनी वाले कमरे में आराम करें।', 'एक गिलास पानी पिएं। पानी की कमी सिर दर्द की आम वजह है।', 'माथे या गर्दन पर ठंडा या गुनगुना सेक लगाएं।', 'ज़्यादातर दिन दर्द की दवा न लें, क्योंकि बार-बार लेने से सिर दर्द बढ़ सकता है।'],
    },
    careful: {
      en: ['Do not skip meals or sleep. Irregular food and sleep often trigger headaches.'],
      hi: ['खाना और नींद अनियमित न करें। इससे अक्सर सिर दर्द होता है।'],
    },
    seeDoctor: {
      en: ['A sudden, very severe headache, the worst you have ever had', 'Weakness on one side, trouble speaking, vision changes, or confusion. Call 108 or 112 right away.', 'Headache with fever and a stiff neck, or after a head injury', 'Headaches that are becoming more frequent'],
      hi: ['अचानक बहुत तेज़ सिर दर्द, अब तक का सबसे तेज़', 'शरीर के एक तरफ कमज़ोरी, बोलने में दिक्कत, नज़र में बदलाव या भ्रम। तुरंत 108 या 112 पर कॉल करें।', 'बुखार और गर्दन में अकड़न के साथ सिर दर्द, या सिर पर चोट के बाद', 'सिर दर्द बार-बार और ज़्यादा होने लगे'],
    },
  },
  {
    id: 'acidity',
    keywords: ['acid', 'gas', 'indigestion', 'stomach', 'heartburn', 'bloat', 'एसिडिटी', 'गैस', 'पेट दर्द', 'पेट में', 'सीने में जलन', 'अपच'],
    title: { en: 'Acidity, gas and stomach upset', hi: 'एसिडिटी, गैस और पेट की परेशानी' },
    steps: {
      en: ['Eat smaller meals more often, and avoid eating late at night.', 'After meals, sip cumin water or plain buttermilk.', 'Sit upright for 30 minutes after eating. A short walk after meals helps digestion.', 'For a few days, avoid very spicy, fried, and very sour food.'],
      hi: ['खाना थोड़ा-थोड़ा और बार-बार लें। रात में देर से खाने से बचें।', 'खाने के बाद जीरे का पानी या सादी छाछ पिएं।', 'खाने के बाद 30 मिनट सीधे बैठें। खाने के बाद थोड़ी सैर पाचन में मदद करती है।', 'कुछ दिन बहुत मसालेदार, तले और बहुत खट्टे खाने से बचें।'],
    },
    careful: {
      en: ['Chest pain can be a heart problem, not just acidity. Do not assume it is gas.'],
      hi: ['सीने में दर्द दिल की समस्या भी हो सकता है, सिर्फ गैस नहीं। इसे हल्के में न लें।'],
    },
    seeDoctor: {
      en: ['Chest pain or pressure, or pain spreading to the arm, neck, or jaw. Call 108 or 112 right away.', 'Vomiting blood, or black or tarry stools', 'Weight loss, pain that wakes you at night, or symptoms lasting more than 2 weeks'],
      hi: ['सीने में दर्द या दबाव, या दर्द हाथ, गर्दन या जबड़े तक फैले। तुरंत 108 या 112 पर कॉल करें।', 'खून की उल्टी, या काला या चिपचिपा मल', 'वज़न घटना, रात में दर्द से नींद खुलना, या 2 हफ्ते से ज़्यादा परेशानी'],
    },
  },
  {
    id: 'lowmood',
    keywords: ['sad', 'stress', 'stressed', 'anxious', 'anxiety', 'depress', 'lonely', 'crying', 'hopeless', 'उदास', 'तनाव', 'चिंता', 'अकेला', 'रोना', 'घबराहट', 'निराश'],
    title: { en: 'Feeling low, stressed or anxious', hi: 'मन उदास, तनाव या घबराहट' },
    steps: {
      en: ['Try slow breathing. Breathe in for 4 counts, hold for 4, and breathe out for 6. Repeat 5 times.', 'Step outside or walk for 10 minutes, even inside the house.', 'Talk to someone you trust: a sister, a friend, or the women in your Self Help Group.', 'Keep a simple routine for sleep and meals, and do one small thing you enjoy each day.'],
      hi: ['धीरे सांस लें: 4 गिनती तक अंदर लें, 4 तक रोकें, 6 तक बाहर छोड़ें। यह 5 बार दोहराएं।', '10 मिनट बाहर या घर के भीतर ही थोड़ी सैर करें।', 'किसी भरोसेमंद व्यक्ति से बात करें: बहन, सहेली, या SHG की महिलाएं।', 'सोने और खाने का सरल रूटीन बनाएं, और रोज़ कुछ छोटा सा काम करें जो आपको अच्छा लगे।'],
    },
    careful: {
      en: ['Talking about how you feel is a strength, not a weakness.'],
      hi: ['अपनी भावनाओं के बारे में बात करना कमज़ोरी नहीं, हिम्मत है।'],
    },
    seeDoctor: {
      en: ['Feeling low or hopeless most days for more than 2 weeks', 'Trouble sleeping or eating, or losing interest in everything', 'Thoughts of hurting yourself. Call 112 now, or Tele-MANAS on 14416 (free, 24x7).'],
      hi: ['2 हफ्ते से ज़्यादा लगभग रोज़ मन उदास या निराश रहे', 'नींद या खाने में दिक्कत, या किसी काम में मन न लगे', 'खुद को नुकसान पहुंचाने के विचार। अभी 112 पर कॉल करें, या Tele-MANAS 14416 पर (मुफ़्त, 24x7)।'],
    },
  },
];

export const businessIdeas = [
  {
    id: 'food',
    title: { en: 'Pickles, papad and masala', hi: 'अचार, पापड़ और मसाले' },
    summary: { en: 'Use recipes you already make well. Start small, sell to neighbours, then to shops.', hi: 'जिन रेसिपी में आप पहले से माहिर हैं, उन्हीं से शुरू करें। छोटे स्तर पर पड़ोसियों को बेचें, फिर दुकानों तक जाएं।' },
    steps: {
      en: ['Test 2 or 3 recipes with family and neighbours, and note their feedback.', 'Pack in clean, labelled jars and price against local shop rates. Check food-licence (FSSAI) rules with your block or district office before selling widely.'],
      hi: ['2–3 रेसिपी परिवार और पड़ोसियों के साथ आज़माएं और उनकी राय लिखें।', 'साफ़, लेबल वाले डिब्बों में पैक करें और स्थानीय दुकानों के भाव देखकर कीमत तय करें। बड़े स्तर पर बेचने से पहले ब्लॉक या ज़िला कार्यालय से FSSAI लाइसेंस के नियम पूछें।'],
    },
  },
  {
    id: 'tailoring',
    title: { en: 'Tailoring and embroidery', hi: 'सिलाई और कढ़ाई' },
    summary: { en: 'Low cost to start: one sewing machine can earn steady income from blouses, school uniforms and gifts.', hi: 'शुरू करना सस्ता है: एक सिलाई मशीन से ब्लाउज़, स्कूल यूनिफॉर्म और उपहार से नियमित कमाई हो सकती है।' },
    steps: {
      en: ['List the work you can already do well, such as blouses, petticoats, or embroidery.', 'Make 5 samples and show them to local families. Ask for orders from schools or weddings.'],
      hi: ['जो काम आप पहले से अच्छे से कर लेती हैं, जैसे ब्लाउज़, पेटीकोट या कढ़ाई, उनकी सूची बनाएं।', '5 नमूने बनाकर स्थानीय परिवारों को दिखाएं। स्कूलों या शादियों से ऑर्डर मांगें।'],
    },
  },
  {
    id: 'dairy',
    title: { en: 'Dairy: milk, curd and paneer', hi: 'डेयरी: दूध, दही और पनीर' },
    summary: { en: 'Daily demand means steady income. Start with a few animals or by selling curd and paneer from milk you buy locally.', hi: 'रोज़ की मांग से नियमित कमाई होती है। कुछ पशुओं से शुरू करें, या स्थानीय दूध से दही और पनीर बनाकर बेचें।' },
    steps: {
      en: ['Find out the milk-collection dairy or cooperative near you and its rates.', 'Learn basic hygiene and animal care from the local veterinary centre or KVK.'],
      hi: ['अपने पास की दुग्ध सहकारी समिति या डेयरी और उनके भाव पता करें।', 'स्थानीय पशु चिकित्सा केंद्र या KVK से साफ़-सफ़ाई और पशु देखभाल सीखें।'],
    },
  },
  {
    id: 'tuition',
    title: { en: 'Tuition and early learning', hi: 'ट्यूशन और बच्चों की पढ़ाई' },
    summary: { en: 'If you are educated, you can teach children in your village. Almost no equipment is needed.', hi: 'अगर आप पढ़ी-लिखी हैं, तो गांव के बच्चों को पढ़ा सकती हैं। इसमें लगभग कोई सामान नहीं लगता।' },
    steps: {
      en: ['Ask 5 families if they want help for their children in maths, English, or reading.', 'Set a fixed time and a small monthly fee. Keep a simple attendance book.'],
      hi: ['5 परिवारों से पूछें कि क्या उन्हें बच्चों के लिए गणित, अंग्रेज़ी या पढ़ने में मदद चाहिए।', 'समय और मासिक फ़ीस तय करें। एक सरल उपस्थिति रजिस्टर रखें।'],
    },
  },
  {
    id: 'mushroom',
    title: { en: 'Mushroom and kitchen-garden produce', hi: 'मशरूम और किचन गार्डन की उपज' },
    summary: { en: 'Mushrooms grow in a shaded room and need little land. Sell fresh to local markets and hotels.', hi: 'मशरूम छायादार कमरे में उगते हैं और इसमें कम ज़मीन लगती है। ताज़ा माल स्थानीय बाज़ार और होटल में बेचें।' },
    steps: {
      en: ['Attend a short training at your KVK or a state horticulture office before you invest.', 'Start with one small unit, track costs and sales for 3 months, then decide whether to expand.'],
      hi: ['निवेश करने से पहले KVK या राज्य के बागवानी विभाग का छोटा प्रशिक्षण लें।', 'एक छोटी इकाई से शुरू करें, 3 महीने तक खर्च और बिक्री लिखें, फिर बढ़ाने का फैसला करें।'],
    },
  },
];

export const studyPaths = [
  {
    id: 'nios',
    title: { en: 'Finish Class 10 or 12 at your own pace', hi: 'कक्षा 10 या 12 अपनी रफ़्तार से पूरी करें' },
    summary: { en: 'NIOS (National Institute of Open Schooling) lets you take board exams without regular school attendance.', hi: 'NIOS (राष्ट्रीय मुक्त विद्यालय संस्थान) से आप नियमित स्कूल जाए बिना बोर्ड परीक्षा दे सकती हैं।' },
    steps: {
      en: ['Visit nios.ac.in and check the admission window and fees.', 'Choose subjects you can manage. Study from the free NIOS material and past papers.'],
      hi: ['nios.ac.in पर जाकर दाखिले की तारीख और फ़ीस देखें।', 'ऐसे विषय चुनें जिन्हें आप संभाल सकें। NIOS की मुफ़्त सामग्री और पिछले वर्षों के प्रश्नपत्र से पढ़ें।'],
    },
  },
  {
    id: 'ignou',
    title: { en: 'Degree from home', hi: 'घर से डिग्री' },
    summary: { en: 'IGNOU offers low-cost distance degrees. You can study while managing home and work.', hi: 'IGNOU कम फ़ीस में दूरस्थ शिक्षा की डिग्री देता है। घर और काम संभालते हुए पढ़ाई हो सकती है।' },
    steps: {
      en: ['Visit ignou.ac.in and look at programmes near your interests, such as BA, B.Com, or nursing courses.', 'Ask your local study centre about exam dates and support sessions.'],
      hi: ['ignou.ac.in पर जाकर अपनी रुचि के कार्यक्रम देखें, जैसे BA, B.Com या नर्सिंग कोर्स।', 'अपने स्थानीय अध्ययन केंद्र से परीक्षा की तारीख और सहायता सत्र के बारे में पूछें।'],
    },
  },
  {
    id: 'swayam',
    title: { en: 'Free online courses with certificates', hi: 'मुफ़्त ऑनलाइन कोर्स और सर्टिफिकेट' },
    summary: { en: 'SWAYAM has free courses in many subjects. Some offer certificates for a small fee.', hi: 'SWAYAM पर कई विषयों के मुफ़्त कोर्स हैं। कुछ में थोड़ी फ़ीस देकर सर्टिफिकेट मिलता है।' },
    steps: {
      en: ['Visit swayam.gov.in and search for a topic you care about, like computers, accounting, or health.', 'Learn on your phone during free time. Save your certificate for job or loan applications.'],
      hi: ['swayam.gov.in पर जाकर अपनी पसंद का विषय खोजें, जैसे कंप्यूटर, हिसाब-किताब या स्वास्थ्य।', 'खाली समय में फ़ोन पर पढ़ें। नौकरी या लोन के आवेदन के लिए सर्टिफिकेट संभालकर रखें।'],
    },
  },
  {
    id: 'skills',
    title: { en: 'Earn while you learn: skill courses', hi: 'कमाते हुए सीखें: कौशल प्रशिक्षण' },
    summary: { en: 'Government skill schemes like PMKVY and local ITI courses often include training, certificates and placement help.', hi: 'PMKVY जैसी सरकारी कौशल योजनाओं और स्थानीय ITI कोर्स में अक्सर प्रशिक्षण, सर्टिफिकेट और नौकरी में मदद मिलती है।' },
    steps: {
      en: ['Ask your Gram Panchayat, ITI, or Common Service Centre about current courses near you.', 'Ask whether the course is free, has a stipend, and helps with jobs.'],
      hi: ['ग्राम पंचायत, ITI या कॉमन सर्विस सेंटर से अपने पास के चल रहे कोर्स के बारे में पूछें।', 'पूछें कि कोर्स मुफ़्त है या नहीं, वज़ीफ़ा मिलता है या नहीं, और नौकरी में मदद होती है या नहीं।'],
    },
  },
];

export const funding = [
  { en: 'Mudra loans (PMMY) for small businesses. Small loans often do not need collateral.', hi: 'छोटे कारोबार के लिए मुद्रा लोन (PMMY)। छोटे लोन पर अक्सर गारंटी की ज़रूरत नहीं होती।' },
  { en: 'Self Help Group (SHG) bank linkage: group savings that can lead to bank loans.', hi: 'स्वयं सहायता समूह (SHG) से बैंक लिंकेज: समूह की बचत से बैंक लोन मिल सकता है।' },
  { en: 'Skill training through PMKVY, ITI, or your nearest KVK, often free.', hi: 'PMKVY, ITI या नज़दीकी KVK से कौशल प्रशिक्षण, अक्सर मुफ़्त।' },
  { en: 'Stand-Up India loans for women entrepreneurs. Ask at any bank branch.', hi: 'महिला उद्यमियों के लिए स्टैंड-अप इंडिया लोन। किसी भी बैंक शाखा में पूछें।' },
];

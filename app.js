const STORAGE_KEY = "fortune-business-english-knowledge-v2";

const els = {
  sourcePill: document.querySelector("#sourcePill"),
  wordTerm: document.querySelector("#wordTerm"),
  wordCn: document.querySelector("#wordCn"),
  wordEn: document.querySelector("#wordEn"),
  wordExampleEn: document.querySelector("#wordExampleEn"),
  wordExampleCn: document.querySelector("#wordExampleCn"),
  wordMeme: document.querySelector("#wordMeme"),
  wordSpeakButton: document.querySelector("#wordSpeakButton"),
  wordExampleSpeakButton: document.querySelector("#wordExampleSpeakButton"),
  phraseTerm: document.querySelector("#phraseTerm"),
  phraseCn: document.querySelector("#phraseCn"),
  phraseEn: document.querySelector("#phraseEn"),
  phraseExampleEn: document.querySelector("#phraseExampleEn"),
  phraseExampleCn: document.querySelector("#phraseExampleCn"),
  phraseMeme: document.querySelector("#phraseMeme"),
  phraseSpeakButton: document.querySelector("#phraseSpeakButton"),
  phraseExampleSpeakButton: document.querySelector("#phraseExampleSpeakButton"),
  drawer: document.querySelector("#drawer"),
  drawerStats: document.querySelector("#drawerStats"),
  knowledgeList: document.querySelector("#knowledgeList"),
  knowledgeButton: document.querySelector("#knowledgeButton"),
  closeDrawerButton: document.querySelector("#closeDrawerButton"),
  clearKnowledgeButton: document.querySelector("#clearKnowledgeButton"),
  refreshButton: document.querySelector("#refreshButton")
};

function readKnowledge() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      lessons: Array.isArray(stored?.lessons) ? stored.lessons : []
    };
  } catch {
    return { lessons: [] };
  }
}

function writeKnowledge(knowledge) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(knowledge));
}

function normalize(value) {
  return value.trim().toLowerCase();
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffledItems(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function lessonSourceUrls(lesson) {
  return new Set([
    lesson.word.sourceUrl || lesson.sourceUrl,
    lesson.phrase.sourceUrl || lesson.sourceUrl
  ]);
}

function lessonYear(lesson) {
  return Math.max(
    Number((lesson.word.date || lesson.date).slice(0, 4)),
    Number((lesson.phrase.date || lesson.date).slice(0, 4))
  );
}

function weightedRandomLesson(lessons) {
  const yearWeights = { 2021: 1, 2022: 1.25, 2023: 1.75, 2024: 2.5, 2025: 4, 2026: 6 };
  const weights = lessons.map((lesson) => yearWeights[lessonYear(lesson)] || 1);
  let cursor = Math.random() * weights.reduce((sum, weight) => sum + weight, 0);
  for (let index = 0; index < lessons.length; index += 1) {
    cursor -= weights[index];
    if (cursor <= 0) return lessons[index];
  }
  return lessons[lessons.length - 1];
}

function findFreshLesson(knowledge) {
  const seenWords = new Set(knowledge.lessons.map((item) => normalize(item.word.term)));
  const seenPhrases = new Set(knowledge.lessons.map((item) => normalize(item.phrase.term)));
  const fresh = FORTUNE_LESSONS.filter((lesson) => {
    return !seenWords.has(normalize(lesson.word.term)) && !seenPhrases.has(normalize(lesson.phrase.term));
  });

  let pool = fresh.length ? fresh : FORTUNE_LESSONS;
  const previous = knowledge.lessons[0];
  if (previous && pool.length > 1) {
    const previousSources = lessonSourceUrls(previous);
    const differentSources = pool.filter((lesson) => {
      return [...lessonSourceUrls(lesson)].every((url) => !previousSources.has(url));
    });
    if (differentSources.length) pool = differentSources;
  }
  return weightedRandomLesson(pool);
}

function memoizeLesson(lesson) {
  const knowledge = readKnowledge();
  const exists = knowledge.lessons.some((item) => {
    return normalize(item.word.term) === normalize(lesson.word.term) || normalize(item.phrase.term) === normalize(lesson.phrase.term);
  });

  if (!exists) {
    knowledge.lessons.unshift({
      date: lesson.date,
      sourceTitle: lesson.sourceTitle,
      sourceUrl: lesson.sourceUrl,
      word: lesson.word,
      phrase: lesson.phrase,
      learnedAt: new Date().toISOString()
    });
    writeKnowledge(knowledge);
  }
}

const MEME_TEMPLATES = [
  "drake",
  "buzz",
  "doge",
  "success",
  "wonka",
  "yuno",
  "fwp",
  "ackbar",
  "grumpycat"
];

const MEME_CAPTIONS = [
  "business vocab",
  "boardroom mode",
  "use it at work",
  "meeting ready",
  "market talk",
  "email upgrade",
  "strategy language",
  "CEO vocabulary"
];

function memeText(value) {
  return encodeURIComponent(value.replace(/\s+/g, "_"));
}

function memeUrl(term, template = randomItem(MEME_TEMPLATES)) {
  const top = memeText(term);
  const bottom = memeText(randomItem(MEME_CAPTIONS));
  const nonce = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  return `https://api.memegen.link/images/${template}/${top}/${bottom}.jpg?width=640&refresh=${nonce}`;
}

function fallbackMeme(term) {
  const safeTerm = term.replace(/[<>&"]/g, "");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900">
      <rect width="900" height="900" fill="#10151d"/>
      <rect x="50" y="50" width="800" height="800" rx="36" fill="#17202b" stroke="#334155" stroke-width="4"/>
      <text x="450" y="380" text-anchor="middle" fill="#f8fafc" font-family="Arial, sans-serif" font-size="84" font-weight="900">${safeTerm.toUpperCase()}</text>
      <text x="450" y="500" text-anchor="middle" fill="#87e6c5" font-family="Arial, sans-serif" font-size="42" font-weight="700">BUSINESS ENGLISH</text>
      <text x="450" y="580" text-anchor="middle" fill="#f3c969" font-family="Arial, sans-serif" font-size="34">meme image unavailable</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function setMemeImage(img, term) {
  let attempt = 0;
  const templateQueue = shuffledItems(MEME_TEMPLATES);

  img.onerror = () => {
    attempt += 1;
    if (attempt < templateQueue.length) {
      img.src = memeUrl(term, templateQueue[attempt]);
      return;
    }
    img.onerror = null;
    img.src = fallbackMeme(term);
  };

  img.src = memeUrl(term, templateQueue[0]);
}

function itemSource(item, lesson) {
  return {
    date: item.date || lesson.date,
    title: item.sourceTitle || lesson.sourceTitle,
    url: item.sourceUrl || lesson.sourceUrl
  };
}

function sourceLink(label, source) {
  return `<a href="${source.url}" target="_blank" rel="noopener" title="${source.title}">${label}</a>`;
}

function displayExample(item, language) {
  const value = language === "en" ? item.exampleEn : item.exampleCn;
  if (!item.exampleAdapted) return value;
  return language === "en" ? `LEARNING EXAMPLE: ${value}` : `学习化例句：${value}`;
}

function preferredEnglishVoice() {
  const voices = window.speechSynthesis?.getVoices?.() || [];
  const englishVoices = voices.filter((voice) => /^en[-_]/i.test(voice.lang));
  return englishVoices.find((voice) => /natural|neural|online|premium|enhanced|google|microsoft|samantha|ava|jenny|aria/i.test(voice.name)) ||
    englishVoices.find((voice) => /en[-_]US/i.test(voice.lang)) ||
    englishVoices[0] ||
    null;
}

function speakText(text) {
  if (!("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.86;
  utterance.pitch = 1;
  utterance.volume = 1;

  const voice = preferredEnglishVoice();
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang;
  }

  window.speechSynthesis.speak(utterance);
}

function renderLesson(lesson) {
  const wordSource = itemSource(lesson.word, lesson);
  const phraseSource = itemSource(lesson.phrase, lesson);
  const sameSource = wordSource.url === phraseSource.url;

  els.sourcePill.innerHTML = `
    <span>${wordSource.date}${sameSource ? "" : ` / ${phraseSource.date}`}</span>
    ${sourceLink(sameSource ? "查看 Fortune 来源" : "热词来源", wordSource)}
    ${sameSource ? "" : sourceLink("短语来源", phraseSource)}
  `;

  els.wordTerm.textContent = lesson.word.term;
  els.wordCn.textContent = lesson.word.cn;
  els.wordEn.textContent = lesson.word.en;
  els.wordExampleEn.textContent = displayExample(lesson.word, "en");
  els.wordExampleCn.textContent = displayExample(lesson.word, "cn");
  els.wordSpeakButton.onclick = () => speakText(lesson.word.term);
  els.wordExampleSpeakButton.onclick = () => speakText(lesson.word.exampleEn.replace(/^EXAMPLE:\s*/i, ""));
  setMemeImage(els.wordMeme, lesson.word.term);

  els.phraseTerm.textContent = lesson.phrase.term;
  els.phraseCn.textContent = lesson.phrase.cn;
  els.phraseEn.textContent = lesson.phrase.en;
  els.phraseExampleEn.textContent = displayExample(lesson.phrase, "en");
  els.phraseExampleCn.textContent = displayExample(lesson.phrase, "cn");
  els.phraseSpeakButton.onclick = () => speakText(lesson.phrase.term);
  els.phraseExampleSpeakButton.onclick = () => speakText(lesson.phrase.exampleEn.replace(/^EXAMPLE:\s*/i, ""));
  setMemeImage(els.phraseMeme, lesson.phrase.term);
}

function renderKnowledge() {
  const knowledge = readKnowledge();
  els.drawerStats.textContent = `${knowledge.lessons.length} 组已加入知识库`;

  if (!knowledge.lessons.length) {
    els.knowledgeList.innerHTML = `<p class="empty">刷新一次页面后，这里会记录出现过的单词和短语。</p>`;
    return;
  }

  els.knowledgeList.innerHTML = knowledge.lessons.map((item) => {
    const wordSource = itemSource(item.word, item);
    const phraseSource = itemSource(item.phrase, item);
    return `
      <article class="kb-item">
        <div class="kb-meta">
          <span>${wordSource.date}</span>
          <a href="${wordSource.url}" target="_blank" rel="noopener" title="${wordSource.title}">热词来源</a>
        </div>
        <h3>${item.word.term}</h3>
        <p>${item.word.cn}</p>
        <div class="kb-meta">
          <span>${phraseSource.date}</span>
          <a href="${phraseSource.url}" target="_blank" rel="noopener" title="${phraseSource.title}">短语来源</a>
        </div>
        <h3>${item.phrase.term}</h3>
        <p>${item.phrase.cn}</p>
      </article>
    `;
  }).join("");
}

function openDrawer() {
  renderKnowledge();
  els.drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
}

function closeDrawer() {
  els.drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
}

function boot() {
  const knowledge = readKnowledge();
  const lesson = findFreshLesson(knowledge);
  renderLesson(lesson);
  memoizeLesson(lesson);
  renderKnowledge();
}

els.knowledgeButton.addEventListener("click", openDrawer);
els.closeDrawerButton.addEventListener("click", closeDrawer);
els.drawer.addEventListener("click", (event) => {
  if (event.target === els.drawer) closeDrawer();
});
els.clearKnowledgeButton.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  renderKnowledge();
});
els.refreshButton.addEventListener("click", () => {
  window.location.reload();
});

boot();

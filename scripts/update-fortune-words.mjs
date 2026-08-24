#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA_FILE = path.join(ROOT, "data.js");
const MIN_YEAR = 2021;
const MAX_YEAR = 2026;
const MIN_DATE = `${MIN_YEAR}-01-01`;
const MAX_DATE = `${MAX_YEAR}-12-31`;
const MAX_TERMS_PER_SOURCE = 2;
const MAX_TERMS_PER_YEAR = {
  2021: 12,
  2022: 14,
  2023: 16,
  2024: 18,
  2025: 24,
  2026: 28
};

const SEARCH_QUERIES = [
  "年度词汇",
  "英文单词",
  "英语词汇",
  "商业术语",
  "新词",
  "网络热词",
  "流行词",
  "英文缩写"
];

const CONTEXT_SIGNALS = /词汇|单词|新词|热词|术语|表达|意为|意思是|指的是|指代|被称为|称作|缩写|年度词|流行语|英文|英语/i;
const EXCLUDED_TERMS = new Set([
  "fortune", "fortune china", "getty images", "bloomberg", "associated press",
  "new york", "wall street", "white house", "united states", "chief executive officer",
  "artificial intelligence", "machine learning", "openai", "chatgpt", "microsoft",
  "google", "amazon", "apple", "netflix", "facebook", "instagram", "tiktok", "twitter",
  "linkedin", "youtube", "reuters", "cnbc", "ceo", "cfo", "cto", "ai", "usa", "uk"
]);

const DEFINITION_OVERRIDES = {
  "augmented reality": "Technology that overlays digital information or images onto the physical world.",
  "virtual reality": "A computer-generated three-dimensional environment that a person can interact with.",
  avatar: "A digital representation of a person in an online or virtual environment.",
  "paradigm shift": "A fundamental change in the assumptions or approach underlying a field or activity.",
  "haptic gloves": "Wearable devices that simulate touch and physical feedback in a virtual environment.",
  nft: "A non-fungible token: a unique digital record of ownership stored on a blockchain.",
  "hybrid working": "A work arrangement that combines remote work with time spent at a workplace.",
  "play-to-earn": "A game model that lets players earn digital assets or cryptocurrency through gameplay.",
  "crypto derivatives": "Financial contracts whose value is linked to a cryptocurrency or crypto asset.",
  web3: "A vision of the web built around decentralized networks, digital ownership, and blockchain technology.",
  "quiet quitting": "Doing only the work required by a job instead of consistently going beyond its formal duties.",
  "hustle culture": "A culture that treats constant work and extreme productivity as signs of ambition and success.",
  "proximity bias": "The tendency to favor employees who are physically present over those working remotely.",
  "job hopping": "Changing jobs frequently, often to improve pay, responsibilities, or working conditions.",
  "career cushioning": "Preparing alternative job options while still employed in case a change becomes necessary.",
  "hedge your bets": "To reduce risk by keeping more than one option available.",
  "rage applying": "Applying rapidly to many jobs in reaction to frustration with a current employer.",
  resenteeism: "Staying in a disliked job while openly expressing resentment and dissatisfaction.",
  "bare minimum Monday": "Starting the workweek gently by doing only essential tasks on Monday.",
  "lazy girl job": "A well-paid, flexible job designed to protect work-life balance and minimize excessive stress.",
  "snail girl": "A lifestyle idea that favors a slower pace of work and life over constant hustle.",
  enshittification: "The gradual degradation of an online platform as it shifts value away from users and business customers to itself.",
  "platform decay": "The gradual decline of an online platform's quality and value for its users.",
  "commuter triangle": "A new relationship connecting a worker, home life, and workplace in hybrid work.",
  "urban doom loop": "A cycle in which declining activity and revenue make a city center progressively less attractive.",
  "great detachment": "A period of widespread employee disengagement combined with reluctance or inability to change jobs.",
  pie: "A career-development framework based on performance, image, and exposure.",
  "zero-based budgeting": "A budgeting method that assigns every unit of income to spending, saving, or debt repayment.",
  "envelope budget": "A budgeting method that divides cash into envelopes allocated to specific spending categories.",
  "cognitive shuffling": "A sleep technique that focuses on unrelated words or images to interrupt organized thinking.",
  sleepmaxxers: "People who try multiple habits, products, or techniques in order to maximize sleep quality.",
  "lying flat": "Choosing to reject relentless competition and excessive work in favor of a lower-pressure life.",
  "quiet cracking": "A gradual decline in an employee's mental wellbeing and engagement while they remain at work.",
  petrichor: "A pleasant earthy smell produced by rain after a warm, dry period.",
  teraflop: "A unit used to measure computer processing speed.",
  dumbphone: "A basic mobile phone without the advanced features of a smartphone.",
  "ghost kitchen": "A commercial kitchen that prepares food for delivery without serving dine-in customers.",
  rizz: "Charm or the ability to attract a potential romantic partner.",
  "hard pass": "A firm and emphatic rejection of an offer, idea, or opportunity.",
  doomscroll: "To continuously scroll through distressing or negative online content.",
  slop: "Low-quality digital content, often produced in large quantities with artificial intelligence.",
  "vibe coding": "An AI-assisted approach to programming through natural-language prompts and iterative feedback.",
  "rage bait": "Online content deliberately designed to provoke anger and drive engagement.",
  incentivize: "To encourage a person or organization to act by offering a reward or benefit.",
  demure: "Reserved, modest, and not intended to attract excessive attention.",
  "quiet quitting": "Doing only the work required by a job instead of consistently going beyond its formal duties.",
  shrinkflation: "The practice of reducing a product's size or quantity while keeping its price unchanged.",
  permacrisis: "A long period marked by a series of overlapping and seemingly permanent crises.",
  metaverse: "A network of persistent virtual spaces where people interact through digital identities.",
  "great resignation": "A period when unusually large numbers of employees voluntarily leave their jobs.",
  "coffee badging": "Briefly appearing at the office to meet attendance expectations before working elsewhere.",
  "dynamic pricing": "The practice of changing prices in response to demand, timing, or other market conditions.",
  "brain rot": "A perceived decline in mental focus caused by consuming excessive low-value online content.",
  deinfluencing: "Encouraging people not to buy products that are overhyped, unnecessary, or poor value.",
  "ai hallucination": "A plausible-sounding but false or unsupported response generated by an AI system.",
  "ai brain fatigue": "Mental exhaustion associated with repeatedly supervising, checking, or switching between AI-assisted tasks.",
  "vibe coding paralysis": "A state in which abundant AI-generated possibilities make it harder to choose and complete a coding task.",
  emilli: "An everyday millionaire whose wealth grew through retirement saving, home ownership, or long-term index investing.",
  memi: "An informal market label combining memory and semiconductors for companies serving AI-driven memory demand.",
  "reverse recruiter": "A job-search adviser who works for the candidate rather than for an employer."
};

const CHINESE_GLOSSES = {
  "augmented reality": "增强现实；把数字信息或图像叠加到现实环境中的技术",
  "virtual reality": "虚拟现实；让用户进入并交互于计算机生成环境的技术",
  metaverse: "元宇宙；由持久化虚拟空间组成、可供人们以数字身份互动的网络",
  avatar: "化身；用户在网络或虚拟环境中的数字形象",
  "paradigm shift": "范式转变；某个领域底层观念或方法发生的根本变化",
  "haptic gloves": "触觉手套；在虚拟环境中模拟触摸反馈的可穿戴设备",
  nft: "非同质化代币；记录在区块链上的独特数字所有权凭证",
  "hybrid working": "混合办公；远程工作与到岗办公相结合的安排",
  "play-to-earn": "边玩边赚；通过游戏获得数字资产或加密货币的模式",
  "crypto derivatives": "加密衍生品；价值与加密货币或加密资产挂钩的金融合约",
  web3: "第三代互联网；强调去中心化网络、数字所有权和区块链的网络愿景",
  "quiet quitting": "安静辞职；只完成岗位要求、不再额外投入的工作态度",
  "hustle culture": "奋斗文化；把持续工作和极端高产视为成功标志的文化",
  "proximity bias": "距离偏见；管理者更偏爱常在办公室出现的员工",
  "great resignation": "大辞职潮；大量员工主动离职的时期",
  "job hopping": "频繁跳槽；为了薪资、职责或工作条件而较频繁地更换工作",
  "career cushioning": "职业缓冲；在职期间提前准备其他工作选项",
  "hedge your bets": "两面下注；保留多个选择以降低风险",
  permacrisis: "长期危机；多个危机相互叠加并持续存在的时期",
  "rage applying": "愤怒海投；因不满现职而短时间大量投递求职申请",
  resenteeism: "厌工症；留在不喜欢的岗位并公开表现怨气和不满",
  "bare minimum monday": "最低限度星期一；周一只处理必要任务、缓慢进入工作状态",
  shrinkflation: "缩水式通胀；商品减量但价格不降甚至上涨",
  "lazy girl job": "懒女孩工作；强调高薪、灵活和工作生活平衡的低压力岗位",
  "snail girl": "蜗牛女孩；反对过度奋斗、选择放慢工作和生活节奏的理念",
  enshittification: "平台垃圾化；平台逐步牺牲用户和商业客户利益来攫取自身价值",
  "platform decay": "平台衰落；网络平台对用户的质量和价值逐步下降",
  "commuter triangle": "通勤新三角；混合办公中员工、家庭与工作场所的新关系",
  "urban doom loop": "城市末日循环；城市中心活力和收入互相拖累的恶性循环",
  "great detachment": "大逃离；员工普遍疏离工作却因市场限制而难以离职的时期",
  pie: "PIE职业模型；由专业表现、个人形象和曝光度组成的职业发展框架",
  "zero-based budgeting": "零基预算；把每一笔收入分配给支出、储蓄或还债的预算方法",
  "envelope budget": "信封预算法；把现金按用途分装到不同信封中控制支出",
  "cognitive shuffling": "认知洗牌；通过联想无关词语或图像打断有序思考的助眠方法",
  sleepmaxxers: "睡眠最大化爱好者；尝试多种习惯、产品或技巧来提高睡眠质量的人",
  "lying flat": "躺平；拒绝无休止竞争和过度工作、选择低压力生活的态度",
  "quiet cracking": "安静崩溃；员工继续工作但心理健康和投入度逐渐恶化",
  petrichor: "雨后泥土的清香",
  teraflop: "太拉次浮点运算；衡量计算机运算速度的单位",
  dumbphone: "非智能手机；功能简单、不以应用生态为核心的移动电话",
  "ghost kitchen": "幽灵厨房；没有堂食空间、主要制作外卖餐食的商用厨房",
  rizz: "魅力；尤指吸引潜在恋爱对象的个人魅力",
  "hard pass": "坚决拒绝；明确表示完全不感兴趣",
  doomscroll: "末日滑动；无休止浏览令人焦虑的负面新闻",
  slop: "网络垃圾；通常由人工智能批量生成的低质量数字内容",
  "vibe coding": "氛围编程；通过自然语言提示和反馈让人工智能生成、调整代码",
  "rage bait": "愤怒诱饵；刻意激怒受众来换取点击和互动的内容",
  incentivize: "激励；通过奖励或利益促使某人采取行动",
  demure: "端庄的；举止安静、克制而不过分张扬的",
  "ai brain fatigue": "AI脑疲劳；反复监督、核查或切换人工智能任务造成的精神疲惫",
  "vibe coding paralysis": "氛围编程瘫痪；人工智能提供过多可能性而导致难以决策和完成任务",
  emilli: "普通百万富翁；通过退休储蓄、住房或长期指数投资积累百万财富的人",
  memi: "Memi板块；由存储器和半导体组合而成的非正式市场分类",
  "reverse recruiter": "反向招聘顾问；代表求职者而不是雇主提供求职服务的顾问"
};

const BOOTSTRAP_ARTICLES = [
  { date: "2021-10-30", url: "https://www.fortunechina.com/keji/c/2021-10/29/content_399651.htm", title: "扎克伯格重命名Facebook，寄托对元宇宙的愿景", terms: ["augmented reality", "virtual reality"] },
  { date: "2021-11-02", url: "https://www.fortunechina.com/keji/c/2021-11/01/content_399756.htm", title: "扎克伯格痴迷于元宇宙，可元宇宙究竟是什么？", terms: ["metaverse", "avatar"] },
  { date: "2021-11-27", url: "https://www.fortunechina.com/keji/c/2021-11/26/content_401527.htm", title: "我们不能稀里糊涂地进驻元宇宙", terms: ["paradigm shift", "haptic gloves"] },
  { date: "2021-12-05", url: "https://www.fortunechina.com/shangye/c/2021-12/04/content_402122.htm", title: "《柯林斯词典》公布2021年度热词：NFT排行第一", terms: ["nft", "hybrid working"] },
  { date: "2021-12-23", url: "https://www.fortunechina.com/shangye/c/2021-12/22/content_403485.htm", title: "2021年投资加密货币的人，真赚了吗？", terms: ["play-to-earn", "crypto derivatives"] },
  { date: "2022-03-24", url: "https://www.fortunechina.com/lingdaoli/c/2022-03/23/content_408809.htm", title: "科技巨头竞相招聘Web3人才，Spotify也加入了", terms: ["web3"] },
  { date: "2022-08-17", url: "https://www.fortunechina.com/lingdaoli/c/2022-08/16/content_417384.htm", title: "美国流行躺平，年轻人放弃奋斗文化", terms: ["quiet quitting", "hustle culture"] },
  { date: "2022-08-26", url: "https://www.fortunechina.com/shangye/c/2022-08/25/content_417936.htm", title: "混合办公模式并非最佳选择，员工心存焦虑", terms: ["proximity bias"] },
  { date: "2022-09-30", url: "https://www.fortunechina.com/lingdaoli/c/2022-09/29/content_420084.htm", title: "“大辞职潮”时代还远未结束", terms: ["great resignation", "job hopping"] },
  { date: "2022-12-05", url: "https://www.fortunechina.com/shangye/c/2022-12/04/content_423933.htm", title: "“职业缓冲”，成为新的职场术语", terms: ["career cushioning", "hedge your bets"] },
  { date: "2023-01-21", url: "https://www.fortunechina.com/shangye/c/2023-01/20/content_426401.htm", title: "首席执行官们为何对2023年忧心忡忡", terms: ["permacrisis"] },
  { date: "2023-01-23", url: "https://www.fortunechina.com/shangye/c/2023-01/22/content_426488.htm", title: "“躺平”之后，“捣乱式办公”或成新风潮", terms: ["rage applying"] },
  { date: "2023-02-10", url: "https://www.fortunechina.com/lingdaoli/c/2023-02/09/content_427693.htm", title: "比“躺平”更严重的“厌工症”，说的是你吗？", terms: ["resenteeism"] },
  { date: "2023-03-24", url: "https://www.fortunechina.com/lingdaoli/c/2023-03/23/content_430045.htm", title: "美国大多数上班族存在心理健康问题，导致工作效率下降", terms: ["bare minimum monday"] },
  { date: "2023-09-21", url: "https://www.fortunechina.com/shangye/c/2023-09/20/content_439960.htm", title: "家乐福在货架添加标签，让顾客感受通胀", terms: ["shrinkflation"] },
  { date: "2023-12-01", url: "https://www.fortunechina.com/shangye/c/2023-11/30/content_443858.htm", title: "蜗牛女孩与懒丫头工作", terms: ["lazy girl job", "snail girl"] },
  { date: "2024-01-13", url: "https://www.fortunechina.com/shangye/c/2024-01/12/content_446300.htm", title: "Netflix创意枯竭，却仍然能够“赢得流媒体大战”", terms: ["enshittification", "platform decay"] },
  { date: "2024-05-05", url: "https://www.fortunechina.com/shangye/c/2024-05/04/content_452643.htm", title: "通勤“新三角”给商业地产敲响丧钟", terms: ["commuter triangle", "urban doom loop"] },
  { date: "2024-07-15", url: "https://www.fortunechina.com/lingdaoli/c/2024-07/14/content_456168.htm", title: "“大逃离”时代来临：上班族敬业度低迷", terms: ["great detachment"] },
  { date: "2024-10-18", url: "https://www.fortunechina.com/lingdaoli/c/2024-10/17/content_459143.htm", title: "打造个人品牌，提升职业前景的五个诀窍", terms: ["pie"] },
  { date: "2025-01-07", url: "https://www.fortunechina.com/lingdaoli/c/2025-01/06/content_461371.htm", title: "25%的美国人每月花钱无规划", terms: ["zero-based budgeting", "envelope budget"] },
  { date: "2025-02-08", url: "https://www.fortunechina.com/lingdaoli/c/2025-02/07/content_462310.htm", title: "TikTok网友论躺平：你知道我过的是什么日子吗？", terms: ["lying flat"] },
  { date: "2025-04-04", url: "https://www.fortunechina.com/shangye/c/2025-04/03/content_464163.htm", title: "夜里胡思乱想睡不着？试试“认知洗牌睡眠法”", terms: ["cognitive shuffling", "sleepmaxxers"] },
  { date: "2025-08-22", url: "https://www.fortunechina.com/lingdaoli/c/2025-08/21/content_468047.htm", title: "“安静崩溃”现象正在职场蔓延", terms: ["quiet cracking"] },
  { date: "2025-09-30", url: "https://www.fortunechina.com/shangye/c/2025-09/29/content_469201.htm", title: "《韦氏大学词典》新增5000词汇", terms: ["petrichor", "teraflop", "dumbphone", "ghost kitchen", "rizz", "hard pass", "doomscroll"] },
  { date: "2026-01-01", url: "https://www.fortunechina.com/shangye/c/2025-12/31/content_471284.htm", title: "中美AI竞赛：界限日益模糊，下一战关键何在？", terms: ["vibe coding", "rage bait"] },
  { date: "2026-01-07", url: "https://www.fortunechina.com/shangye/c/2026-01/06/content_471381.htm", title: "一项大学生调查显示，这个风靡一时的网络热词已过时", terms: ["incentivize", "demure"] },
  { date: "2026-01-10", url: "https://www.fortunechina.com/shangye/c/2026-01/09/content_471450.htm", title: "AI视频泛滥，让这个单词成为年度词汇", terms: ["slop"] },
  { date: "2026-03-15", url: "https://www.fortunechina.com/shangye/c/2026-03/15/content_472588.htm", title: "新研究发现：“AI脑疲劳”现象让员工更疲惫而非更高效", terms: ["ai brain fatigue", "vibe coding paralysis"] },
  { date: "2026-04-01", url: "https://www.fortunechina.com/shangye/c/2026-03/31/content_473080.htm", title: "就业市场形势严峻，“反向求职顾问”帮客户找工作", terms: ["reverse recruiter"] },
  { date: "2026-07-06", url: "https://www.fortunechina.com/shangye/c/2026-07/06/content_474979.htm", title: "“普通百万富翁”的黄金时代已然落幕", terms: ["emilli"] },
  { date: "2026-08-03", url: "https://www.fortunechina.com/shangye/c/2026-08/03/content_475701.htm", title: "AI对存储芯片的旺盛需求，正在推动3万亿美元的新板块“Memi”", terms: ["memi"] }
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function decodeHtml(value = "") {
  const named = {
    amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " ", hellip: "…",
    ldquo: "“", rdquo: "”", lsquo: "‘", rsquo: "’", middot: "·", ndash: "–", mdash: "—"
  };
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (match, name) => named[name.toLowerCase()] ?? match);
}

function stripHtml(value = "") {
  return decodeHtml(value)
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanUrl(url) {
  return url.replace(/^http:\/\//i, "https://").split("#")[0];
}

async function fetchText(url, attempts = 4) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        redirect: "follow",
        headers: {
          "user-agent": "Mozilla/5.0 (compatible; FortuneVocabularyUpdater/1.0; +https://github.com/jeffreylexxx/hot-word-learning-of-furtune-magazine)",
          accept: "text/html,application/xhtml+xml"
        },
        signal: AbortSignal.timeout(25000)
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await sleep(700 * attempt);
    }
  }
  throw new Error(`Unable to fetch ${url}: ${lastError?.message || "unknown error"}`);
}

function searchUrl(query, page = 1) {
  const params = new URLSearchParams({
    curPage: String(page),
    sort: "1",
    facetAction: "",
    facetStr: "",
    key: query
  });
  return `https://www.fortunechina.com/search/f500beta/searchAll.do?${params}`;
}

function parseSearchResults(html) {
  const results = [];
  const itemPattern = /<li>\s*<h4><a href="([^"]+)">([\s\S]*?)<\/a><\/h4>([\s\S]*?)<\/li>/gi;
  let match;
  while ((match = itemPattern.exec(html))) {
    const details = match[3];
    const dateMatch = details.match(/<span>\s*(20\d{2}-\d{2}-\d{2})(?:\s+\d{2}:\d{2})?\s*<\/span>/i);
    if (!dateMatch) continue;
    const date = dateMatch[1];
    if (date < MIN_DATE || date > MAX_DATE) continue;
    results.push({
      url: cleanUrl(match[1]),
      title: stripHtml(match[2]),
      date,
      snippet: stripHtml(details.match(/<p>([\s\S]*?)<\/p>/i)?.[1] || "")
    });
  }
  return results;
}

function normalizeTerm(value) {
  return value
    .replace(/[’]/g, "'")
    .replace(/\s+/g, " ")
    .replace(/^(?:the|a|an)\s+/i, "")
    .trim()
    .toLowerCase();
}

function findWholeTerm(text, term) {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.search(new RegExp(`(?<![a-z0-9])${escaped}(?![a-z0-9])`, "i"));
}

function cleanChineseGloss(value) {
  return value
    .replace(/[“”"'‘’]/g, "")
    .replace(/^(?:即|也就是|意为|意思是|指的是|指|中文为|中文意思是)[:：]?/, "")
    .replace(/[，,；;。.]$/, "")
    .replace(/\s+/g, "")
    .trim();
}

function validCandidate(term, cn, context) {
  if (!term || !cn || term.length < 2 || term.length > 50 || cn.length < 1 || cn.length > 32) return false;
  if (!/[a-z]/.test(term) || /[^a-z0-9 +/'&.-]/.test(term)) return false;
  if (EXCLUDED_TERMS.has(term)) return false;
  if (/^(?:content|image|source|photo|copyright|http|www|email|app|company|business)$/i.test(term)) return false;
  if (!CONTEXT_SIGNALS.test(context)) return false;
  const words = term.split(/\s+/);
  if (words.length > 6) return false;
  return true;
}

function extractCandidates(html, article) {
  const text = stripHtml(html);
  const lowerText = text.toLowerCase();
  const candidates = [];
  const seen = new Set();

  const add = (rawTerm, rawCn, index, approved = false) => {
    const term = normalizeTerm(rawTerm);
    const safeRawCn = rawCn || "";
    const cn = cleanChineseGloss(CHINESE_GLOSSES[term] || safeRawCn);
    const context = text.slice(Math.max(0, index - 100), index + rawTerm.length + safeRawCn.length + 100);
    if (!DEFINITION_OVERRIDES[term] || !CHINESE_GLOSSES[term] || seen.has(term)) return;
    if (!approved && !validCandidate(term, cn, context)) return;
    seen.add(term);
    candidates.push({
      term,
      cn: `${cn}。`,
      en: DEFINITION_OVERRIDES[term],
      date: article.date,
      sourceTitle: `自动抓取：${article.title}`,
      sourceUrl: article.url,
      ...adaptedExamples(term, `${cn}。`)
    });
  };

  for (const term of article.terms || []) {
    const normalized = normalizeTerm(term);
    const index = findWholeTerm(lowerText, normalized);
    if (index >= 0) add(normalized, CHINESE_GLOSSES[normalized], index, true);
  }

  for (const term of Object.keys(DEFINITION_OVERRIDES)) {
    if (term.length <= 3) continue;
    const index = findWholeTerm(lowerText, term);
    if (index >= 0) add(term, CHINESE_GLOSSES[term], index);
  }

  const englishFirst = /[“"]([A-Za-z][A-Za-z0-9 +/'’&.-]{1,48})[”"]\s*[（(]([^）)\n]{1,32})[）)]/g;
  let match;
  while ((match = englishFirst.exec(text))) add(match[1], match[2], match.index);

  const chineseFirst = /([\u3400-\u9fff]{2,18})[（(]([A-Za-z][A-Za-z0-9 +/'’&.-]{1,48})[）)]/g;
  while ((match = chineseFirst.exec(text))) add(match[2], match[1], match.index);

  return candidates.slice(0, MAX_TERMS_PER_SOURCE);
}

function adaptedExamples(term, cn) {
  const meaning = cn.replace(/。$/, "");
  return {
    exampleEn: `The report uses "${term}" when discussing a recent business or technology trend.`,
    exampleCn: `这篇报道用“${term}”表达“${meaning}”这一概念。`,
    exampleAdapted: true
  };
}

async function readExistingItems() {
  try {
    const code = await fs.readFile(DATA_FILE, "utf8");
    const lessons = vm.runInNewContext(`${code}\n;FORTUNE_LESSONS`, Object.create(null), { timeout: 1000 });
    return lessons.flatMap((lesson) => [lesson.word, lesson.phrase].map((item) => {
      const term = normalizeTerm(item.term);
      return {
        ...item,
        term,
        cn: CHINESE_GLOSSES[term] ? `${CHINESE_GLOSSES[term]}。` : item.cn,
        en: DEFINITION_OVERRIDES[term] || item.en,
        date: item.date || lesson.date,
        sourceTitle: item.sourceTitle || lesson.sourceTitle,
        sourceUrl: item.sourceUrl || lesson.sourceUrl
      };
    })).filter((item) => item.date >= MIN_DATE && item.date <= MAX_DATE && DEFINITION_OVERRIDES[item.term] && CHINESE_GLOSSES[item.term]);
  } catch {
    return [];
  }
}

function selectBalancedItems(items) {
  const byTerm = new Map();
  for (const item of items) {
    const key = normalizeTerm(item.term);
    const existing = byTerm.get(key);
    if (!existing || item.date > existing.date) byTerm.set(key, { ...item, term: key });
  }

  const byYear = new Map();
  for (const item of byTerm.values()) {
    const year = Number(item.date.slice(0, 4));
    if (year < MIN_YEAR || year > MAX_YEAR) continue;
    if (!byYear.has(year)) byYear.set(year, []);
    byYear.get(year).push(item);
  }

  const selected = [];
  for (let year = MIN_YEAR; year <= MAX_YEAR; year += 1) {
    const pool = (byYear.get(year) || []).sort((a, b) => b.date.localeCompare(a.date));
    const sourceCounts = new Map();
    for (const item of pool) {
      const count = sourceCounts.get(item.sourceUrl) || 0;
      if (count >= MAX_TERMS_PER_SOURCE) continue;
      sourceCounts.set(item.sourceUrl, count + 1);
      selected.push(item);
      if (selected.filter((entry) => entry.date.startsWith(String(year))).length >= MAX_TERMS_PER_YEAR[year]) break;
    }
  }
  return selected;
}

function pairItems(items) {
  const queue = [...items].sort((a, b) => b.date.localeCompare(a.date));
  const lessons = [];
  while (queue.length >= 2) {
    const word = queue.shift();
    let partnerIndex = queue.findIndex((item) => item.sourceUrl !== word.sourceUrl);
    if (partnerIndex < 0) partnerIndex = 0;
    const [phrase] = queue.splice(partnerIndex, 1);
    lessons.push({
      date: word.date > phrase.date ? word.date : phrase.date,
      sourceTitle: "财富中文网自动抓取词汇",
      sourceUrl: word.sourceUrl,
      word,
      phrase
    });
  }
  return lessons;
}

async function discoverArticles() {
  const requests = [];
  for (const query of SEARCH_QUERIES) {
    requests.push([query, 1], [query, 2]);
  }
  for (let year = MIN_YEAR; year <= MAX_YEAR; year += 1) {
    requests.push([`年度词汇 ${year}`, 1], [`新词 ${year}`, 1], [`商业术语 ${year}`, 1]);
  }

  const articles = new Map(BOOTSTRAP_ARTICLES.map((article) => [article.url, article]));
  for (const [query, page] of requests) {
    try {
      const html = await fetchText(searchUrl(query, page));
      for (const article of parseSearchResults(html)) {
        const existing = articles.get(article.url);
        articles.set(article.url, existing ? { ...article, terms: existing.terms || [] } : article);
      }
    } catch (error) {
      console.warn(error.message);
    }
    await sleep(250);
  }
  return [...articles.values()].sort((a, b) => b.date.localeCompare(a.date));
}

async function main() {
  const existing = await readExistingItems();
  const articles = await discoverArticles();
  const discovered = [];

  for (const article of articles) {
    try {
      const html = await fetchText(article.url);
      for (const candidate of extractCandidates(html, article)) {
        discovered.push(candidate);
      }
    } catch (error) {
      console.warn(error.message);
    }
    await sleep(200);
  }

  const discoveredYears = new Set(discovered.map((item) => Number(item.date.slice(0, 4))));
  const completeDiscovery = discovered.length >= 20 &&
    Array.from({ length: MAX_YEAR - MIN_YEAR + 1 }, (_, index) => MIN_YEAR + index)
      .every((year) => discoveredYears.has(year));
  const selected = selectBalancedItems(completeDiscovery ? discovered : [...existing, ...discovered]);
  const lessons = pairItems(selected);
  if (!lessons.length) throw new Error("No valid 2021–2026 lessons were generated; keeping the previous data file.");

  const counts = {};
  for (const item of selected) counts[item.date.slice(0, 4)] = (counts[item.date.slice(0, 4)] || 0) + 1;
  const output = `// AUTO-GENERATED by scripts/update-fortune-words.mjs. Do not edit by hand.\n` +
    `// Included years: ${MIN_YEAR}–${MAX_YEAR}.\n` +
    `const FORTUNE_LESSONS = ${JSON.stringify(lessons, null, 2)};\n`;
  await fs.writeFile(DATA_FILE, output, "utf8");
  console.log(`Generated ${lessons.length} lessons / ${lessons.length * 2} terms from ${new Set(selected.map((item) => item.sourceUrl)).size} sources.`);
  console.log(`Year distribution: ${JSON.stringify(counts)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

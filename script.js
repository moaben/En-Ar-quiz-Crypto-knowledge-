// ================== بيانات الأسئلة (50 سؤال لكل لغة) ==================
const questions = {
  en: [
    // 20 Easy
    { q: "What does 'blockchain' refer to?", a: "A distributed ledger technology", options: ["A distributed ledger technology", "A type of cryptocurrency", "A data compression method", "A malware detection tool"] },
    { q: "What is Bitcoin?", a: "A cryptocurrency", options: ["A cryptocurrency", "A social media platform", "A software type", "A government agency"] },
    { q: "What is a crypto wallet?", a: "A digital tool to store cryptocurrencies", options: ["A digital tool to store cryptocurrencies", "A physical wallet for cash", "An online bank account", "A data storage device"] },
    { q: "Ethereum is known for?", a: "Smart contracts", options: ["Smart contracts", "Digital art", "Mining hardware", "A cryptocurrency exchange"] },
    { q: "What is Bitcoin's symbol?", a: "₿", options: ["₿", "$", "€", "¥"] },
    { q: "What is a token in crypto?", a: "A digital asset", options: ["A digital asset", "A type of malware", "A government bond", "A hardware device"] },
    { q: "What does mining mean in crypto?", a: "Validating transactions to earn coins", options: ["Validating transactions to earn coins", "Stealing coins", "Buying and selling coins", "Creating wallets"] },
    { q: "Which coin is called digital gold?", a: "Bitcoin", options: ["Bitcoin", "Ethereum", "Dogecoin", "Litecoin"] },
    { q: "What does NFT mean?", a: "Non-Fungible Token", options: ["Non-Fungible Token", "New Financial Transaction", "Network File Transfer", "National Funding Tool"] },
    { q: "What is DeFi?", a: "Decentralized Finance", options: ["Decentralized Finance", "Digital Finance", "Virtual Finance", "Finance Design"] },
    { q: "What does staking mean?", a: "Locking coins to support the network", options: ["Locking coins to support the network", "Spending coins quickly", "Selling coins on exchange", "Buying new coins"] },
    { q: "Which is a stablecoin?", a: "Tether (USDT)", options: ["Tether (USDT)", "Bitcoin", "Ethereum", "Dogecoin"] },
    { q: "What is a crypto exchange?", a: "A platform to trade cryptocurrencies", options: ["A platform to trade cryptocurrencies", "A bank", "A wallet provider", "A mining tool"] },
    { q: "What is a private key?", a: "A secret code to access crypto", options: ["A secret code to access crypto", "A public address", "An email password", "A type of cryptocurrency"] },
    { q: "Which crypto uses Proof of Stake?", a: "Cardano", options: ["Cardano", "Bitcoin", "Ethereum 1.0", "Litecoin"] },
    { q: "What is the smallest Bitcoin unit?", a: "Satoshi", options: ["Satoshi", "Gwei", "Wei", "Ether"] },
    { q: "What is a DAO?", a: "Decentralized Autonomous Organization", options: ["Decentralized Autonomous Organization", "Digital Asset Owner", "Data Access Operator", "Direct Asset Offering"] },
    { q: "Which coin is known for memes?", a: "Dogecoin", options: ["Dogecoin", "Bitcoin", "Ethereum", "Ripple"] },
    { q: "What does HODL mean?", a: "Hold On for Dear Life", options: ["Hold On for Dear Life", "Sell immediately", "Trade daily", "Buy and forget"] },
    { q: "Which was the first cryptocurrency?", a: "Bitcoin", options: ["Bitcoin", "Ethereum", "Litecoin", "Ripple"] },

    // 15 Medium
    { q: "What is a smart contract?", a: "Self-executing contract with code", options: ["Self-executing contract with code", "Paper contract", "Digital currency", "Mining algorithm"] },
    { q: "Which blockchain does Ethereum use?", a: "Ethereum blockchain", options: ["Ethereum blockchain", "Bitcoin blockchain", "Ripple network", "Cardano blockchain"] },
    { q: "What is gas in Ethereum?", a: "Transaction execution fee", options: ["Transaction execution fee", "Cryptocurrency name", "Mining reward", "Storage unit"] },
    { q: "What is a hard fork?", a: "Permanent blockchain split", options: ["Permanent blockchain split", "Temporary upgrade", "Mining method", "Wallet feature"] },
    { q: "What is a recovery phrase?", a: "Backup to restore wallet", options: ["Backup to restore wallet", "Exchange password", "A new cryptocurrency", "A type of malware"] },
    { q: "Which network uses Proof of Work?", a: "Bitcoin", options: ["Bitcoin", "Cardano", "Polkadot", "Ripple"] },
    { q: "What does liquidity mean in DeFi?", a: "Availability of assets for trading", options: ["Availability of assets for trading", "Amount of mined coins", "Wallet size", "Mining speed"] },
    { q: "What is a block reward?", a: "Coins given to miners", options: ["Coins given to miners", "Transaction fees", "Penalty for bad miners", "Token sale"] },
    { q: "What is sharding?", a: "Database partitioning to improve speed", options: ["Database partitioning to improve speed", "Data encryption", "Mining method", "Network attack"] },
    { q: "What is an oracle in crypto?", a: "Service providing external data", options: ["Service providing external data", "A type of coin", "Wallet software", "Mining hardware"] },
    { q: "What is a Layer 2 solution?", a: "Scaling solution above main chain", options: ["Scaling solution above main chain", "New coin launch", "Exchange platform", "Smart contract"] },
    { q: "What does staking reward mean?", a: "Earnings from locking coins", options: ["Earnings from locking coins", "Mining fee", "Exchange profit", "Token price increase"] },
    { q: "What is tokenomics?", a: "Economics of token supply and demand", options: ["Economics of token supply and demand", "Marketing strategy", "Mining hardware", "Wallet security"] },
    { q: "What is a whitepaper?", a: "Project description document", options: ["Project description document", "Financial statement", "Legal contract", "Marketing flyer"] },
    { q: "What does airdrops mean?", a: "Free token distribution", options: ["Free token distribution", "Token burning", "Mining reward", "Exchange fee"] },

    // 15 Hard
    { q: "What consensus algorithm does Algorand use?", a: "Pure Proof of Stake", options: ["Pure Proof of Stake", "Proof of Work", "Delegated Proof of Stake", "Proof of Authority"] },
    { q: "What are zk-SNARKs used for?", a: "Privacy-preserving proofs", options: ["Privacy-preserving proofs", "Transaction speed", "Wallet encryption", "Token issuance"] },
    { q: "What is impermanent loss?", a: "Loss from price divergence in liquidity pools", options: ["Loss from price divergence in liquidity pools", "Permanent wallet loss", "Exchange fee", "Mining penalty"] },
    { q: "What is a Merkle tree?", a: "Data structure for verification", options: ["Data structure for verification", "Type of blockchain", "Mining device", "Wallet feature"] },
    { q: "Which language is used for Ethereum smart contracts?", a: "Solidity", options: ["Solidity", "Python", "Java", "C++"] },
    { q: "What is gas limit?", a: "Max gas a transaction can use", options: ["Max gas a transaction can use", "Minimum coin to buy", "Wallet balance", "Mining speed"] },
    { q: "What is a nonce in blockchain?", a: "Number used once in mining", options: ["Number used once in mining", "Wallet address", "Token symbol", "Smart contract"] },
    { q: "What does token burn mean?", a: "Permanent removal of tokens", options: ["Permanent removal of tokens", "Buying tokens", "Staking tokens", "Selling tokens"] },
    { q: "What is yield farming?", a: "Earning interest by providing liquidity", options: ["Earning interest by providing liquidity", "Token mining", "Token trading", "Wallet backup"] },
    { q: "What is gas price?", a: "Fee per unit gas in Ethereum", options: ["Fee per unit gas in Ethereum", "Price of token", "Exchange fee", "Mining reward"] },
    { q: "What is cross-chain?", a: "Interoperability between blockchains", options: ["Interoperability between blockchains", "New token type", "Exchange platform", "Mining method"] },
    { q: "What is the purpose of a DAO?", a: "Decentralized organization management", options: ["Decentralized organization management", "Centralized bank", "Token sale", "Wallet security"] },
    { q: "What is a Flash Loan?", a: "Unsecured loan paid back instantly", options: ["Unsecured loan paid back instantly", "Long term loan", "Staking loan", "Mining reward"] },
    { q: "What is a cold wallet?", a: "Offline crypto storage", options: ["Offline crypto storage", "Online exchange", "Mobile wallet", "Mining rig"] },
    { q: "What is a smart contract audit?", a: "Security review of contracts", options: ["Security review of contracts", "New contract creation", "Token launch", "Wallet setup"] }
  ],

  ar: [
    // 20 سهل
    { q: "ماذا يعني 'البلوكشين'؟", a: "تكنولوجيا سجل موزع", options: ["تكنولوجيا سجل موزع", "نوع من العملات الرقمية", "طريقة ضغط بيانات", "أداة كشف البرمجيات الخبيثة"] },
    { q: "ما هو بيتكوين؟", a: "عملة رقمية", options: ["عملة رقمية", "منصة تواصل اجتماعي", "نوع من البرمجيات", "وكالة حكومية"] },
    { q: "ما هي المحفظة في الكريبتو؟", a: "أداة رقمية لتخزين العملات", options: ["أداة رقمية لتخزين العملات", "محفظة نقدية", "حساب بنكي إلكتروني", "جهاز تخزين بيانات"] },
    { q: "ما هو إيثريوم مشهور به؟", a: "العقود الذكية", options: ["العقود الذكية", "الفن الرقمي", "معدات التعدين", "منصة تبادل"] },
    { q: "ما هو رمز بيتكوين؟", a: "₿", options: ["₿", "$", "€", "¥"] },
    { q: "ما هو التوكن؟", a: "أصل رقمي", options: ["أصل رقمي", "نوع من البرمجيات الخبيثة", "سند حكومي", "جهاز مادي"] },
    { q: "ماذا يعني التعدين في الكريبتو؟", a: "التحقق من المعاملات لكسب العملات", options: ["التحقق من المعاملات لكسب العملات", "سرقة العملات", "شراء وبيع العملات", "إنشاء محافظ"] },
    { q: "أي عملة تسمى الذهب الرقمي؟", a: "بيتكوين", options: ["بيتكوين", "إيثريوم", "دوجكوين", "لايتكوين"] },
    { q: "ما معنى NFT؟", a: "رمز غير قابل للاستبدال", options: ["رمز غير قابل للاستبدال", "معاملة مالية جديدة", "نقل ملفات الشبكة", "صندوق تمويل وطني"] },
    { q: "ما هو DeFi؟", a: "التمويل اللامركزي", options: ["التمويل اللامركزي", "التمويل الرقمي", "التمويل الافتراضي", "تصميم التمويل"] },
    { q: "ماذا يعني الستاكينج؟", a: "قفل العملات لدعم الشبكة", options: ["قفل العملات لدعم الشبكة", "إنفاق العملات بسرعة", "بيع العملات في البورصة", "شراء عملات جديدة"] },
    { q: "أي من العملات مستقرة؟", a: "تيثر (USDT)", options: ["تيثر (USDT)", "بيتكوين", "إيثريوم", "دوجكوين"] },
    { q: "ما هو تبادل العملات الرقمية؟", a: "منصة لتداول العملات الرقمية", options: ["منصة لتداول العملات الرقمية", "بنك", "مزود محافظ", "أداة تعدين"] },
    { q: "ما هو المفتاح الخاص؟", a: "كود سري للوصول للعملات", options: ["كود سري للوصول للعملات", "عنوان عام", "كلمة مرور بريد إلكتروني", "نوع من العملات الرقمية"] },
    { q: "أي عملة تستخدم إثبات الحصة؟", a: "كاردانو", options: ["كاردانو", "بيتكوين", "إيثريوم 1.0", "لايتكوين"] },
    { q: "ما هو أصغر وحدة في بيتكوين؟", a: "ساتوشي", options: ["ساتوشي", "جوي", "واي", "إيثر"] },
    { q: "ما هو DAO؟", a: "منظمة مستقلة لامركزية", options: ["منظمة مستقلة لامركزية", "مالك أصل رقمي", "مشغل بيانات", "عرض أصول مباشر"] },
    { q: "أي عملة معروفة بالميمز؟", a: "دوجكوين", options: ["دوجكوين", "بيتكوين", "إيثريوم", "ريبل"] },
    { q: "ماذا يعني HODL؟", a: "التمسك بالعملة لفترة طويلة", options: ["التمسك بالعملة لفترة طويلة", "البيع فورًا", "التداول اليومي", "الشراء ونسيان"] },
    { q: "ما هي أول عملة رقمية؟", a: "بيتكوين", options: ["بيتكوين", "إيثريوم", "لايتكوين", "ريبل"] },

    // 15 متوسط
    { q: "ما هو العقد الذكي؟", a: "عقد ذاتي التنفيذ بالبرمجة", options: ["عقد ذاتي التنفيذ بالبرمجة", "عقد ورقي", "عملة رقمية", "خوارزمية تعدين"] },
    { q: "أي بلوكشين يستخدم إيثريوم؟", a: "بلوكشين إيثريوم", options: ["بلوكشين إيثريوم", "بلوكشين بيتكوين", "شبكة ريبل", "بلوكشين كاردانو"] },
    { q: "ما هو الغاز في إيثريوم؟", a: "رسوم تنفيذ المعاملات", options: ["رسوم تنفيذ المعاملات", "اسم عملة", "مكافأة التعدين", "وحدة تخزين"] },
    { q: "ما هو الفارق الصعب (Hard Fork)؟", a: "انقسام دائم للبلوكشين", options: ["انقسام دائم للبلوكشين", "ترقية مؤقتة", "طريقة تعدين", "ميزة محفظة"] },
    { q: "ما هي عبارة الاسترداد؟", a: "نسخة احتياطية لاستعادة المحفظة", options: ["نسخة احتياطية لاستعادة المحفظة", "كلمة مرور للتبادل", "عملة جديدة", "نوع من البرمجيات الخبيثة"] },
    { q: "أي شبكة تستخدم إثبات العمل؟", a: "بيتكوين", options: ["بيتكوين", "كاردانو", "بولكادوت", "ريبل"] },
    { q: "ماذا يعني السيولة في DeFi؟", a: "توفر الأصول للتداول", options: ["توفر الأصول للتداول", "كمية العملات المُعدنة", "حجم المحفظة", "سرعة التعدين"] },
    { q: "ما هي مكافأة الكتلة؟", a: "عملات تعطى للمُعدنين", options: ["عملات تعطى للمُعدنين", "رسوم المعاملات", "عقوبة للمُعدنين السيئين", "بيع التوكن"] },
    { q: "ما هو الشاردينج؟", a: "تقسيم قاعدة البيانات لتحسين السرعة", options: ["تقسيم قاعدة البيانات لتحسين السرعة", "تشفير البيانات", "طريقة تعدين", "هجوم على الشبكة"] },
    { q: "ما هو الأوراكل في الكريبتو؟", a: "خدمة تقدم بيانات خارجية", options: ["خدمة تقدم بيانات خارجية", "نوع من العملات", "برنامج محفظة", "معدات تعدين"] },
    { q: "ما هو حل الطبقة الثانية؟", a: "حل تحجيم فوق السلسلة الأساسية", options: ["حل تحجيم فوق السلسلة الأساسية", "إطلاق عملة جديدة", "منصة تبادل", "عقد ذكي"] },
    { q: "ماذا تعني مكافأة الستاكينج؟", a: "أرباح من قفل العملات", options: ["أرباح من قفل العملات", "رسوم التعدين", "أرباح التبادل", "ارتفاع سعر التوكن"] },
    { q: "ما هو التوكنوميكس؟", a: "اقتصاد العرض والطلب للتوكن", options: ["اقتصاد العرض والطلب للتوكن", "استراتيجية تسويقية", "معدات تعدين", "أمان المحفظة"] },
    { q: "ما هو الورقة البيضاء؟", a: "وثيقة مشروع الكريبتو", options: ["وثيقة مشروع الكريبتو", "محفظة رقمية", "تطبيق تداول", "موقع ويب"] },
    { q: "ما هو اللامركزية؟", a: "عدم وجود سلطة مركزية", options: ["عدم وجود سلطة مركزية", "عملة مركزية", "منصة تبادل", "نظام بنكي"] },

    // 15 صعب
    { q: "ما هو التحقق من الكتلة؟", a: "تأكيد صحة الكتلة", options: ["تأكيد صحة الكتلة", "نوع من العملات الرقمية", "محفظة ساخنة", "رمز أمني"] },
    { q: "ما هو الإيثريوم 2.0؟", a: "ترقية الشبكة لإثبات الحصة", options: ["ترقية الشبكة لإثبات الحصة", "عملة جديدة", "منافس لبيتكوين", "محفظة إلكترونية"] },
    { q: "ما هي السلسلة الجانبية؟", a: "بلوكشين مواز لتحسين الأداء", options: ["بلوكشين مواز لتحسين الأداء", "محفظة رقمية", "طريقة تعدين", "رمز غير قابل للاستبدال"] },
    { q: "ما هو تجزئة البيانات؟", a: "تقسيم البيانات عبر الشبكة", options: ["تقسيم البيانات عبر الشبكة", "تشفير المفتاح", "محفظة باردة", "منصة تبادل"] },
    { q: "ما هو التوقيع الرقمي؟", a: "طريقة تحقق من المعاملات", options: ["طريقة تحقق من المعاملات", "أداة تعدين", "محفظة إلكترونية", "خدمة تبادل"] },
    { q: "ما هو الأوراكل الموثوق؟", a: "مصدر بيانات خارجي موثوق", options: ["مصدر بيانات خارجي موثوق", "رمز أمني", "محفظة ساخنة", "بلوكشين خاص"] },
    { q: "ما هو تعدين إثبات الحصة؟", a: "طريقة التعدين باستخدام الحصة", options: ["طريقة التعدين باستخدام الحصة", "تعدين إثبات العمل", "تعدين بالبطاقات الرسومية", "تعدين بالمعالجات"] },
    { q: "ما هو هجوم 51%؟", a: "السيطرة على أكثر من نصف الشبكة", options: ["السيطرة على أكثر من نصف الشبكة", "سرقة العملات", "تعطل الشبكة", "خداع المستخدمين"] },
    { q: "ما هي العقود القابلة للترقية؟", a: "عقود يمكن تعديلها بعد النشر", options: ["عقود يمكن تعديلها بعد النشر", "عقود جديدة", "رموز غير قابلة للاستبدال", "تحديثات المحفظة"] },
    { q: "ما هي شبكة الرقيق؟", a: "شبكة اختبار لإيثريوم", options: ["شبكة اختبار لإيثريوم", "شبكة تبادل جديدة", "محفظة باردة", "أداة تعدين"] },
    { q: "ما هو مجمع السيولة؟", a: "تجميع الأصول للتداول", options: ["تجميع الأصول للتداول", "محفظة رقمية", "بلوكشين خاص", "عقد ذكي"] },
    { q: "ما هو الأمان الطبقي؟", a: "حماية متعددة الطبقات للشبكة", options: ["حماية متعددة الطبقات للشبكة", "هجوم إلكتروني", "محفظة إلكترونية", "تشفير مفتاح"] },
    { q: "ما هي أدوات تجميع بيانات السوق؟", a: "أدوات تجميع بيانات السوق", options: ["أدوات تجميع بيانات السوق", "محفظة ساخنة", "تعدين ذكي", "تبادل فوري"] },
    { q: "ما هي المحفظة متعددة التوقيعات؟", a: "محفظة تتطلب عدة توقيعات", options: ["محفظة تتطلب عدة توقيعات", "محفظة فردية", "محفظة باردة", "محفظة ساخنة"] },
    { q: "ما هي المكافأة المزدوجة؟", a: "مكافأة لتعدين عملتين", options: ["مكافأة لتعدين عملتين", "مكافأة لحفظ العملات", "مكافأة التداول", "مكافأة الإيداع"] }
  ]
};

// ================== متغيرات اللعبة ==================
let lang = 'en';
let allQuestions = [];
let originalCount = 0;
let unanswered = [];
let currentIndex = 0;
let score = 0;
let timerInterval;
const timeLimit = 10;

// روابط الصور
const monkeyNeutralURL = "https://i.postimg.cc/4dWgsQ4h/monkey-neutral.png";
const monkeyHappyURL = "https://i.postimg.cc/jdMXTzHj/monkey-happy.png";
const monkeySadURL   = "https://i.postimg.cc/5yK72dV6/monkey-sad.png";

// عناصر DOM
const btnEn = document.getElementById('btn-en');
const btnAr = document.getElementById('btn-ar');
const startBtn = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');
const startScreen = document.getElementById('start-screen');
const resultContainer = document.getElementById('result-container');
const retryBtn = document.getElementById('retry-btn');
const restartBtn = document.getElementById('restart-btn');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const progressEl = document.getElementById('progress');
const timerEl = document.getElementById('timer');
const finalResultEl = document.getElementById('final-result');
const monkeyImg = document.getElementById('monkey-img');
const musicToggleBtn = document.getElementById('music-toggle');
const correctSound = document.getElementById('correctSound');
const wrongSound = document.getElementById('wrongSound');
const bgMusic = document.getElementById('bgMusic');

// خلط مصفوفة
function shuffleArray(arr) {
  const array = arr.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ضبط اللغة
function setLanguage(newLang) {
  lang = newLang;
  document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  document.getElementById('game-title').innerText = (lang === 'ar') ? 'لعبة الذكاء الكريبتو' : 'Crypto IQ Game';
  btnEn.disabled = (lang === 'en');
  btnAr.disabled = (lang === 'ar');
  resetGame();
}

// البدء أو إعادة الضبط
function resetGame() {
  clearInterval(timerInterval);
  startScreen.classList.remove('hidden');
  quizContainer.classList.add('hidden');
  resultContainer.classList.add('hidden');
  score = 0;
  currentIndex = 0;
  allQuestions = shuffleArray(questions[lang]);
  originalCount = allQuestions.length;
  unanswered = [];
  // إظهار القرد المحايد
  monkeyImg.src = monkeyNeutralURL;
  timerEl.innerText = '';
  progressEl.innerText = '';
  questionEl.innerText = '';
  answersEl.innerHTML = '';
  stopMusic();
}

// بدء اللعبة
function startGame() {
  startScreen.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  resultContainer.classList.add('hidden');
  score = 0;
  currentIndex = 0;
  unanswered = [];
  playMusic();
  showQuestion();
}

// عرض السؤال الحالي
function showQuestion() {
  clearInterval(timerInterval);

  if (currentIndex >= allQuestions.length) {
    if (unanswered.length > 0) {
      // إعادة الأسئلة غير المُجابة
      allQuestions = unanswered.slice();
      unanswered = [];
      currentIndex = 0;
      showQuestion();
      return;
    }
    // انتهت الجولة
    endGame();
    return;
  }

  const q = allQuestions[currentIndex];
  questionEl.innerText = q.q;
  progressEl.innerText = (lang === 'ar' ? 'السؤال ' : 'Question ') + (currentIndex + 1) + ' / ' + originalCount;

  // ترتيب الخيارات عشوائياً
  const shuffledOptions = shuffleArray(q.options);
  answersEl.innerHTML = '';
  shuffledOptions.forEach(option => {
    const btn = document.createElement('button');
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option, q.a);
    answersEl.appendChild(btn);
  });

  // إعادة الصورة المحايدة
  monkeyImg.src = monkeyNeutralURL;

  // بدء المؤقت
  startTimer();
}

// بدء المؤقت ويتحقق انتهاء الوقت
function startTimer() {
  let timeLeft = timeLimit;
  timerEl.innerText = (lang === 'ar' ? 'الوقت المتبقي: ' : 'Time left: ') + timeLeft + 's';

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.innerText = (lang === 'ar' ? 'الوقت المتبقي: ' : 'Time left: ') + timeLeft + 's';
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      // إجابة غير محفوظة → أضف للسلسلة غير المجابة
      unanswered.push(allQuestions[currentIndex]);
      currentIndex++;
      setTimeout(showQuestion, 500);
    }
  }, 1000);
}

// التحقق من الإجابة
function checkAnswer(selected, correct) {
  clearInterval(timerInterval);
  const buttons = answersEl.querySelectorAll('button');

  if (selected === correct) {
    score++;
    playSound('correct');
    monkeyImg.src = monkeyHappyURL;
  } else {
    playSound('wrong');
    monkeyImg.src = monkeySadURL;
    // أضف السؤال لقائمة غير المجابة (ليعاد)
    unanswered.push(allQuestions[currentIndex]);
  }

  // تمييز الأزرار: الصحيح باللون الأخضر، المختار الخاطئ بالأحمر
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correct) {
      btn.classList.add('correct');
    } else if (btn.innerText === selected) {
      btn.classList.add('wrong');
    }
  });

  currentIndex++;
  // عرض السؤال التالي بعد تأخير بسيط
  setTimeout(showQuestion, 1000);
}

// إنهاء اللعبة وعرض النتيجة
function endGame() {
  stopMusic();
  quizContainer.classList.add('hidden');
  resultContainer.classList.remove('hidden');
  finalResultEl.innerText = (lang === 'ار' ? 'نتيجتك: ' : 'Your score: ') + score + ' / ' + originalCount;
}

// تشغيل المؤثر الصوتي
function playSound(type) {
  if (type === 'correct') {
    correctSound.currentTime = 0;
    correctSound.play();
  } else {
    wrongSound.currentTime = 0;
    wrongSound.play();
  }
}

// تشغيل/إيقاف الموسيقى الخلفية
let musicPlaying = false;
function playMusic() {
  if (!musicPlaying) {
    bgMusic.volume = 0.3;
    bgMusic.play().catch(_ => {});
    musicToggleBtn.innerText = (lang === 'ar' ? 'إيقاف الموسيقى' : '🔇 Mute Music');
    musicPlaying = true;
  }
}
function stopMusic() {
  if (musicPlaying) {
    bgMusic.pause();
    bgMusic.currentTime = 0;
    musicToggleBtn.innerText = (lang === 'ar' ? 'تشغيل الموسيقى' : '🔊 Play Music');
    musicPlaying = false;
  }
}

// أحداث الأزرار
btnEn.onclick = () => setLanguage('en');
btnAr.onclick = () => setLanguage('ar');
startBtn.onclick = () => startGame();
retryBtn.onclick = () => {
  if (unanswered.length > 0) {
    allQuestions = unanswered.slice();
    unanswered = [];
    currentIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    playMusic();
    showQuestion();
  }
};
restartBtn.onclick = () => resetGame();
musicToggleBtn.onclick = () => {
  if (musicPlaying) stopMusic();
  else playMusic();
};

// تهيئة افتراضية
window.addEventListener('load', () => setLanguage('en'));

// Game Data and Logic for Crypto IQ Quiz - bilingual EN/AR

const questions = {
  en: [
    // 50 سؤال بالإنجليزي (سهل-متوسط-صعب)
    { q: "What does 'blockchain' mean?", a: "A distributed ledger technology", options: ["A distributed ledger technology", "A type of cryptocurrency", "A data compression method", "A malware detection tool"] },
    { q: "What is Bitcoin's maximum supply?", a: "21 million", options: ["21 million", "100 million", "Unlimited", "1 million"] },
    { q: "What is a smart contract?", a: "Self-executing contract with terms", options: ["Self-executing contract with terms", "A crypto wallet", "A new coin", "A mining rig"] },
    { q: "Which technology is used in NFTs?", a: "Blockchain", options: ["Blockchain", "Artificial Intelligence", "Cloud Computing", "IoT"] },
    { q: "What is 'mining' in cryptocurrency?", a: "Verifying transactions", options: ["Verifying transactions", "Creating NFTs", "Hacking wallets", "Storing coins"] },
    { q: "What does 'DeFi' stand for?", a: "Decentralized Finance", options: ["Decentralized Finance", "Digital Finance", "Defined Finance", "Decentralized File"] },
    { q: "Which coin is the first cryptocurrency?", a: "Bitcoin", options: ["Bitcoin", "Ethereum", "Litecoin", "Ripple"] },
    { q: "What is a crypto wallet?", a: "A software to store crypto keys", options: ["A software to store crypto keys", "A bank account", "A mining machine", "A type of blockchain"] },
    { q: "Which is a popular blockchain for smart contracts?", a: "Ethereum", options: ["Ethereum", "Bitcoin", "Litecoin", "Ripple"] },
    { q: "What is a 'token' in crypto?", a: "A digital asset on blockchain", options: ["A digital asset on blockchain", "Physical coin", "Paper money", "Credit card"] },

    { q: "What is the consensus mechanism Bitcoin uses?", a: "Proof of Work", options: ["Proof of Work", "Proof of Stake", "Delegated Proof", "Byzantine Fault Tolerance"] },
    { q: "Which is NOT a cryptocurrency?", a: "HTTP", options: ["HTTP", "Bitcoin", "Ethereum", "Ripple"] },
    { q: "What does 'HODL' mean?", a: "Hold on for dear life", options: ["Hold on for dear life", "Sell fast", "Buy cheap", "Trade often"] },
    { q: "What is 'gas' in Ethereum?", a: "Transaction fee", options: ["Transaction fee", "Ether coin", "Mining hardware", "Smart contract"] },
    { q: "What is a 'fork' in blockchain?", a: "A split in the blockchain", options: ["A split in the blockchain", "A type of wallet", "Mining pool", "Smart contract"] },
    { q: "What does 'cold wallet' mean?", a: "Offline crypto storage", options: ["Offline crypto storage", "Hot wallet", "Exchange", "Token"] },
    { q: "What is the smallest unit of Bitcoin called?", a: "Satoshi", options: ["Satoshi", "Ether", "Token", "Byte"] },
    { q: "Which is a stablecoin?", a: "USDT", options: ["USDT", "Bitcoin", "Ethereum", "Dogecoin"] },
    { q: "What is an ICO?", a: "Initial Coin Offering", options: ["Initial Coin Offering", "Internet Coin Operation", "Instant Crypto Order", "Internal Crypto Option"] },
    { q: "What is 'staking' in crypto?", a: "Locking coins to earn rewards", options: ["Locking coins to earn rewards", "Mining", "Trading", "Sending coins"] },

    { q: "Which consensus algorithm uses validators instead of miners?", a: "Proof of Stake", options: ["Proof of Stake", "Proof of Work", "Delegated Proof of Stake", "Proof of Authority"] },
    { q: "What does 'sharding' mean in blockchain?", a: "Splitting database for scalability", options: ["Splitting database for scalability", "Mining coins", "Encrypting data", "Creating tokens"] },
    { q: "Which blockchain introduced the concept of smart contracts?", a: "Ethereum", options: ["Ethereum", "Bitcoin", "Ripple", "Litecoin"] },
    { q: "What is a DAO?", a: "Decentralized Autonomous Organization", options: ["Decentralized Autonomous Organization", "Digital Asset Option", "Direct Access Operation", "Distributed Account Order"] },
    { q: "What does 'layer 2' scaling mean?", a: "Solutions built on top of blockchain", options: ["Solutions built on top of blockchain", "Second blockchain", "Double mining", "Token wrapping"] },
    { q: "Which cryptographic method secures blockchain transactions?", a: "Elliptic Curve Cryptography", options: ["Elliptic Curve Cryptography", "RSA", "MD5", "SHA1"] },
    { q: "What is a 'nonce' in mining?", a: "A number used once to find hash", options: ["A number used once to find hash", "Wallet address", "Transaction ID", "Mining rig"] },
    { q: "What does 'interoperability' mean in blockchain?", a: "Ability of different blockchains to communicate", options: ["Ability of different blockchains to communicate", "Mining power", "Wallet syncing", "Token trading"] },
    { q: "Which network uses 'Proof of Authority'?", a: "Private blockchains", options: ["Private blockchains", "Bitcoin", "Ethereum", "Public blockchains"] },
    { q: "What is a zero-knowledge proof?", a: "Proof without revealing data", options: ["Proof without revealing data", "A blockchain type", "A crypto token", "A mining method"] },

    // 10 أسئلة إضافية (مثلاً)
    { q: "What is a crypto exchange?", a: "Platform to trade cryptocurrencies", options: ["Platform to trade cryptocurrencies", "Crypto wallet", "Mining software", "Token issuer"] },
    { q: "Which is a privacy-focused coin?", a: "Monero", options: ["Monero", "Bitcoin", "Ethereum", "Litecoin"] },
    { q: "What does 'airdrops' mean?", a: "Free crypto tokens distribution", options: ["Free crypto tokens distribution", "Selling tokens", "Buying coins", "Mining rewards"] },
    { q: "What is 'block reward'?", a: "Coins given for mining a block", options: ["Coins given for mining a block", "Transaction fee", "Wallet balance", "Token sale"] },
    { q: "What is 'tokenomics'?", a: "Economics of crypto tokens", options: ["Economics of crypto tokens", "Mining process", "Exchange listing", "Crypto wallet"] },
    { q: "What is 'DeFi lending'?", a: "Lending crypto without intermediaries", options: ["Lending crypto without intermediaries", "Bank loan", "Mining", "Token sale"] },
    { q: "What is 'yield farming'?", a: "Earning rewards by providing liquidity", options: ["Earning rewards by providing liquidity", "Mining", "Token trading", "Staking"] },
    { q: "What is a 'block height'?", a: "Number of blocks in the chain", options: ["Number of blocks in the chain", "Block size", "Transaction count", "Wallet address"] },
    { q: "What is a 'cold storage'?", a: "Offline crypto storage", options: ["Offline crypto storage", "Hot wallet", "Exchange wallet", "Mobile wallet"] },
    { q: "What is a 'hash function'?", a: "Function converting data into fixed output", options: ["Function converting data into fixed output", "Wallet address", "Mining rig", "Smart contract"] },
  ],
  
  ar: [
    // 50 سؤال بالعربي (سهل-متوسط-صعب)
    { q: "ما هو البلوكشين؟", a: "تقنية دفتر الأستاذ الموزع", options: ["تقنية دفتر الأستاذ الموزع", "نوع من العملات الرقمية", "طريقة ضغط بيانات", "برنامج مكافحة فيروسات"] },
    { q: "ما هو الحد الأقصى لعملة بيتكوين؟", a: "21 مليون", options: ["21 مليون", "100 مليون", "غير محدود", "1 مليون"] },
    { q: "ما هو العقد الذكي؟", a: "عقد ينفذ نفسه ذاتياً", options: ["عقد ينفذ نفسه ذاتياً", "محفظة عملات رقمية", "عملة جديدة", "جهاز تعدين"] },
    { q: "ما التقنية المستخدمة في NFTs؟", a: "البلوكشين", options: ["البلوكشين", "الذكاء الاصطناعي", "الحوسبة السحابية", "إنترنت الأشياء"] },
    { q: "ما هو التعدين في العملات الرقمية؟", a: "التحقق من المعاملات", options: ["التحقق من المعاملات", "إنشاء NFTs", "اختراق المحافظ", "تخزين العملات"] },
    { q: "ما معنى DeFi؟", a: "التمويل اللامركزي", options: ["التمويل اللامركزي", "التمويل الرقمي", "التمويل المحدد", "ملف لامركزي"] },
    { q: "ما هي أول عملة رقمية؟", a: "بيتكوين", options: ["بيتكوين", "إيثريوم", "لايتكوين", "ريبل"] },
    { q: "ما هي المحفظة الرقمية؟", a: "برنامج لتخزين المفاتيح الرقمية", options: ["برنامج لتخزين المفاتيح الرقمية", "حساب بنكي", "جهاز تعدين", "نوع من البلوكشين"] },
    { q: "أي بلوكشين مشهور للعقود الذكية؟", a: "إيثريوم", options: ["إيثريوم", "بيتكوين", "لايتكوين", "ريبل"] },
    { q: "ما هو التوكن في العملات الرقمية؟", a: "أصل رقمي على البلوكشين", options: ["أصل رقمي على البلوكشين", "عملة مادية", "نقد ورقي", "بطاقة ائتمان"] },

    { q: "ما هو آلية التوافق في بيتكوين؟", a: "إثبات العمل", options: ["إثبات العمل", "إثبات الحصة", "إثبات الحصة المفوض", "تحمل الأخطاء البيزنطية"] },
    { q: "أي مما يلي ليست عملة رقمية؟", a: "HTTP", options: ["HTTP", "بيتكوين", "إيثريوم", "ريبل"] },
    { q: "ما معنى HODL؟", a: "الاحتفاظ طويل الأمد", options: ["الاحتفاظ طويل الأمد", "البيع السريع", "الشراء الرخيص", "التداول المتكرر"] },
    { q: "ما هو الغاز في إيثريوم؟", a: "رسوم المعاملة", options: ["رسوم المعاملة", "عملة إيثريوم", "جهاز تعدين", "عقد ذكي"] },
    { q: "ما هو التفرع في البلوكشين؟", a: "انقسام في السلسلة", options: ["انقسام في السلسلة", "نوع محفظة", "تجمع تعدين", "عقد ذكي"] },
    { q: "ما هو المحفظة الباردة؟", a: "تخزين العملات دون اتصال", options: ["تخزين العملات دون اتصال", "محفظة ساخنة", "بورصة", "توكن"] },
    { q: "ما هو أصغر وحدة في بيتكوين؟", a: "ساتوشي", options: ["ساتوشي", "إيثر", "توكن", "بايت"] },
    { q: "أي من التالي عملة مستقرة؟", a: "USDT", options: ["USDT", "بيتكوين", "إيثريوم", "دوغكوين"] },
    { q: "ما هو ICO؟", a: "عرض العملة الأولي", options: ["عرض العملة الأولي", "عملية عملة الإنترنت", "طلب فوري للعملة", "خيار عملة داخلي"] },
    { q: "ما هو الستاكينغ؟", a: "قفل العملات لكسب المكافآت", options: ["قفل العملات لكسب المكافآت", "التعدين", "التداول", "إرسال العملات"] },

    { q: "أي آلية توافق تستخدم المدققين بدلاً من المعدنين؟", a: "إثبات الحصة", options: ["إثبات الحصة", "إثبات العمل", "إثبات الحصة المفوض", "إثبات السلطة"] },
    { q: "ماذا يعني التجزئة في البلوكشين؟", a: "تقسيم قاعدة البيانات لزيادة السعة", options: ["تقسيم قاعدة البيانات لزيادة السعة", "تعدين العملات", "تشفير البيانات", "إنشاء التوكن"] },
    { q: "أي بلوكشين قدم فكرة العقود الذكية؟", a: "إيثريوم", options: ["إيثريوم", "بيتكوين", "ريبل", "لايتكوين"] },
    { q: "ما هو DAO؟", a: "منظمة مستقلة لامركزية", options: ["منظمة مستقلة لامركزية", "خيار أصل رقمي", "عملية وصول مباشر", "طلب حساب موزع"] },
    { q: "ماذا يعني التوسعة من الطبقة الثانية؟", a: "حلول مبنية على البلوكشين", options: ["حلول مبنية على البلوكشين", "بلوكشين ثاني", "تعدين مزدوج", "لف التوكن"] },
    { q: "ما هو الأسلوب التشفيري الذي يؤمن معاملات البلوكشين؟", a: "التشفير المنحني البياني", options: ["التشفير المنحني البياني", "RSA", "MD5", "SHA1"] },
    { q: "ما هو النونس في التعدين؟", a: "رقم يستخدم مرة واحدة لإيجاد الهاش", options: ["رقم يستخدم مرة واحدة لإيجاد الهاش", "عنوان المحفظة", "معرف المعاملة", "جهاز تعدين"] },
    { q: "ماذا يعني التفاعل بين البلوكشينات؟", a: "قدرة البلوكشينات المختلفة على التواصل", options: ["قدرة البلوكشينات المختلفة على التواصل", "قوة التعدين", "مزامنة المحفظة", "تداول التوكن"] },
    { q: "أي شبكة تستخدم إثبات السلطة؟", a: "البلوكشينات الخاصة", options: ["البلوكشينات الخاصة", "بيتكوين", "إيثريوم", "البلوكشينات العامة"] },
    { q: "ما هو إثبات المعرفة الصفرية؟", a: "إثبات بدون كشف البيانات", options: ["إثبات بدون كشف البيانات", "نوع من البلوكشين", "توكن رقمي", "طريقة تعدين"] },

    { q: "ما هو التبادل الرقمي؟", a: "منصة لتداول العملات الرقمية", options: ["منصة لتداول العملات الرقمية", "محفظة رقمية", "برنامج تعدين", "مصدر توكن"] },
    { q: "أي عملة تركز على الخصوصية؟", a: "Monero", options: ["Monero", "بيتكوين", "إيثريوم", "لايتكوين"] },
    { q: "ما معنى 'إيردروب'؟", a: "توزيع توكنات مجانية", options: ["توزيع توكنات مجانية", "بيع التوكنات", "شراء العملات", "مكافآت التعدين"] },
    { q: "ما هي مكافأة البلوك؟", a: "عملات تُعطى لتعدين بلوك", options: ["عملات تُعطى لتعدين بلوك", "رسوم المعاملات", "رصيد المحفظة", "بيع التوكن"] },
    { q: "ما هي توكينوميكس؟", a: "اقتصاديات التوكنات الرقمية", options: ["اقتصاديات التوكنات الرقمية", "عملية التعدين", "قائمة التبادل", "محفظة العملات الرقمية"] },
    { q: "ما هو الإقراض في DeFi؟", a: "إقراض العملات بدون وسيط", options: ["إقراض العملات بدون وسيط", "قرض بنكي", "تعدين", "بيع التوكن"] },
    { q: "ما هو الزراعة العائدية؟", a: "كسب مكافآت عبر توفير السيولة", options: ["كسب مكافآت عبر توفير السيولة", "تعدين", "تداول التوكنات", "الستاكينغ"] },
    { q: "ما هو ارتفاع البلوك؟", a: "عدد الكتل في السلسلة", options: ["عدد الكتل في السلسلة", "حجم البلوك", "عدد المعاملات", "عنوان المحفظة"] },
    { q: "ما هو التخزين البارد؟", a: "تخزين العملات دون اتصال", options: ["تخزين العملات دون اتصال", "محفظة ساخنة", "محفظة تبادل", "محفظة جوال"] },
    { q: "ما هي دالة الهاش؟", a: "دالة تحول البيانات لمخرجات ثابتة", options: ["دالة تحول البيانات لمخرجات ثابتة", "عنوان المحفظة", "جهاز التعدين", "العقد الذكي"] },
  ]
};

// Variables
let currentLang = 'en';
let currentIndex = 0;
let score = 0;
let timer;
const timePerQuestion = 10; // seconds

// Audio
const audioTick = new Audio('sounds/tick.mp3');
const audioCorrect = new Audio('sounds/correct.mp3');
const audioWrong = new Audio('sounds/wrong.mp3');

// Elements
const langBtn = document.getElementById('langBtn');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');

// Track unanswered questions for replay
let unansweredQuestions = [];

// Initialize game
function initGame() {
  score = 0;
  currentIndex = 0;
  unansweredQuestions = [];
  scoreEl.textContent = '';
  showQuestion();
  startTimer();
}

// Show question with randomized options
function showQuestion() {
  clearTimer();
  startTimer();

  let q = questions[currentLang][currentIndex];
  questionEl.textContent = q.q;

  // Shuffle options
  let opts = [...q.options];
  opts.sort(() => Math.random() - 0.5);

  optionsEl.innerHTML = '';
  opts.forEach(option => {
    let btn = document.createElement('button');
    btn.textContent = option;
    btn.className = 'option-btn';
    btn.onclick = () => selectAnswer(option);
    optionsEl.appendChild(btn);
  });

  nextBtn.style.display = 'none';
  timerEl.textContent = timePerQuestion;
}

// Handle answer selection
function selectAnswer(selected) {
  clearTimer();

  let q = questions[currentLang][currentIndex];
  const buttons = optionsEl.querySelectorAll('button');

  // Disable all buttons
  buttons.forEach(btn => btn.disabled = true);

  if (selected === q.a) {
    score++;
    audioCorrect.play();
    buttons.forEach(btn => {
      if (btn.textContent === selected) btn.classList.add('correct');
    });
  } else {
    audioWrong.play();
    buttons.forEach(btn => {
      if (btn.textContent === selected) btn.classList.add('wrong');
      if (btn.textContent === q.a) btn.classList.add('correct');
    });
  }

  nextBtn.style.display = 'inline-block';
}

// Next question or end game
function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions[currentLang].length) {
    showQuestion();
  } else if (unansweredQuestions.length > 0) {
    // Replay unanswered questions
    replayUnanswered();
  } else {
    endGame();
  }
}

// Timer
function startTimer() {
  let timeLeft = timePerQuestion;
  timerEl.textContent = timeLeft;
  audioTick.play();

  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearTimer();
      audioTick.pause();
      audioTick.currentTime = 0;

      // Mark unanswered question
      unansweredQuestions.push(questions[currentLang][currentIndex]);
      selectAnswer(''); // Mark as wrong/no answer

      nextBtn.style.display = 'inline-block';
    }
  }, 1000);
}

function clearTimer() {
  clearInterval(timer);
  audioTick.pause();
  audioTick.currentTime = 0;
}

// Replay unanswered questions
function replayUnanswered() {
  if (unansweredQuestions.length === 0) {
    endGame();
    return;
  }
  questions[currentLang] = unansweredQuestions;
  unansweredQuestions = [];
  currentIndex = 0;
  showQuestion();
}

// End game and show score
function endGame() {
  questionEl.textContent = currentLang === 'en' ? 
    `Game Over! Your score: ${score} / ${questions[currentLang].length} (${Math.round((score / questions[currentLang].length) * 100)}%)` :
    `انتهت اللعبة! نتيجتك: ${score} من ${questions[currentLang].length} (${Math.round((score / questions[currentLang].length) * 100)}%)`;

  optionsEl.innerHTML = '';
  nextBtn.style.display = 'none';
  timerEl.textContent = '';
  scoreEl.textContent = '';
}

// Switch language
langBtn.onclick = () => {
  currentLang = currentLang === 'en' ? 'ar' : 'en';

  // Adjust direction and font in index.html accordingly
  document.documentElement.lang = currentLang;
  if (currentLang === 'ar') {
    document.documentElement.dir = 'rtl';
    document.body.style.fontFamily = "'Cairo', sans-serif";
  } else {
    document.documentElement.dir = 'ltr';
    document.body.style.fontFamily = "'Poppins', sans-serif";
  }

  initGame();
};

nextBtn.onclick = nextQuestion;

// Start game on load
window.onload = () => {
  initGame();
};

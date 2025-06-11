let questions = {
  en: [
    { question: "What does 'crypto' stand for?", options: ["Cryptocurrency", "Cryptography", "Cryptoanalysis", "Crystal"], answer: "Cryptocurrency" },
    { question: "Which is the first cryptocurrency?", options: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin"], answer: "Bitcoin" },
    { question: "What is a blockchain?", options: ["A type of coin", "A digital wallet", "A distributed ledger", "A mining software"], answer: "A distributed ledger" },
    { question: "What is mining in crypto?", options: ["Finding lost coins", "Buying crypto", "Solving complex math problems", "Selling tokens"], answer: "Solving complex math problems" },
    { question: "What is the native token of Ethereum?", options: ["Ether", "Bitcoin", "Litecoin", "XRP"], answer: "Ether" },
    { question: "What is the purpose of a crypto wallet?", options: ["To earn interest", "To store crypto", "To destroy coins", "To farm tokens"], answer: "To store crypto" },
    { question: "What is a public key?", options: ["Your password", "A decryption tool", "An address for receiving crypto", "A type of token"], answer: "An address for receiving crypto" },
    { question: "What does DeFi stand for?", options: ["Deep Finance", "Digital Finance", "Decentralized Finance", "Defended Finance"], answer: "Decentralized Finance" },
    { question: "What is a stablecoin?", options: ["A coin with changing value", "A coin tied to a stable asset", "A coin used for trading", "A mining software"], answer: "A coin tied to a stable asset" },
    { question: "Who created Bitcoin?", options: ["Elon Musk", "Satoshi Nakamoto", "Vitalik Buterin", "Bill Gates"], answer: "Satoshi Nakamoto" },
    // // Continue adding to questions.en array:
{
  q: "What is the purpose of a crypto wallet?",
  a: "Store and manage private keys",
  options: ["Store and manage private keys", "Mine cryptocurrencies", "Print crypto", "Verify blocks"]
},
{
  q: "Which consensus algorithm is used by Bitcoin?",
  a: "Proof of Work",
  options: ["Proof of Work", "Proof of Stake", "Delegated Proof of Stake", "Proof of Authority"]
},
{
  q: "What is Ethereum primarily used for?",
  a: "Smart contracts and decentralized apps",
  options: ["Smart contracts and decentralized apps", "Centralized banking", "Data storage only", "Gaming only"]
},
{
  q: "What is the function of a node in blockchain?",
  a: "To validate and relay transactions",
  options: ["To validate and relay transactions", "To steal data", "To compress files", "To block transactions"]
},
{
  q: "What does DeFi stand for?",
  a: "Decentralized Finance",
  options: ["Decentralized Finance", "Defined Funds", "Digital Federation", "Default Finance"]
},
{
  q: "Which of these is a stablecoin?",
  a: "USDT",
  options: ["USDT", "ETH", "BTC", "XRP"]
},
{
  q: "What happens in a 51% attack?",
  a: "A group gains control of blockchain",
  options: ["A group gains control of blockchain", "Government bans crypto", "Prices crash", "A hard fork is created"]
},
{
  q: "What is gas in Ethereum?",
  a: "Fee for executing transactions",
  options: ["Fee for executing transactions", "Actual fuel", "Mining software", "Smart contract language"]
},
{
  q: "What is halving in Bitcoin?",
  a: "Reduction of mining reward by half",
  options: ["Reduction of mining reward by half", "Doubling supply", "Coin burning", "Forking"]
},
{
  q: "Which crypto is known for privacy?",
  a: "Monero",
  options: ["Monero", "Litecoin", "Ripple", "Dogecoin"]
},
// Add more until you reach 50 total in questions.enAdd 40 more questions following the same format...
  ],
  ar: [
    { question: "ما هو المقصود بكلمة كريبتو؟", options: ["عملة رقمية", "تشويش بيانات", "تحليل مشفر", "كريستال"], answer: "عملة رقمية" },
    { question: "ما أول عملة مشفرة تم إنشاؤها؟", options: ["بيتكوين", "إيثيريوم", "لايتكوين", "دوجكوين"], answer: "بيتكوين" },
    { question: "ما هو البلوكشين؟", options: ["نوع من العملات", "محفظة رقمية", "دفتر أستاذ موزع", "برنامج تعدين"], answer: "دفتر أستاذ موزع" },
    { question: "ما هو التعدين في العملات الرقمية؟", options: ["البحث عن عملات ضائعة", "شراء العملات", "حل مسائل رياضية معقدة", "بيع التوكنز"], answer: "حل مسائل رياضية معقدة" },
    { question: "ما هو رمز إيثيريوم الأصلي؟", options: ["إيثر", "بيتكوين", "لايتكوين", "XRP"], answer: "إيثر" },
    { question: "ما فائدة المحفظة الرقمية؟", options: ["لكسب الفائدة", "لتخزين العملات", "لتدمير العملات", "لزراعة التوكنز"], answer: "لتخزين العملات" },
    { question: "ما هو المفتاح العام؟", options: ["كلمة السر", "أداة لفك التشفير", "عنوان لاستقبال العملات", "نوع من التوكنز"], answer: "عنوان لاستقبال العملات" },
    { question: "ما معنى DeFi؟", options: ["تمويل عميق", "تمويل رقمي", "تمويل لامركزي", "تمويل محمي"], answer: "تمويل لامركزي" },
    { question: "ما هو الستيبلكوين؟", options: ["عملة تتغير قيمتها", "عملة مربوطة بأصل ثابت", "عملة تستخدم للتداول", "برنامج تعدين"], answer: "عملة مربوطة بأصل ثابت" },
    { question: "من هو مخترع البيتكوين؟", options: ["إيلون ماسك", "ساتوشي ناكاموتو", "فيتاليك بوتيرين", "بيل غيتس"], answer: "ساتوشي ناكاموتو" },
    // Add 40 more questions following the same format...
  ]// Continue adding to questions.ar array:
{
  q: "ما هو الغرض من المحفظة الرقمية؟",
  a: "تخزين وإدارة المفاتيح الخاصة",
  options: ["تخزين وإدارة المفاتيح الخاصة", "استخراج العملات", "طباعة العملات الرقمية", "منع المعاملات"]
},
{
  q: "ما هو خوارزمية الإجماع في بيتكوين؟",
  a: "إثبات العمل",
  options: ["إثبات العمل", "إثبات الحصة", "إثبات السلطة", "إثبات التخزين"]
},
{
  q: "ما الاستخدام الأساسي لإيثيريوم؟",
  a: "العقود الذكية والتطبيقات اللامركزية",
  options: ["العقود الذكية والتطبيقات اللامركزية", "البنوك المركزية", "تخزين البيانات", "الألعاب فقط"]
},
{
  q: "ما هو دور العقدة في البلوكشين؟",
  a: "التحقق ونقل المعاملات",
  options: ["التحقق ونقل المعاملات", "اختراق البيانات", "ضغط الملفات", "توليد العملات"]
},
{
  q: "ماذا تعني DeFi؟",
  a: "التمويل اللامركزي",
  options: ["التمويل اللامركزي", "الصناديق المعرفة", "الاتحاد الرقمي", "التمويل الافتراضي"]
},
{
  q: "أي من هذه العملات تعتبر عملة مستقرة؟",
  a: "USDT",
  options: ["USDT", "ETH", "BTC", "XRP"]
},
{
  q: "ماذا يحدث في هجوم 51٪؟",
  a: "سيطرة مجموعة على البلوكشين",
  options: ["سيطرة مجموعة على البلوكشين", "منع حكومي للعملات", "انهيار الأسعار", "إنشاء انقسام شبكي"]
},
{
  q: "ما هو الغاز في شبكة الإيثيريوم؟",
  a: "رسوم تنفيذ المعاملات",
  options: ["رسوم تنفيذ المعاملات", "وقود فعلي", "برنامج تعدين", "لغة العقود الذكية"]
},
{
  q: "ما هو المقصود بالتنصيف في بيتكوين؟",
  a: "تقليل مكافأة التعدين إلى النصف",
  options: ["تقليل مكافأة التعدين إلى النصف", "مضاعفة المعروض", "حرق العملات", "الانقسام"]
},
{
  q: "أي عملة تشتهر بالخصوصية؟",
  a: "مونيرو",
  options: ["مونيرو", "لايتكوين", "ريبل", "دوجكوين"]
},
// أضف المزيد حتى تكتمل 50 سؤالًا في questions.ar
};

let currentLang = 'en';
let currentIndex = 0;
let unanswered = [];
let timer;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const timerDisplay = document.getElementById("timer");
const resultText = document.getElementById("result-text");
const unansweredList = document.getElementById("unanswered-list");
const gameContainer = document.getElementById("game-container");
const resultScreen = document.getElementById("result-screen");
const startScreen = document.getElementById("start-screen");

const bgMusic = document.getElementById("bg-music");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");
const tickSound = document.getElementById("tick-sound");

document.getElementById("start-button").onclick = () => {
  startScreen.style.display = "none";
  gameContainer.style.display = "block";
  bgMusic.volume = 0.3;
  bgMusic.play();
  showQuestion();
};

function setLanguage(lang) {
  currentLang = lang;
  document.body.classList.toggle("rtl", lang === "ar");
}

function showQuestion() {
  if (currentIndex >= questions[currentLang].length) {
    return showResults();
  }

  const q = questions[currentLang][currentIndex];
  questionText.textContent = q.question;
  optionsContainer.innerHTML = "";

  const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);

  shuffledOptions.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "option-button";
    btn.textContent = option;
    btn.onclick = () => selectAnswer(option);
    optionsContainer.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  let timeLeft = 10;
  timerDisplay.textContent = timeLeft + "s";
  tickSound.play();

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft + "s";
    if (timeLeft <= 0) {
      clearInterval(timer);
      unanswered.push(questions[currentLang][currentIndex]);
      currentIndex++;
      showQuestion();
    }
  }, 1000);
}

function selectAnswer(selected) {
  clearInterval(timer);
  const correct = questions[currentLang][currentIndex].answer;
  if (selected === correct) {
    correctSound.play();
    score++;
  } else {
    wrongSound.play();
  }
  currentIndex++;
  setTimeout(showQuestion, 500);
}

function showResults() {
  gameContainer.style.display = "none";
  resultScreen.style.display = "block";
  bgMusic.pause();
  const total = questions[currentLang].length;
  const percent = Math.round((score / total) * 100);
  resultText.textContent =
    (currentLang === "en" ? "Your score: " : "نتيجتك: ") +
    `${score}/${total} (${percent}%)`;

  if (unanswered.length > 0) {
    const list = document.createElement("ul");
    unanswered.forEach((q) => {
      const item = document.createElement("li");
      item.textContent = q.question;
      list.appendChild(item);
    });
    unansweredList.appendChild(list);
  }
}

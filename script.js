// ----- الأسئلة بالإنجليزي والعربي (50 سؤال لكل لغة) -----
// ترتيب: 20 سهل، 15 متوسط، 15 صعب

const questions = {
  en: [
    // 20 Easy
    { q: "What does 'blockchain' refer to?", a: "A distributed ledger technology", options: ["A distributed ledger technology", "A type of cryptocurrency", "A data compression method", "A malware detection tool"] },
    { q: "What is Bitcoin?", a: "A cryptocurrency", options: ["A cryptocurrency", "A social media platform", "A type of software", "A government agency"] },
    { q: "What is a wallet in crypto?", a: "A digital tool to store cryptocurrencies", options: ["A digital tool to store cryptocurrencies", "A physical wallet for cash", "An online bank account", "A data storage device"] },
    { q: "What is Ethereum primarily known for?", a: "Smart contracts", options: ["Smart contracts", "Digital art", "Mining hardware", "A cryptocurrency exchange"] },
    { q: "What symbol represents Bitcoin?", a: "₿", options: ["₿", "$", "€", "¥"] },
    { q: "What is a token in crypto?", a: "A digital asset", options: ["A digital asset", "A type of malware", "A government bond", "A hardware device"] },
    { q: "What is 'mining' in crypto?", a: "Validating transactions to earn coins", options: ["Validating transactions to earn coins", "Stealing coins", "Buying and selling coins", "Creating wallets"] },
    { q: "Which currency is often called digital gold?", a: "Bitcoin", options: ["Bitcoin", "Ethereum", "Dogecoin", "Litecoin"] },
    { q: "What does NFT stand for?", a: "Non-Fungible Token", options: ["Non-Fungible Token", "New Financial Transaction", "Network File Transfer", "National Fund Trust"] },
    { q: "What is DeFi?", a: "Decentralized Finance", options: ["Decentralized Finance", "Digital Finance", "Default Finance", "Design Finance"] },
    { q: "What does 'staking' mean?", a: "Locking coins to support the network", options: ["Locking coins to support the network", "Spending coins quickly", "Selling coins on exchange", "Buying new coins"] },
    { q: "Which is a stablecoin?", a: "Tether (USDT)", options: ["Tether (USDT)", "Bitcoin", "Ethereum", "Dogecoin"] },
    { q: "What is a crypto exchange?", a: "A platform to trade cryptocurrencies", options: ["A platform to trade cryptocurrencies", "A bank", "A wallet provider", "A mining tool"] },
    { q: "What is a private key?", a: "A secret code to access crypto", options: ["A secret code to access crypto", "A public address", "A password for email", "A type of cryptocurrency"] },
    { q: "Which crypto uses 'proof of stake'?", a: "Cardano", options: ["Cardano", "Bitcoin", "Ethereum 1.0", "Litecoin"] },
    { q: "What is the smallest Bitcoin unit called?", a: "Satoshi", options: ["Satoshi", "Gwei", "Wei", "Ether"] },
    { q: "What is a DAO?", a: "Decentralized Autonomous Organization", options: ["Decentralized Autonomous Organization", "Digital Asset Owner", "Data Access Operator", "Direct Asset Offering"] },
    { q: "Which coin is known for memes?", a: "Dogecoin", options: ["Dogecoin", "Bitcoin", "Ethereum", "Ripple"] },
    { q: "What does 'HODL' mean?", a: "Hold On for Dear Life", options: ["Hold On for Dear Life", "Sell immediately", "Trade daily", "Buy and forget"] },
    { q: "Which is the first cryptocurrency?", a: "Bitcoin", options: ["Bitcoin", "Ethereum", "Litecoin", "Ripple"] },

    // 15 Medium
    { q: "What is a 'smart contract'?", a: "Self-executing contract with code", options: ["Self-executing contract with code", "Paper contract", "Digital currency", "Mining algorithm"] },
    { q: "What blockchain does Ethereum use?", a: "Ethereum blockchain", options: ["Ethereum blockchain", "Bitcoin blockchain", "Ripple network", "Cardano blockchain"] },
    { q: "What is gas in Ethereum?", a: "Fee for transaction execution", options: ["Fee for transaction execution", "Cryptocurrency name", "Mining reward", "Storage unit"] },
    { q: "What is a 'hard fork'?", a: "Permanent blockchain split", options: ["Permanent blockchain split", "Temporary upgrade", "Mining method", "Wallet feature"] },
    { q: "What is a 'seed phrase'?", a: "Backup for wallet recovery", options: ["Backup for wallet recovery", "Password for exchange", "A new cryptocurrency", "A type of malware"] },
    { q: "Which network uses proof of work?", a: "Bitcoin", options: ["Bitcoin", "Cardano", "Polkadot", "Ripple"] },
    { q: "What does 'liquidity' mean in DeFi?", a: "Availability of assets for trading", options: ["Availability of assets for trading", "Amount of coins mined", "Wallet size", "Mining speed"] },
    { q: "What is a 'block reward'?", a: "Coins given to miners", options: ["Coins given to miners", "Fee for transactions", "Penalty for bad miners", "Token sale"] },
    { q: "What is 'sharding' in blockchain?", a: "Partitioning database to improve speed", options: ["Partitioning database to improve speed", "Encrypting data", "Mining method", "Network attack"] },
    { q: "What is an 'oracle' in crypto?", a: "Service providing external data", options: ["Service providing external data", "A type of coin", "Wallet software", "Mining hardware"] },
    { q: "What is 'Layer 2' solution?", a: "Scaling solution above main chain", options: ["Scaling solution above main chain", "New coin launch", "Exchange platform", "Smart contract"] },
    { q: "What does 'staking reward' mean?", a: "Earnings from locking coins", options: ["Earnings from locking coins", "Mining fee", "Exchange profit", "Token price increase"] },
    { q: "What is 'tokenomics'?", a: "Economics of token supply and demand", options: ["Economics of token supply and demand", "Marketing strategy", "Mining hardware", "Wallet security"] },
    { q: "What is a 'whitepaper'?", a: "Project description document", options: ["Project description document", "Financial statement", "Legal contract", "Marketing flyer"] },
    { q: "What does 'airdrops' mean?", a: "Free token distribution", options: ["Free token distribution", "Token burning", "Mining reward", "Exchange fee"] },

    // 15 Hard
    { q: "What consensus algorithm does Algorand use?", a: "Pure Proof of Stake", options: ["Pure Proof of Stake", "Proof of Work", "Delegated Proof of Stake", "Proof of Authority"] },
    { q: "What is 'zk-SNARKs' used for?", a: "Privacy-preserving proofs", options: ["Privacy-preserving proofs", "Transaction speed", "Wallet encryption", "Token issuance"] },
    { q: "What is 'impermanent loss' in liquidity pools?", a: "Loss from price divergence", options: ["Loss from price divergence", "Permanent wallet loss", "Exchange fee", "Mining penalty"] },
    { q: "What is a 'Merkle tree'?", a: "Data structure for verification", options: ["Data structure for verification", "Type of blockchain", "Mining device", "Wallet feature"] },
    { q: "Which language is used for Ethereum smart contracts?", a: "Solidity", options: ["Solidity", "Python", "Java", "C++"] },
    { q: "What is 'gas limit'?", a: "Max gas a transaction can use", options: ["Max gas a transaction can use", "Minimum coin to buy", "Wallet balance", "Mining speed"] },
    { q: "What is a 'nonce' in blockchain?", a: "Number used once in mining", options: ["Number used once in mining", "Wallet address", "Token symbol", "Smart contract"] },
    { q: "What does 'token burn' mean?", a: "Permanent removal of tokens", options: ["Permanent removal of tokens", "Buying tokens", "Staking tokens", "Selling tokens"] },
    { q: "What is 'yield farming'?", a: "Earning interest by providing liquidity", options: ["Earning interest by providing liquidity", "Token mining", "Token trading", "Wallet backup"] },
    { q: "What is a 'gas price'?", a: "Fee per unit gas in Ethereum", options: ["Fee per unit gas in Ethereum", "Price of token", "Exchange fee", "Mining reward"] },
    { q: "What is 'cross-chain'?", a: "Interoperability between blockchains", options: ["Interoperability between blockchains", "New token type", "Exchange platform", "Mining method"] },
    { q: "What is the purpose of 'DAO'?", a: "Decentralized organization management", options: ["Decentralized organization management", "Centralized bank", "Token sale", "Wallet security"] },
    { q: "What is 'Flash Loan'?", a: "Unsecured loan paid back instantly", options: ["Unsecured loan paid back instantly", "Long term loan", "Staking loan", "Mining reward"] },
    { q: "What is a 'cold wallet'?", a: "Offline crypto storage", options: ["Offline crypto storage", "Online exchange", "Mobile wallet", "Mining rig"] },
    { q: "What is a 'smart contract audit'?", a: "Security review of contracts", options: ["Security review of contracts", "New contract creation", "Token launch", "Wallet setup"] },
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
    { q: "ما هو 'البلوك التحقق'؟", a: "تأكيد صحة الكتلة", options: ["تأكيد صحة الكتلة", "نوع من العملات الرقمية", "محفظة ساخنة", "رمز أمني"] },
    { q: "ما هو 'الإيثريوم 2.0'؟", a: "ترقية الشبكة لإثبات الحصة", options: ["ترقية الشبكة لإثبات الحصة", "عملة جديدة", "منافس لبيتكوين", "محفظة إلكترونية"] },
    { q: "ما هو 'السلسلة الجانبية'؟", a: "بلوكشين مواز لتحسين الأداء", options: ["بلوكشين مواز لتحسين الأداء", "محفظة رقمية", "طريقة تعدين", "رمز غير قابل للاستبدال"] },
    { q: "ما هو 'تجزئة البيانات'؟", a: "تقسيم البيانات عبر الشبكة", options: ["تقسيم البيانات عبر الشبكة", "تشفير المفتاح", "محفظة باردة", "منصة تبادل"] },
    { q: "ما هو 'التوقيع الرقمي'؟", a: "طريقة تحقق من المعاملات", options: ["طريقة تحقق من المعاملات", "أداة تعدين", "محفظة إلكترونية", "خدمة تبادل"] },
    { q: "ما هو 'الأوراكل الموثوق'؟", a: "مصدر بيانات خارجي موثوق", options: ["مصدر بيانات خارجي موثوق", "رمز أمني", "محفظة ساخنة", "بلوكشين خاص"] },
    { q: "ما هو 'تعدين إثبات الحصة'؟", a: "طريقة التعدين باستخدام الحصة", options: ["طريقة التعدين باستخدام الحصة", "تعدين إثبات العمل", "تعدين بالبطاقات الرسومية", "تعدين بالمعالجات"] },
    { q: "ما هو 'هجوم 51%'؟", a: "السيطرة على أكثر من نصف الشبكة", options: ["السيطرة على أكثر من نصف الشبكة", "سرقة العملات", "تعطل الشبكة", "خداع المستخدمين"] },
    { q: "ما هو 'العقود القابلة للترقية'؟", a: "عقود يمكن تعديلها بعد النشر", options: ["عقود يمكن تعديلها بعد النشر", "عقود جديدة", "رموز غير قابلة للاستبدال", "تحديثات المحفظة"] },
    { q: "ما هو 'شبكة الرقيق'؟", a: "شبكة اختبار لإيثريوم", options: ["شبكة اختبار لإيثريوم", "شبكة تبادل جديدة", "محفظة باردة", "أداة تعدين"] },
    { q: "ما هو 'مجمع السيولة'؟", a: "تجميع الأصول للتداول", options: ["تجميع الأصول للتداول", "محفظة رقمية", "بلوكشين خاص", "عقد ذكي"] },
    { q: "ما هو 'الأمان الطبقي'؟", a: "حماية متعددة الطبقات للشبكة", options: ["حماية متعددة الطبقات للشبكة", "هجوم إلكتروني", "محفظة إلكترونية", "تشفير مفتاح"] },
    { q: "ما هو 'الرنينات' في الكريبتو؟", a: "أدوات تجميع بيانات السوق", options: ["أدوات تجميع بيانات السوق", "محفظة ساخنة", "تعدين ذكي", "تبادل فوري"] },
    { q: "ما هو 'محفظة متعددة التوقيعات'؟", a: "محفظة تتطلب عدة توقيعات", options: ["محفظة تتطلب عدة توقيعات", "محفظة فردية", "محفظة باردة", "محفظة ساخنة"] },
    { q: "ما هو 'المكافأة المزدوجة'؟", a: "مكافأة لتعدين عملتين", options: ["مكافأة لتعدين عملتين", "مكافأة لحفظ العملات", "مكافأة التداول", "مكافأة الإيداع"] },
  ]
}

ها هي قائمة كاملة من 50 سؤالًا مع خيارات وأجوبة لكل من اللغتين الإنجليزية والعربية، موزعة حسب الصعوبة (سهل، متوسط، صعب)، جاهزة للاستخدام في لعبتك:

---

### English Questions (50 total)

**Easy (20):**

1. What is blockchain?  
a) Distributed ledger technology  
b) Type of cryptocurrency  
c) Data compression method  
d) Malware detection tool  
Answer: a

2. What is Bitcoin?  
a) A cryptocurrency  
b) Social media platform  
c) Software type  
d) Government agency  
Answer: a

3. What is a crypto wallet?  
a) Digital tool to store coins  
b) Cash wallet  
c) Online bank account  
d) Data storage device  
Answer: a

4. What is Ethereum known for?  
a) Smart contracts  
b) Digital art  
c) Mining equipment  
d) Exchange platform  
Answer: a

5. What is Bitcoin's symbol?  
a) ₿  
b) $  
c) €  
d) ¥  
Answer: a

6. What is a token?  
a) Digital asset  
b) Malware type  
c) Government bond  
d) Physical device  
Answer: a

7. What does mining mean in crypto?  
a) Verifying transactions to earn coins  
b) Stealing coins  
c) Buying and selling coins  
d) Creating wallets  
Answer: a

8. Which coin is called digital gold?  
a) Bitcoin  
b) Ethereum  
c) Dogecoin  
d) Litecoin  
Answer: a

9. What does NFT mean?  
a) Non-fungible token  
b) New financial transaction  
c) Network file transfer  
d) National funding tool  
Answer: a

10. What is DeFi?  
a) Decentralized finance  
b) Digital finance  
c) Virtual finance  
d) Finance design  
Answer: a

11. What is staking?  
a) Locking coins to support the network  
b) Spending coins quickly  
c) Selling coins on exchange  
d) Buying new coins  
Answer: a

12. Which coin is stable?  
a) Tether (USDT)  
b) Bitcoin  
c) Ethereum  
d) Dogecoin  
Answer: a

13. What is a crypto exchange?  
a) Platform to trade crypto coins  
b) Bank  
c) Wallet provider  
d) Mining tool  
Answer: a

14. What is a private key?  
a) Secret code to access coins  
b) Public address  
c) Email password  
d) Type of crypto coin  
Answer: a

15. Which coin uses Proof of Stake?  
a) Cardano  
b) Bitcoin  
c) Ethereum 1.0  
d) Litecoin  
Answer: a

16. What is the smallest unit of Bitcoin?  
a) Satoshi  
b) Joy  
c) Y  
d) Ether  
Answer: a

17. What is DAO?  
a) Decentralized autonomous organization  
b) Digital asset owner  
c) Data operator  
d) Asset offering  
Answer: a

18. Which coin is known as a meme?  
a) Dogecoin  
b) Bitcoin  
c) Ethereum  
d) Ripple  
Answer: a

19. What does HODL mean?  
a) Holding coins for a long time  
b) Selling immediately  
c) Day trading  
d) Buy and forget  
Answer: a

20. What was the first cryptocurrency?  
a) Bitcoin  
b) Ethereum  
c) Litecoin  
d) Ripple  
Answer: a

---

**Medium (15):**

21. What is a smart contract?  
a) Self-executing contract with code  
b) Paper contract  
c) Cryptocurrency  
d) Mining algorithm  
Answer: a

22. Which blockchain does Ethereum use?  
a) Ethereum blockchain  
b) Bitcoin blockchain  
c) Ripple network  
d) Cardano blockchain  
Answer: a

23. What is gas in Ethereum?  
a) Transaction execution fee  
b) Coin name  
c) Mining reward  
d) Storage unit  
Answer: a

24. What is a hard fork?  
a) Permanent blockchain split  
b) Temporary upgrade  
c) Mining method  
d) Wallet feature  
Answer: a

25. What is a recovery phrase?  
a) Backup to restore wallet  
b) Exchange password  
c) New coin  
d) Malware type  
Answer: a

26. Which network uses Proof of Work?  
a) Bitcoin  
b) Cardano  
c) Polkadot  
d) Ripple  
Answer: a

27. What does liquidity mean in DeFi?  
a) Availability of assets for trading  
b) Amount of mined coins  
c) Wallet size  
d) Mining speed  
Answer: a

28. What is block reward?  
a) Coins given to miners  
b) Transaction fees  
c) Penalty for bad miners  
d) Token sale  
Answer: a

29. What is sharding?  
a) Database partitioning to improve speed  
b) Data encryption  
c) Mining method  
d) Network attack  
Answer: a

30. What is an oracle in crypto?  
a) Service providing external data  
b) Coin type  
c) Wallet software  
d) Mining equipment  
Answer: a

31. What is a Layer 2 solution?  
a) Off-chain scaling solution  
b) New coin launch  
c) Exchange platform  
d) Smart contract  
Answer: a

32. What does staking reward mean?  
a) Profit from locking coins  
b) Mining fees  
c) Exchange profits  
d) Token price increase  
Answer: a

33. What is tokenomics?  
a) Token supply and demand economics  
b) Marketing strategy  
c) Mining equipment  
d) Wallet security  
Answer: a

34. What is a whitepaper?  
a) Crypto project document  
b) Digital wallet  
c) Trading app  
d) Website  
Answer: a

35. What is decentralization?  
a) No central authority  
b) Centralized coin  
c) Exchange platform  
d) Banking system  
Answer: a

---

**Hard (15):**

36. What is block validation?  
a) Confirming block validity  
b) Crypto type  
c) Hot wallet  
d) Security token  
Answer: a

37. What is Ethereum 2.0?  
a) Network upgrade for Proof of Stake  
b) New coin  
c) Bitcoin competitor  
d) Digital wallet  
Answer: a

38. What is a sidechain?  
a) Parallel blockchain to improve performance  
b) Digital wallet  
c) Mining method  
d) NFT  
Answer: a

39. What is data sharding?  
a) Data partitioning across the network  
b) Key encryption  
c) Cold wallet  
d) Exchange platform  
Answer: a

40. What is a digital signature?  
a) Transaction verification method  
b) Mining tool  
c) Digital wallet  
d) Exchange service  
Answer: a

41. What is a trusted oracle?  
a) Reliable external data source  
b) Security token  
c) Hot wallet  
d) Private blockchain  
Answer: a

42. What is Proof of Stake mining?  
a) Mining via staking coins  
b) Proof of Work mining  
c) GPU mining  
d) CPU mining  
Answer: a

43. What is a 51% attack?  
a) Controlling over half the network  
b) Coin theft  
c) Network failure  
d) User deception  
Answer: a

44. What are upgradable contracts?  
a) Contracts modifiable after deployment  
b) New contracts  
c) NFTs  
d) Wallet updates  
Answer: a

45. What is a testnet?  
a) Ethereum test network  
b) New exchange network  
c) Cold wallet  
d) Mining tool  
Answer: a

46. What is a liquidity pool?  
a) Aggregated assets for trading  
b) Digital wallet  
c) Private blockchain  
d) Smart contract  
Answer: a

47. What is layered security?  
a) Multi-layer network protection  
b) Cyber attack  
c) Digital wallet  
d) Key encryption  
Answer: a

48. What are crypto aggregators?  
a) Market data aggregation tools  
b) Hot wallets  
c) Smart mining  
d) Instant exchanges  
Answer: a

49. What is a multi-signature wallet?  
a) Wallet requiring multiple signatures  
b) Single signature wallet  
c) Cold wallet  
d) Hot wallet  
Answer: a

50. What is dual reward?  
a) Reward for mining two coins  
b) Reward for staking  
c) Trading bonus  
d) Deposit bonus  
Answer: a

---

### Arabic Questions (50 total)

**سهل (20):**

1. ماذا يعني 'البلوكشين'؟  
أ) تكنولوجيا سجل موزع  
ب) نوع من العملات الرقمية  
ج) طريقة ضغط بيانات  
د) أداة كشف البرمجيات الخبيثة  
الإجابة: أ

2. ما هو بيتكوين؟  
أ) عملة رقمية  
ب) منصة تواصل اجتماعي  
ج) نوع من البرمجيات  
د) وكالة حكومية  
الإجابة: أ

3. ما هي المحفظة في الكريبتو؟  
أ) أداة رقمية لتخزين العملات  
ب) محفظة نقدية  
ج) حساب بنكي إلكتروني  
د) جهاز تخزين بيانات  
الإجابة: أ

4. ما هو إيثريوم مشهور به؟  
أ) العقود الذكية  
ب) الفن الرقمي  
ج) معدات التعدين  
د) منصة تبادل  
الإجابة: أ

5. ما هو رمز بيتكوين؟  
أ) ₿  
ب) $  
ج) €  
د) ¥  
الإجابة: أ

6. ما هو التوكن؟  
أ) أصل رقمي  
ب) نوع من البرمجيات الخبيثة  
ج) سند حكومي  
د) جهاز مادي  
الإجابة: أ

7. ماذا يعني التعدين في الكريبتو؟  
أ) التحقق من المعاملات لكسب العملات  
ب) سرقة العملات  
ج) شراء وبيع العملات  
د) إنشاء محافظ  
الإجابة: أ

8. أي عملة تسمى الذهب الرقمي؟  
أ) بيتكوين  
ب) إيثريوم  
ج) دوجكوين  
د) لايتكوين  
الإجابة: أ

9. ما معنى NFT؟  
أ) رمز غير قابل للاستبدال  
ب) معاملة مالية جديدة  
ج) نقل ملفات الشبكة  
د) صندوق تمويل وطني  
الإجابة: أ

10. ما هو DeFi؟  
أ) التمويل اللامركزي  
ب) التمويل الرقمي  
ج) التمويل الافتراضي  
د) تصميم التمويل  
الإجابة: أ

11. ماذا يعني الستاكينج؟  
أ) قفل العملات لدعم الشبكة  
ب) إنفاق العملات بسرعة  
ج) بيع العملات في البورصة  
د) شراء عملات جديدة  
الإجابة: أ

12. أي من العملات مستقرة؟  
أ) تيثر (USDT)  
ب) بيتكوين  
ج) إيثريوم  
د) دوجكوين  
الإجابة: أ

13. ما هو تبادل العملات الرقمية؟  
أ) منصة لتداول العملات الرقمية  
ب) بنك  
ج) مزود محافظ  
د) أداة تعدين  
الإجابة: أ

14. ما هو المفتاح الخاص؟  
أ) كود سري للوصول للعملات  
ب) عنوان عام  
ج) كلمة مرور بريد إلكتروني  
د) نوع من العملات الرقمية  
الإجابة: أ

15. أي عملة تستخدم إثبات الحصة؟  
أ) كاردانو  
ب) بيتكوين  
ج) إيثريوم 1.0  
د) لايتكوين  
الإجابة: أ

16. ما هو أصغر وحدة في بيتكوين؟  
أ) ساتوشي  
ب) جوي  
ج) واي  
د) إيثر  
الإجابة: أ

17. ما هو DAO؟  
أ) منظمة مستقلة لامركزية  
ب) مالك أصل رقمي  
ج) مشغل بيانات  
د) عرض أصول مباشر  
الإجابة: أ

18. أي عملة معروفة بالميمز؟  
أ) دوجكوين  
ب) بيتكوين  
ج) إيثريوم  
د) ريبل  
الإجابة: أ

19. ماذا يعني HODL؟  
أ) التمسك بالعملة لفترة طويلة  
ب) البيع فورًا  
ج) التداول اليومي  
د) الشراء ونسيان  
الإجابة: أ

20. ما هي أول عملة رقمية؟  
أ) بيتكوين  
ب) إيثريوم  
ج) لايتكوين  
د) ريبل  
الإجابة: أ

---

**متوسط (15):**

21. ما هو العقد الذكي؟  
أ) عقد ذاتي التنفيذ بالبرمجة  
ب) عقد ورقي  
ج) عملة رقمية  
د) خوارزمية تعدين  
الإجابة: أ

22. أي بلوكشين يستخدم إيثريوم؟  
أ) بلوكشين إيثريوم  
ب) بلوكشين بيتكوين  
ج) شبكة ريبل  
د) بلوكشين كاردانو  
الإجابة: أ

23. ما هو الغاز في إيثريوم؟  
أ) رسوم تنفيذ المعاملات  
ب) اسم عملة  
ج) مكافأة التعدين  
د) وحدة تخزين  
الإجابة: أ

24. ما هو الفارق الصعب (Hard Fork)؟  
أ) انقسام دائم للبلوكشين  
ب) ترقية مؤقتة  
ج) طريقة تعدين  
د) ميزة محفظة  
الإجابة: أ

25. ما هي عبارة الاسترداد؟  
أ) نسخة احتياطية لاستعادة المحفظة  
ب) كلمة مرور للتبادل  
ج) عملة جديدة  
د) نوع من البرمجيات الخبيثة  
الإجابة: أ

26. أي شبكة تستخدم إثبات العمل؟  
أ) بيتكوين  
ب) كاردانو  
ج) بولكادوت  
د) ريبل  
الإجابة: أ

27. ماذا يعني السيولة في DeFi؟  
أ) توفر الأصول للتداول  
ب) كمية العملات المُعدنة  
ج) حجم المحفظة  
د) سرعة التعدين  
الإجابة: أ

28. ما هي مكافأة الكتلة؟  
أ) عملات تعطى للمُعدنين  
ب) رسوم المعاملات  
ج) عقوبة للمُعدنين السيئين  
د) بيع التوكن  
الإجابة: أ

29. ما هو الشاردينج؟  
أ) تقسيم قاعدة البيانات لتحسين السرعة  
ب) تشفير البيانات  
ج) طريقة تعدين  
د) هجوم على الشبكة  
الإجابة: أ

30. ما هو الأوراكل في الكريبتو؟  
أ) خدمة تقدم بيانات خارجية  
ب) نوع من العملات  
ج) برنامج محفظة  
د) معدات تعدين  
الإجابة: أ

31. ما هو حل الطبقة الثانية؟  
أ) حل تحجيم فوق السلسلة الأساسية  
ب) إطلاق عملة جديدة  
ج) منصة تبادل  
د) عقد ذكي  
الإجابة: أ

32. ماذا تعني مكافأة الستاكينج؟  
أ) أرباح من قفل العملات  
ب) رسوم التعدين  
ج) أرباح التبادل  
د) ارتفاع سعر التوكن  
الإجابة: أ

33. ما هو التوكنوميكس؟  
أ) اقتصاد العرض والطلب للتوكن  
ب) استراتيجية تسويقية  
ج) معدات تعدين  
د) أمان المحفظة  
الإجابة: أ

34. ما هو الورقة البيضاء؟  
أ) وثيقة مشروع الكريبتو  
ب) محفظة رقمية  
ج) تطبيق تداول  
د) موقع ويب  
الإجابة: أ

35. ما هو اللامركزية؟  
أ) عدم وجود سلطة مركزية  
ب) عملة مركزية  
ج) منصة تبادل  
د) نظام بنكي  
الإجابة: أ

---

**صعب (15):**

36. ما هو 'البلوك التحقق'؟  
أ) تأكيد صحة الكتلة  
ب) نوع من العملات الرقمية  
ج) محفظة ساخنة  
د) رمز أمني  
الإجابة: أ

37. ما هو 'الإيثريوم 2.0'؟  
أ) ترقية الشبكة لإثبات الحصة  
ب) عملة جديدة  
ج) منافس لبيتكوين  
د) محفظة إلكترونية  
الإجابة: أ

38. ما هو 'السلسلة الجانبية'؟  
أ) بلوكشين مواز لتحسين الأداء  
ب) محفظة رقمية  
ج) طريقة تعدين  
د) رمز غير قابل للاستبدال  
الإجابة: أ

39. ما هو 'تجزئة البيانات'؟  
أ) تقسيم البيانات عبر الشبكة  
ب) تشفير المفتاح  
ج) محفظة باردة  
د) منصة تبادل  
الإجابة: أ

40. ما هو 'التوقيع الرقمي'؟  
أ) طريقة تحقق من المعاملات  
ب) أداة تعدين  
ج) محفظة إلكترونية  
د) خدمة تبادل  
الإجابة: أ

41. ما هو 'الأوراكل الموثوق'؟  
أ) مصدر بيانات خارجي موثوق  
ب) رمز أمني  
ج) محفظة ساخنة  
د) بلوكشين خاص  
الإجابة: أ

42. ما هو 'تعدين إثبات الحصة'؟  
أ) طريقة التعدين باستخدام الحصة  
ب) تعدين إثبات العمل  
ج) تعدين بالبطاقات الرسومية  
د) تعدين بالمعالجات  
الإجابة: أ

43. ما هو 'هجوم 51%'؟  
أ) السيطرة على أكثر من نصف الشبكة  
ب) سرقة العملات  
ج) تعطل الشبكة  
د) خداع المستخدمين  
الإجابة: أ

44. ما هو 'العقود القابلة للترقية'؟  
أ) عقود يمكن تعديلها بعد النشر  
ب) عقود جديدة  
ج) رموز غير قابلة للاستبدال  
د) تحديثات المحفظة  
الإجابة: أ

45. ما هو 'شبكة الرقيق'؟  
أ) شبكة اختبار لإيثريوم  
ب) شبكة تبادل جديدة  
ج) محفظة باردة  
د) أداة تعدين  
الإجابة: أ

46. ما هو 'مجمع السيولة'؟  
أ) تجميع الأصول للتداول  
ب) محفظة رقمية  
ج) بلوكشين خاص  
د) عقد ذكي  
الإجابة: أ

47. ما هو 'الأمان الطبقي'؟  
أ) حماية متعددة الطبقات للشبكة  
ب) هجوم إلكتروني  
ج) محفظة إلكترونية  
د) تشفير مفتاح  
الإجابة: أ

48. ما هو 'الرنينات' في الكريبتو؟  
أ) أدوات تجميع بيانات السوق  
ب) محفظة ساخنة  
ج) تعدين ذكي  
د) تبادل فوري  
الإجابة: أ

49. ما هو 'محفظة متعددة التوقيعات'؟  
أ) محفظة تتطلب عدة توقيعات  
ب) محفظة فردية  
ج) محفظة باردة  
د) محفظة ساخنة  
الإجابة: أ

50. ما هو 'المكافأة المزدوجة'؟  
أ) مكافأة لتعدين عملتين  
ب) مكافأة لحفظ العملات  
ج) مكافأة التداول  
د) مكافأة الإيداع  
الإجابة: أ

---

إذا تريدني أجهز لك ملف HTML جاهز مع هذه الأسئلة أو دمجها في سكربت لعبتك، فقط أخبرني!

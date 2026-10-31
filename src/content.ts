import hero2040 from './assets/hero2040.jpg';
import portraitMan from './assets/Professional Green-Backdrop Portrait.png';
import portraitWoman from './assets/portrait-woman.jpg';
import portraitElder from './assets/portrait-elder.jpg';
import rickshaw2040 from './assets/rickshaw2040.jpg';
import smartvillage from './assets/smartvillage.jpg';

export const IMG = {
  hero2040,
  portraitMan,
  portraitWoman,
  portraitElder,
  rickshaw2040,
  smartvillage,
};

/*
 * ================================================================
 * MAIN EDITABLE WEBSITE CONTENT
 * ================================================================
 * Change names, headings, descriptions, navigation and contact
 * information here. Collection data such as films, photos, websites,
 * posters and creators continues below in this same file.
 */
export const SITE = {
  brand: {
    company: 'e-Learning & Earning Ltd.',
    course: 'AI Course',
    batch: 'Second Batch',
    branch: 'Bandarban Branch',
    governmentPartner: 'যুব উন্নয়ন অধিদপ্তর',
    shortName: 'এআই কোর্স উৎসব',
  },
  announcement: 'প্রথম মাস সমাপনী ফেস্টিভ্যাল চলছে — স্মার্ট যুবাই গড়বে স্মার্ট বাংলাদেশ',
  navigation: {
    home: 'হোম',
    film: '২০৪০ ফিল্ম',
    feedbackBox: 'FeedbackBox',
    gallery: 'ক্রিয়েশন গ্যালারি',
    creators: 'ক্রিয়েটর হাব',
    feedback: 'মতামত দিন',
    family: 'ক্লাস পরিবার',
  },
  home: {
    trainingLabel: 'যুব উন্নয়ন অধিদপ্তর • বেসিক এআই ট্রেনিং • বান্দরবান',
    batchLabel: 'SECOND BATCH // MONTH-01',
    titleEnglish: 'Smart Youth, Smart Bangladesh:',
    titleBangla: 'আমাদের এআই লার্নিং ও ইনোভেশন জার্নি',
    subtitle:
      'যুব উন্নয়ন অধিদপ্তরের বেসিক এআই ট্রেনিং কোর্সের প্রথম মাসের অসাধারণ সব অর্জন এবং সৃজনশীল প্রজেক্টের প্রদর্শনী — ফিল্ম, ইনোভেশন, গ্যালারি আর ২৫ জন তরুণ ক্রিয়েটরের স্বপ্ন, এক উৎসব-পোর্টালে।',
    ctas: {
      film: 'বাংলাদেশ ২০৪০ ভিডিও দেখুন',
      feedbackBox: 'শিক্ষার্থীর ইনোভেশন: FeedbackBox',
      gallery: 'ক্রিয়েশন গ্যালারি',
    },
    studentCount: '২৫ জন শিক্ষার্থী',
    studentLine: 'একসাথে শিখছি, একসাথে গড়ছি স্মার্ট আগামী',
  },
  feedbackBoxLive: {
    /* Add a complete deployed URL here later. Empty means this portal's FeedbackBox page. */
    liveUrl: 'https://feedbackbox-bd.vercel.app',
    qrTitle: 'মোবাইলে FeedbackBox খুলুন',
    qrDescription: 'ক্যামেরা দিয়ে QR কোড স্ক্যান করুন অথবা লাইভ লিংক খুলুন।',
    openLabel: 'লাইভ লিংক খুলুন',
    copyLabel: 'লিংক কপি করুন',
    copiedLabel: 'কপি হয়েছে',
  },
  pageHeaders: {
    film: {
      kicker: 'মূল ফেস্টিভাল আকর্ষণ • গালা প্রিমিয়ার',
      titleBefore: 'বাংলাদেশ ২০৪০: ',
      highlight: 'এআই চোখে',
      titleAfter: ' আমাদের ভবিষ্যৎ',
    },
    feedbackBox: {
      kicker: 'স্টুডেন্ট ইনোভেশন স্পটলাইট • প্র্যাকটিক্যাল প্রজেক্ট',
      titleBefore: 'FeedbackBox — ',
      highlight: 'জড়তা ভাঙার',
      titleAfter: ' বাক্স',
      description:
        'কোর্সের লার্নিং থেকে অনুপ্রাণিত হয়ে একজন সাধারণ শিক্ষার্থীর হাতে তৈরি প্র্যাকটিক্যাল ইনোভেশন — অ্যানোনিমাস মতামতের নিরাপদ প্ল্যাটফর্ম।',
    },
    gallery: {
      kicker: 'মাল্টি-পেইজ ক্রিয়েশন গ্যালারি',
      titleBefore: 'থাম্বনেইলে ক্লিক করুন, ',
      highlight: 'সাব-পেইজে',
      titleAfter: ' ঘুরে আসুন',
      description:
        'ব্যাচের সকল শিক্ষার্থীর এআই ফটো, ওয়েবসাইট ও মার্কেটিং ক্রিয়েশন — তিনটি ডেডিকেটেড গ্যালারিতে সাজানো।',
    },
    photos: {
      titleBefore: 'এআই ফটো এডিটিং — ',
      highlight: 'আগে ও পরে',
      description:
        'সাধারণ, ঝাপসা বা পুরোনো ছবিকে এআই দিয়ে স্টুডিও কোয়ালিটিতে রূপান্তর। প্রতিটি ছবির স্লাইডার টেনে নিজেই পার্থক্য দেখুন।',
    },
    websites: {
      titleBefore: 'বহুবিধ ',
      highlight: 'ওয়েবসাইট',
      titleAfter: ' প্রিভিউ গ্যালারি',
      description:
        'মাত্র ১ মাসে শিক্ষার্থীদের হাতে-বানানো বেসিক ওয়েবসাইটগুলো। থাম্বনেইলে ক্লিক করলে বড় প্রিভিউ, আর সেখান থেকেই লাইভ সাইটে যাওয়ার সুবিধা।',
    },
    posters: {
      titleBefore: 'মার্কেটিং ও ',
      highlight: 'সোশ্যাল মিডিয়া',
      titleAfter: ' পোস্টার',
      description:
        'ফেসবুক পোস্টার, ইভেন্ট ব্যানার আর এআই মার্কেটিং কপির সৃজনশীল সংগ্রহ — প্রতিটি ডিজাইনে ক্লিক করলে বড় প্রিভিউ।',
    },
    creators: {
      kicker: 'স্টুডেন্ট ক্রিয়েটর শোকেস • ইউটিউব ও ফেসবুক হাব',
      titleBefore: 'ব্যাচের ',
      highlight: 'ক্রিয়েটর',
      titleAfter: ' ইকোসিস্টেম',
      description:
        'যারা এআই দিয়ে ভিডিও বানাচ্ছেন, যারা পেইজ সাজিয়ে ব্র্যান্ডিং করছেন — ব্যাচের সকল শিক্ষার্থীর ক্রিয়েটিভ ঠিকানা এক জায়গায়।',
    },
    feedback: {
      kicker: 'ভিজিটর ফিডব্যাক ও মতামত কর্নার',
      titleBefore: 'আপনার একটি মতামত, ',
      highlight: 'আমাদের এক মাইল',
      titleAfter: ' পথ',
      description:
        'বিচারক, মেন্টর এবং দর্শনার্থীদের মূল্যবান রেটিং ও কমেন্ট — এই দেয়ালেই জমা হয় আমাদের পরের মাসের অনুপ্রেরণা।',
    },
  },
  footer: {
    summary:
      'যুব উন্নয়ন অধিদপ্তরের বেসিক এআই ট্রেনিং কোর্স — প্রথম মাসের অর্জন, ইনোভেশন ও ২৫ জন ক্রিয়েটরের স্বপ্নযাত্রার ডিজিটাল প্রদর্শনী।',
    location: 'AI Course Second Batch, Bandarban Branch',
    office: 'যুব উন্নয়ন অধিদপ্তর, প্রশিক্ষণ শাখা',
    courseDuration: 'বেসিক এআই ট্রেনিং • ২ মাস মেয়াদি কোর্স',
    copyright: 'Smart Youth, Smart Bangladesh — স্মার্ট বাংলাদেশ ২০৪০-এর পথে দ্বিতীয় ব্যাচ',
  },
} as const;

/* ---------- helpers ---------- */
const BN_DIGITS = Array.from({ length: 10 }, (_, i) => String.fromCharCode(0x09e6 + i));
export const bn = (n: number | string): string =>
  String(n).replace(/\d/g, (d) => BN_DIGITS[Number(d)]);

/* ---------- festival film ---------- */
export const FILM = {
  title: 'বাংলাদেশ ২০৪০: এআই চোখে আমাদের ভবিষ্যৎ',
  duration: '০৪:০০',
  // src: 'https://videos.pexels.com/video-files/28615171/12433554_3840_2160_25fps.mp4',
  src: 'https://youtu.be/pmvJ6RMkzJQ?si=zy3IdOcug2pyKval',
  youtubeId: 'pmvJ6RMkzJQ',
  poster: 'https://i.postimg.cc/2ykr9ZPw/Bangladesh-2040-AI-era-ca-kha-bhaba-sa-yat.png',
  desc: '৪ মিনিটের সম্পূর্ণ এআই-জেনারেটেড ফিউচারিস্টিক ফিল্ম — প্রম্পট থেকে জন্ম নেওয়া ২০৪০ সালের বাংলাদেশ। স্মার্ট সিটি, স্মার্ট গ্রাম, সবুজ প্রযুক্তি আর মানুষের অদম্য স্বপ্ন — প্রতিটি ফ্রেম, ভয়েসওভার ও আবহসংগীত তৈরি হয়েছে এআই দিয়ে, মাত্র এক মাসের শেখায়।',
  scenes: [
    {
      img: hero2040,
      time: '০০:০০',
      title: 'স্মার্ট ঢাকা',
      desc: 'উড্ডয়নরত যান, মোনোরেল আর ভার্টিক্যাল গার্ডেনে ভরা ২০৪০-এর রাজধানী।',
    },
    {
      img: smartvillage,
      time: '০১:০৫',
      title: 'স্মার্ট গ্রাম',
      desc: 'ড্রোনে সেচ, হাতে হলোগ্রাম ট্যাবলেট — বদলে যাওয়া কৃষকের জীবন।',
    },
    {
      img: portraitWoman,
      time: '০২:১০',
      title: 'স্মার্ট নাগরিক',
      desc: 'এআই-চালিত শিক্ষা ও স্বাস্থ্যসেবায় আত্মবিশ্বাসী নতুন প্রজন্ম।',
    },
    {
      img: rickshaw2040,
      time: '০৩:১৫',
      title: 'শিকড় ও সংস্কৃতি',
      desc: 'প্রযুক্তির ভিড়েও উজ্জ্বল রিকশা-আর্ট — আমাদের অমলিন পরিচয়।',
    },
  ],
  pipeline: [
    {
      step: '০১',
      title: 'গল্প পরিকল্পনা ও প্রম্পট ইঞ্জিনিয়ারিং',
      desc: 'বাংলাদেশ ২০৪০-এর সম্ভাব্য ভবিষ্যৎ নিয়ে ২১টি দৃশ্যের গল্প, বাংলা ন্যারেশন এবং বিস্তারিত ইংরেজি সিনেমাটিক প্রম্পট তৈরি করা হয়েছে। পুরো ভিডিওজুড়ে একই ভিজ্যুয়াল থিম, বাস্তবসম্মত বাংলাদেশি পরিবেশ এবং সামঞ্জস্যপূর্ণ সিনেমাটিক স্টাইল বজায় রাখার পরিকল্পনা করা হয়েছে।',
      tools: ['ChatGPT', 'Google Gemini', 'Prompt Engineering'],
    },
    {
      step: '০২',
      title: 'এআই ভিডিও জেনারেশন',
      desc: 'Google Flow-এর সাহায্যে প্রতিটি দৃশ্যের জন্য সিনেমাটিক ভিডিও ক্লিপ তৈরি করা হয়েছে। নির্ধারিত থিম, রেফারেন্স ইমেজ, ক্যামেরা মুভমেন্ট, আলো এবং পরিবেশের নির্দেশনা অনুসরণ করে বাংলাদেশের ২০৪০ সালের একটি বাস্তবসম্মত ভবিষ্যৎ তুলে ধরা হয়েছে।',
      tools: ['Google Flow', 'Google Gemini', 'AI Video Generation'],
    },
    {
      step: '০৩',
      title: 'ভিজ্যুয়াল ডিজাইন ও অ্যাসেট তৈরি',
      desc: 'Canva ব্যবহার করে প্রয়োজনীয় গ্রাফিক্স, ভিজ্যুয়াল অ্যাসেট এবং ডিজাইনের উপাদান প্রস্তুত করা হয়েছে। ভিডিওর রঙ, টাইপোগ্রাফি ও সামগ্রিক উপস্থাপনায় একই থিম বজায় রেখে সব দৃশ্যকে একটি সুসংগত ভিজ্যুয়াল পরিচয়ে আনা হয়েছে।',
      tools: ['Canva', 'ChatGPT', 'Google Gemini'],
    },
    {
      step: '০৪',
      title: 'বাংলা ভয়েসওভার ও অডিও প্রস্তুতি',
      desc: 'বাংলা স্ক্রিপ্ট অনুযায়ী এআই ভয়েসওভার তৈরি করা হয়েছে। প্রতিটি দৃশ্যের সঙ্গে ন্যারেশনের সময়, উচ্চারণ ও বিরতি মিলিয়ে ভিডিওর গল্পকে আরও স্বাভাবিক, স্পষ্ট এবং আকর্ষণীয় করে তোলা হয়েছে।',
      tools: ['Cartesia AI', 'Audio Editing', 'AI Voice Generation'],
    },
    {
      step: '০৫',
      title: 'ভিডিও এডিটিং ও ফাইনাল প্রোডাকশন',
      desc: 'সব ভিডিও ক্লিপ, বাংলা ভয়েসওভার এবং প্রয়োজনীয় সাউন্ড একত্র করে CapCut-এ সম্পাদনা করা হয়েছে। দৃশ্যের ধারাবাহিকতা, কাট, কালার ব্যালান্স, অডিও সিঙ্ক এবং চূড়ান্ত ভিডিওর সামগ্রিক মান নিশ্চিত করে সম্পূর্ণ সিনেমাটিক প্রজেক্ট প্রস্তুত করা হয়েছে।',
      tools: ['CapCut', 'Canva', 'Audio Editing'],
    },
  ],
};

/* ---------- stats & ticker ---------- */
export const STATS = [
  { value: 25, suffix: '', label: 'প্রশিক্ষণার্থী ক্রিয়েটর' },
  { value: 64, suffix: '+', label: 'এআই ক্রিয়েশন' },
  { value: 32, suffix: '', label: 'লাইভ ওয়েবসাইট' },
  { value: 14, suffix: '', label: 'ইউটিউব চ্যানেল ও পেজ' },
];

export const TICKER = [
  '৪ মিনিটের এআই ফিল্ম — বাংলাদেশ ২০৪০',
  'শতভাগ অ্যানোনিমাস ইনোভেশন — FeedbackBox',
  'Before → After ফটো ম্যাজিক',
  '১২টি হাতে-বানানো লাইভ ওয়েবসাইট',
  'ইউটিউব ও ফেসবুক ক্রিয়েটর হাব',
  'প্রথম মাস সমাপনী উৎসব — দ্বিতীয় ব্যাচ',
];

/* ---------- photo gallery ---------- */
export type PhotoWork = {
  id: string;
  title: string;
  student: string;
  img: string;
  tools: string[];
  note: string;
};
export const PHOTO_WORKS: PhotoWork[] = [
  {
    id: 'p1',
    title: 'সাধারণ ছবি → স্টুডিও পোর্ট্রেট',
    student: 'রাকিব হাসান',
    img: portraitMan,
    tools: ['Remini', 'Photoshop AI'],
    note: 'মোবাইলে তোলা ঝাপসা ছবি থেকে ম্যাগাজিন-কোয়ালিটি প্রফেশনাল পোর্ট্রেট — স্কিন ডিটেইল ও লাইটিং পুনর্গঠন করেছে এআই।',
  },
  {
    id: 'p2',
    title: 'স্ন্যাপশট → প্রফেশনাল হেডশট',
    student: 'নুসরাত জাহান',
    img: portraitWoman,
    tools: ['Leonardo AI', 'Magnific'],
    note: 'সাধারণ পোজের ছবিতে এআই যোগ করেছে বিউটি-ডিশ লাইট, ব্যাকড্রপ ও কালার গ্রেড — সম্পূর্ণ স্টুডিও লুক।',
  },
  {
    id: 'p3',
    title: 'পুরোনো ছবি → HD রিস্টোরেশন',
    student: 'সাব্বির আহমেদ',
    img: portraitElder,
    tools: ['GFPGAN', 'Topaz AI'],
    note: 'দাদার ঝাপসা পুরোনো ছবির প্রতিটি বলিরেখা ও দাড়ির টেক্সচার ফিরিয়ে এনেছে ফেস রিস্টোরেশন মডেল।',
  },
  {
    id: 'p4',
    title: 'স্কেচ আইডিয়া → নিয়ন আর্টওয়ার্ক',
    student: 'ফারিয়া আক্তার',
    img: rickshaw2040,
    tools: ['Midjourney', 'Krea AI'],
    note: 'খাতার সাধারণ রিকশা-স্কেচ থেকে সাইবারপাংক রিকশা-আর্ট — বাংলাদেশি ঐতিহ্যের ফিউচারিস্টিক রূপ।',
  },
];

/* ---------- website gallery ---------- */
export type SiteWork = {
  id: string;
  title: string;
  student: string;
  category:
    | 'পোর্টফোলিও'
    | 'বিজনেস'
    | 'ব্লগ ও নিউজ'
    | 'শিক্ষা'
    | 'সোশ্যাল / নন-প্রফিট'
    | 'ই-লার্নিং'
    | 'এজুকেশন ও গেম'
    | 'সোশ্যাল / সার্ভিস'
    | 'গেম';
  desc: string;
  url: string;
  tech: string[];
  variant?:
    | 'portfolio'
    | 'restaurant'
    | 'news'
    | 'shop'
    | 'travel'
    | 'school'
    | 'blog'
    | 'business'
    | 'ecommerce'
    | 'nonprofit'
    | 'e-learning'
    | 'game';
  img?: string;
};
export const SITES: SiteWork[] = [
  {
    id: 'w1',
    title: 'আলিমামু.কম — ইকমার্স ওয়েবসাইট',
    student: 'মোঃ ফরহাদ হোসেন',
    category: 'বিজনেস',
    desc: 'বিজনেস ও ইকমার্স ওয়েবসাইট — প্রোডাক্ট ছবি এআই-এনহ্যান্সড।',
    url: 'https://alimamu.com',
    tech: ['HTML', 'CSS', 'laravel', 'ChatGPT', 'Tailwind', 'Copilot'],
    variant: 'shop',
    img: 'https://i.postimg.cc/wjRDM8ZC/Alimamu-Responsive-Ecommerce-Showcase.png',
  },
  {
    id: 'w2',
    title: 'আলো দিশা ফাউন্ডেশন — অলাভজনক অর্গানাইজেশন ল্যান্ডিং',
    student: 'মেহেদী হাসান',
    category: 'সোশ্যাল / নন-প্রফিট',
    desc: 'ফাউন্ডেশনের কাজ, স্বেচ্ছাসেবক ও ডোনেশন — মিশন-ভিত্তিক ল্যান্ডিং পেজ।',
    url: 'https://alordishafoundation.org/',
    tech: ['HTML', 'Tailwind', 'ChatGPT'],
    variant: 'nonprofit',
    img: 'https://i.postimg.cc/7LFSmVhj/alor-disa.png',
  },

  {
    id: 'w3',
    title: 'Shiko - Learn.Practice.Grow',
    student: 'NibirChakma',
    category: 'ই-লার্নিং',
    desc: 'Shiko একটি আধুনিক অনলাইন লার্নিং প্ল্যাটফর্ম, যেখানে YouTube Monetization, Automation, AI Tools ও Digital Skills শেখার মাধ্যমে নিজের দক্ষতা বাড়িয়ে গড়ে তুলতে পারবেন সম্ভাবনাময় ক্যারিয়ার। ',
    url: 'https://www.shiko.courses/',
    tech: ['HTML', 'CSS', 'Javascript'],
    variant: 'e-learning',
    img: 'https://i.postimg.cc/DfMnDMFY/shikho.jpg',
  },
  {
    id: 'w4',
    title: 'English Game for Kids',
    student: 'সালমা আক্তার',
    category: 'এজুকেশন ও গেম',
    desc: 'ছোট বন্ধুদের জন্য ইংরেজি শেখার মজার খেলার ওয়েবসাইট',
    url: 'https://english-game-kids-dyd.github.io',
    tech: ['HTML', 'CSS', 'JavaScript', 'Gemini'],
    variant: 'game',
    img: 'https://i.postimg.cc/dQrcHtHp/salma-english-shiki.png',
  },
  {
    id: 'w5',
    title: 'সাকসেস আইটি পার্ক — ১০০% অনলাইন আইটি প্রশিক্ষণে তরুণদের ক্যারিয়ার',
    student: 'মোঃ ইমরানুল হক',
    category: 'সোশ্যাল / সার্ভিস',
    desc: 'সাকসেস আইটি ইনস্টিটিউট এর কাজ, সার্ভিস ও তরুণদের কর্মসংস্থান— এআই-লিখা কপিসহ একটি পরিষ্কার মিশন-ভিত্তিক ল্যান্ডিং পেজ।',
    url: 'https://banglacodes.app/p/success-it-park-100-online-based-it-inst-wbawxfng/',
    tech: ['HTML', 'Tailwind', 'ChatGPT'],
    variant: 'e-learning',
    img: 'https://i.postimg.cc/CMGLZNgR/success-it.jpg',
  },
  {
    id: 'w6',
    title: 'Snake Game',
    student: 'রোকসানা রৌশন',
    category: 'গেম',
    desc: 'ছোট বন্ধুদের জন্য মজার খেলার ওয়েবসাইট',
    url: 'https://english-game-kids-dyd.github.io',
    tech: ['HTML', 'CSS', 'Claude'],
    variant: 'game',
    img: 'https://i.postimg.cc/cLshMcC9/snake-gme.png',
  },
  {
    id: 'w7',
    title: 'বাংলা টাইপিং প্র্যাকটিস',
    student: 'কৌশিক দাশ',
    category: 'এজুকেশন ও গেম',
    desc: 'বাংলা টাইপিং প্র্যাকটিস এর ওয়েবসাইট',
    url: 'https://kowshikdas1833.github.io/Bangla-Typing-Practice/',
    tech: ['HTML', 'CSS', 'Javascript', 'Copilot'],
    variant: 'e-learning',
  },
];

/* ---------- posters & marketing copy ---------- */
export const POSTERS = [
  {
    id: 'poster-admission',
    title: 'কোর্স ভর্তি ক্যাম্পেইন',
    student: 'তানভীর ইসলাম',
    tool: 'Ideogram + Canva',
  },
  {
    id: 'poster-feedbackbox',
    title: 'FeedbackBox প্রোমো',
    student: 'রাকিব হাসান',
    tool: 'Midjourney + Canva',
  },
  {
    id: 'poster-premiere',
    title: '২০৪০ ফিল্ম প্রিমিয়ার',
    student: 'সাব্বির আহমেদ',
    tool: 'Leonardo + Photoshop AI',
  },
  {
    id: 'poster-fair',
    title: 'ডিজিটাল মেলা অফার ব্যানার',
    student: 'নুসরাত জাহান',
    tool: 'Ideogram + Canva',
  },
  {
    id: 'poster-youth',
    title: 'যুব দিবস সোশ্যাল পোস্ট',
    student: 'ফারিয়া আক্তার',
    tool: 'Firefly + Canva',
  },
];

export const COPY_CARDS = [
  {
    id: 'c1',
    platform: 'ফেসবুক ক্যাপশন',
    title: 'এআই কোর্স ভর্তি',
    text: '🤖 ভবিষ্যৎ কি দূরে কোথাও? না — আপনার পরের স্কিলেই ভবিষ্যৎ! যুব উন্নয়ন অধিদপ্তরের বেসিক এআই কোর্সে মাত্র ১ মাসে বানান ভিডিও, ওয়েবসাইট আর ক্যারিয়ার। আসন সীমিত, স্বপ্ন নয়। #SmartYouth #DYDAI',
  },
  {
    id: 'c2',
    platform: 'প্রোডাক্ট ট্যাগলাইন',
    title: 'FeedbackBox',
    text: 'সত্যিটা বলতে ভয়? দিন, নাম ছাড়াই। FeedbackBox — ১০০% অ্যানোনিমাস মতামতের নিরাপদ বাক্স। সম্পর্ক থাকুক, জড়তা যাক। #FeedbackBox #সাহসের_মতামত',
  },
  {
    id: 'c3',
    platform: 'ইভেন্ট ইনভাইট',
    title: '২০৪০ প্রিমিয়ার',
    text: '🎬 এক মাসে শেখা এআই দিয়ে বানানো ৪ মিনিটের বাংলাদেশ! আসুন, চোখ রাখুন ২০৪০ সালের ঢাকায় — প্রিমিয়ার হচ্ছে আমাদের ফেস্টিভ্যালে। প্রবেশ সবার জন্য উন্মুক্ত। #Bangladesh2040 #AIFilm',
  },
];

/* ---------- creators hub ---------- */
export type Creator = {
  id: string;
  name: string;
  handle: string;
  niche: string;
  followers: string;
  works: string;
  color: string;
  about: string;
};
export const YT_CREATORS: Creator[] = [
  {
    id: 'y1',
    name: 'রাকিব হাসান',
    handle: 'Rakib Tech Vision',
    niche: 'এআই টিউটোরিয়াল',
    followers: '১.২ হাজার',
    works: '৮টি ভিডিও',
    color: '#f42a41',
    about: 'বাংলায় সহজ ভাষায় এআই টুল শেখানোর সাপ্তাহিক সিরিজ।',
  },
  {
    id: 'y2',
    name: 'নুসরাত জাহান',
    handle: 'Nusrat AI Studio',
    niche: 'এআই আর্ট ও ডিজাইন',
    followers: '৯৮০',
    works: '১১টি ভিডিও',
    color: '#17b36a',
    about: 'প্রম্পট থেকে পোস্টার — ডিজাইন প্রসেসের টাইমল্যাপস।',
  },
  {
    id: 'y3',
    name: 'সাব্বির আহমেদ',
    handle: 'Sabbir Future Films',
    niche: 'ফিউচারিস্টিক শর্টফিল্ম',
    followers: '২.৪ হাজার',
    works: '৫টি শর্টফিল্ম',
    color: '#f2b63c',
    about: '২০৪০ সিরিজের ট্রেইলার আর বিহাইন্ড-দ্য-সিন।',
  },
  {
    id: 'y4',
    name: 'তানভীর ইসলাম',
    handle: 'Tanvir Prompt Lab',
    niche: 'প্রম্পট ইঞ্জিনিয়ারিং',
    followers: '৭৬০',
    works: '১৪টি ভিডিও',
    color: '#38bdf8',
    about: 'একই প্রম্পটের ৫ রকম আউটপুট — তুলনামূলক পরীক্ষা।',
  },
  {
    id: 'y5',
    name: 'মেহেদী হাসান',
    handle: 'Mehedi Vlogs 2040',
    niche: 'টেক ভ্লগ',
    followers: '১.৮ হাজার',
    works: '৯টি ভ্লগ',
    color: '#a78bfa',
    about: 'কোর্সের প্রতিদিনের শেখা, ক্যামেরায় বন্দী।',
  },
  {
    id: 'y6',
    name: 'ফারিয়া আক্তার',
    handle: 'Faria Creative AI',
    niche: 'এআই স্টোরিটেলিং',
    followers: '১.১ হাজার',
    works: '৭টি গল্পভিডিও',
    color: '#fb7185',
    about: 'এআই ভয়েস ও ভিজ্যুয়ালে বাংলা রূপকথার নতুন জন্ম।',
  },
];
export const FB_CREATORS: Creator[] = [
  {
    id: 'f1',
    name: 'দ্বিতীয় ব্যাচ কমিউনিটি',
    handle: 'DYD AI Learners Second Batch',
    niche: 'লার্নিং কমিউনিটি',
    followers: '৩.২ হাজার',
    works: 'দৈনিক পোস্ট',
    color: '#1877f2',
    about: '২৫ জনের শেখা, প্রশ্ন আর জয়ের প্রতিদিনের ডায়েরি।',
  },
  {
    id: 'f2',
    name: 'নুসরাত জাহান',
    handle: 'এআই আর্ট বাংলা',
    niche: 'আর্ট ও ডিজাইন',
    followers: '২.১ হাজার',
    works: '৪৫+ আর্ট পোস্ট',
    color: '#17b36a',
    about: 'প্রতিদিন একটি করে এআই আর্টওয়ার্ক ও প্রম্পট ব্রেকডাউন।',
  },
  {
    id: 'f3',
    name: 'তানভীর ইসলাম',
    handle: 'প্রম্পট পাঠশালা',
    niche: 'প্রম্পট টিপস',
    followers: '১.৫ হাজার',
    works: '৬০+ টিপস',
    color: '#f2b63c',
    about: 'ছোট ছোট প্রম্পট ট্রিকস, বড় বড় ফলাফল।',
  },
  {
    id: 'f4',
    name: 'ফারিয়া আক্তার',
    handle: 'ডিজিটাল গল্পঘর',
    niche: 'গল্প ও কনটেন্ট',
    followers: '১.৯ হাজার',
    works: '৩০+ গল্প',
    color: '#fb7185',
    about: 'এআই-চিত্রিত বাংলা ছোটগল্প আর মিনি-কমিক।',
  },
  {
    id: 'f5',
    name: 'সাব্বির আহমেদ',
    handle: 'ফিউচার বাংলাদেশ',
    niche: 'ফিউচারিজম',
    followers: '২.৭ হাজার',
    works: '৫০+ ভিজ্যুয়াল',
    color: '#38bdf8',
    about: '২০৪০-এর বাংলাদেশ কেমন হবে — প্রতিদিন এক ঝলক।',
  },
  {
    id: 'f6',
    name: 'মেহেদী হাসান',
    handle: 'স্মার্ট ক্রিয়েটর বিডি',
    niche: 'মার্কেটিং ও ব্র্যান্ডিং',
    followers: '১.৩ হাজার',
    works: '৪০+ ক্যাম্পেইন',
    color: '#f42a41',
    about: 'এআই মার্কেটিং কপি ও পোস্টার ডিজাইনের লাইভ কেস স্টাডি।',
  },
];

/* ---------- visitor feedback ---------- */
export type FeedbackEntry = {
  id: string;
  name: string;
  role: string;
  project: string;
  rating: number;
  comment: string;
  date: string;
};
export const ROLES = ['বিচারক', 'মেন্টর', 'শিক্ষার্থী', 'দর্শনার্থী'];
export const PROJECTS = [
  'সামগ্রিক ফেস্টিভ্যাল',
  'বাংলাদেশ ২০৪০ ফিল্ম',
  'FeedbackBox',
  'ক্রিয়েশন গ্যালারি',
  'ক্রিয়েটর হাব',
];
export const RATING_LABELS = [
  '',
  'আরও ভালো হতে পারে',
  'মোটামুটি',
  'ভালো লেগেছে',
  'দারুণ!',
  'অসাধারণ!',
];

const SEED_FEEDBACK: FeedbackEntry[] = [
  {
    id: 's1',
    name: 'ড. শাহাদাত হোসেন',
    role: 'বিচারক',
    project: 'বাংলাদেশ ২০৪০ ফিল্ম',
    rating: 5,
    comment:
      'মাত্র এক মাসের প্রশিক্ষণে স্টোরিবোর্ড থেকে ফাইনাল কাট — এই মানের কাজ সত্যিই বিস্ময়কর। ২০৪০-এর ভিশনটা চোখে লেগে থাকার মতো।',
    date: '১২ ফেব্রুয়ারি, ২০২৬',
  },
  {
    id: 's2',
    name: 'তানিয়া রহমান',
    role: 'মেন্টর',
    project: 'FeedbackBox',
    rating: 5,
    comment:
      'সমস্যা চিহ্নিত করে সমাধান বানানো — এটাই তো আসল শেখা। অ্যানোনিমিটি আর সহজ ইউজার ফ্লো দারুণভাবে ভাবা হয়েছে।',
    date: '১২ ফেব্রুয়ারি, ২০২৬',
  },
  {
    id: 's3',
    name: 'সাদিয়া ইসলাম',
    role: 'দর্শনার্থী',
    project: 'ক্রিয়েশন গ্যালারি',
    rating: 4,
    comment:
      'Before-After স্লাইডারগুলো দারুণ মজার! পরের ব্যাচে নিজেও ভর্তি হতে চাই এমন কোর্সে। সবার জন্য শুভকামনা।',
    date: '১৩ ফেব্রুয়ারি, ২০২৬',
  },
  {
    id: 's4',
    name: 'মেহেদী হাসান',
    role: 'শিক্ষার্থী',
    project: 'সামগ্রিক ফেস্টিভ্যাল',
    rating: 5,
    comment:
      'নিজের বানানো সাইট যখন সবাই দেখছে — এই অনুভূতিটা লেখায় বোঝানো যাবে না। ধন্যবাদ যুব উন্নয়ন অধিদপ্তর!',
    date: '১৩ ফেব্রুয়ারি, ২০২৬',
  },
];

const LS_KEY = 'dyd-festival-feedback-v1';

export function loadFeedback(): FeedbackEntry[] {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return SEED_FEEDBACK;
    const saved = JSON.parse(raw) as FeedbackEntry[];
    return [...saved, ...SEED_FEEDBACK];
  } catch {
    return SEED_FEEDBACK;
  }
}

export function saveFeedback(entry: FeedbackEntry): FeedbackEntry[] {
  try {
    const raw = localStorage.getItem(LS_KEY);
    const saved = raw ? (JSON.parse(raw) as FeedbackEntry[]) : [];
    const next = [entry, ...saved];
    localStorage.setItem(LS_KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable — keep in memory */
  }
  return loadFeedback();
}

export function todayBn(): string {
  const months = [
    'জানুয়ারি',
    'ফেব্রুয়ারি',
    'মার্চ',
    'এপ্রিল',
    'মে',
    'জুন',
    'জুলাই',
    'আগস্ট',
    'সেপ্টেম্বর',
    'অক্টোবর',
    'নভেম্বর',
    'ডিসেম্বর',
  ];
  const d = new Date();
  return `${bn(d.getDate())} ${months[d.getMonth()]}, ${bn(d.getFullYear())}`;
}

/*
 * One export for integrations, future CMS adapters or external editors.
 * Existing components also import the named collections above so TypeScript
 * can keep their item types precise.
 */
export const CONTENT = {
  site: SITE,
  images: IMG,
  film: FILM,
  stats: STATS,
  ticker: TICKER,
  galleries: {
    photos: PHOTO_WORKS,
    websites: SITES,
    posters: POSTERS,
    marketingCopy: COPY_CARDS,
  },
  creators: {
    youtube: YT_CREATORS,
    facebook: FB_CREATORS,
  },
  feedback: {
    roles: ROLES,
    projects: PROJECTS,
    ratingLabels: RATING_LABELS,
  },
} as const;

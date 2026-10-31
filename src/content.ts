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
  announcement:
    'বান্দরবান যুব উন্নয়ন অধিদপ্তর • দ্বিতীয় ব্যাচের প্রথম মাস সমাপনী উৎসব ও এআই ইনোভেশন শোকেস চলছে',
  navigation: {
    home: 'হোম',
    film: '২০৪০ ফিল্ম',
    previousBatch: 'পূর্ববর্তী ব্যাচ',
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
    // SITE অবজেক্টের pageHeaders অংশে
    previousBatch: {
      kicker: 'অগ্রজদের প্রতি শ্রদ্ধা • প্রথম ব্যাচের সৃষ্টিশীল উত্তরাধিকার',
      titleBefore: 'যেখান থেকে শুরু: ',
      highlight: 'প্রথম ব্যাচের',
      titleAfter: ' সৃষ্টিশীল পদচিহ্ন',
      description:
        'আমাদের পথপ্রদর্শক প্রথম ব্যাচের মেধা ও নিষ্ঠায় নির্মিত এআই ফিল্ম — দ্বিতীয় ব্যাচের পক্ষ থেকে তাদের প্রতি আন্তরিক ভালোবাসা ও গভীর সম্মাননা।',
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
      kicker: 'স্টুডেন্ট ক্রিয়েশন গ্যালারি',
      titleBefore: 'কার্ডে ক্লিক করুন, ',
      highlight: 'প্রজেক্ট গ্যালারি',
      titleAfter: ' ঘুরে আসুন',
      description:
        'ব্যাচের শিক্ষার্থীদের তৈরি চোখধাঁধানো এআই ফটো আর্টওয়ার্ক এবং লাইভ ওয়েবসাইট প্রজেক্ট — দুটি ডেডিকেটেড ক্যাটাগরিতে সাজানো।',
    },
    photos: {
      titleBefore: 'এআই ফটো আর্ট ও ',
      highlight: 'পোর্ট্রেট শোকেস',
      description:
        'এআই প্রযুক্তির সাহায্যে তৈরি ও নিখুঁতভাবে রিটাচ করা অসাধারণ সব ছবির সংকলন। ছবিতে ক্লিক করে ফুল-স্ক্রিনে উপভোগ করুন শিক্ষার্থীদের সৃজনশীল কাজ।',
    },
    websites: {
      titleBefore: 'শিক্ষার্থীদের ',
      highlight: 'লাইভ ওয়েবসাইট',
      titleAfter: ' প্রজেক্ট',
      description:
        'মাত্র ১ মাসের নিবিড় প্রশিক্ষণে শিক্ষার্থীদের হাতে-কোড করা রেসপন্সিভ ওয়েবসাইটগুলো। থাম্বনেইলে ক্লিক করে লাইভ সাইট পরিদর্শনের সুযোগ।',
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
/* ---------- first batch documentary archive ---------- */
export const PREVIOUS_BATCH = {
  eyebrow: 'প্রথম ব্যাচ আর্কাইভ • অনুপ্রেরণার আলোকবর্তিকা',
  title: 'অগ্রজদের কীর্তিগাথা',
  shortTitle: 'প্রথম ব্যাচের ঐতিহাসিক এআই সৃষ্টি',
  duration: 'এআই শর্ট ফিল্ম',
  batch: 'প্রথম ব্যাচ • বান্দরবান শাখা',
  watchLabel: 'ভিডিওটি দেখুন',
  pendingLabel: 'ভিডিও লিংক সংযুক্ত করা হচ্ছে...',
  introduction: 'যাঁদের হাত ধরে এআই চর্চার স্বপ্নযাত্রা শুরু হয়েছিল আমাদের এই ক্যাম্পাসে',
  paragraphs: [
    'যেকোনো নতুন যাত্রার প্রথম পথটি তৈরি করা সবচেয়ে কঠিন। যুব উন্নয়ন অধিদপ্তরের এই প্রশিক্ষণ কেন্দ্রে আমাদের অগ্রজ প্রথম ব্যাচের শিক্ষার্থীরা ঠিক সেই সাহসটিই দেখিয়েছিলেন। সীমিত সম্পদ আর নতুন প্রযুক্তিকে সঙ্গী করে তাঁরা এআই দিয়ে দৃশ্যকাব্য রচনার যে দৃষ্টান্ত স্থাপন করেছেন, তা আমাদের মতো নবীনদের জন্য সবসময়ই এক বড় অনুপ্রেরণা।',
    'তাঁদের তৈরি এই নির্মাণ কেবল একটি ভিডিও নয়—এটি তাঁদের অক্লান্ত পরিশ্রম, কল্পনাশক্তি ও দলীয় ঐক্যের অনন্য দলিল। চিত্রনাট্য বিন্যাস থেকে শুরু করে ভিজ্যুয়াল জেনারেশন ও আবহ সংগীতের মেলবন্ধন—প্রতিটি ফ্রেমেই জড়িয়ে রয়েছে অগ্রজদের সৃষ্টিশীলতার স্পষ্ট ছাপ।',
    'প্রথম ব্যাচ আমাদের দেখিয়েছে অসম্ভবকে কীভাবে বাস্তবে রূপ দিতে হয়। তাঁদের জ্বালিয়ে যাওয়া সেই মশাল হাতে নিয়ে আমরা দ্বিতীয় ব্যাচের শিক্ষার্থীরা আজ নতুন স্বপ্নের পথে এগিয়ে চলেছি।',
  ],
  closing:
    '“অগ্রজদের তৈরি পথ ধরেই নবীনদের সাহস বাড়ে; আপনাদের এই সৃষ্টিশীল পদচিহ্ন আমাদের প্রতিটি পদক্ষেপে আলোকবর্তিকা হয়ে থাকবে।”',
  poster: 'https://i.postimg.cc/J0pzCGz1/Whats-App-Image-2026-11-01-at-12-03-14-AM.jpg',
  videoUrl: 'https://youtu.be/ECe6SH73sAc', // আপনার কাঙ্ক্ষিত ভিডিও লিংক এখানে দিন
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
    title: 'স্টুডিও কোয়ালিটি পোর্ট্রেট',
    student: 'রাকিব হাসান',
    img: 'https://i.postimg.cc/ZqRtc5SX/Whats-App-Image-2026-10-30-at-5-27-16-PM.jpg',
    tools: ['Midjourney', 'Photoshop AI'],
    note: 'এআই লাইটিং ও ফেসিয়াল রিফাইনমেন্টের মাধ্যমে সাধারণ ক্লিকের প্রফেশনাল পোর্ট্রেট রূপান্তর।',
  },
  {
    id: 'p2',
    title: 'প্রফেশনাল এক্সিকিউটিভ হেডশট',
    student: 'নুসরাত জাহান',
    img: 'https://i.postimg.cc/mrDfwgsJ/Whats-App-Image-2026-10-30-at-5-27-17-PM.jpg',
    tools: ['Leonardo AI', 'Magnific'],
    note: 'সফট বক্স লাইটিং, ক্লিন ব্যাকড্রপ ও পারফেক্ট কালার ব্যালেন্সে তৈরি স্টুডিও লুক।',
  },
  {
    id: 'p3',
    title: 'এইচডি ফেস রিস্টোরেশন ও এনহ্যান্সমেন্ট',
    student: 'সাব্বির আহমেদ',
    img: 'https://i.postimg.cc/YS9K3CHd/Whats-App-Image-2026-10-30-at-5-27-17-PM(1).jpg',
    tools: ['GFPGAN', 'Topaz AI'],
    note: 'ফেসিয়াল ডিটেইল, স্কিন টেক্সচার ও রেজোলিউশন নিখুঁতভাবে রিকভার করা হয়েছে।',
  },
  {
    id: 'p4',
    title: 'সৃজনশীল ফিউচারিস্টিক পোর্ট্রেট',
    student: 'ফারিয়া আক্তার',
    img: 'https://i.postimg.cc/xdCDR12x/Whats-App-Image-2026-10-30-at-5-27-17-PM(2).jpg',
    tools: ['Midjourney', 'Krea AI'],
    note: 'ড্রামাটিক কালার গ্রেডিং ও লাইটিং টোনের মাধ্যমে তৈরি আধুনিক ভিজ্যুয়াল আর্ট।',
  },
  {
    id: 'p5',
    title: 'সিনেমাটিক লাইটিং ও পোর্ট্রেট আর্ট',
    student: 'তানভীর আহমেদ',
    img: 'https://i.postimg.cc/fbLnKRNH/Whats-App-Image-2026-10-30-at-5-27-17-PM(3).jpg',
    tools: ['Stable Diffusion', 'Photoshop AI'],
    note: 'সিনেমাটিক শ্যাডোজ ও সফট কি-লাইটের সমন্বয়ে তৈরি স্টুডিও ফ্রেম।',
  },
  {
    id: 'p6',
    title: 'সফট গ্লো ফিউশন পোর্ট্রেট',
    student: 'মেহেদী হাসান',
    img: 'https://i.postimg.cc/HLxD2kgw/Whats-App-Image-2026-10-31-at-11-21-38-AM.jpg',
    tools: ['Leonardo AI', 'Remini'],
    note: 'ন্যাচারাল গ্লো ও ডেপথ অব ফিল্ড বাড়িয়ে তৈরি প্রফেশনাল হেডশট।',
  },
  {
    id: 'p7',
    title: 'ক্রিয়েটিভ কালার গ্রেডেড আর্টওয়ার্ক',
    student: 'সাদিয়া ইসলাম',
    img: 'https://i.postimg.cc/vmBFzZsW/Whats-App-Image-2026-10-31-at-11-24-43-AM.jpg',
    tools: ['Midjourney', 'Lightroom'],
    note: 'কালার ভাইব্রেন্সি ও শ্যাডোর ভারসাম্যে ফুটিয়ে তোলা ভিজ্যুয়াল কনসেপ্ট।',
  },
  {
    id: 'p8',
    title: 'হাই-ডেফিনিশন স্টুডিও রিটাচ',
    student: 'আরিফুল ইসলাম',
    img: 'https://i.postimg.cc/pdTbZLHF/Whats-App-Image-2026-10-31-at-11-27-49-AM.jpg',
    tools: ['Topaz Gigapixel', 'Photoshop AI'],
    note: 'হাই রেজোলিউশন ডিটেইলিং ও মাইক্রো-কনট্রাস্ট অ্যাডজাস্টমেন্ট।',
  },
  {
    id: 'p9',
    title: 'মডার্ন লাইফস্টাইল পোর্ট্রেট',
    student: 'ইমরান হোসেন',
    img: 'https://i.postimg.cc/7L68VZkX/Whats-App-Image-2026-10-31-at-2-44-11-PM.jpg',
    tools: ['Leonardo AI', 'Krea AI'],
    note: 'ক্লিন ব্যাকগ্রাউন্ড ব্লার ও ফোকাসড কম্পোজিশনে লাইফস্টাইল লুক।',
  },
  {
    id: 'p10',
    title: 'ডিজিটাল ইলাস্ট্রেটিভ ফটো আর্ট',
    student: 'জান্নাতুল ফেরদৌস',
    img: 'https://i.postimg.cc/DzZkgwTc/Whats-App-Image-2026-10-31-at-2-45-29-PM.jpg',
    tools: ['Stable Diffusion', 'Magnific'],
    note: 'রিয়েলিজম ও ডিজিটাল আর্টের সংমিশ্রণে তৈরি ইউনিক কনসেপ্ট।',
  },
  {
    id: 'p11',
    title: 'ড্রামাটিক ব্যাকলিট পোর্ট্রেট',
    student: 'নাজমুল হুদা',
    img: 'https://i.postimg.cc/fbLnKRNf/Whats-App-Image-2026-10-31-at-2-46-23-PM.jpg',
    tools: ['Midjourney', 'Photoshop AI'],
    note: 'রিম লাইট ও পারফেক্ট ব্যাকগ্রাউন্ড কন্ট্রাস্টে সাজানো ভিজ্যুয়াল।',
  },
  {
    id: 'p12',
    title: 'ম্যাগাজিন কভার কোয়ালিটি শট',
    student: 'শামীম রেজা',
    img: 'https://i.postimg.cc/FKR5ZH4g/Whats-App-Image-2026-10-31-at-2-47-35-PM.jpg',
    tools: ['Remini', 'Topaz Photo AI'],
    note: 'শার্পনেস ও টেক্সচারের নিখুঁত ফিনিশিংয়ে ম্যাগাজিন-রেডি লুক।',
  },
  {
    id: 'p13',
    title: 'কালার হারমনি ও ফেস রিফাইনমেন্ট',
    student: 'রুকসানা আক্তার',
    img: 'https://i.postimg.cc/3wR5BxTB/Whats-App-Image-2026-10-31-at-2-48-43-PM.jpg',
    tools: ['Krea AI', 'Photoshop AI'],
    note: 'ফেসিয়াল টোন কারেকশন ও ব্যাকগ্রাউন্ড কালার ব্যালেন্সিং।',
  },
  {
    id: 'p14',
    title: 'আল্ট্রা-রিয়ালিস্টিক কনসেপ্ট আর্ট',
    student: 'হাসিবুর রহমান',
    img: 'https://i.postimg.cc/Gp2wQmCG/Whats-App-Image-2026-10-31-at-2-50-07-PM.jpg',
    tools: ['Midjourney', 'Magnific'],
    note: 'ফটোরিয়ালিস্টিক টেক্সচার ও রিফ্লেকশনের সাহায্যে তৈরি ফাইন আর্ট।',
  },
  {
    id: 'p15',
    title: 'স্টুডিও হেডশট ট্রান্সফরমেশন',
    student: 'মাহমুদুল হাসান',
    img: 'https://i.postimg.cc/DzZkgwT1/Whats-App-Image-2026-10-31-at-3-11-29-PM.jpg',
    tools: ['Leonardo AI', 'Photoshop AI'],
    note: 'ন্যাচারাল ডেপথ, পারফেক্ট আই ডিটেইলিং ও ফ্রেশ ফেসিয়াল রেন্ডারিং।',
  },
  {
    id: 'p16',
    title: 'মডার্ন ভিজ্যুয়াল পোর্ট্রেট',
    student: 'তাহমিদ হাসান',
    img: 'https://i.postimg.cc/05cDQ7dJ/Whats-App-Image-2026-10-17-at-11-37-02-PM.jpg',
    tools: ['Midjourney', 'Photoshop AI'],
    note: 'এআই-এর সাহায্যে লাইটিং ব্যালেন্স ও স্কিন টোনের নিখুঁত ফিনিশিং।',
  },
  {
    id: 'p17',
    title: 'স্টুডিও লাইট হেডশট',
    student: 'মারুফ হোসেন',
    img: 'https://i.postimg.cc/Y2bY9QfW/Whats-App-Image-2026-10-17-at-9-46-57-PM.jpg',
    tools: ['Leonardo AI', 'Magnific'],
    note: 'সফট কি-লাইট এবং পারফেক্ট ব্যাকড্রপ ব্লারে তৈরি প্রফেশনাল হেডশট।',
  },
  {
    id: 'p18',
    title: 'সিনেমাটিক কালার গ্রেডিং',
    student: 'সায়মা আক্তার',
    img: 'https://i.postimg.cc/dQ4r1GmL/Whats-App-Image-2026-10-17-at-9-52-50-PM.jpg',
    tools: ['Stable Diffusion', 'Photoshop AI'],
    note: 'কালার ভাইব্রেন্সি ও ড্রামাটিক শ্যাডোর সমন্বয়ে তৈরি সিনেমাটিক ফ্রেম।',
  },
  {
    id: 'p19',
    title: 'হাই-ডেফিনিশন রিটাচিং',
    student: 'নাজমুল হাসান',
    img: 'https://i.postimg.cc/05cDQ7dr/Whats-App-Image-2026-10-18-at-9-15-34-AM.jpg',
    tools: ['Topaz Gigapixel', 'Remini'],
    note: 'রেজোলিউশন বৃদ্ধি এবং সূক্ষ্ম ডিটেইলস পুনরুদ্ধারের কাজ।',
  },
  {
    id: 'p20',
    title: 'ন্যাচারাল ডেপথ আর্টওয়ার্ক',
    student: 'শারমিন জাহান',
    img: 'https://i.postimg.cc/59nL08q0/Whats-App-Image-2026-10-18-at-9-30-22-AM.jpg',
    tools: ['Midjourney', 'Lightroom'],
    note: 'ন্যাচারাল ডেপথ অব ফিল্ড এবং সফ্‌ট টোন ব্যালেন্সিং।',
  },
  {
    id: 'p21',
    title: 'এক্সিকিউটিভ প্রফেশনাল পোর্ট্রেট',
    student: 'রিফাত আহমেদ',
    img: 'https://i.postimg.cc/fy29rhT9/Whats-App-Image-2026-10-31-at-11-17-31-AM.jpg',
    tools: ['Leonardo AI', 'Photoshop AI'],
    note: 'ক্লিন ব্যাকগ্রাউন্ড এবং নিখুঁত এক্সপ্রেশন ফোকাসড কম্পোজিশন।',
  },
  {
    id: 'p22',
    title: 'ক্রিয়েটিভ কনসেপ্ট পোর্ট্রেট',
    student: 'আফরোজা খাতুন',
    img: 'https://i.postimg.cc/2y8WG5mZ/Whats-App-Image-2026-10-31-at-11-17-32-AM.jpg',
    tools: ['Stable Diffusion', 'Krea AI'],
    note: 'আর্টিস্টিক মুড এবং লাইটিং ইফেক্টের সংমিশ্রণে তৈরি পোর্ট্রেট।',
  },
  {
    id: 'p23',
    title: 'ফটো এনহ্যান্সমেন্ট ও শার্পনেস',
    student: 'কামরুল ইসলাম',
    img: 'https://i.postimg.cc/wMfmGdTj/Whats-App-Image-2026-10-31-at-11-17-32-AM(1).jpg',
    tools: ['Topaz Photo AI', 'Photoshop AI'],
    note: 'ফেসিয়াল টেক্সচার ও শার্পনেস বাড়িয়ে দেওয়া প্রাণবন্ত লুক।',
  },
  {
    id: 'p24',
    title: 'ড্রামাটিক শ্যাডো আর্ট',
    student: 'নুসরাত ফারিয়া',
    img: 'https://i.postimg.cc/QC4TyrxN/Whats-App-Image-2026-10-31-at-11-17-33-AM.jpg',
    tools: ['Midjourney', 'Magnific'],
    note: 'হাই-কন্ট্রাস্ট লাইট এবং শ্যাডোর মেলবন্ধনে ড্রামাটিক এক্সপ্রেশন।',
  },
  {
    id: 'p25',
    title: 'স্টুডিও ব্যাকড্রপ রিফাইনমেন্ট',
    student: 'জাহিদুল ইসলাম',
    img: 'https://i.postimg.cc/tJC6kgys/Whats-App-Image-2026-10-31-at-12-27-01-PM.jpg',
    tools: ['Leonardo AI', 'Remini'],
    note: 'ব্যাকগ্রাউন্ড নিখুঁতভাবে বদলে তৈরি স্টুডিও এনভায়রনমেন্ট।',
  },
  {
    id: 'p26',
    title: 'সফট টোন বিউটি পোর্ট্রেট',
    student: 'ফারজানা ইয়াসমিন',
    img: 'https://i.postimg.cc/Y0qFRSk2/Whats-App-Image-2026-10-31-at-12-27-01-PM(1).jpg',
    tools: ['Photoshop AI', 'Lightroom'],
    note: 'ন্যাচারাল কালার টিউনিং এবং স্কিন স্মুথিংয়ের ফাইনাল টাচ।',
  },
  {
    id: 'p27',
    title: 'মডার্ন ডিজিটাল আর্ট ফ্রেম',
    student: 'আশিকুর রহমান',
    img: 'https://i.postimg.cc/L56PDsR9/Whats-App-Image-2026-10-31-at-12-27-02-PM.jpg',
    tools: ['Stable Diffusion', 'Magnific'],
    note: 'ফটো ও ডিজিটাল আর্টের কম্বিনেশনে আকর্ষণীয় ভিজ্যুয়াল আউটপুট।',
  },
  {
    id: 'p28',
    title: 'ভাইব্রেন্ট ফোকাসড হেডশট',
    student: 'মুনতাসির বিল্লাহ',
    img: 'https://i.postimg.cc/0j2SnNxx/Whats-App-Image-2026-10-31-at-12-27-02-PM(1).jpg',
    tools: ['Midjourney', 'Photoshop AI'],
    note: 'আই ডিটেইলিং ও কালার ভাইব্রেন্সির দৃষ্টিনন্দন রিপ্রেজেন্টেশন।',
  },
  {
    id: 'p29',
    title: 'সিনেমাটিক মুড শট',
    student: 'সাবরিনা সুলতানা',
    img: 'https://i.postimg.cc/GthDKprb/Whats-App-Image-2026-10-31-at-12-33-55-PM.jpg',
    tools: ['Leonardo AI', 'Krea AI'],
    note: 'কালার গ্রেডিং ও টোনাল রেঞ্জের সিনেমাটিক প্রেজেন্টেশন।',
  },
  {
    id: 'p30',
    title: 'হাই-কনট্রাস্ট পোর্ট্রেট আর্ট',
    student: 'মাহবুব আলম',
    img: 'https://i.postimg.cc/ZRL36Nkt/Whats-App-Image-2026-10-31-at-12-33-55-PM(1).jpg',
    tools: ['Topaz Gigapixel', 'Photoshop AI'],
    note: 'কন্ট্রাস্ট ও লাইটিং ট্রানজিশনের মাধ্যমে তৈরি ফাইন আর্ট লুক।',
  },
  {
    id: 'p31',
    title: 'আল্ট্রা-ডিটেলড ফেস এনহ্যান্সমেন্ট',
    student: 'শাহরিয়ার কবির',
    img: 'https://i.postimg.cc/v83fB5LH/Whats-App-Image-2026-10-31-at-2-40-54-PM.jpg',
    tools: ['GFPGAN', 'Topaz Photo AI'],
    note: 'সূক্ষ্ম ডিটেইল ও টেক্সচার রিস্টোর করে তৈরি ঝকঝকে পোর্ট্রেট।',
  },
  {
    id: 'p32',
    title: 'ক্রিয়েটিভ কালার হারমনি',
    student: 'তাসনিম আরা',
    img: 'https://i.postimg.cc/zD0KBTSD/Whats-App-Image-2026-10-31-at-7-10-47-PM.jpg',
    tools: ['Midjourney', 'Lightroom'],
    note: 'কালার ব্যালেন্স ও ব্যাকগ্রাউন্ড টোনিংয়ের সমন্বয়।',
  },
  {
    id: 'p33',
    title: 'প্রফেশনাল ম্যাগাজিন স্টাইল',
    student: 'ওয়াসিম আকরাম',
    img: 'https://i.postimg.cc/NGpmMR7B/Whats-App-Image-2026-10-31-at-7-10-47-PM(1).jpg',
    tools: ['Leonardo AI', 'Photoshop AI'],
    note: 'ক্লিন কম্পোজিশন ও ম্যাগাজিন কভার কোয়ালিটি রেন্ডারিং।',
  },
  {
    id: 'p34',
    title: 'ড্রামাটিক লাইটিং এনহ্যান্সমেন্ট',
    student: 'ফাহমিদা আক্তার',
    img: 'https://i.postimg.cc/L5C1bM60/Whats-App-Image-2026-10-31-at-7-10-47-PM(2).jpg',
    tools: ['Stable Diffusion', 'Magnific'],
    note: 'লাইটিং অ্যাঙ্গেল ও ডেপথ অব ফিল্ডের পারফেক্ট ব্যালেন্স।',
  },
  {
    id: 'p35',
    title: 'স্টুডিও ফিনিশড হেডশট',
    student: 'হাসান মাহমুদ',
    img: 'https://i.postimg.cc/vTqVNdH2/Whats-App-Image-2026-10-31-at-7-11-34-PM.jpg',
    tools: ['Remini', 'Photoshop AI'],
    note: 'ক্লিন ফেসিয়াল টোন এবং নিখুঁত পোর্ট্রেট ট্রিম।',
  },
  {
    id: 'p36',
    title: 'সফট গ্লো পোর্ট্রেট আর্ট',
    student: 'রওশন আরা',
    img: 'https://i.postimg.cc/NFJHzwfN/Whats-App-Image-2026-10-31-at-7-16-39-PM.jpg',
    tools: ['Midjourney', 'Krea AI'],
    note: 'সফট গ্লো ও আর্টওয়ার্ক টোনিংয়ের সমন্বয়ে তৈরি কম্পোজিশন।',
  },
  {
    id: 'p37',
    title: 'ন্যাচারাল লাইট হেডশট',
    student: 'সোহেল রানা',
    img: 'https://i.postimg.cc/Gt7y51hQ/Whats-App-Image-2026-10-31-at-7-16-39-PM(1).jpg',
    tools: ['Leonardo AI', 'Photoshop AI'],
    note: 'ন্যাচারাল লাইট সিমুলেশন এবং নিখুঁত শ্যাডো টোন।',
  },
  {
    id: 'p38',
    title: 'সিনেমাটিক এক্সপ্রেশন ফ্রেম',
    student: 'শিরিন আক্তার',
    img: 'https://i.postimg.cc/hvyd5qP9/Whats-App-Image-2026-10-31-at-7-18-08-PM.jpg',
    tools: ['Stable Diffusion', 'Topaz Photo AI'],
    note: 'সিনেমাটিক কালার প্যালেট ও শার্প পোর্ট্রেট ফোকাস।',
  },
  {
    id: 'p39',
    title: 'মডার্ন স্টুডিও ট্রান্সফরমেশন',
    student: 'আরিফ হোসেন',
    img: 'https://i.postimg.cc/C5PqQVLf/Whats-App-Image-2026-10-31-at-7-58-03-PM.jpg',
    tools: ['Midjourney', 'Photoshop AI'],
    note: 'এআই প্রম্পট ও রিটাচিংয়ের সাহায্যে তৈরি মডার্ন পোর্ট্রেট লুক।',
  },
  {
    id: 'p40',
    title: 'আল্ট্রা-শার্প হেডশট আর্ট',
    student: 'তানিয়া রহমান',
    img: 'https://i.postimg.cc/hvyd5qPx/Whats-App-Image-2026-10-31-at-7-58-04-PM.jpg',
    tools: ['Leonardo AI', 'Magnific'],
    note: 'মাইক্রো-ডিটেল রিফাইনমেন্ট ও পারফেক্ট ব্যাকড্রপ ব্লেন্ডিং।',
  },
  {
    id: 'p41',
    title: 'বাংলাদেশ ২০৪০: এআই যুগের ভবিষ্যৎ রূপ',
    student: 'তাহসিন আহমেদ',
    img: 'https://i.postimg.cc/2ykr9ZPw/Bangladesh-2040-AI-era-ca-kha-bhaba-sa-yat.png',
    tools: ['Midjourney', 'Photoshop AI'],
    note: 'স্মার্ট বাংলাদেশ ২০৪০-এর ফিউচারিস্টিক শহর ও উন্নত যোগাযোগ ব্যবস্থার ভিজ্যুয়াল কনসেপ্ট।',
  },
  {
    id: 'p42',
    title: 'থ্রি ইডিয়টস কমেডি রি-ইমাজিনেশন',
    student: 'সাকিব আল হাসান',
    img: 'https://i.postimg.cc/j2qbjDY5/3-idios.jpg',
    tools: ['Stable Diffusion', 'Magnific'],
    note: 'জনপ্রিয় সিনেমা থ্রি ইডিয়টসের আইকনিক ফ্রেমের এআই স্টাইলাইজড ক্রিয়েটিভ রেন্ডার।',
  },
  {
    id: 'p43',
    title: 'আলীমামু ব্র‍্যান্ড স্টোরি কনসেপ্ট আর্ট',
    student: 'ফরহাদ হোসেন',
    img: 'https://i.postimg.cc/yx6HNDC1/ali-mamu-concept.jpg',
    tools: ['Midjourney', 'Photoshop AI'],
    note: 'ই-কমার্স ব্র‍্যান্ড আলীমামুর ভিজ্যুয়াল স্টোরিটেলিং ও কনসেপচুয়াল ক্রিয়েটিভ ডিজাইন।',
  },
  {
    id: 'p44',
    title: 'আলীমামু অলওয়েজ উইথ ইউ ব্যাজ ডিজাইন',
    student: 'ফরহাদ হোসেন',
    img: 'https://i.postimg.cc/fyWNbVQb/ALIMAMU-Always-With-You-Badge.png',
    tools: ['Illustrator AI', 'Canva Magic'],
    note: 'ব্র্যান্ডের মূল স্লোগান "সব প্রয়োজনে সাথে আছে" ফুটিয়ে তোলা কাস্টম ভেক্টর ব্যাজ।',
  },
  {
    id: 'p45',
    title: 'আলীমামু ফ্রেন্ডলি ব্র্যান্ড আইডেন্টিটি বোর্ড',
    student: 'ফরহাদ হোসেন',
    img: 'https://i.postimg.cc/Gt3Cp4nm/ALIMAMU-Friendly-Brand-Identity-Board.png',
    tools: ['Figma AI', 'Photoshop AI'],
    note: 'ব্র্যান্ডের ট্রাস্ট ও গ্রাহকবান্ধব ভিজ্যুয়াল কালার প্যালেট ও আইডেন্টিটি মোটিফ বোর্ড।',
  },
  {
    id: 'p46',
    title: 'পতাকা ও জাতীয় চেতনার ডিজিটাল কম্পোজিশন',
    student: 'নুসরাত জাহান',
    img: 'https://i.postimg.cc/NFGc0Kvc/falg.png',
    tools: ['Stable Diffusion', 'Lightroom'],
    note: 'লাল-সবুজের অনুপ্রেরণায় তৈরি মিনিমালিস্টিক জাতীয় পতাকার শৈল্পিক ডিজিটাল আর্টওয়ার্ক।',
  },
  {
    id: 'p47',
    title: 'বাবার স্নেহময় অভিব্যক্তি ও প্রতিকৃতি',
    student: 'ফরহাদ হোসেন',
    img: 'https://i.postimg.cc/hv4BGXRR/father.png',
    tools: ['Remini', 'Photoshop AI'],
    note: 'বাবার শান্ত ও গভীর অনুভূতির পোর্ট্রেটের ফেসিয়াল লাইটিং ও ডিটেইলিং রিস্টোরেশন।',
  },
  {
    id: 'p48',
    title: 'ফ্রেশ ফ্রুটস অ্যান্ড ড্রিঙ্কস কমার্শিয়াল ফ্রেম',
    student: 'তানভীর আহমেদ',
    img: 'https://i.postimg.cc/8ckSC7Q2/Fresh-fruits-and-drinks-at-Green-Ribbon.png',
    tools: ['Midjourney', 'Topaz Photo AI'],
    note: 'গ্রিন রিবনের তাজা ফল ও জুসের রিফ্রেশিং ফুড ফটোগ্রাফি ও কমার্শিয়াল অ্যাড ভিজ্যুয়াল।',
  },
  {
    id: 'p49',
    title: 'ফিউচারিস্টিক সাইবার ম্যান পোর্ট্রেট',
    student: 'মেহেদী হাসান',
    img: 'https://i.postimg.cc/prVHdmb3/future-man.jpg',
    tools: ['Midjourney', 'Krea AI'],
    note: 'ভবিষ্যতের সাইবার টেকনোলজি ও নিয়ন লাইটিংয়ের সমন্বয়ে তৈরি হাইপার-রিয়ালিস্টিক ক্যারেক্টার।',
  },
  {
    id: 'p50',
    title: 'জেমিনাই ক্রিয়েটিভ আর্ট ল্যাব এক্সপ্লোরেশন',
    student: 'সাদিয়া ইসলাম',
    img: 'https://i.postimg.cc/nrVJLXbw/Gemini-Generated-Image.jpg',
    tools: ['Google Gemini', 'Photoshop AI'],
    note: 'লেটেস্ট জেমিনাই ইমেজ মডেল দিয়ে তৈরি কাল্পনিক ভিজ্যুয়াল আর্ট ও কালার কম্পোজিশন।',
  },
  {
    id: 'p51',
    title: 'ফ্যান্টাসি ল্যান্ডস্কেপ জেমিনাই রেন্ডার',
    student: 'আরিফুল ইসলাম',
    img: 'https://i.postimg.cc/8ckSC7Q3/Gemini-Generated-Image.png',
    tools: ['Google Gemini', 'Magnific'],
    note: 'মাইক্রো-ডিটেলিং ও ভাইব্রেন্ট কালার ব্লেন্ডিংয়ে প্রস্তুত ফ্যান্টাসি থিম ব্যাকড্রপ।',
  },
  {
    id: 'p52',
    title: 'হাই-কনসেপ্ট জেমিনাই অ্যাবস্ট্রাক্ট ফ্রেম',
    student: 'ইমরান হোসেন',
    img: 'https://i.postimg.cc/Y02HSvK8/Gemini-Generated-Image-bqce7sbqce7sbqce-jpeg-20261025115507.jpg',
    tools: ['Google Gemini', 'Lightroom'],
    note: 'জটিল প্যাটার্ন এবং লাইটিং সিমুলেশনের সমন্বয়ে তৈরি আধুনিক অ্যাবস্ট্রাক্ট ফ্রেম।',
  },
  {
    id: 'p53',
    title: 'জেমিনাই প্রো ১৮-মান্থ এআই অফার ব্যানার',
    student: 'ফরহাদ হোসেন',
    img: 'https://i.postimg.cc/C5MgKRTc/Gemini-Pro-18-Month-AI-Offer.png',
    tools: ['Photoshop AI', 'Canva Pro'],
    note: 'এআই সাবস্ক্রিপশন ও প্রমোশনাল অফারের নজরকাড়া সোশ্যাল মিডিয়া সেলস পোস্টার ডিজাইন।',
  },
  {
    id: 'p54',
    title: 'রাজকীয় কিং ক্যারেক্টার ইলাস্ট্রেশন',
    student: 'কামরুল ইসলাম',
    img: 'https://i.postimg.cc/d3QY0hP6/king.jpg',
    tools: ['Midjourney', 'Topaz Gigapixel'],
    note: 'রাজকীয় পোশাক, মুকুট ও গাম্ভীর্যপূর্ণ অভিব্যক্তিতে তৈরি ক্ল্যাসিক কিং পোর্ট্রেট।',
  },
  {
    id: 'p55',
    title: 'লার্নিং হাউ টু লার্ন কনসেপ্ট আর্ট',
    student: 'ফারজানা ইয়াসমিন',
    img: 'https://i.postimg.cc/mDy4RQqK/learning-how-to-learn.jpg',
    tools: ['Stable Diffusion', 'Photoshop AI'],
    note: 'শিক্ষণ পদ্ধতি ও মানুষের মস্তিষ্কের জ্ঞান আহরণের প্রক্রিয়া নিয়ে সাজানো মেটাফোরিকাল আর্ট।',
  },
  {
    id: 'p56',
    title: 'ম্যাচো মাসকুলার ফিটনেস ক্যারেক্টার',
    student: 'আশিকুর রহমান',
    img: 'https://i.postimg.cc/0Q0vxp34/macho.jpg',
    tools: ['Leonardo AI', 'Magnific'],
    note: 'মাসল ডেফিনিশন ও ড্রামাটিক জিম লাইটিংয়ের মেলবন্ধনে নির্মিত বোল্ড অ্যাথলেটিক লুক।',
  },
  {
    id: 'p57',
    title: 'এআই হিউমার ও ট্রেন্ডি সোশ্যাল মিম',
    student: 'শামীম রেজা',
    img: 'https://i.postimg.cc/pTJvxD7k/meme.jpg',
    tools: ['Midjourney', 'Photoshop AI'],
    note: 'সোশ্যাল মিডিয়ায় ভাইরাল হওয়ার উপযোগী ট্রেন্ডি ও মজার এক্সপ্রেশনের মিম কনটেন্ট।',
  },
  {
    id: 'p58',
    title: 'নিউরণ নার্সিং কোচিং সাকসেস পোস্টার',
    student: 'ফরহাদ হোসেন',
    img: 'https://i.postimg.cc/B6B3sxyV/Neuron-Nursing-Coaching-Success-Poster.png',
    tools: ['Photoshop AI', 'Illustrator AI'],
    note: 'নিউরণ নার্সিং কোচিংয়ের ভর্তি প্রচারণা ও সফলতার হাই-কনভার্টিং এডুকেশনাল পোস্টার।',
  },
  {
    id: 'p59',
    title: 'প্লেফুল মাঙ্কি টয় ফ্যামিলি মোমেন্ট',
    student: 'সাবরিনা সুলতানা',
    img: 'https://i.postimg.cc/nzGxZv53/Playful-Monkey-Toy-Family-Moment.png',
    tools: ['Stable Diffusion', 'Krea AI'],
    note: 'খেলনা বানর ও পরিবারের খুনসুটি নিয়ে তৈরি উষ্ণ ও স্নিগ্ধ ৩ডি কার্টুনিশ অ্যানিমেশন লুক।',
  },
  {
    id: 'p60',
    title: 'তরুণ উদ্যোক্তা ও বিজনেস সামিট আর্ট',
    student: 'মাহবুব আলম',
    img: 'https://i.postimg.cc/NMktY1Vx/udoktas.jpg',
    tools: ['Midjourney', 'Lightroom'],
    note: 'দেশের তরুণ উদ্যোক্তাদের উদ্ভাবনী ভাবনা ও নেটওয়ার্কিংয়ের উদ্দীপনামূলক ভিজ্যুয়াল।',
  },
  {
    id: 'p61',
    title: 'ওয়ার্ম স্টুডিও পোর্ট্রেট অব আ বিয়ার্ডেড ম্যান',
    student: 'শাহরিয়ার কবির',
    img: 'https://i.postimg.cc/nzGxZv5B/Warm-Studio-Portrait-of-a-Bearded-Man.png',
    tools: ['Leonardo AI', 'Photoshop AI'],
    note: 'সফট গোল্ডেন লাইটিং ও পরিপাটি দাড়ির চমৎকার টেক্সচারে তৈরি ক্ল্যাসিক স্টুডিও হেডশট।',
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
    img: 'https://i.postimg.cc/Vk3CW3qz/banla-typing-kawsik.png',
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

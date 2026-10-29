import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Clapperboard,
  Globe,
  Inbox,
  LayoutGrid,
  Mic,
  Play,
  Share2,
  Sparkles,
  Ticket,
  Users,
  Wand2,
} from "lucide-react";
import { bn, FILM, IMG, SITE, STATS, YT_CREATORS, FB_CREATORS } from "../content";
import { Chip, Counter, Particles, Reveal, SectionHead, Ticker } from "../components/ui";
import BeforeAfter from "../components/BeforeAfter";
import BrowserMockup from "../components/BrowserMockup";
import PosterArt from "../components/Posters";
import FeedbackBoxDemo from "../components/FeedbackBoxDemo";
// import { FeedbackForm, FeedbackWall, RatingSummary, useFeedbackList } from "../components/FeedbackForm";
import { FacebookIcon, YoutubeIcon } from "../components/brands";
import { InstitutionalLockup } from "../components/BrandLogos";

const STAT_ICONS = [Users, Sparkles, Globe, Share2];

export default function Home() {
  // const { entries, setEntries } = useFeedbackList();
  const railCreators = [
    ...YT_CREATORS.slice(0, 3).map((c) => ({ ...c, platform: "yt" as const })),
    ...FB_CREATORS.slice(0, 3).map((c) => ({ ...c, platform: "fb" as const })),
  ];

  return (
    <>
      {/* ============ 1. HERO ============ */}
      <section className="relative overflow-hidden bg-night text-white">
        <div className="absolute inset-0 bg-grid-dark" aria-hidden />
        <div
          className="pointer-events-none absolute -top-40 left-1/3 h-[480px] w-[480px] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(23,179,106,0.4), transparent 65%)" }}
          aria-hidden
        />
        <div className="pointer-events-none absolute right-[8%] top-16 hidden lg:block" aria-hidden>
          <span className="block h-40 w-40 rounded-full bg-flag/80 blur-[2px] animate-sunpulse shadow-[0_0_120px_rgba(244,42,65,0.5)]" />
        </div>
        <Particles count={16} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-20 lg:pt-20 lg:pb-24 grid gap-14 lg:grid-cols-12 lg:items-center">
          {/* left copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <InstitutionalLockup inverse />
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-leaf/40 bg-leaf/10 px-4 py-1.5 text-xs font-bold text-leafsoft">
                  <span className="h-2 w-2 rounded-full bg-flag animate-blinkdot" />
                  {SITE.home.trainingLabel}
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-xs text-white/70">
                  {SITE.home.batchLabel}
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 font-display font-extrabold leading-[1.15] text-4xl sm:text-5xl xl:text-6xl">
                <span className="text-leafsoft">{SITE.home.titleEnglish}</span>
                <br />
                <span className="text-2xl sm:text-3xl xl:text-4xl font-bold text-white/95">
                  {SITE.home.titleBangla}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-white/70 text-base sm:text-base">
                {SITE.home.subtitle}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/film"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-flag px-6 py-3.5 font-display font-bold text-white shadow-xl shadow-flag/30 transition-all hover:bg-flagdeep hover:-translate-y-1"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20 transition-transform group-hover:scale-110">
                    <Play className="h-3.5 w-3.5 fill-white" />
                  </span>
                  {SITE.home.ctas.film}
                </Link>
                <Link
                  to="/feedbackbox"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-leaf/60 bg-leaf/10 px-5 py-3.5 font-display font-bold text-leafsoft transition-all hover:bg-leaf hover:text-white hover:-translate-y-1"
                >
                  <Inbox className="h-5 w-5" />
                  {SITE.home.ctas.feedbackBox}
                </Link>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 font-display font-bold text-white/85 transition-all hover:border-white/50 hover:bg-white/5 hover:-translate-y-1"
                >
                  <LayoutGrid className="h-5 w-5" />
                  {SITE.home.ctas.gallery}
                </Link>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-9 flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {["রা", "নু", "সা", "তা", "ফা"].map((t, i) => (
                    <span
                      key={t}
                      className="grid h-9 w-9 place-items-center rounded-full border-2 border-night font-display text-xs font-bold text-white"
                      style={{ background: ["#17b36a", "#d11730", "#b8860b", "#0e7490", "#8c2f4f"][i] }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-white/65 leading-snug">
                  <span className="font-bold text-white/85">{SITE.home.studentCount}</span> — {SITE.home.studentLine}
                </p>
              </div>
            </Reveal>
          </div>

          {/* right festival pass */}
          <div className="lg:col-span-5">
            <Reveal delay={250} className="relative">
              <Link to="/film" className="group relative block rotate-2 transition-transform duration-500 hover:rotate-0">
                <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/60">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={IMG.hero2040} alt="বাংলাদেশ ২০৪০ — এআই ফিল্মের দৃশ্য" className="h-full w-full object-cover animate-kenburns" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-transparent to-night/20" />
                  <span className="absolute left-4 top-4 rounded-md bg-flag px-2.5 py-1 font-mono text-xs font-bold tracking-widest text-white">
                    GRAND PREMIERE
                  </span>
                  <span className="absolute right-4 top-4 rounded-md bg-night/80 px-2.5 py-1 font-mono text-xs font-bold text-leafsoft backdrop-blur">
                    ▶ {FILM.duration}
                  </span>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="absolute inset-0 rounded-full bg-flag animate-ringpulse" />
                    <span className="relative grid h-16 w-16 place-items-center rounded-full bg-flag shadow-2xl shadow-flag/50 transition-transform group-hover:scale-110">
                      <Play className="h-7 w-7 fill-white text-white ml-0.5" />
                    </span>
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-display text-xl font-bold leading-snug">{FILM.title}</p>
                    <p className="text-xs text-white/70 mt-0.5">সম্পূর্ণ এআই-জেনারেটেড • বাংলা ভয়েসওভার</p>
                  </div>
                </div>
              </Link>

              {/* floating chips */}
              <span className="absolute -left-3 top-8 animate-floaty rounded-lg border border-leaf/40 bg-night/90 px-3 py-1.5 text-xs font-bold text-leafsoft shadow-xl backdrop-blur hidden sm:block">
                ✦ প্রম্পট ইঞ্জিনিয়ারিং
              </span>
              <span className="absolute -right-2 bottom-24 animate-floaty rounded-lg border border-gold/40 bg-night/90 px-3 py-1.5 text-xs font-bold text-gold shadow-xl backdrop-blur hidden sm:block" style={{ animationDelay: "-2.5s" }}>
                ✦ এআই ভিডিও + ভয়েসওভার
              </span>

              {/* ticket stub */}
              <div className="ticket-notch relative z-10 mx-4 -mt-3 flex items-center justify-between gap-3 rounded-xl bg-mint px-5 py-3.5 text-ink shadow-2xl -rotate-1">
                <div className="flex items-center gap-2.5">
                  <Ticket className="h-5 w-5 text-flag" />
                  <div className="leading-tight">
                    <p className="font-display text-sm font-extrabold">ফেস্টিভ্যাল পাস • দ্বিতীয় ব্যাচ</p>
                    <p className="text-xs font-semibold text-inksoft">প্রথম মাস সমাপনী • প্রবেশ সবার জন্য উন্মুক্ত</p>
                  </div>
                </div>
                <div className="flex h-8 items-end gap-[2px]" aria-hidden>
                  {[5, 8, 4, 7, 9, 3, 8, 5, 9, 4, 7, 6].map((h, i) => (
                    <span key={i} className="w-[2.5px] bg-ink" style={{ height: `${h * 10}%` }} />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Ticker />

      {/* ============ stats ============ */}
      <section className="bg-paper border-b border-ink/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-y-8">
          {STATS.map((s, i) => {
            const Icon = STAT_ICONS[i];
            return (
              <Reveal key={s.label} delay={i * 90} className={`px-4 text-center ${i > 0 ? "lg:border-l lg:border-dashed lg:border-ink/15" : ""}`}>
                <Icon className="mx-auto h-6 w-6 text-leaf" />
                <p className="mt-2 font-display text-4xl sm:text-5xl font-extrabold text-ink">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm font-semibold text-inksoft">{s.label}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ============ 2. FILM HIGHLIGHT ============ */}
      <section className="relative overflow-hidden bg-pine text-white">
        <div className="absolute inset-0 bg-grid-dark opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              dark
              eyebrow="সেকশন ০২ • মূল ফেস্টিভাল আকর্ষণ"
              title={<>বাংলাদেশ ২০৪০: <span className="text-gold">এআই চোখে</span> আমাদের ভবিষ্যৎ</>}
              desc={FILM.desc}
            />
            <Reveal delay={150}>
              <Link to="/film" className="inline-flex items-center gap-2 rounded-lg border border-leafsoft/50 px-5 py-2.5 text-sm font-bold text-leafsoft transition-all hover:bg-leafsoft hover:text-night">
                ফিল্ম ও মেকিং-অফ দেখুন <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-5 items-center">
            <Reveal className="lg:col-span-3">
              <Link to="/film" className="group relative block overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
                <div className="aspect-video overflow-hidden">
                  <img src={IMG.smartvillage} alt="ফিল্মের দৃশ্য — স্মার্ট গ্রাম" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-night/80 to-transparent" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-14 w-14 place-items-center rounded-full bg-flag shadow-xl shadow-flag/40 transition-transform group-hover:scale-110">
                  <Play className="h-6 w-6 fill-white text-white ml-0.5" />
                </span>
                <span className="absolute bottom-3 left-4 font-mono text-xs text-leafsoft">দৃশ্য ০২ — স্মার্ট গ্রাম • ০১:০৫</span>
                <span className="absolute bottom-3 right-4 rounded bg-night/80 px-2 py-0.5 font-mono text-xs font-bold text-white">{FILM.duration}</span>
              </Link>
            </Reveal>
            <div className="lg:col-span-2 space-y-4">
              {[
                { icon: Wand2, t: "প্রম্পট ইঞ্জিনিয়ারিং", d: "বাংলা ভাবনা থেকে নিখুঁত সিনেমাটিক প্রম্পট" },
                { icon: Clapperboard, t: "এআই ভিডিও জেনারেশন", d: "৪০+ জেনারেটেড ক্লিপ থেকে বাছাই করা সেরা শট" },
                { icon: Mic, t: "এআই ভয়েসওভার", d: "বাংলা স্ক্রিপ্টে জীবন্ত ভয়েস ও আবহসংগীত" },
              ].map((x, i) => (
                <Reveal key={x.t} delay={i * 110}>
                  <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-leaf/40 hover:bg-leaf/10">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-leaf/20 text-leafsoft">
                      <x.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display font-bold">{x.t}</p>
                      <p className="text-sm text-white/70">{x.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 3. FEEDBACKBOX SPOTLIGHT ============ */}
      <section className="relative bg-mint bg-dots">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHead
              eyebrow="সেকশন ০৩ • স্টুডেন্ট ইনোভেশন স্পটলাইট"
              title={<>সত্যি কথা বলার সাহস, <span className="text-flag">নাম ছাড়াই</span></>}
            />
            <Reveal delay={120}>
              <p className="mt-5 text-inksoft text-base sm:text-base">
                কোর্সের একজন সাধারণ শিক্ষার্থী হিসেবে শিখলাম — এআই শুধু ছবি বানায় না, বাস্তব
                সমস্যার সমাধানও করে। বন্ধুর ভুল ধরতে গেলে সম্পর্ক নষ্টের ভয়, অফিসে সত্যি মতামত
                দিতে গেলে সংকোচ — এই মানসিক জড়তা ভাঙতেই আমার ছোট্ট প্রজেক্ট <strong className="text-ink">FeedbackBox</strong>।
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-6 space-y-3">
                {[
                  "সম্পূর্ণ অ্যানোনিমাস — নাম, পরিচয় কিছুই লাগে না",
                  "সিকিউরড সাবমিশন — মতামত পৌঁছায় নিরাপদে",
                  "ব্যক্তিগত সম্পর্ক থেকে কর্পোরেট টিম — সবখানেই কার্যকর",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm font-semibold text-ink">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-leaf" /> {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/feedbackbox" className="inline-flex items-center gap-2 rounded-xl bg-pine px-6 py-3 font-display font-bold text-white shadow-lg transition-all hover:bg-moss hover:-translate-y-0.5">
                  <Inbox className="h-5 w-5 text-leafsoft" /> পুরো গল্প ও ডেমো দেখুন
                </Link>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-inksoft">
                  <span className="h-2 w-2 rounded-full bg-leaf animate-blinkdot" /> পাশের ডেমোটি এখনই ব্যবহার করে দেখুন
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150} className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-leaf/30 to-flag/20 blur-xl" aria-hidden />
            <div className="relative">
              <FeedbackBoxDemo />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 4. GALLERY NAV (bento) ============ */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <SectionHead
            eyebrow="সেকশন ০৪ • মাল্টি-পেইজ ক্রিয়েশন গ্যালারি"
            title={<>থাম্বনেইলে ক্লিক, <span className="text-leaf">সাব-পেইজে</span> বিস্ময়</>}
            desc="ফটো এডিটিং, হাতে-বানানো ওয়েবসাইট আর মার্কেটিং পোস্টার — প্রতিটি ক্যাটাগরির জন্য আলাদা ডেডিকেটেড পেইজ।"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* photos - tall card */}
            <Reveal className="lg:row-span-2">
              <Link to="/gallery/photos" className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1">
                <div className="relative p-5 pb-0">
                  <BeforeAfter src={IMG.portraitMan} alt="এআই ফটো এনহ্যান্সমেন্ট" ratio="aspect-[16/11]" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-flag">গ্যালারি ০১</span>
                    <Chip>{bn(4)}+ কাজ</Chip>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-ink group-hover:text-moss transition-colors">এআই ফটো এডিটিং গ্যালারি</h3>
                  <p className="mt-2 text-sm text-inksoft">সাধারণ ছবি থেকে স্টুডিও কোয়ালিটি — Before & After স্লাইডার টেনে নিজেই দেখুন জাদুটা।</p>
                  <span className="mt-auto pt-4 inline-flex items-center gap-2 text-sm font-bold text-leaf">
                    সাব-পেইজে যান <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
            {/* websites */}
            <Reveal delay={100}>
              <Link to="/gallery/websites" className="group flex gap-5 overflow-hidden rounded-2xl border border-ink/10 bg-white p-5 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 items-center">
                <div className="w-2/5 shrink-0 transition-transform duration-500 group-hover:scale-[1.04] group-hover:-rotate-1">
                  <BrowserMockup variant="portfolio" url="https://rakib-dyd.github.io" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-flag">গ্যালারি ০২</span>
                    <Chip>{bn(12)}টি সাইট</Chip>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink group-hover:text-moss transition-colors">ওয়েবসাইট প্রিভিউ গ্যালারি</h3>
                  <p className="mt-1.5 text-sm text-inksoft hidden sm:block">১ মাসে বানানো লাইভ সাইটগুলোর থাম্বনেইল — ক্লিকেই প্রিভিউ ও লাইভ লিংক।</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-leaf">
                    সাব-পেইজে যান <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
            {/* posters */}
            <Reveal delay={200}>
              <Link to="/gallery/posters" className="group flex gap-5 overflow-hidden rounded-2xl border border-ink/10 bg-white p-5 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 items-center">
                <div className="w-1/3 shrink-0 transition-transform duration-500 group-hover:scale-[1.04] group-hover:rotate-1">
                  <PosterArt id="poster-premiere" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-flag">গ্যালারি ০৩</span>
                    <Chip>{bn(5)}+ ডিজাইন</Chip>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink group-hover:text-moss transition-colors">মার্কেটিং ও সোশ্যাল পোস্টার</h3>
                  <p className="mt-1.5 text-sm text-inksoft hidden sm:block">ফেসবুক পোস্টার, ব্যানার আর এআই মার্কেটিং কপির সৃজনশীল সংগ্রহ।</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-leaf">
                    সাব-পেইজে যান <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 5. CREATORS RAIL ============ */}
      <section className="relative overflow-hidden bg-night text-white">
        <div className="absolute inset-0 bg-grid-dark" aria-hidden />
        <Particles count={10} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              dark
              eyebrow="সেকশন ০৫ • স্টুডেন্ট ক্রিয়েটর ইকোসিস্টেম"
              title={<>আমাদের <span className="text-flag">ইউটিউব</span> ও <span className="text-leafsoft">ফেসবুক</span> ক্রিয়েটরেরা</>}
              desc="প্রত্যেকে নিজের চ্যানেল ও পেইজে নিয়মিত এআই কনটেন্ট বানাচ্ছেন — এক ঝলকে কয়েকজন।"
            />
            <Reveal delay={150}>
              <Link to="/creators" className="inline-flex items-center gap-2 rounded-lg bg-flag px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-flag/30 transition-all hover:bg-flagdeep">
                পুরো ক্রিয়েটর হাব <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-10 flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x">
            {railCreators.map((c, i) => (
              <Reveal key={c.id} delay={i * 70} className="snap-start shrink-0 w-64">
                <div className="h-full rounded-xl border border-white/10 bg-white/5 p-5 transition-all hover:border-leaf/40 hover:bg-white/10 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-full font-display text-lg font-bold text-white" style={{ background: c.color }}>
                      {c.name.charAt(0)}
                    </span>
                    {c.platform === "yt" ? (
                      <YoutubeIcon className="h-6 w-6 text-flag" />
                    ) : (
                      <FacebookIcon className="h-6 w-6 text-[#4a9af5]" />
                    )}
                  </div>
                  <p className="mt-3 font-display font-bold">{c.handle}</p>
                  <p className="text-xs text-white/65">{c.name}</p>
                  <p className="mt-2 inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-leafsoft">{c.niche}</p>
                  <p className="mt-3 border-t border-white/10 pt-3 text-xs text-white/70">
                    <span className="font-bold text-white">{c.followers}</span> ফলোয়ার • {c.works}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6. FEEDBACK CORNER ============ */}
      {/* <section className="bg-mint">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <SectionHead
            eyebrow="সেকশন ০৬ • ভিজিটর ফিডব্যাক কর্নার"
            title={<>আপনার চোখে আমাদের <span className="text-leaf">প্রথম মাস</span></>}
            desc="বিচারক, মেন্টর কিংবা দর্শনার্থী — আপনার রেটিং ও পরামর্শই পরের মাসের পাথেয়।"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-12 items-start">
            <Reveal className="lg:col-span-7">
              <FeedbackForm onSubmitted={setEntries} />
            </Reveal>
            <div className="lg:col-span-5 space-y-5">
              <Reveal delay={100}>
                <RatingSummary entries={entries} />
              </Reveal>
              <Reveal delay={180}>
                <FeedbackWall entries={entries} limit={2} />
              </Reveal>
              <Reveal delay={240}>
                <Link to="/feedback" className="inline-flex items-center gap-2 text-sm font-bold text-moss hover:text-leaf transition-colors">
                  সব মতামত দেখুন ({bn(entries.length)}টি) <ChevronRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
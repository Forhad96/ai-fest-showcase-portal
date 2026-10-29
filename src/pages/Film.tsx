import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clapperboard, Clock, Film, Mic, Play, Sparkles, Star, Wand2 } from "lucide-react";
import { FILM, SITE } from "../content";
import { Chip, PageHero, Reveal, SectionHead } from "../components/ui";

const PIPE_ICONS = [Wand2, Clapperboard, Mic];

export default function FilmPage() {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <PageHero
        kicker={SITE.pageHeaders.film.kicker}
        title={<>{SITE.pageHeaders.film.titleBefore}<span className="text-gold">{SITE.pageHeaders.film.highlight}</span>{SITE.pageHeaders.film.titleAfter}</>}
        desc={FILM.desc}
      >
        <div className="flex flex-wrap gap-2">
          <Chip dark><Clock className="h-3.5 w-3.5" /> ৪ মিনিট পূর্ণাঙ্গ ফিল্ম</Chip>
          <Chip dark><Sparkles className="h-3.5 w-3.5" /> শতভাগ এআই-জেনারেটেড</Chip>
          <Chip dark><Mic className="h-3.5 w-3.5" /> বাংলা এআই ভয়েসওভার</Chip>
        </div>
      </PageHero>

      {/* player */}
      <section className="relative bg-night pb-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.6)] ring-1 ring-leaf/20">
              {!playing ? (
                <button
                  onClick={() => setPlaying(true)}
                  className="group relative block w-full text-left"
                  aria-label="ফিল্ম চালু করুন"
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={FILM.poster} alt="বাংলাদেশ ২০৪০ ফিল্ম পোস্টার" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/10 to-night/30" />
                  <span className="absolute left-5 top-5 flex items-center gap-2 rounded-md bg-flag px-3 py-1.5 font-mono text-xs font-bold tracking-widest">
                    <Film className="h-3.5 w-3.5" /> OFFICIAL FESTIVAL CUT
                  </span>
                  <span className="absolute right-5 top-5 rounded-md bg-night/80 px-3 py-1.5 font-mono text-xs font-bold text-leafsoft backdrop-blur">
                    {FILM.duration}
                  </span>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="absolute inset-0 rounded-full bg-flag animate-ringpulse" />
                    <span className="relative grid h-20 w-20 place-items-center rounded-full bg-flag shadow-2xl shadow-flag/60 transition-transform group-hover:scale-110">
                      <Play className="h-9 w-9 fill-white text-white ml-1" />
                    </span>
                  </span>
                  <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="font-display text-2xl sm:text-3xl font-bold">{FILM.title}</p>
                      <p className="mt-1 text-sm text-white/65">প্লে করতে ক্লিক করুন • সাউন্ড অন করে দেখুন</p>
                    </div>
                    <span className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-leafsoft">
                      <span className="h-2 w-2 rounded-full bg-leaf animate-blinkdot" /> PREMIERE NOW
                    </span>
                  </div>
                </button>
              ) : (
                <video
                  src={FILM.src}
                  poster={FILM.poster}
                  controls
                  autoPlay
                  playsInline
                  className="aspect-video w-full bg-black"
                />
              )}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 text-center text-xs text-white/40">
              অনলাইন প্রিভিউ স্ট্রিম — ফেস্টিভ্যাল প্রদর্শনীতে সম্পূর্ণ ৪ মিনিটের ফাইনাল কাট দেখানো হয়
            </p>
          </Reveal>
        </div>
      </section>

      {/* making of */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <SectionHead
            center
            eyebrow="মেকিং-অফ • যেভাবে বানানো হলো"
            title={<>প্রম্পট থেকে <span className="text-leaf">পর্দা পর্যন্ত</span></>}
            desc="একটি ফিল্ম, তিনটি ধাপ — প্রতিটি ধাপে ব্যবহৃত এআই প্রযুক্তির সংক্ষিপ্ত ওভারভিউ।"
          />
          <div className="relative mt-12 grid gap-6 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-leaf/30 md:block" aria-hidden />
            {FILM.pipeline.map((p, i) => {
              const Icon = PIPE_ICONS[i];
              return (
                <Reveal key={p.step} delay={i * 120}>
                  <div className="relative h-full rounded-2xl border border-ink/10 bg-white p-6 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-pine text-leafsoft shadow-lg">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="font-display text-5xl font-extrabold text-mint [-webkit-text-stroke:1.5px_#17b36a]">{p.step}</span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm text-inksoft">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tools.map((t) => (
                        <span key={t} className="rounded-md bg-mint px-2.5 py-1 font-mono text-xs font-semibold text-moss">{t}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* storyboard */}
      <section className="relative overflow-hidden bg-pine text-white">
        <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <SectionHead
            dark
            eyebrow="স্টোরিবোর্ড • চারটি অধ্যায়"
            title={<>৪ মিনিটে <span className="text-gold">চার বাংলাদেশ</span></>}
            desc="ফিল্মের চারটি মূল অধ্যায় — প্রতিটি দৃশ্যের পেছনে আছে আলাদা প্রম্পট-গল্প।"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FILM.scenes.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all hover:border-gold/50 hover:-translate-y-1">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <span className="absolute left-2.5 top-2.5 rounded bg-night/85 px-2 py-0.5 font-mono text-xs font-bold text-gold backdrop-blur">{s.time}</span>
                  </div>
                  <div className="p-4">
                    <p className="font-display font-bold text-leafsoft">{s.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/70">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <p className="font-display text-2xl font-bold">ফিল্মটি কেমন লাগল?</p>
              <p className="max-w-md text-sm text-white/70">আপনার একটি রেটিং আমাদের পরের ফিল্মকে আরও সুন্দর করবে — বিচারক ও দর্শক, সবার মতামত সমান দামি।</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/feedback" className="inline-flex items-center gap-2 rounded-lg bg-flag px-6 py-3 font-display font-bold text-white shadow-lg shadow-flag/30 transition-all hover:bg-flagdeep hover:-translate-y-0.5">
                  <Star className="h-4 w-4" /> রেটিং ও মতামত দিন
                </Link>
                <Link to="/feedbackbox" className="inline-flex items-center gap-2 rounded-lg border border-leafsoft/50 px-6 py-3 font-display font-bold text-leafsoft transition-all hover:bg-leafsoft hover:text-night">
                  পরের ইনোভেশন দেখুন <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
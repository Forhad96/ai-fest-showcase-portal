import { CheckCircle2, Clapperboard, Inbox, Lock, Play, Sparkles, Ticket } from "lucide-react";
import { IMG } from "../content";

export default function PosterArt({ id, className = "" }: { id: string; className?: string }) {
  return (
    <div className={`relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow-xl ${className}`} aria-hidden>
      {id === "poster-admission" && (
        <div className="absolute inset-0 bg-pine bg-grid-dark p-5 flex flex-col">
          <span className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-flag" />
          <span className="inline-flex w-max items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-leafsoft border border-white/15">
            <Sparkles className="h-3 w-3" /> যুব উন্নয়ন অধিদপ্তর
          </span>
          <p className="mt-6 font-display text-4xl font-extrabold leading-[1.15] text-white">
            ভর্তি<br />চলছে!
          </p>
          <p className="mt-2 font-display text-lg font-bold text-gold leading-snug">বেসিক এআই ট্রেনিং কোর্স</p>
          <div className="mt-4 space-y-2">
            {["এআই দিয়ে ভিডিও ও ছবি", "প্রম্পট ইঞ্জিনিয়ারিং", "ওয়েবসাইট ও মার্কেটিং"].map((t) => (
              <p key={t} className="flex items-center gap-2 text-[11px] font-semibold text-white/85">
                <CheckCircle2 className="h-3.5 w-3.5 text-leafsoft" /> {t}
              </p>
            ))}
          </div>
          <div className="mt-auto rounded-lg bg-flag px-3 py-2 text-center font-display text-sm font-bold text-white">
            আসন সংরক্ষণ করুন আজই
          </div>
          <p className="mt-2 text-center font-mono text-[8px] tracking-[0.25em] text-white/40">SMART YOUTH • SMART BANGLADESH</p>
        </div>
      )}

      {id === "poster-feedbackbox" && (
        <div className="absolute inset-0 bg-night bg-grid-dark p-5 flex flex-col items-center text-center">
          <span className="absolute left-1/2 top-16 -translate-x-1/2 h-36 w-36 rounded-full bg-leaf/25 blur-3xl" />
          <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-leaf shadow-[0_0_40px_rgba(23,179,106,0.5)]">
            <Inbox className="h-8 w-8 text-white" />
          </span>
          <p className="relative mt-5 font-display text-3xl font-extrabold leading-[1.2] text-white">
            সত্যি বলুন,<br /><span className="text-leafsoft">নাম ছাড়াই।</span>
          </p>
          <p className="relative mt-3 font-mono text-xs font-semibold tracking-widest text-white/60">FeedbackBox</p>
          <div className="relative mt-auto w-full space-y-2">
            <p className="flex items-center justify-center gap-1.5 rounded-full border border-leaf/40 bg-leaf/10 px-3 py-1.5 text-[10px] font-bold text-leafsoft">
              <Lock className="h-3 w-3" /> শতভাগ অ্যানোনিমাস ও নিরাপদ
            </p>
            <p className="text-[10px] text-white/50">সম্পর্ক থাকুক, জড়তা যাক</p>
          </div>
        </div>
      )}

      {id === "poster-premiere" && (
        <div className="absolute inset-0">
          <img src={IMG.hero2040} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-night/20" />
          <div className="relative flex h-full flex-col p-5">
            <span className="inline-flex w-max items-center gap-1.5 rounded-full bg-flag px-3 py-1 text-[10px] font-bold text-white">
              <Clapperboard className="h-3 w-3" /> গ্র্যান্ড প্রিমিয়ার
            </span>
            <div className="mt-auto">
              <span className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-white/15 backdrop-blur border border-white/30">
                <Play className="h-5 w-5 fill-white text-white" />
              </span>
              <p className="font-display text-4xl font-extrabold leading-[1.1] text-white">
                বাংলাদেশ<br /><span className="text-gold">২০৪০</span>
              </p>
              <p className="mt-1.5 text-[11px] font-semibold text-white/80">এআই চোখে আমাদের ভবিষ্যৎ — ৪ মিনিটের ফিল্ম</p>
              <p className="mt-3 border-t border-white/20 pt-2 font-mono text-[8px] tracking-[0.2em] text-leafsoft">
                ফেস্টিভ্যাল প্রাঙ্গণ • প্রবেশ উন্মুক্ত
              </p>
            </div>
          </div>
        </div>
      )}

      {id === "poster-fair" && (
        <div className="absolute inset-0 bg-gradient-to-br from-gold via-[#f0a52e] to-[#e2762d] p-5 flex flex-col">
          <div className="absolute -left-10 top-10 rotate-[-12deg] bg-flag px-12 py-1.5 shadow-lg">
            <p className="font-display text-sm font-extrabold text-white">বিশাল ছাড়!</p>
          </div>
          <div className="mt-16">
            <p className="font-display text-4xl font-extrabold leading-[1.15] text-[#4a2506]">
              ডিজিটাল<br />মেলা
            </p>
            <p className="mt-2 text-[11px] font-bold text-[#6b3a10]">গ্যাজেট • ক্রাফট • এআই আর্ট</p>
          </div>
          <div className="mt-4 flex gap-2">
            {["#4a2506", "#c2182b", "#0a3328"].map((c) => (
              <span key={c} className="h-8 w-8 rounded-lg shadow-md" style={{ background: c }} />
            ))}
          </div>
          <div className="ticket-notch mt-auto flex items-center justify-between rounded-lg bg-[#4a2506] px-4 py-2.5">
            <p className="flex items-center gap-1.5 text-[10px] font-bold text-gold">
              <Ticket className="h-3.5 w-3.5" /> ফ্রি এন্ট্রি পাস
            </p>
            <p className="font-mono text-[8px] text-white/60">DYD • SECOND-BATCH</p>
          </div>
        </div>
      )}

      {id === "poster-youth" && (
        <div className="absolute inset-0 bg-moss p-5 flex flex-col items-center text-center overflow-hidden">
          <span className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-flag shadow-[0_0_80px_rgba(244,42,65,0.6)]" />
          <span className="relative inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-white border border-white/20">
            জাতীয় যুব দিবস
          </span>
          <p className="relative mt-16 font-display text-4xl font-extrabold leading-[1.15] text-white drop-shadow-lg">
            তরুণই<br />শক্তি
          </p>
          <p className="relative mt-3 text-[11px] font-bold text-white/90">স্মার্ট যুব • স্মার্ট দেশ</p>
          <div className="relative mt-auto w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 backdrop-blur-sm">
            <p className="font-mono text-[8px] tracking-[0.25em] text-white/80">#SMARTYOUTH2040</p>
          </div>
        </div>
      )}
    </div>
  );
}
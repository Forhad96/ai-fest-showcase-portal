import { useMemo, useState } from "react";
import { Award, Clapperboard, Clock3, Play, Sparkles, Users } from "lucide-react";
import { PREVIOUS_BATCH } from "../content";
import { Reveal, SectionHead } from "@/components/ui";

type VideoSource = { type: "youtube" | "vimeo" | "file" | "embed"; src: string } | null;

function resolveVideoSource(url: string): VideoSource {
  if (!url.trim()) return null;

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace("www.", "");

    if (host === "youtu.be") {
      return { type: "youtube", src: `https://www.youtube.com/embed/${parsed.pathname.slice(1)}?autoplay=1` };
    }
    if (host.includes("youtube.com")) {
      const id = parsed.searchParams.get("v") || parsed.pathname.split("/").filter(Boolean).pop();
      if (id) return { type: "youtube", src: `https://www.youtube.com/embed/${id}?autoplay=1` };
    }
    if (host.includes("vimeo.com")) {
      const id = parsed.pathname.split("/").filter(Boolean).pop();
      if (id) return { type: "vimeo", src: `https://player.vimeo.com/video/${id}?autoplay=1` };
    }
    if (/\.(mp4|webm|ogg)$/i.test(parsed.pathname)) return { type: "file", src: url };
    return { type: "embed", src: url };
  } catch {
    return null;
  }
}

export default function PreviousBatchSection() {
  const [playing, setPlaying] = useState(false);
  const source = useMemo(() => resolveVideoSource(PREVIOUS_BATCH.videoUrl), []);

  return (
    <section id="previous-batch" className="relative overflow-hidden bg-[#f4efe3]">
      <div className="absolute inset-0 bg-dots opacity-45" aria-hidden />
      <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border-[42px] border-gold/10" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHead
            eyebrow={PREVIOUS_BATCH.eyebrow}
            title={<>{PREVIOUS_BATCH.title}: <span className="text-moss">একটি অনুপ্রেরণার উত্তরাধিকার</span></>}
            desc="দ্বিতীয় ব্যাচের পক্ষ থেকে আমাদের পথপ্রদর্শক প্রথম ব্যাচের সৃজনশীল কাজের প্রতি কৃতজ্ঞতা ও সম্মান।"
          />
          <Reveal delay={120}>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/70 px-4 py-2 text-sm font-bold text-[#76520a] shadow-sm">
              <Award className="h-4 w-4 text-gold" /> First Batch Legacy
            </span>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Video preview */}
          <Reveal className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl border border-ink/10 bg-night shadow-2xl shadow-ink/20">
              <div className="relative aspect-video">
                {playing && source ? (
                  source.type === "file" ? (
                    <video src={source.src} poster={PREVIOUS_BATCH.poster} controls autoPlay playsInline className="h-full w-full bg-black object-contain" />
                  ) : (
                    <iframe
                      src={source.src}
                      title={PREVIOUS_BATCH.title}
                      className="h-full w-full border-0"
                      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                      allowFullScreen
                    />
                  )
                ) : (
                  <>
                    <img src={PREVIOUS_BATCH.poster} alt={`${PREVIOUS_BATCH.title} প্রিভিউ`} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-night via-night/10 to-night/25" />
                    <span className="absolute left-4 top-4 rounded-md bg-gold px-3 py-1.5 font-mono text-xs font-bold text-night">
                      FIRST BATCH ARCHIVE
                    </span>
                    {source ? (
                      <button
                        type="button"
                        onClick={() => setPlaying(true)}
                        className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        aria-label={PREVIOUS_BATCH.watchLabel}
                      >
                        <span className="absolute inset-0 rounded-full bg-flag animate-ringpulse" />
                        <span className="relative grid h-16 w-16 place-items-center rounded-full bg-flag text-white shadow-2xl shadow-flag/50 transition-transform group-hover:scale-110">
                          <Play className="ml-0.5 h-7 w-7 fill-current" />
                        </span>
                      </button>
                    ) : (
                      <div className="absolute left-1/2 top-1/2 w-[85%] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/20 bg-night/85 p-5 text-center backdrop-blur-md">
                        <Clapperboard className="mx-auto h-8 w-8 text-gold" />
                        <p className="mt-2 font-display text-lg font-bold text-white">{PREVIOUS_BATCH.pendingLabel}</p>
                        <p className="mt-1 text-xs text-white/65">`PREVIOUS_BATCH.videoUrl`-এ ভিডিও লিংক দিলেই প্লেয়ারটি সক্রিয় হবে।</p>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="font-display text-xl font-bold text-white sm:text-2xl">{PREVIOUS_BATCH.shortTitle}</p>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs font-semibold text-white/70">
                        <span className="flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5 text-gold" /> {PREVIOUS_BATCH.duration}</span>
                        <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-leafsoft" /> {PREVIOUS_BATCH.batch}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-inksoft">
              <Sparkles className="h-4 w-4 text-leaf" /> সম্পূর্ণ নির্মাণকাজ কৃত্রিম বুদ্ধিমত্তা প্রযুক্তির মাধ্যমে সম্পন্ন
            </div>
          </Reveal>

          {/* Recognition copy */}
          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <p className="font-display text-xl font-bold text-moss">{PREVIOUS_BATCH.introduction}</p>
            </Reveal>
            <div className="mt-4 space-y-4">
              {PREVIOUS_BATCH.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delay={140 + index * 70}>
                  <p className="text-base leading-[1.9] text-ink/80">{paragraph}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={360}>
              <blockquote className="mt-6 border-l-4 border-gold bg-white/70 px-5 py-4 shadow-sm">
                <p className="font-display text-lg font-semibold leading-relaxed text-ink">{PREVIOUS_BATCH.closing}</p>
                <footer className="mt-3 text-xs font-bold text-moss">— এআই কোর্স, দ্বিতীয় ব্যাচ, বান্দরবান শাখা</footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
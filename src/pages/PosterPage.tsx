import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Copy, Expand, Megaphone, User, X } from "lucide-react";
import { bn, COPY_CARDS, POSTERS, SITE } from "../content";
import { Chip, PageHero, Reveal, SectionHead } from "../components/ui";
import PosterArt from "../components/Posters";
import { GallerySiblings } from "./Photos";

export default function PosterPage() {
  const [zoom, setZoom] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoom(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoom]);

  const copyText = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(id);
    window.setTimeout(() => setCopied((c) => (c === id ? null : c)), 2200);
  };

  const zoomed = POSTERS.find((p) => p.id === zoom);

  return (
    <>
      <PageHero
        kicker={`গ্যালারি ০৩ • ${bn(POSTERS.length)}টি ডিজাইন + কপি`}
        title={<>{SITE.pageHeaders.posters.titleBefore}<span className="text-gold">{SITE.pageHeaders.posters.highlight}</span>{SITE.pageHeaders.posters.titleAfter}</>}
        desc={SITE.pageHeaders.posters.description}
        crumb={[{ label: "গ্যালারি", to: "/gallery" }]}
      >
        <GallerySiblings current="posters" />
      </PageHero>

      <section className="bg-mint bg-dots">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {POSTERS.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 90}>
                <article className="group rounded-2xl border border-ink/10 bg-white p-4 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1.5">
                  <button
                    onClick={() => setZoom(p.id)}
                    className="relative block w-full"
                    aria-label={`${p.title} — বড় করে দেখুন`}
                  >
                    <div className="transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
                      <PosterArt id={p.id} />
                    </div>
                    <span className="absolute inset-0 grid place-items-center rounded-xl bg-night/0 opacity-0 transition-all duration-300 group-hover:bg-night/40 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-ink shadow-xl">
                        <Expand className="h-4 w-4 text-leaf" /> বড় করে দেখুন
                      </span>
                    </span>
                  </button>
                  <div className="px-1.5 pt-4">
                    <h2 className="font-display text-lg font-bold text-ink">{p.title}</h2>
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-inksoft">
                        <User className="h-3.5 w-3.5 text-leaf" /> {p.student}
                      </span>
                      <Chip>{p.tool}</Chip>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}

            {/* copy CTA tile */}
            <Reveal delay={180}>
              <div className="flex h-full min-h-64 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-leaf/40 bg-leaf/5 p-8 text-center">
                <Megaphone className="h-10 w-10 text-leaf" />
                <p className="mt-3 font-display text-xl font-bold text-ink">ডিজাইনের সঙ্গী — কপি!</p>
                <p className="mt-2 text-sm text-inksoft">নিচে আছে এআই-লিখা রেডি-টু-পোস্ট মার্কেটিং ক্যাপশন, এক ক্লিকে কপি করুন।</p>
              </div>
            </Reveal>
          </div>

          {/* marketing copy */}
          <div className="mt-16">
            <SectionHead
              eyebrow="এআই মার্কেটিং কপি কর্নার"
              title={<>ক্যাপশন <span className="text-leaf">কপি করে নিন</span></>}
              desc="প্রতিটি কপি লেখা হয়েছে প্রম্পট ইঞ্জিনিয়ারিং দিয়ে — প্ল্যাটফর্মভেদে টোন বদলে দেখুন।"
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {COPY_CARDS.map((c, i) => (
                <Reveal key={c.id} delay={i * 100}>
                  <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-lg transition-all hover:shadow-2xl">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-flag/10 px-3 py-1 text-xs font-bold text-flagdeep">{c.platform}</span>
                      <span className="font-mono text-xs text-inksoft">AI-GENERATED</span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold text-ink">{c.title}</h3>
                    <p className="mt-2 flex-1 rounded-xl bg-mint p-4 text-sm leading-relaxed text-ink/85">{c.text}</p>
                    <button
                      onClick={() => copyText(c.id, c.text)}
                      className={`mt-4 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition-all ${
                        copied === c.id
                          ? "bg-leaf text-white"
                          : "bg-pine text-white hover:bg-moss hover:-translate-y-0.5"
                      }`}
                    >
                      {copied === c.id ? (
                        <>
                          <Check className="h-4 w-4" /> কপি হয়েছে!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" /> কপি করুন
                        </>
                      )}
                    </button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-pine p-7 text-white">
              <div>
                <p className="font-display text-xl font-bold">গ্যালারি ট্যুর শেষ — এবার মানুষগুলোকে চিনুন</p>
                <p className="text-sm text-white/70">যাদের হাতে তৈরি এই কাজগুলো, সেই ক্রিয়েটরদের চ্যানেল ও পেইজ।</p>
              </div>
              <Link to="/creators" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-leaf px-6 py-3 font-display font-bold text-white shadow-lg shadow-leaf/30 transition-all hover:bg-leafsoft hover:text-night hover:-translate-y-0.5">
                ক্রিয়েটর হাব <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* lightbox */}
      {zoomed && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-night/85 p-4 backdrop-blur-sm"
          onClick={() => setZoom(null)}
          role="dialog"
          aria-modal="true"
          aria-label={zoomed.title}
        >
          <div className="w-full max-w-sm animate-notedrop" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between text-white">
              <p className="font-display font-bold">{zoomed.title}</p>
              <button
                onClick={() => setZoom(null)}
                className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 transition-colors hover:bg-flag"
                aria-label="বন্ধ করুন"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <PosterArt id={zoomed.id} className="shadow-2xl" />
            <p className="mt-3 text-center text-xs text-white/70">
              ডিজাইন: {zoomed.student} • {zoomed.tool}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
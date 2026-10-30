import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Eye, LayoutGrid, User, X } from "lucide-react";
import { bn, SITE, SITES, type SiteWork } from "../content";
import { Chip, PageHero, Reveal } from "../components/ui";
import BrowserMockup from "../components/BrowserMockup";
import { GallerySiblings } from "./Photos";

const FILTERS = ["সব", "পোর্টফোলিও", "বিজনেস", "ব্লগ ও নিউজ", "শিক্ষা"] as const;

export default function WebsitesPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("সব");
  const [selected, setSelected] = useState<SiteWork | null>(null);

  const list = useMemo(
    () => (filter === "সব" ? SITES : SITES.filter((s) => s.category === filter)),
    [filter]
  );

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <PageHero
        kicker={`গ্যালারি ০২ • ${bn(SITES.length)}টি প্রিভিউ`}
        title={<>{SITE.pageHeaders.websites.titleBefore}<span className="text-leafsoft">{SITE.pageHeaders.websites.highlight}</span>{SITE.pageHeaders.websites.titleAfter}</>}
        desc={SITE.pageHeaders.websites.description}
        crumb={[{ label: "গ্যালারি", to: "/gallery" }]}
      >
        <GallerySiblings current="websites" />
      </PageHero>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          {/* filters */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <LayoutGrid className="h-4 w-4 text-inksoft mr-1" />
              {FILTERS.map((f) => {
                const count = f === "সব" ? SITES.length : SITES.filter((s) => s.category === f).length;
                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                      filter === f
                        ? "bg-pine text-white shadow-md"
                        : "border border-ink/15 bg-white text-inksoft hover:border-leaf hover:text-moss"
                    }`}
                    aria-pressed={filter === f}
                  >
                    {f} <span className="opacity-60">({bn(count)})</span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div className="mt-9 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {list.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 90}>
                <article className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-4 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1.5">
                  <button
                    onClick={() => setSelected(s)}
                    className="relative block w-full text-left"
                    aria-label={`${s.title} — বড় প্রিভিউ দেখুন`}
                  >
                    {s.img && <img src={s?.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
                    }
                    <BrowserMockup variant={s.variant} url={s.url} className="transition-transform duration-500 group-hover:scale-[1.02]" />
                    <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
                    <span className="absolute inset-0 grid place-items-center rounded-xl bg-night/0 opacity-0 transition-all duration-300 group-hover:bg-night/45 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-ink shadow-xl">
                        <Eye className="h-4 w-4 text-leaf" /> প্রিভিউ দেখুন
                      </span>
                    </span>
                  </button>
                  <div className="flex flex-1 flex-col px-1.5 pt-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded bg-mint px-2 py-0.5 text-xs font-bold text-moss">{s.category}</span>
                      <span className="flex items-center gap-1 text-xs font-semibold text-inksoft">
                        <User className="h-3 w-3" /> {s.student}
                      </span>
                    </div>
                    <h2 className="mt-2 font-display text-lg font-bold text-ink leading-snug">{s.title}</h2>
                    <p className="mt-1.5 text-sm text-inksoft leading-relaxed">{s.desc}</p>
                    <div className="mt-auto flex items-center gap-2 pt-4">
                      <button
                        onClick={() => setSelected(s)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-pine px-3 py-2.5 text-xs font-bold text-white transition-colors hover:bg-moss"
                      >
                        <Eye className="h-3.5 w-3.5" /> প্রিভিউ
                      </button>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-leaf/40 px-3 py-2.5 text-xs font-bold text-moss transition-colors hover:bg-leaf hover:text-white"
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> লাইভ সাইট
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-pine p-7 text-white">
              <div>
                <p className="font-display text-xl font-bold">কোডের পরে ক্যানভাস</p>
                <p className="text-sm text-white/70">পরের গ্যালারি — এআই মার্কেটিং পোস্টার ও সোশ্যাল মিডিয়া কপি।</p>
              </div>
              <Link to="/gallery/posters" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-flag px-6 py-3 font-display font-bold text-white shadow-lg shadow-flag/30 transition-all hover:bg-flagdeep hover:-translate-y-0.5">
                পোস্টার গ্যালারি <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* modal */}
      {selected && (
        <div
          className="fixed inset-0 z-80 grid place-items-center bg-night/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div
            className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl animate-notedrop"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3.5">
              <p className="font-display font-bold text-ink">{selected.title}</p>
              <button
                onClick={() => setSelected(null)}
                className="grid h-9 w-9 place-items-center rounded-lg text-inksoft transition-colors hover:bg-mint hover:text-flag"
                aria-label="বন্ধ করুন"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-y-auto p-5">
              <BrowserMockup variant={selected.variant} url={selected.url} />
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="rounded bg-mint px-2.5 py-1 text-xs font-bold text-moss">{selected.category}</span>
                <span className="text-xs font-semibold text-inksoft">— {selected.student}</span>
              </div>
              <p className="mt-2.5 text-sm text-inksoft leading-relaxed">{selected.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {selected.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-flag px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-flag/25 transition-colors hover:bg-flagdeep"
                >
                  <ExternalLink className="h-4 w-4" /> লাইভ ওয়েবসাইটে যান
                </a>
                <button
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center gap-2 rounded-lg border border-ink/15 px-5 py-2.5 text-sm font-bold text-inksoft transition-colors hover:bg-mint"
                >
                  গ্যালারিতে ফিরুন
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
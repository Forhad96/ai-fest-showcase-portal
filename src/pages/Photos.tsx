import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Globe, Loader2, Megaphone, Wand2, X, ZoomIn } from "lucide-react";
import { bn, PHOTO_WORKS, SITE } from "../content";
import { PageHero, Reveal } from "../components/ui";

// ---------- CONFIG ----------
const PAGE_SIZE = 12;   // Photos loaded per scroll step
const LOOP = false;     // true = endless: repeats the photos forever

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ---------- SIBLING TABS ----------
export function GallerySiblings({ current }: { current: "photos" | "websites" | "posters" }) {
  const items = [
    { key: "photos", to: "/gallery/photos", label: "ফটো এডিটিং", icon: Wand2 },
    { key: "websites", to: "/gallery/websites", label: "ওয়েবসাইট", icon: Globe },
    { key: "posters", to: "/gallery/posters", label: "পোস্টার ও কপি", icon: Megaphone },
  ] as const;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((s) => (
        <Link
          key={s.key}
          to={s.to}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all ${
            s.key === current
              ? "bg-leaf text-white shadow-lg shadow-leaf/30"
              : "border border-white/20 bg-white/5 text-white/70 hover:border-leafsoft hover:text-leafsoft"
          }`}
          aria-current={s.key === current ? "page" : undefined}
        >
          <s.icon className="h-3.5 w-3.5" /> {s.label}
        </Link>
      ))}
    </div>
  );
}

// ---------- PAGE ----------
export default function PhotosPage() {
  // Randomize photos on page reload
  const randomizedPhotos = useMemo(() => shuffleArray(PHOTO_WORKS), []);

  const total = randomizedPhotos.length;
  const [count, setCount] = useState(PAGE_SIZE);
  const [active, setActive] = useState<number | null>(null); // Index into randomizedPhotos
  const sentinel = useRef<HTMLDivElement | null>(null);

  const visible = LOOP ? count : Math.min(count, total);
  const hasMore = LOOP || count < total;

  // Flattened items list
  const items = useMemo(
    () =>
      Array.from({ length: visible }, (_, n) => ({
        n,
        idx: n % total,
        w: randomizedPhotos[n % total],
      })),
    [visible, total, randomizedPhotos]
  );

  // Infinite scroll trigger
  useEffect(() => {
    if (!hasMore || !sentinel.current) return;
    const el = sentinel.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCount((c) => c + PAGE_SIZE);
        }
      },
      { rootMargin: "600px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [hasMore, count]);

  // Lightbox handlers
  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + total) % total)),
    [total]
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % total)),
    [total]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close, prev, next]);

  const current = active !== null ? randomizedPhotos[active] : null;

  return (
    <>
      <PageHero
        kicker={`গ্যালারি ০১ • ${bn(total)}টি ছবি`}
        title={
          <>
            {SITE.pageHeaders.photos.titleBefore}
            <span className="text-leafsoft">{SITE.pageHeaders.photos.highlight}</span>
          </>
        }
        desc={SITE.pageHeaders.photos.description}
        crumb={[{ label: "গ্যালারি", to: "/gallery" }]}
      >
        <GallerySiblings current="photos" />
      </PageHero>

      <section className="bg-mint bg-dots">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* CSS Multi-Column Masonry (Balances bottom gaps automatically) */}
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
            {items.map(({ n, idx, w }) => (
              <div key={`${w.id}-${n}`} className="mb-5 break-inside-avoid">
                <Reveal delay={(n % 3) * 60}>
                  <button
                    type="button"
                    onClick={() => setActive(idx)}
                    aria-label={`${w.title} বড় করে দেখুন`}
                    className="group relative block w-full overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf"
                  >
                    <img
                      src={w.img}
                      alt={w.title}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-night/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex w-full items-center justify-between p-4 text-left text-white">
                        <span className="font-display text-sm font-bold">{w.title}</span>
                        <ZoomIn className="h-5 w-5 shrink-0 text-leafsoft" />
                      </div>
                    </div>
                  </button>
                </Reveal>
              </div>
            ))}
          </div>

          {/* Sentinel + Loader */}
          {hasMore ? (
            <div ref={sentinel} className="flex items-center justify-center gap-2 py-10 text-sm font-bold text-moss">
              <Loader2 className="h-5 w-5 animate-spin text-leaf" /> আরও ছবি লোড হচ্ছে...
            </div>
          ) : (
            <p className="py-10 text-center text-sm font-bold text-inksoft">সব ছবি দেখা শেষ 🎉</p>
          )}

          {/* CTA Banner */}
          <Reveal delay={150}>
            <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl bg-pine p-7 text-white sm:flex-row">
              <div>
                <p className="font-display text-xl font-bold">ছবি দেখা শেষ?</p>
                <p className="text-sm text-white/70">পরের গ্যালারিতে আছে শিক্ষার্থীদের হাতে-বানানো লাইভ ওয়েবসাইট।</p>
              </div>
              <Link
                to="/gallery/websites"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-leaf px-6 py-3 font-display font-bold text-white shadow-lg shadow-leaf/30 transition-all hover:-translate-y-0.5 hover:bg-leafsoft hover:text-night"
              >
                ওয়েবসাইট গ্যালারি <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox Modal */}
      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-night/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="বন্ধ করুন"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="আগের ছবি"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-leaf sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="পরের ছবি"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-leaf sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure className="flex max-h-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              key={current.id}
              src={current.img}
              alt={current.title}
              className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-white">
              <p className="font-display text-lg font-bold">{current.title}</p>
              <p className="mt-1 text-xs text-white/60">
                {bn((active ?? 0) + 1)} / {bn(total)}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
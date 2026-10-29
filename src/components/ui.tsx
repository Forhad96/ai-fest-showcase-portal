import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Sparkles } from "lucide-react";
import { bn, TICKER } from "../content";

/* ---------- scroll reveal ---------- */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------- section heading ---------- */
export function SectionHead({
  eyebrow,
  title,
  desc,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <p
        className={`font-mono text-xs sm:text-xs tracking-[0.28em] uppercase font-semibold ${
          dark ? "text-leafsoft" : "text-leaf"
        } ${center ? "justify-center" : ""} flex items-center gap-3`}
      >
        <span className="inline-block h-[2px] w-8 bg-flag" />
        {eyebrow}
        {center && <span className="inline-block h-[2px] w-8 bg-flag" />}
      </p>
      <h2
        className={`font-display font-bold leading-[1.25] mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-3 max-w-2xl text-base sm:text-base ${dark ? "text-white/65" : "text-inksoft"} ${center ? "mx-auto" : ""}`}>
          {desc}
        </p>
      )}
    </Reveal>
  );
}

/* ---------- chip ---------- */
export function Chip({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
        dark ? "bg-white/10 text-leafsoft border border-white/10" : "bg-leaf/10 text-moss border border-leaf/20"
      }`}
    >
      {children}
    </span>
  );
}

/* ---------- animated counter ---------- */
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);
  return (
    <span ref={ref}>
      {bn(n)}
      {suffix}
    </span>
  );
}

/* ---------- festival ticker ---------- */
export function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="marquee-hover relative overflow-hidden border-y-2 border-flag/60 bg-flagdeep py-3 text-white">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap pr-8">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-sm sm:text-base font-semibold">
            <span>{t}</span>
            <Sparkles className="h-4 w-4 shrink-0 text-gold" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- ambient rising particles ---------- */
export function Particles({ count = 14 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 37 + 11) % 100}%`,
        size: 2 + ((i * 13) % 4),
        dur: 9 + ((i * 7) % 12),
        delay: -((i * 3.1) % 14),
        red: i % 5 === 0,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((d) => (
        <span
          key={d.id}
          className="particle"
          style={{
            left: d.left,
            width: d.size,
            height: d.size,
            animationDuration: `${d.dur}s`,
            animationDelay: `${d.delay}s`,
            background: d.red ? "rgba(244,42,65,0.55)" : undefined,
          }}
        />
      ))}
    </div>
  );
}

/* ---------- sub-page hero band ---------- */
export function PageHero({
  kicker,
  title,
  desc,
  crumb = [],
  children,
}: {
  kicker: string;
  title: ReactNode;
  desc?: string;
  crumb?: { label: string; to: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-night bg-grid-dark text-white">
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(23,179,106,0.35), transparent 65%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-[-6%] h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(244,42,65,0.4), transparent 65%)" }}
        aria-hidden
      />
      <Particles count={10} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-14">
        <nav className="flex flex-wrap items-center gap-1.5 text-xs text-white/65" aria-label="breadcrumb">
          <Link to="/" className="hover:text-leafsoft transition-colors">
            হোম
          </Link>
          {crumb.map((c) => (
            <span key={c.to} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to={c.to} className="hover:text-leafsoft transition-colors">
                {c.label}
              </Link>
            </span>
          ))}
        </nav>
        <p className="mt-6 font-mono text-xs sm:text-xs tracking-[0.3em] uppercase text-leafsoft font-semibold flex items-center gap-3">
          <span className="inline-block h-[2px] w-8 bg-flag" />
          {kicker}
        </p>
        <h1 className="mt-3 font-display text-3xl sm:text-5xl font-bold leading-[1.25] max-w-3xl">{title}</h1>
        {desc && <p className="mt-4 max-w-2xl text-white/65 text-base sm:text-base">{desc}</p>}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  );
}
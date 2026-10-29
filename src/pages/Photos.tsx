import { Link } from "react-router-dom";
import { ArrowRight, Globe, Megaphone, MoveHorizontal, User, Wand2 } from "lucide-react";
import { bn, PHOTO_WORKS, SITE } from "../content";
import { Chip, PageHero, Reveal } from "../components/ui";
import BeforeAfter from "../components/BeforeAfter";

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

export default function PhotosPage() {
  return (
    <>
      <PageHero
        kicker={`গ্যালারি ০১ • ${bn(PHOTO_WORKS.length)}টি ট্রান্সফরমেশন`}
        title={<>{SITE.pageHeaders.photos.titleBefore}<span className="text-leafsoft">{SITE.pageHeaders.photos.highlight}</span></>}
        desc={SITE.pageHeaders.photos.description}
        crumb={[{ label: "গ্যালারি", to: "/gallery" }]}
      >
        <GallerySiblings current="photos" />
      </PageHero>

      <section className="bg-mint bg-dots">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <Reveal>
            <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-white px-4 py-2 text-xs font-bold text-moss shadow-sm">
              <MoveHorizontal className="h-4 w-4 text-leaf" />
              বাঁয়ে-ডানে টানুন — বাঁ পাশে “আগে”, ডান পাশে এআই-এনহ্যান্সড “পরে”
            </p>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2">
            {PHOTO_WORKS.map((w, i) => (
              <Reveal key={w.id} delay={(i % 2) * 100}>
                <article className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-lg transition-all hover:shadow-2xl">
                  <div className="p-4 pb-0">
                    <BeforeAfter src={w.img} alt={w.title} ratio={w.id === "p4" ? "aspect-[4/3]" : "aspect-[4/3.4]"} />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h2 className="font-display text-lg sm:text-xl font-bold text-ink">{w.title}</h2>
                      <span className="flex items-center gap-1.5 text-xs font-bold text-inksoft">
                        <User className="h-3.5 w-3.5 text-leaf" /> {w.student}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-inksoft leading-relaxed">{w.note}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {w.tools.map((t) => (
                        <Chip key={t}>{t}</Chip>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-pine p-7 text-white">
              <div>
                <p className="font-display text-xl font-bold">ফটো ম্যাজিক দেখা শেষ?</p>
                <p className="text-sm text-white/70">পরের গ্যালারিতে আছে শিক্ষার্থীদের হাতে-বানানো লাইভ ওয়েবসাইট।</p>
              </div>
              <Link to="/gallery/websites" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-leaf px-6 py-3 font-display font-bold text-white shadow-lg shadow-leaf/30 transition-all hover:bg-leafsoft hover:text-night hover:-translate-y-0.5">
                ওয়েবসাইট গ্যালারি <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
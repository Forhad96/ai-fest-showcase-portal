import { Link } from "react-router-dom";
import { ArrowRight, Globe, ImagePlay, Megaphone, MousePointerClick } from "lucide-react";
import { bn, IMG, PHOTO_WORKS, POSTERS, SITE, SITES } from "../content";
import { Chip, PageHero, Reveal } from "../components/ui";
import BeforeAfter from "../components/BeforeAfter";
import BrowserMockup from "../components/BrowserMockup";
import PosterArt from "../components/Posters";

const CATS = [
  {
    to: "/gallery/photos",
    no: "০১",
    icon: ImagePlay,
    title: "এআই ফটো এডিটিং গ্যালারি",
    desc: "সাধারণ ছবিকে এআই দিয়ে স্টুডিও কোয়ালিটি ও প্রফেশনাল ছবিতে রূপান্তর — Before & After স্লাইডারসহ ইন্টারঅ্যাকটিভ প্রিভিউ পেইজ।",
    count: `${bn(PHOTO_WORKS.length)}টি ট্রান্সফরমেশন`,
    accent: "text-leaf",
  },
  {
    to: "/gallery/websites",
    no: "০২",
    icon: Globe,
    title: "বহুবিধ ওয়েবসাইট প্রিভিউ গ্যালারি",
    desc: "শিক্ষার্থীরা ১ মাসে হাতে-কোড করে যে ওয়েবসাইটগুলো বানিয়েছে — থাম্বনেইলে ক্লিক করলেই বড় প্রিভিউ ও লাইভ সাইটে যাওয়ার লিংক।",
    count: `${bn(SITES.length)}টি লাইভ প্রিভিউ`,
    accent: "text-flag",
  },
  {
    to: "/gallery/posters",
    no: "০৩",
    icon: Megaphone,
    title: "মার্কেটিং ও সোশ্যাল মিডিয়া পোস্টার",
    desc: "ফেসবুক পোস্টার, ইভেন্ট ব্যানার আর এআই মার্কেটিং কপির সৃজনশীল সংগ্রহ — কপি-বাটনসহ রেডি-টু-ইউজ ক্যাপশন।",
    count: `${bn(POSTERS.length)}টি ডিজাইন + কপি`,
    accent: "text-gold",
  },
];

export default function GalleryHub() {
  return (
    <>
      <PageHero
        kicker={SITE.pageHeaders.gallery.kicker}
        title={<>{SITE.pageHeaders.gallery.titleBefore}<span className="text-leafsoft">{SITE.pageHeaders.gallery.highlight}</span>{SITE.pageHeaders.gallery.titleAfter}</>}
        desc={SITE.pageHeaders.gallery.description}
        crumb={[{ label: "গ্যালারি", to: "/gallery" }]}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-white/70">
          <MousePointerClick className="h-4 w-4 text-gold" /> প্রতিটি কার্ডই একটি আলাদা পেইজের দরজা
        </span>
      </PageHero>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-10">
          {CATS.map((c, i) => (
            <Reveal key={c.to} delay={i * 80}>
              <Link
                to={c.to}
                className={`group grid gap-8 overflow-hidden rounded-3xl border border-ink/10 bg-white p-6 sm:p-8 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 lg:grid-cols-2 lg:items-center ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="[direction:ltr]">
                  {i === 0 && (
                    <div className="mx-auto max-w-md">
                      <BeforeAfter src={IMG.portraitWoman} alt="এআই ফটো এনহ্যান্সমেন্ট প্রিভিউ" ratio="aspect-[16/10]" />
                    </div>
                  )}
                  {i === 1 && (
                    <div className="relative mx-auto max-w-md">
                      <div className="absolute -left-4 top-6 w-3/5 rotate-[-5deg] opacity-80 transition-transform duration-500 group-hover:rotate-[-8deg]">
                        <BrowserMockup variant="restaurant" url="https://swaddesh-dyd.github.io" />
                      </div>
                      <div className="relative ml-auto w-3/4 transition-transform duration-500 group-hover:rotate-2 group-hover:scale-[1.03]">
                        <BrowserMockup variant="news" url="https://sobujbangla-dyd.github.io" />
                      </div>
                    </div>
                  )}
                  {i === 2 && (
                    <div className="relative mx-auto flex max-w-md items-end justify-center gap-4 py-2">
                      <div className="w-2/5 rotate-[-6deg] transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:-translate-y-1">
                        <PosterArt id="poster-admission" />
                      </div>
                      <div className="w-2/5 rotate-[4deg] transition-transform duration-500 group-hover:rotate-[8deg] group-hover:-translate-y-2">
                        <PosterArt id="poster-fair" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="[direction:ltr]">
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-display text-6xl font-extrabold ${c.accent}`}
                      style={{ WebkitTextFillColor: "transparent", WebkitTextStroke: "2px currentColor" }}
                    >
                      {c.no}
                    </span>
                    <span className={`grid h-12 w-12 place-items-center rounded-xl bg-mint ${c.accent}`}>
                      <c.icon className="h-6 w-6" />
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-ink group-hover:text-moss transition-colors">
                    {c.title}
                  </h2>
                  <p className="mt-3 text-inksoft text-base">{c.desc}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <span className="inline-flex items-center gap-2 rounded-lg bg-pine px-5 py-2.5 text-sm font-bold text-white transition-all group-hover:bg-moss">
                      সাব-পেইজে যান <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                    </span>
                    <Chip>{c.count}</Chip>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
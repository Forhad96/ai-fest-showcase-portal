import { Link } from "react-router-dom";
import { ArrowRight, Globe, ImagePlay, MousePointerClick } from "lucide-react";
import { bn, PHOTO_WORKS, SITE, SITES } from "../content";
import { Chip, PageHero, Reveal } from "../components/ui";
import BrowserMockup from "../components/BrowserMockup";

const CATS = [
  {
    to: "/gallery/photos",
    no: "০১",
    icon: ImagePlay,
    title: "এআই ফটো আর্ট ও পোর্ট্রেট গ্যালারি",
    desc: "এআই প্রযুক্তিতে তৈরি ও নিখুঁতভাবে এডিট করা সব আকর্ষণীয় ছবির এক্সক্লুসিভ কালেকশন — ক্রিয়েটিভ ফটো ও আর্টওয়ার্ক এক নজরে দেখার জন্য।",
    previewType: "photo",
    count: `${bn(PHOTO_WORKS.length)}টি ছবি`,
    accent: "text-leaf",
    bgAccent: "bg-leaf/10",
  },
  {
    to: "/gallery/websites",
    no: "০২",
    icon: Globe,
    title: "শিক্ষার্থীদের লাইভ ওয়েবসাইট প্রজেক্ট",
    desc: "১ মাসের নিবিড় প্রশিক্ষণে শিক্ষার্থীদের হাতে তৈরি রেসপন্সিভ প্রজেক্ট — সরাসরি লাইভ সাইট পরিদর্শনের সুযোগ।",
    previewType: "website",
    count: `${bn(SITES.length)}টি লাইভ প্রিভিউ`,
    accent: "text-flag",
    bgAccent: "bg-flag/10",
  },
];

export default function GalleryHub() {
  const photoPreviews = PHOTO_WORKS.slice(0, 3);

  return (
    <>
      <PageHero
        kicker={SITE.pageHeaders.gallery.kicker}
        title={
          <>
            {SITE.pageHeaders.gallery.titleBefore}
            <span className="text-leafsoft">{SITE.pageHeaders.gallery.highlight}</span>
            {SITE.pageHeaders.gallery.titleAfter}
          </>
        }
        desc={SITE.pageHeaders.gallery.description}
        crumb={[{ label: "গ্যালারি", to: "/gallery" }]}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur-sm">
          <MousePointerClick className="h-4 w-4 text-gold" /> প্রতিটি কার্ডে ক্লিক করে সম্পূর্ণ গ্যালারি দেখুন
        </span>
      </PageHero>

      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          {CATS.map((c, i) => {
            const isReversed = i % 2 === 1;

            return (
              <Reveal key={c.to} delay={i * 80}>
                <Link
                  to={c.to}
                  className="group grid grid-cols-1 gap-8 lg:gap-12 overflow-hidden rounded-3xl border border-ink/10 bg-white p-6 sm:p-10 shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 lg:grid-cols-2 lg:items-center"
                >
                  {/* Visual Preview */}
                  <div className={`w-full flex justify-center items-center ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    {c.previewType === "photo" && (
                      <div className="relative flex w-full max-w-md items-center justify-center py-6">
                        {photoPreviews[0] && (
                          <div className="w-1/2 -rotate-6 overflow-hidden rounded-2xl border-2 border-white shadow-lg transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-105">
                            <img
                              src={photoPreviews[0].after || photoPreviews[0].src || photoPreviews[0]}
                              alt="ফটো প্রিভিউ ১"
                              className="aspect-[4/5] w-full object-cover"
                            />
                          </div>
                        )}
                        {photoPreviews[1] && (
                          <div className="relative -ml-10 z-10 w-1/2 rotate-3 overflow-hidden rounded-2xl border-2 border-white shadow-2xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                            <img
                              src={photoPreviews[1].after || photoPreviews[1].src || photoPreviews[1]}
                              alt="ফটো প্রিভিউ ২"
                              className="aspect-[4/5] w-full object-cover"
                            />
                          </div>
                        )}
                        {photoPreviews[2] && (
                          <div className="relative -ml-10 w-2/5 -rotate-3 overflow-hidden rounded-2xl border-2 border-white shadow-md opacity-85 transition-transform duration-500 group-hover:rotate-12 group-hover:opacity-100">
                            <img
                              src={photoPreviews[2].after || photoPreviews[2].src || photoPreviews[2]}
                              alt="ফটো প্রিভিউ ৩"
                              className="aspect-[4/5] w-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                    )}

                    {c.previewType === "website" && (
                      <div className="relative w-full max-w-md py-6">
                        <div className="absolute left-2 top-2 w-3/5 rotate-[-5deg] opacity-75 shadow-lg transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105">
                          <BrowserMockup variant="restaurant" url="https://swaddesh-dyd.github.io" />
                        </div>
                        <div className="relative ml-auto w-3/4 shadow-xl transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.03]">
                          <BrowserMockup variant="news" url="https://sobujbangla-dyd.github.io" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Info Section */}
                  <div className={`flex flex-col justify-center ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-display text-5xl sm:text-6xl font-extrabold ${c.accent}`}
                        style={{
                          WebkitTextFillColor: "transparent",
                          WebkitTextStroke: "2px currentColor",
                        }}
                      >
                        {c.no}
                      </span>
                      <span className={`grid h-12 w-12 place-items-center rounded-2xl ${c.bgAccent} ${c.accent}`}>
                        <c.icon className="h-6 w-6" />
                      </span>
                    </div>

                    <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-ink transition-colors group-hover:text-moss">
                      {c.title}
                    </h2>

                    <p className="mt-3 text-base text-inksoft leading-relaxed">
                      {c.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <span className="inline-flex items-center gap-2 rounded-xl bg-pine px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 group-hover:bg-moss shadow-sm group-hover:shadow">
                        ছবিগুলো দেখুন
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </span>
                      <Chip>{c.count}</Chip>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
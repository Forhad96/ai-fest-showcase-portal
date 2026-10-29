import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Search, SearchX, Star, Users } from "lucide-react";
import { bn, FB_CREATORS, SITE, YT_CREATORS, type Creator } from "../content";
import { PageHero, Reveal } from "../components/ui";
import { FacebookIcon, YoutubeIcon } from "../components/brands";

type Tab = "all" | "yt" | "fb";

function CreatorCard({ c, platform, delay }: { c: Creator; platform: "yt" | "fb"; delay: number }) {
  const link =
    platform === "yt"
      ? `https://www.youtube.com/results?search_query=${encodeURIComponent(c.handle)}`
      : `https://www.facebook.com/search/pages?q=${encodeURIComponent(c.handle)}`;
  return (
    <Reveal delay={delay}>
      <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1.5 hover:bg-white/10 hover:border-leaf/40 hover:shadow-2xl hover:shadow-black/40">
        <div className="flex items-start justify-between">
          <span
            className="grid h-14 w-14 place-items-center rounded-2xl font-display text-xl font-bold text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3"
            style={{ background: c.color }}
          >
            {c.name.charAt(0)}
          </span>
          <span
            className={`grid h-9 w-9 place-items-center rounded-lg ${
              platform === "yt" ? "bg-flag/15 text-flag" : "bg-[#1877f2]/15 text-[#4a9af5]"
            }`}
          >
            {platform === "yt" ? <YoutubeIcon className="h-5 w-5" /> : <FacebookIcon className="h-5 w-5" />}
          </span>
        </div>
        <h3 className="mt-4 font-display text-lg font-bold leading-snug">{c.handle}</h3>
        <p className="text-xs text-white/65">{c.name}</p>
        <p className="mt-2.5 inline-block w-max rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-leafsoft">
          {c.niche}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/70">{c.about}</p>
        <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-4 text-xs text-white/70">
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-gold" />
            <strong className="text-white">{c.followers}</strong> ফলোয়ার
          </span>
          <span>{c.works}</span>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={`mt-4 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 ${
            platform === "yt"
              ? "bg-flag shadow-lg shadow-flag/25 hover:bg-flagdeep"
              : "bg-[#1877f2] shadow-lg shadow-[#1877f2]/25 hover:bg-[#0f5fd0]"
          }`}
        >
          <ExternalLink className="h-4 w-4" />
          {platform === "yt" ? "চ্যানেল ভিজিট করুন" : "পেইজ ভিজিট করুন"}
        </a>
      </article>
    </Reveal>
  );
}

export default function CreatorsPage() {
  const [tab, setTab] = useState<Tab>("all");
  const [q, setQ] = useState("");

  const match = (c: Creator) =>
    !q.trim() ||
    [c.name, c.handle, c.niche].some((v) => v.toLowerCase().includes(q.trim().toLowerCase()));

  const yt = useMemo(() => YT_CREATORS.filter(match), [q]);
  const fb = useMemo(() => FB_CREATORS.filter(match), [q]);
  const total = (tab === "yt" ? yt.length : tab === "fb" ? fb.length : yt.length + fb.length);

  return (
    <>
      <PageHero
        kicker={SITE.pageHeaders.creators.kicker}
        title={<>{SITE.pageHeaders.creators.titleBefore}<span className="text-flag">{SITE.pageHeaders.creators.highlight}</span>{SITE.pageHeaders.creators.titleAfter}</>}
        desc={SITE.pageHeaders.creators.description}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex rounded-xl border border-white/15 bg-white/5 p-1">
            {(
              [
                { key: "all", label: `সব (${bn(YT_CREATORS.length + FB_CREATORS.length)})` },
                { key: "yt", label: `ইউটিউব (${bn(YT_CREATORS.length)})` },
                { key: "fb", label: `ফেসবুক (${bn(FB_CREATORS.length)})` },
              ] as const
            ).map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                  tab === t.key ? "bg-leaf text-white shadow-lg shadow-leaf/30" : "text-white/65 hover:text-white"
                }`}
                aria-pressed={tab === t.key}
              >
                {t.label}
              </button>
            ))}
          </div>
          <label className="relative flex-1 max-w-xs">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="নাম বা বিষয় খুঁজুন…"
              className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-leafsoft focus:ring-2 focus:ring-leaf/30"
              aria-label="ক্রিয়েটর খুঁজুন"
            />
          </label>
        </div>
      </PageHero>

      <section className="relative bg-night text-white">
        <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-sm font-bold text-white/65">
            দেখানো হচ্ছে <span className="text-leafsoft">{bn(total)}</span>টি ক্রিয়েটর প্রোফাইল
          </p>

          {total === 0 && (
            <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-14 text-center">
              <SearchX className="h-10 w-10 text-flag" />
              <p className="font-display text-xl font-bold">“{q}” নামে কিছু পাওয়া যায়নি</p>
              <button onClick={() => setQ("")} className="text-sm font-bold text-leafsoft hover:text-white transition-colors">
                সার্চ মুছে সব দেখুন
              </button>
            </div>
          )}

          {(tab === "all" || tab === "yt") && yt.length > 0 && (
            <div className="mt-10">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-flag text-white shadow-lg shadow-flag/30">
                  <YoutubeIcon className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-bold">ইউটিউব চ্যানেল শোকেস</h2>
                  <p className="text-xs text-white/65">এআই ভিডিও, টিউটোরিয়াল ও শর্টফিল্মের চ্যানেলগুলো</p>
                </div>
              </div>
              <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {yt.map((c, i) => (
                  <CreatorCard key={c.id} c={c} platform="yt" delay={(i % 3) * 90} />
                ))}
              </div>
            </div>
          )}

          {(tab === "all" || tab === "fb") && fb.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#1877f2] text-white shadow-lg shadow-[#1877f2]/30">
                  <FacebookIcon className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-bold">ফেসবুক পেইজ শোকেস</h2>
                  <p className="text-xs text-white/65">নিয়মিত কনটেন্ট ও ব্র্যান্ডিংয়ে সক্রিয় পেইজগুলো</p>
                </div>
              </div>
              <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {fb.map((c, i) => (
                  <CreatorCard key={c.id} c={c} platform="fb" delay={(i % 3) * 90} />
                ))}
              </div>
            </div>
          )}

          <Reveal delay={150}>
            <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-leaf/30 bg-leaf/10 p-9 text-center">
              <p className="font-display text-2xl font-bold">সবার কাজ দেখা হলো — এবার আপনার পালা</p>
              <p className="max-w-lg text-sm text-white/65">
                কোন চ্যানেল বা পেইজ সবচেয়ে ভালো লাগল? বিচারক ও দর্শক হিসেবে আপনার একটি রেটিং এই তরুণ ক্রিয়েটরদের অনেক দূর এগিয়ে নেবে।
              </p>
              <Link to="/feedback" className="inline-flex items-center gap-2 rounded-lg bg-flag px-7 py-3 font-display font-bold text-white shadow-lg shadow-flag/30 transition-all hover:bg-flagdeep hover:-translate-y-0.5">
                <Star className="h-4 w-4" /> মতামত কর্নারে যান
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
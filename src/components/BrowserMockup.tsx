import type { SiteWork } from "../content";

type Variant = SiteWork["variant"];

function Bar({ w, c = "bg-ink/15", h = "h-1.5" }: { w: string; c?: string; h?: string }) {
  return <div className={`${h} ${w} ${c} rounded-full`} />;
}

function Body({ variant }: { variant: Variant }) {
  switch (variant) {
    case "portfolio":
      return (
        <div className="h-full bg-[#0b1f18] p-3 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#17b36a]" />
              <Bar w="w-10" c="bg-white/40" />
            </div>
            <div className="flex gap-1.5"><Bar w="w-5" c="bg-white/20" /><Bar w="w-5" c="bg-white/20" /><Bar w="w-5" c="bg-white/20" /></div>
          </div>
          <div className="mt-2 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#17b36a] to-[#f2b63c] ring-2 ring-[#17b36a]/50" />
            <div className="space-y-1.5">
              <p className="text-[10px] font-bold text-white leading-none">হাই, আমি রাকিব 👋</p>
              <Bar w="w-24" c="bg-[#4ade9b]/60" />
              <Bar w="w-16" c="bg-white/20" />
            </div>
          </div>
          <div className="mt-1 flex gap-1.5">
            <span className="rounded bg-[#17b36a] px-2 py-0.5 text-[7px] font-bold text-white">প্রজেক্ট দেখুন</span>
            <span className="rounded border border-white/25 px-2 py-0.5 text-[7px] text-white/70">যোগাযোগ</span>
          </div>
          <div className="mt-auto grid grid-cols-3 gap-1.5">
            {["HTML", "CSS", "AI"].map((s) => (
              <div key={s} className="rounded bg-white/5 border border-white/10 p-1.5 text-center text-[7px] text-[#4ade9b] font-bold">{s}</div>
            ))}
          </div>
        </div>
      );
    case "restaurant":
      return (
        <div className="h-full bg-[#fff8ef] flex flex-col">
          <div className="bg-[#c2182b] px-3 py-1.5 flex items-center justify-between">
            <p className="text-[9px] font-bold text-white">স্বাদদেশ 🍛</p>
            <div className="flex gap-1.5"><Bar w="w-5" c="bg-white/50" /><Bar w="w-5" c="bg-white/50" /></div>
          </div>
          <div className="p-3 flex gap-3 items-center">
            <div className="space-y-1.5 flex-1">
              <p className="text-[10px] font-extrabold text-[#5b1a10] leading-tight">আসল দেশি স্বাদ,<br />এক ক্লিকে ঘরে</p>
              <span className="inline-block rounded-full bg-[#f2b63c] px-2 py-0.5 text-[7px] font-bold text-[#5b1a10]">অর্ডার করুন</span>
            </div>
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#f2b63c] via-[#e2762d] to-[#c2182b] ring-4 ring-[#f2b63c]/40 shadow-lg" />
          </div>
          <div className="mt-auto px-3 pb-2 space-y-1">
            {[["কাচ্চি বিরিয়ানি", "৳ ২৫০"], ["ভুনা খিচুড়ি", "৳ ১৮০"]].map(([n, p]) => (
              <div key={n} className="flex items-center justify-between rounded bg-white border border-[#f0dfc8] px-2 py-1">
                <span className="text-[7px] font-semibold text-[#5b1a10]">{n}</span>
                <span className="text-[7px] font-bold text-[#c2182b]">{p}</span>
              </div>
            ))}
          </div>
        </div>
      );
    case "news":
      return (
        <div className="h-full bg-white p-3 flex flex-col gap-2">
          <div className="flex items-center justify-between border-b-2 border-[#0d2b21] pb-1.5">
            <p className="text-[10px] font-extrabold text-[#0d2b21]">সবুজবাংলা</p>
            <span className="rounded-sm bg-[#f42a41] px-1.5 py-0.5 text-[6px] font-bold text-white">ব্রেকিং</span>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 space-y-1.5">
              <p className="text-[8px] font-bold text-[#0d2b21] leading-snug">এআই শিখে বদলে যাচ্ছে গ্রামের তরুণেরা</p>
              <Bar w="w-full" /><Bar w="w-11/12" /><Bar w="w-4/5" /><Bar w="w-full" />
            </div>
            <div className="w-16 shrink-0 rounded bg-gradient-to-br from-[#17b36a] to-[#0a3328]" />
          </div>
          <div className="mt-auto grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-1">
                <div className="h-6 rounded bg-[#e5efe8]" />
                <Bar w="w-full" /><Bar w="w-3/4" />
              </div>
            ))}
          </div>
        </div>
      );
    case "shop":
      return (
        <div className="h-full bg-[#fdf6f0] flex flex-col">
          <div className="flex items-center justify-between px-3 py-1.5 bg-white border-b border-[#f0e0d0]">
            <p className="text-[9px] font-bold text-[#8c2f4f]">নন্দিনী</p>
            <div className="h-3 w-14 rounded-full bg-[#f5e8dc]" />
            <span className="h-3 w-3 rounded-full bg-[#f2b63c]" />
          </div>
          <div className="mx-3 mt-2 rounded bg-gradient-to-r from-[#8c2f4f] to-[#c85a3f] px-2 py-1.5">
            <p className="text-[8px] font-bold text-white">জামদানি উৎসব — বিশাল ছাড়</p>
          </div>
          <div className="mt-auto grid grid-cols-3 gap-1.5 p-3 pt-2">
            {["#8c2f4f", "#17b36a", "#f2b63c"].map((c, i) => (
              <div key={i} className="rounded bg-white border border-[#f0e0d0] p-1 space-y-1">
                <div className="h-8 rounded-sm" style={{ background: `linear-gradient(135deg, ${c}, ${c}88)` }} />
                <Bar w="w-full" c="bg-[#8c2f4f]/20" />
                <p className="text-[6px] font-bold text-[#8c2f4f]">৳ ১,২৫০</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "travel":
      return (
        <div className="h-full bg-[#f0f9f7] flex flex-col">
          <div className="bg-gradient-to-br from-[#0e7490] to-[#17b36a] p-3 pb-4">
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-bold text-white">ভ্রমণসঙ্গী ✈</p>
              <Bar w="w-8" c="bg-white/40" />
            </div>
            <p className="mt-1.5 text-[10px] font-extrabold text-white leading-tight">ঘুরে আসুন সবুজ বাংলাদেশ</p>
            <div className="mt-1.5 h-4 w-3/4 rounded-full bg-white/90 px-2 flex items-center">
              <span className="text-[6px] text-[#0e7490]/60">কোথায় যেতে চান?</span>
            </div>
          </div>
          <div className="mt-auto grid grid-cols-3 gap-1.5 p-3 pt-2">
            {[
              ["সাজেক", "#0e7490"],
              ["সুন্দরবন", "#166534"],
              ["কক্সবাজার", "#e2762d"],
            ].map(([n, c]) => (
              <div key={n} className="relative h-10 overflow-hidden rounded" style={{ background: `linear-gradient(160deg, ${c}, #04321f)` }}>
                <span className="absolute bottom-1 left-1 text-[6px] font-bold text-white">{n}</span>
              </div>
            ))}
          </div>
        </div>
      );
    case "school":
      return (
        <div className="h-full bg-white flex flex-col">
          <div className="bg-[#1d4ed8] px-3 py-1.5 flex items-center gap-2">
            <span className="grid h-4 w-4 place-items-center rounded-full bg-white text-[7px] font-bold text-[#1d4ed8]">আ</span>
            <p className="text-[9px] font-bold text-white">আলোর পাঠশালা</p>
          </div>
          <div className="flex flex-1 gap-2 p-3">
            <div className="flex-1 space-y-1.5">
              <p className="text-[7px] font-bold text-[#1d4ed8]">📌 নোটিশ বোর্ড</p>
              {["বার্ষিক পরীক্ষার রুটিন", "বিজ্ঞান মেলা নিবন্ধন", "অভিভাবক সমাবেস"].map((n) => (
                <div key={n} className="flex items-center gap-1.5 rounded border border-[#dbeafe] bg-[#eff6ff] px-1.5 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f42a41]" />
                  <span className="text-[6px] font-semibold text-[#1e3a5f]">{n}</span>
                </div>
              ))}
            </div>
            <div className="w-14 shrink-0 rounded bg-[#eff6ff] border border-[#dbeafe] p-1.5 grid grid-cols-4 gap-0.5 content-start">
              {Array.from({ length: 12 }, (_, i) => (
                <span key={i} className={`h-1.5 rounded-[2px] ${i === 5 ? "bg-[#f42a41]" : "bg-[#93c5fd]"}`} />
              ))}
            </div>
          </div>
        </div>
      );
  }
}

export default function BrowserMockup({
  variant,
  url,
  className = "",
}: {
  variant: Variant;
  url: string;
  className?: string;
}) {
  const host = url.replace(/^https?:\/\//, "");
  return (
    <div className={`overflow-hidden rounded-xl border border-ink/10 bg-white shadow-lg ${className}`} aria-hidden>
      <div className="flex items-center gap-2 bg-[#e8ede9] px-3 py-2 border-b border-ink/10">
        <span className="h-2.5 w-2.5 rounded-full bg-[#f42a41]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f2b63c]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#17b36a]" />
        <span className="ml-2 flex-1 truncate rounded-md bg-white px-2.5 py-0.5 font-mono text-[9px] text-inksoft">
          {host}
        </span>
      </div>
      <div className="aspect-[16/10]">
        <Body variant={variant} />
      </div>
    </div>
  );
}
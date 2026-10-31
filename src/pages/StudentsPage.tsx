import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { bn } from "../content";
import { PageHero, Reveal } from "../components/ui";

type Person = {
  id: string;
  name: string;
  role?: string;
  img: string;
  quote?: string;
};

// ---------- DATA ----------
// Add every teacher here. Copy the object block for each new teacher.
const TEACHERS: Person[] = [
    {
    id: "t1",
    name: "ফাইজারুল ইসলাম মিঠু",
    role: "কো-অর্ডিনেটর",
    img: "https://i.postimg.cc/9fG4bj7x/pha-ija-ra-la-isala-ma-ma-tha.jpg",
  },
  {
    id: "t2",
    name: "মোহাম্মদ ফখরুল ইসলাম",
    role: "আর্টিফিশিয়াল ইন্টেলিজেন্স",
    img: "https://i.postimg.cc/90yQBdKh/ma-ha-ma-mada-phakhara-la-isala-ma.jpg",
    quote: "তোমরাই আমার গর্ব।",
  },

  {
    id: "t3",
    name: "মেহেদী হাসান",
    role: "ডিজিটাল মার্কেটিং অ্যান্ড ফ্রি-ল্যান্সিং",
    img: "https://i.postimg.cc/Cx9DJN6f/ma-ha-da-ha-sa-na.jpg",
  },
  {
    id: "t4",
    name: "তানভীর হোসাইন",
    role: "সফটওয়্যার অ্যান্ড ওয়েব ডেভেলপার",
    img: "https://i.postimg.cc/sDXhr8kG/ta-nabha-ra-ha-sa-ina.jpg",
  },

    {
    id: "t5",
    name: "শুভ রুদ্র",
    role: "ডিজিটাল মার্কেটিং অ্যান্ড ফ্রি-ল্যান্সিং",
    img: "https://i.postimg.cc/Vv4nRP2D/sa-bha-ra-da-ra.jpg",
  },
    {
    id: "t6",
    name: "খোরশেদুল আলম",
    role: "অ্যাসিস্ট্যান্ট কো-অর্ডিনেটর",
    img: "https://i.postimg.cc/Vv4nRP2D/sa-bha-ra-da-ra.jpg",
  },
];

// IDs must be unique. Image URLs must be DIRECT links (i.postimg.cc / i.ibb.co ... .jpg/.png)
export const STUDENTS: Person[] = [
  { id: "s1", name:"ফরহাদ হোসেন" , img: "https://i.postimg.cc/g0Vtdfv2/Serious-Bearded-Man-Portrait-png-20261025115812.jpg" },
  { id: "s2", name: "সালমা আক্তার", img: "https://i.ibb.co.com/1BdNg1g/Whats-App-Image-2026-10-30-at-5-22-30-PM.jpg" },
  { id: "s3", name: "সিদরাতুল মুনতাহা শোভা", img: "https://i.postimg.cc/gJ8xMbLB/montahaw.jpg" },
  { id: "s4", name: "রোকসানা রৌশন", img: "https://i.postimg.cc/yNsXhWSy/rousan-apu.jpg" },
  { id: "s5", name: "কৌশিক দাশ", img: "https://i.postimg.cc/Ghv7n4GG/kousiik.jpg" },
  { id: "s6", name: "আজিজুল হক তানভীর", img: "https://i.postimg.cc/fT7Gj22Q/tanvir.jpg"},
  { id: "s7", name: "ইসরাত জাহান", img: "https://i.postimg.cc/mr7Ct9Z0/israt.jpg"},
  { id: "s8", name: "মোঃ ইমরানুল হক", img: "https://i.postimg.cc/rmnmmyWk/ma-imara-na-la-haka.jpg"},
  { id: "s9", name: "তৌহিদুল ইসলাম", img: "https://i.postimg.cc/G90b84mq/tawhid.png"},
  { id: "s10", name: "তাহসিন ইসলাম রাসেল", img: "https://i.postimg.cc/sxWvNdQr/ta-hasa-na-isala-ma-ra-sa-la.jpg"},
  { id: "s11", name: "সাইশৈ মার্মা", img: "https://i.postimg.cc/ydcKqVP3/sa-isa-ma-ra-ma.jpg"},
  { id: "s12", name: "আনোয়ার হোসেন", img: "https://i.postimg.cc/4NBgR26T/Whats-App-Image-2026-10-31-at-10-37-32-AM.jpg"},
  { id: "s13", name: "সানজিদা সুলতানা প্রিয়া", img: "https://i.postimg.cc/PNGKgjSP/priya.jpg"},
  { id: "s14", name: "মোহাম্মদ শাহাজাহান", img: "https://i.postimg.cc/L5Jz4bJC/shajahan.jpg"},
  { id: "s15", name: "মোঃ আবু ছিদ্দীক আকিব", img: "https://i.postimg.cc/QdhJ1Swd/ma-aba-cha-da-da-ka-aka-ba.jpg"},
  { id: "s16", name: "তরিকুল ইসলাম তরিক", img: "https://i.postimg.cc/sx55ZZJW/tara-ka-la-isala-ma-tara-ka.jpg"},
  { id: "s17", name: "মুহাম্মদ সাখাওয়াত হোসেন", img: "https://i.postimg.cc/W1N0hzFC/ma-ha-ma-mada-sa-kha-oya-ta-ha-sa-na.jpg"},
  { id: "s18", name: "মোহাম্মদ জিশান উদ্দিন", img: "https://i.postimg.cc/ydZZwSth/ma-ha-ma-mada-ja-sa-na-uda-da-na.jpg"},
  { id: "s19", name: "মংহলাপ্রু খেয়াং", img: "https://i.postimg.cc/zXjgZNtk/ma-hala-pa-ra-kha-ya.jpg"},
  { id: "s20", name: "নিবিড় চাকমা", img: "https://i.postimg.cc/bvHxJnL4/nibir-chak.jpg"},
  { id: "s21", name: "মোঃ হাসান সোহেল", img: "https://i.postimg.cc/667hV8Qz/hasan.jpg"},
  { id: "s22", name: "ইসমাইল হোসেন ইমন", img: "https://i.postimg.cc/yxq3yYf2/imon.jpg"},
  { id: "s23", name: "উম্রাসিং মার্মা", img: "https://i.postimg.cc/3Ny0g0Cd/umayching.jpg"},
  { id: "s24", name: "ফারজানা ফারুকী", img: "https://i.postimg.cc/tJCQfFms/fanrjana.jpg"},
  { id: "s25", name: "নাকিবা ফাইরুজ সাদাফ", img: "https://i.postimg.cc/nLzmHWjW/na-ka-ba-pha-ira-ja-sa-da-pha.jpg"},


];
const ALL: Person[] = [...TEACHERS, ...STUDENTS];

// ---------- AVATAR ----------
function Avatar({ p, className = "" }: { p: Person; className?: string }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [p.img]);

  if (failed || !p.img) {
    return (
      <div
        className={`flex items-center justify-center bg-pine font-display text-4xl font-bold text-leafsoft ${className}`}
        style={{ minHeight: 160, minWidth: 160 }}
      >
        {p.name.trim().charAt(0)}
      </div>
    );
  }

  return (
    <img
      key={p.img}
      src={p.img}
      alt={p.name}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => {
        console.warn("Image failed to load:", p.img);
        setFailed(true);
      }}
      className={`object-cover ${className}`}
    />
  );
}

// ---------- PAGE ----------
export default function StudentsPage() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<Person | null>(null);

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return s ? STUDENTS.filter((p) => p.name.toLowerCase().includes(s)) : STUDENTS;
  }, [q]);

  const step = useCallback((dir: 1 | -1) => {
    setActive((cur) => {
      if (!cur) return cur;
      const i = ALL.findIndex((p) => p.id === cur.id);
      return ALL[(i + dir + ALL.length) % ALL.length];
    });
  }, []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = old;
    };
  }, [active, step]);

  return (
    <>
      <PageHero
        kicker={`ক্লাস ফেস্টিভ্যাল • ${bn(TEACHERS.length)} জন শিক্ষক • ${bn(STUDENTS.length)} জন শিক্ষার্থী`}
        title={
          <>
            আমাদের <span className="text-leafsoft">ক্লাস পরিবার</span>
          </>
        }
        desc="আমাদের সব শিক্ষক ও শিক্ষার্থী — এক ফ্রেমে, এক উৎসবে।"
        crumb={[{ label: "ক্লাস পরিবার", to: "/family" }]}
      />

      <section className="bg-mint bg-dots">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* Teachers */}
          <Reveal>
            <div className="mb-8 text-center">
              <span className="inline-block rounded-full bg-leaf px-4 py-1.5 text-xs font-bold text-white">
                আমাদের শিক্ষকবৃন্দ
              </span>
            </div>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-6">
            {TEACHERS.map((t, i) => (
              <Reveal key={t.id} delay={i * 80}>
                <button
                  type="button"
                  onClick={() => setActive(t)}
                  className="group flex w-64 flex-col items-center gap-4 overflow-hidden rounded-3xl border border-leaf/30 bg-white p-6 text-center shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf"
                >
                  <div className="relative">
                    <span className="absolute -inset-2 rounded-full bg-leaf/20 blur-md" />
                    <Avatar
                      p={t}
                      className="relative h-40 w-40 rounded-full border-4 border-leaf shadow-lg transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    {t.role && (
                      <span className="inline-block rounded-full bg-leaf/10 px-3 py-1 text-xs font-bold text-moss">
                        {t.role}
                      </span>
                    )}
                    {/* <h2 className="mt-2 font-display text-lg font-bold text-ink">{t.name}</h2>
                    {t.quote && (
                      <p className="mt-2 text-xs leading-relaxed text-inksoft">“{t.quote}”</p>
                    )} */}
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {/* Students heading + search */}
          <div className="mb-8 mt-16 text-center">
            <span className="inline-block rounded-full bg-pine px-4 py-1.5 text-xs font-bold text-white">
              আমাদের শিক্ষার্থীবৃন্দ
            </span>
          </div>

          <div className="mx-auto mb-8 flex max-w-md items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2.5 shadow-sm focus-within:border-leaf">
            <Search className="h-4 w-4 text-leaf" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="নাম দিয়ে খুঁজুন..."
              className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-inksoft/60"
            />
            {q && (
              <button type="button" onClick={() => setQ("")} aria-label="মুছুন">
                <X className="h-4 w-4 text-inksoft" />
              </button>
            )}
          </div>

          {/* Students */}
          {list.length === 0 ? (
            <p className="py-10 text-center text-sm text-inksoft">কোনো শিক্ষার্থী পাওয়া যায়নি।</p>
          ) : (
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {list.map((p, i) => (
                <Reveal key={p.id} delay={(i % 5) * 60}>
                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className="group block w-full overflow-hidden rounded-2xl border border-ink/10 bg-white text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf"
                  >
                    <div className="aspect-square overflow-hidden">
                      <Avatar
                        p={p}
                        className="h-full w-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <p className="truncate px-3 py-3 font-display text-sm font-bold text-ink">{p.name}</p>
                  </button>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-night/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.name}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="বন্ধ করুন"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="আগের জন"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-leaf sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="পরের জন"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-leaf sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure className="flex max-h-full max-w-3xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <Avatar
              key={active.id}
              p={active}
              className="max-h-[75vh] w-auto max-w-full rounded-xl shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-white">
              <p className="font-display text-lg font-bold">{active.name}</p>
              {active.role && <p className="mt-1 text-xs text-leafsoft">{active.role}</p>}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
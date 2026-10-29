import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  EyeOff,
  GraduationCap,
  HeartCrack,
  HeartHandshake,
  Lightbulb,
  Link2,
  MessageCircleOff,
  Quote,
  Rocket,
  Users,
} from "lucide-react";
import { bn, SITE } from "../content";
import { Chip, PageHero, Reveal, SectionHead } from "../components/ui";
import FeedbackBoxDemo from "../components/FeedbackBoxDemo";

export default function FeedbackBoxPage() {
  return (
    <>
      <PageHero
        kicker={SITE.pageHeaders.feedbackBox.kicker}
        title={<>{SITE.pageHeaders.feedbackBox.titleBefore}<span className="text-leafsoft">{SITE.pageHeaders.feedbackBox.highlight}</span>{SITE.pageHeaders.feedbackBox.titleAfter}</>}
        desc={SITE.pageHeaders.feedbackBox.description}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-bold text-white">
            <GraduationCap className="h-4 w-4 text-gold" /> তৈরি করেছেন: রাকিব হাসান • শিক্ষার্থী, দ্বিতীয় ব্যাচ
          </span>
          <Chip dark><EyeOff className="h-3.5 w-3.5" /> অ্যানোনিমাস</Chip>
          <Chip dark>সিকিউরড</Chip>
          <Chip dark>ওয়েব-ভিত্তিক</Chip>
        </div>
      </PageHero>

      {/* story + demo */}
      <section id="demo" className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <SectionHead
              eyebrow="শিক্ষার্থীর পরিচয় ও ভাবনা"
              title={<>একটা ছোট প্রশ্ন থেকে <span className="text-flag">শুরু</span></>}
            />
            <Reveal delay={100}>
              <div className="mt-6 space-y-4 text-base text-inksoft leading-relaxed">
                <p>
                  আমি এই কোর্সের একজন সাধারণ শিক্ষার্থী। প্রথম মাসে প্রম্পট লিখতে গিয়ে একটা জিনিস
                  বুঝলাম — <strong className="text-ink">সঠিক ইনপুট না পেলে এআই যেমন ভুল আউটপুট দেয়,
                  মানুষও তেমনি সৎ ফিডব্যাক না পেলে নিজের ভুল শুধরাতে পারে না।</strong>
                </p>
                <p>
                  অথচ আমাদের চারপাশে সত্যি কথা বলা কত কঠিন! বন্ধুর প্রেজেন্টেশনে ভুল থাকলেও বলি না,
                  পাছে সে কষ্ট পায়। অফিসে বসের সিদ্ধান্তে সমস্যা দেখলেও চুপ থাকি, পাছে চাকরি যায়।
                  পরিবারে, ক্লাসরুমে, টিমে — সর্বত্র নীরবতার একটা দেয়াল।
                </p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <blockquote className="relative mt-7 rounded-2xl border-l-4 border-flag bg-white p-6 shadow-lg">
                <Quote className="absolute -top-3 left-5 h-7 w-7 rounded-full bg-flag p-1.5 text-white" />
                <p className="font-display text-lg font-bold text-ink leading-relaxed">
                  “মানুষ ফিডব্যাক দিতে ভয় পায় না — ভয় পায় পরিণতির। নামটা সরিয়ে দিলেই সত্যিটা বেরিয়ে আসে।”
                </p>
                <p className="mt-2 text-xs font-bold text-inksoft">— FeedbackBox-এর পেছনের মূল দর্শন</p>
              </blockquote>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-7 flex items-start gap-3 rounded-xl border border-leaf/25 bg-leaf/5 p-5">
                <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
                <p className="text-sm text-ink">
                  <strong>সমাধানটা সহজ:</strong> একটি শেয়ারযোগ্য লিংক, যেখানে যে-কেউ সম্পূর্ণ বেনামে মতামত
                  লিখতে পারেন। কোনো অ্যাকাউন্ট নেই, নাম নেই, ট্র্যাকিং নেই — শুধু গঠনমূলক সত্যিটা।
                  পাশের লাইভ ডেমোতে নিজের হাতে পরীক্ষা করেই দেখুন।
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:sticky lg:top-28">
            <FeedbackBoxDemo />
          </Reveal>
        </div>
      </section>

      {/* problem depth */}
      <section className="relative overflow-hidden bg-night text-white">
        <div className="absolute inset-0 bg-grid-dark" aria-hidden />
        <div
          className="pointer-events-none absolute right-[-10%] top-[-20%] h-96 w-96 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(244,42,65,0.4), transparent 65%)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <SectionHead
            dark
            center
            eyebrow="সমস্যার গভীরতা"
            title={<>কেন আমরা <span className="text-flag">চুপ থাকি?</span></>}
            desc="ব্যক্তিগত হোক কিংবা কর্পোরেট জীবন — সামনে এগোনোর জ্বালানি হলো গঠনমূলক ফিডব্যাক। অথচ তিনটি ভয় আমাদের মুখ বন্ধ রাখে।"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: HeartCrack,
                title: "সম্পর্ক নষ্টের ভয়",
                desc: "“সত্যি বললে বন্ধুটা কষ্ট পাবে” — প্রিয়জনের ক্ষতি না করার আশঙ্কায় আমরা গুরুত্বপূর্ণ কথাটা বলেই উঠি না।",
              },
              {
                icon: BriefcaseBusiness,
                title: "কর্মক্ষেত্রে ঝুঁকির ভয়",
                desc: "“বসের সামনে মত দিলে চাকরি নিয়ে টান পড়বে?” — পদোন্নতি-মূল্যায়নের দুশ্চিন্তায় অফিসজুড়ে নীরবতা।",
              },
              {
                icon: MessageCircleOff,
                title: "সামনাসামনি সংকোচ",
                desc: "মুখোমুখি সমালোচনা করতে লজ্জা লাগে, দ্বিধা হয়। ফলে দরকারি ফিডব্যাকটা মনের ভেতরেই থেকে যায়।",
              },
            ].map((x, i) => (
              <Reveal key={x.title} delay={i * 120}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-flag/50 hover:bg-flag/10 hover:-translate-y-1">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-flag/20 text-flag transition-transform group-hover:scale-110">
                    <x.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold">{x.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{x.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-10 rounded-2xl border border-gold/30 bg-gold/10 p-6 sm:p-8 text-center">
              <p className="font-display text-2xl sm:text-3xl font-bold text-gold">
                অথচ গবেষণা বলে — বেশিরভাগ মানুষই <span className="text-white">সৎ ফিডব্যাক পেতে চান</span>,
              </p>
              <p className="mt-2 text-sm text-white/70">শুধু সেটা পাওয়ার নিরাপদ পথটা জানা নেই। FeedbackBox সেই পথটাই বানায়।</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* solution steps */}
      <section className="bg-mint bg-dots">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <SectionHead
            center
            eyebrow="সমাধান • যেভাবে কাজ করে"
            title={<>তিন ধাপে <span className="text-leaf">নির্ভীক মতামত</span></>}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Link2, step: "০১", title: "নিজের বাক্স খুলুন", desc: "একটি ইউনিক লিংক তৈরি হয় — বন্ধু, টিম বা ক্লাসের সাথে শেয়ার করুন।" },
              { icon: EyeOff, step: "০২", title: "সবাই লিখবেন বেনামে", desc: "লিংকে ঢুকে যে-কেউ মতামত লিখবেন — নাম-পরিচয় ছাড়াই, নিরাপদ এনক্রিপ্টেড পথে।" },
              { icon: BarChart3, step: "০৩", title: "সত্যিকারের ইনসাইট পান", desc: "জড়তামুক্ত সৎ ফিডব্যাক পড়ে নিজের অন্ধকূপগুলো চিনুন, এগিয়ে যান আত্মবিশ্বাসে।" },
            ].map((x, i) => (
              <Reveal key={x.step} delay={i * 120}>
                <div className="relative h-full rounded-2xl border border-ink/10 bg-white p-6 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1.5">
                  <span className="absolute right-5 top-4 font-display text-5xl font-extrabold text-mint [-webkit-text-stroke:1.5px_#17b36a]">{x.step}</span>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-leaf/15 text-moss">
                    <x.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-ink">{x.title}</h3>
                  <p className="mt-2 text-sm text-inksoft">{x.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-12 rounded-2xl bg-pine p-7 sm:p-9 text-white">
              <p className="font-display text-xl font-bold text-leafsoft">কোথায় কাজে লাগে?</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: HeartHandshake, t: "পরিবার ও বন্ধুমহল" },
                  { icon: GraduationCap, t: "ক্লাসরুম ও শিক্ষক মূল্যায়ন" },
                  { icon: Users, t: "অফিস ও কর্পোরেট টিম" },
                  { icon: Rocket, t: "স্টার্টআপ ও প্রোডাক্ট" },
                ].map((u) => (
                  <div key={u.t} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 transition-colors hover:border-leafsoft/50">
                    <u.icon className="h-5 w-5 shrink-0 text-gold" />
                    <span className="text-sm font-bold">{u.t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a href="#demo" className="inline-flex items-center gap-2 rounded-lg bg-leaf px-6 py-3 font-display font-bold text-white shadow-lg shadow-leaf/30 transition-all hover:bg-leafsoft hover:text-night hover:-translate-y-0.5">
                  লাইভ ডেমো ব্যবহার করুন
                </a>
                <Link to="/feedback" className="inline-flex items-center gap-2 text-sm font-bold text-leafsoft hover:text-white transition-colors">
                  প্রজেক্টটি নিয়ে মতামত দিন ({bn(5)} স্টার?) <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
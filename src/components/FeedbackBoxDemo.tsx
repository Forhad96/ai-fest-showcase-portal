import { useState } from "react";
import { Check, Copy, ExternalLink, EyeOff, Inbox, Lock, QrCode, Send, ShieldCheck, StickyNote } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { bn, SITE } from "../content";

type Note = { id: number; text: string; fresh: boolean };

const SEED_NOTES: Note[] = [
  { id: 1, text: "টিম মিটিংটা আরেকটু ছোট হলে ভালো হতো — কাজের সময় বাড়ে।", fresh: false },
  { id: 2, text: "আপনার উপস্থাপনা দুর্দান্ত, শুধু স্লাইডের লেখা একটু বড় করুন।", fresh: false },
  { id: 3, text: "অফিসের কফি মেশিনটা সারানো দরকার! ☕", fresh: false },
];

export default function FeedbackBoxDemo() {
  const [notes, setNotes] = useState<Note[]>(SEED_NOTES);
  const [text, setText] = useState("");
  const [bounce, setBounce] = useState(0);
  const [err, setErr] = useState("");
  const [copied, setCopied] = useState(false);

  const liveUrl = SITE.feedbackBoxLive.liveUrl.trim() ||
    (typeof window !== "undefined" ? `${window.location.href.split("#")[0]}#/feedbackbox` : "https://example.com/#/feedbackbox");

  const copyLiveUrl = async () => {
    try {
      await navigator.clipboard.writeText(liveUrl);
    } catch {
      const input = document.createElement("textarea");
      input.value = liveUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  const drop = () => {
    if (text.trim().length < 5) {
      setErr("অন্তত ৫ অক্ষরের একটি মতামত লিখুন।");
      return;
    }
    setErr("");
    setNotes((n) => [{ id: Date.now(), text: text.trim(), fresh: true }, ...n.map((x) => ({ ...x, fresh: false }))]);
    setText("");
    setBounce((b) => b + 1);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-pine/80 p-6 sm:p-8 backdrop-blur">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-leaf/20 blur-3xl" aria-hidden />

      <div className="relative flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span key={bounce} className={`grid h-14 w-14 place-items-center rounded-2xl bg-leaf shadow-[0_0_30px_rgba(23,179,106,0.45)] ${bounce ? "animate-boxbounce" : ""}`}>
            <Inbox className="h-7 w-7 text-white" />
          </span>
          <div>
            <p className="font-display text-xl font-bold text-white">FeedbackBox <span className="text-leafsoft">লাইভ ডেমো</span></p>
            <p className="text-xs text-white/65">নাম লাগবে না, অ্যাকাউন্ট লাগবে না — শুধু সত্যি কথাটা</p>
          </div>
        </div>
        {/* <span className="rounded-full border border-leaf/40 bg-leaf/10 px-3 py-1.5 text-xs font-bold text-leafsoft">
          জমা পড়েছে: {bn(notes.length)}টি
        </span> */}
      </div>

      {/* slot visual */}
      <div className="relative mx-auto mt-6 h-3 w-48 rounded-full bg-night shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)] ring-1 ring-white/10" aria-hidden />

      {/* <div className="relative mt-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          placeholder="যে কথাটা সামনাসামনি বলতে সংকোচ হচ্ছিল, এখানে লিখে ফেলুন…"
          className="w-full resize-none rounded-xl border border-white/15 bg-night/70 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-leafsoft focus:ring-2 focus:ring-leaf/30"
          aria-label="অ্যানোনিমাস মতামত লিখুন"
        />
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-white/70">{bn(text.trim().length)} অক্ষর • কিছুই সংরক্ষণ হয় না, ডেমো মোড</p>
          <button
            onClick={drop}
            className="inline-flex items-center gap-2 rounded-lg bg-leaf px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-leaf/30 transition-all hover:bg-leafsoft hover:text-night hover:-translate-y-0.5 active:translate-y-0"
          >
            <Send className="h-4 w-4" />
            বেনামে বাক্সে ফেলুন
          </button>
        </div>
        {err && <p className="mt-2 text-xs font-bold text-flag">{err}</p>}
      </div> */}

      {/* privacy badges */}
      <div className="relative mt-5 grid grid-cols-3 gap-2">
        {[
          { icon: EyeOff, label: "নাম-পরিচয় নেই" },
          { icon: Lock, label: "এনক্রিপ্টেড পথ" },
          { icon: ShieldCheck, label: "নিরাপদ সংরক্ষণ" },
        ].map((b) => (
          <div key={b.label} className="flex flex-col items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2 py-3 text-center">
            <b.icon className="h-4 w-4 text-leafsoft" />
            <span className="text-xs font-bold text-white/75 leading-tight">{b.label}</span>
          </div>
        ))}
      </div>

      {/* Shareable mock-live QR. Set SITE.feedbackBoxLive.liveUrl for the final deployment. */}
      <div className="relative mt-6 grid gap-5 rounded-xl border border-leaf/30 bg-night/55 p-4 sm:grid-cols-[auto_1fr] sm:items-center">
        <div className="mx-auto rounded-xl bg-white p-2.5 shadow-xl shadow-black/25 sm:mx-0">
          <QRCodeSVG
            value={liveUrl}
            size={132}
            level="H"
            bgColor="#ffffff"
            fgColor="#0a3328"
            marginSize={1}
            title="FeedbackBox live link QR code"
          />
        </div>
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-bold text-white">
            <QrCode className="h-5 w-5 text-leafsoft" />
            {SITE.feedbackBoxLive.qrTitle}
          </p>
          <p className="mt-1 text-sm text-white/70">{SITE.feedbackBoxLive.qrDescription}</p>
          <p className="mt-2 truncate rounded-md bg-white/5 px-2.5 py-1.5 font-mono text-xs text-leafsoft" title={liveUrl}>
            {liveUrl}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-flag px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-flag/25 transition-all hover:bg-flagdeep hover:-translate-y-0.5"
            >
              <ExternalLink className="h-4 w-4" />
              {SITE.feedbackBoxLive.openLabel}
            </a>
            <button
              type="button"
              onClick={copyLiveUrl}
              className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-bold transition-all ${
                copied
                  ? "border-leaf bg-leaf text-white"
                  : "border-white/20 bg-white/5 text-white hover:border-leafsoft hover:text-leafsoft"
              }`}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? SITE.feedbackBoxLive.copiedLabel : SITE.feedbackBoxLive.copyLabel}
            </button>
          </div>
        </div>
      </div>

      {/* collected notes */}
      <div className="relative mt-6">
        <p className="flex items-center gap-2 text-xs font-bold tracking-wide text-white/70">
          <StickyNote className="h-4 w-4 text-gold" /> বাক্সে জমা হওয়া মতামত (সবই বেনামী)
        </p>
        <ul className="mt-3 max-h-56 space-y-2.5 overflow-y-auto pr-1">
          {notes.map((n) => (
            <li
              key={n.id}
              className={`rounded-lg border-l-4 border-gold bg-[#fdf6dd] px-4 py-2.5 text-sm font-medium text-[#4a3a10] shadow-md ${n.fresh ? "animate-notedrop" : ""}`}
            >
              “{n.text}”
              <span className="mt-1 block text-xs font-bold text-[#4a3a10]/50">
                — বেনামী {n.fresh ? "• এইমাত্র" : ""}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
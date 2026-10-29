import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Cloud, HardDrive, LoaderCircle, MessageSquareText, Send, Star, User } from "lucide-react";
import {
  bn,
  loadFeedback,
  todayBn,
  PROJECTS,
  RATING_LABELS,
  ROLES,
  type FeedbackEntry,
} from "../content";
import { fetchFeedbackEntries, isSupabaseConfigured, submitFeedbackEntry } from "../services/feedback";

const ROLE_STYLE: Record<string, string> = {
  বিচারক: "bg-flag/10 text-flagdeep border-flag/25",
  মেন্টর: "bg-gold/15 text-[#946200] border-gold/40",
  শিক্ষার্থী: "bg-leaf/10 text-moss border-leaf/25",
  দর্শনার্থী: "bg-sky-500/10 text-sky-700 border-sky-500/25",
};

export function Stars({ value, className = "h-4 w-4" }: { value: number; className?: string }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`রেটিং ${bn(value)}/৫`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${className} ${i <= value ? "fill-gold text-gold" : "fill-transparent text-ink/20"}`}
        />
      ))}
    </span>
  );
}

export function FeedbackForm({ onSubmitted }: { onSubmitted?: (list: FeedbackEntry[]) => void }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState(ROLES[3]);
  const [project, setProject] = useState(PROJECTS[0]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    if (rating === 0) {
      setError("অনুগ্রহ করে স্টার রেটিং দিন — আপনার মূল্যায়নই আমাদের অনুপ্রেরণা।");
      return;
    }
    if (comment.trim().length < 10) {
      setError("মতামতটি অন্তত ১০ অক্ষরের লিখুন, যাতে আমরা শিখতে পারি।");
      return;
    }
    const entry: FeedbackEntry = {
      id: `u-${Date.now()}`,
      name: name.trim() || "বেনামী শুভানুধ্যায়ী",
      role,
      project,
      rating,
      comment: comment.trim(),
      date: todayBn(),
    };
    setSubmitting(true);
    setError("");
    try {
      const list = await submitFeedbackEntry(entry);
      onSubmitted?.(list);
      setDone(true);
      setName("");
      setRating(0);
      setComment("");
      window.setTimeout(() => setDone(false), 4500);
    } catch {
      setError("মতামত ডেটাবেজে সংরক্ষণ করা যায়নি। ইন্টারনেট সংযোগ ও Supabase সেটআপ পরীক্ষা করুন।");
    } finally {
      setSubmitting(false);
    }
  };

  const shown = hover || rating;

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8 shadow-xl shadow-ink/5"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-flag/10 text-flag">
          <MessageSquareText className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-xl font-bold text-ink">আপনার মূল্যবান মতামত দিন</h3>
            <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${
              isSupabaseConfigured ? "bg-leaf/10 text-moss" : "bg-gold/15 text-[#785400]"
            }`}>
              {isSupabaseConfigured ? <Cloud className="h-3.5 w-3.5" /> : <HardDrive className="h-3.5 w-3.5" />}
              {isSupabaseConfigured ? "Supabase Live" : "Local Demo"}
            </span>
          </div>
          <p className="text-xs text-inksoft">বিচারক, মেন্টর ও দর্শনার্থী — সবার চোখেই আমরা শিখি</p>
        </div>
      </div>

      {/* rating */}
      <fieldset className="mt-6">
        <legend className="text-sm font-bold text-ink mb-2">রেটিং দিন <span className="text-flag">*</span></legend>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1" onMouseLeave={() => setHover(0)}>
            {[1, 2, 3, 4, 5].map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setRating(i)}
                onMouseEnter={() => setHover(i)}
                aria-label={`${bn(i)} স্টার`}
                className="p-1 transition-transform hover:scale-125 focus-visible:scale-125"
              >
                <Star
                  className={`h-8 w-8 transition-colors ${
                    i <= shown ? "fill-gold text-gold drop-shadow-[0_2px_6px_rgba(242,182,60,0.5)]" : "fill-transparent text-ink/25"
                  }`}
                />
              </button>
            ))}
          </div>
          <span className={`text-sm font-bold ${shown ? "text-moss" : "text-inksoft"}`}>
            {shown ? RATING_LABELS[shown] : "স্টারে ক্লিক করুন"}
          </span>
        </div>
      </fieldset>

      {/* role */}
      <fieldset className="mt-5">
        <legend className="text-sm font-bold text-ink mb-2">আপনি কে?</legend>
        <div className="flex flex-wrap gap-2">
          {ROLES.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-all ${
                role === r
                  ? "border-pine bg-pine text-white shadow-md"
                  : "border-ink/15 bg-mint text-inksoft hover:border-leaf hover:text-moss"
              }`}
              aria-pressed={role === r}
            >
              {r}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-ink">নাম <span className="font-normal text-inksoft">(ঐচ্ছিক)</span></span>
          <div className="relative mt-1.5">
            <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-inksoft" />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={80}
              placeholder="বেনামী থাকতে পারেন"
              className="w-full rounded-lg border border-ink/15 bg-mint py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/25"
            />
          </div>
        </label>
        <label className="block">
          <span className="text-sm font-bold text-ink">কোন প্রজেক্ট নিয়ে?</span>
          <select
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-ink/15 bg-mint px-3 py-2.5 text-sm outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/25"
          >
            {PROJECTS.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-sm font-bold text-ink">মতামত / পরামর্শ <span className="text-flag">*</span></span>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength={1000}
          rows={4}
          placeholder="কী ভালো লেগেছে, কী আরও ভালো হতে পারে — খোলা মনে লিখুন…"
          className="mt-1.5 w-full resize-none rounded-lg border border-ink/15 bg-mint px-3 py-2.5 text-sm outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/25"
        />
        <span className="text-xs text-inksoft">{bn(comment.trim().length)} অক্ষর</span>
      </label>

      {error && (
        <p className="mt-3 rounded-lg border border-flag/30 bg-flag/5 px-3 py-2 text-sm font-semibold text-flagdeep">
          {error}
        </p>
      )}
      {done && (
        <p className="mt-3 flex items-center gap-2 rounded-lg border border-leaf/30 bg-leaf/10 px-3 py-2 text-sm font-bold text-moss animate-notedrop">
          <CheckCircle2 className="h-4 w-4" /> ধন্যবাদ! আপনার মতামত দেয়ালে যুক্ত হয়েছে।
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-5 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-flag px-7 py-3 font-display text-base font-bold text-white shadow-lg shadow-flag/30 transition-all hover:bg-flagdeep hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-wait disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {submitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {submitting ? "সংরক্ষণ হচ্ছে…" : "মতামত জমা দিন"}
      </button>
    </form>
  );
}

export function FeedbackWall({ entries, limit }: { entries: FeedbackEntry[]; limit?: number }) {
  const list = limit ? entries.slice(0, limit) : entries;
  return (
    <div className="space-y-4">
      {list.map((f) => (
        <article
          key={f.id}
          className="rounded-xl border border-ink/10 bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-pine font-display text-base font-bold text-leafsoft">
                {f.name.charAt(0)}
              </span>
              <div>
                <p className="font-bold text-ink leading-tight">{f.name}</p>
                <p className="text-xs text-inksoft">{f.date}</p>
              </div>
            </div>
            <span className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${ROLE_STYLE[f.role] ?? ROLE_STYLE["দর্শনার্থী"]}`}>
              {f.role}
            </span>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Stars value={f.rating} />
            <span className="rounded bg-mint px-2 py-0.5 text-xs font-semibold text-inksoft">{f.project}</span>
          </div>
          <p className="mt-2.5 text-sm leading-relaxed text-ink/85">{f.comment}</p>
        </article>
      ))}
    </div>
  );
}

export function RatingSummary({ entries }: { entries: FeedbackEntry[] }) {
  const { avg, dist } = useMemo(() => {
    const total = entries.length || 1;
    const sum = entries.reduce((a, b) => a + b.rating, 0);
    const d = [5, 4, 3, 2, 1].map((s) => ({
      star: s,
      count: entries.filter((e) => e.rating === s).length,
    }));
    return { avg: sum / total, dist: d.map((x) => ({ ...x, pct: Math.round((x.count / total) * 100) })) };
  }, [entries]);

  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-xl shadow-ink/5">
      <div className="flex items-end gap-3">
        <p className="font-display text-5xl font-extrabold text-ink leading-none">
          {bn(avg.toFixed(1))}
        </p>
        <div className="pb-1">
          <Stars value={Math.round(avg)} />
          <p className="mt-1 text-xs text-inksoft">{bn(entries.length)} জনের মূল্যায়ন</p>
        </div>
      </div>
      <div className="mt-5 space-y-2">
        {dist.map((d) => (
          <div key={d.star} className="flex items-center gap-2 text-xs font-semibold text-inksoft">
            <span className="w-6 shrink-0">{bn(d.star)} ★</span>
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-mint">
              <div
                className="h-full rounded-full bg-gradient-to-r from-leaf to-gold transition-all duration-700"
                style={{ width: `${d.pct}%` }}
              />
            </div>
            <span className="w-6 text-right">{bn(d.count)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function useFeedbackList() {
  const [entries, setEntries] = useState<FeedbackEntry[]>(() => loadFeedback());
  const [loading, setLoading] = useState(isSupabaseConfigured);

  useEffect(() => {
    let active = true;
    fetchFeedbackEntries()
      .then((list) => {
        if (active) setEntries(list);
      })
      .catch((error) => console.error("Feedback database load failed:", error))
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return { entries, setEntries, loading, databaseEnabled: isSupabaseConfigured };
}
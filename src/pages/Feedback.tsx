import { HeartHandshake, MessagesSquare } from "lucide-react";
import { bn, SITE } from "../content";
import { PageHero, Reveal } from "../components/ui";
import { FeedbackForm, FeedbackWall, RatingSummary, useFeedbackList } from "../components/FeedbackForm";

export default function FeedbackPage() {
  const { entries, setEntries } = useFeedbackList();

  return (
    <>
      <PageHero
        kicker={SITE.pageHeaders.feedback.kicker}
        title={<>{SITE.pageHeaders.feedback.titleBefore}<span className="text-leafsoft">{SITE.pageHeaders.feedback.highlight}</span>{SITE.pageHeaders.feedback.titleAfter}</>}
        desc={SITE.pageHeaders.feedback.description}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-bold text-gold">
          <HeartHandshake className="h-4 w-4" /> গঠনমূলক সমালোচনাও সাদরে গৃহীত — এটাই তো FeedbackBox-এর শিক্ষা!
        </span>
      </PageHero>

      <section className="bg-mint">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <FeedbackForm onSubmitted={setEntries} />
            </Reveal>
            <Reveal delay={120}>
              <RatingSummary entries={entries} />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-pine text-leafsoft">
                  <MessagesSquare className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-bold text-ink">মতামতের দেয়াল</h2>
                  <p className="text-xs text-inksoft">সর্বশেষ {bn(entries.length)}টি মতামত — নতুনটি সবার উপরে</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="max-h-[900px] overflow-y-auto pr-1.5">
                <FeedbackWall entries={entries} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
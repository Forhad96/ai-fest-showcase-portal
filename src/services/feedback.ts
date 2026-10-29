import type { FeedbackEntry } from "../content";
import { loadFeedback, saveFeedback } from "../content";
import { isSupabaseConfigured, supabase } from "../lib/supabase";

type FeedbackRow = {
  id: string;
  name: string;
  role: string;
  project: string;
  rating: number;
  comment: string;
  created_at: string;
};

function formatBanglaDate(value: string): string {
  try {
    return new Intl.DateTimeFormat("bn-BD", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

function rowToEntry(row: FeedbackRow): FeedbackEntry {
  return {
    id: row.id,
    name: row.name,
    role: row.role,
    project: row.project,
    rating: row.rating,
    comment: row.comment,
    date: formatBanglaDate(row.created_at),
  };
}

export async function fetchFeedbackEntries(): Promise<FeedbackEntry[]> {
  if (!supabase) return loadFeedback();

  const { data, error } = await supabase
    .from("festival_feedback")
    .select("id,name,role,project,rating,comment,created_at")
    .order("created_at", { ascending: false })
    .limit(200);

  if (error) throw new Error(error.message);
  return ((data ?? []) as FeedbackRow[]).map(rowToEntry);
}

export async function submitFeedbackEntry(entry: FeedbackEntry): Promise<FeedbackEntry[]> {
  if (!supabase) return saveFeedback(entry);

  const { error } = await supabase.from("festival_feedback").insert({
    name: entry.name,
    role: entry.role,
    project: entry.project,
    rating: entry.rating,
    comment: entry.comment,
  });

  if (error) throw new Error(error.message);
  return fetchFeedbackEntries();
}

export { isSupabaseConfigured };
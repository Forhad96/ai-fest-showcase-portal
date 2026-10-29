import { SITE } from "../content";

export function ETrainingMark({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" role="img" aria-label="E-Learning and Earning Limited">
      <circle cx="50" cy="50" r="47" fill="#fff" stroke="#009640" strokeWidth="5" />
      <path d="M29 20h43v15H45v8h23v14H45v9h30v15H29z" fill="#009640" />
      <path d="M50 53h13v13H50z" fill="#007e36" opacity=".72" />
    </svg>
  );
}

export function DydMark({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 90 108" role="img" aria-label="যুব উন্নয়ন অধিদপ্তর">
      <rect x="9" y="4" width="72" height="78" rx="5" fill="#fff" stroke="#078a4c" strokeWidth="5" />
      <path d="M15 71 37 32l8 13 12-27 18 53z" fill="#078a4c" opacity=".14" />
      <circle cx="36" cy="27" r="7" fill="#078a4c" />
      <circle cx="59" cy="19" r="7" fill="#078a4c" />
      <path d="m18 65 13-22 10 3 8 17-8 5-7-12-7 14zm29-5 7-26 10 2 11 26-9 4-7-17-3 16z" fill="#078a4c" />
      <path d="M10 68h70v14H10z" fill="#078a4c" />
      <text x="45" y="79" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">কর্মই জীবন</text>
      <text x="45" y="99" textAnchor="middle" fill="#17342b" fontSize="8.2" fontWeight="700">যুব উন্নয়ন অধিদপ্তর</text>
    </svg>
  );
}

export function InstitutionalLockup({ compact = false, inverse = false }: { compact?: boolean; inverse?: boolean }) {
  const primary = inverse ? "text-white" : "text-ink";
  const secondary = inverse ? "text-white/65" : "text-inksoft";

  return (
    <div className="flex items-center gap-3">
      <ETrainingMark className={compact ? "h-10 w-10 shrink-0" : "h-14 w-14 shrink-0"} />
      <span className={`h-9 w-px ${inverse ? "bg-white/20" : "bg-ink/15"}`} />
      <DydMark className={compact ? "h-11 w-9 shrink-0" : "h-14 w-12 shrink-0"} />
      <span className="leading-tight">
        <span className={`block font-display font-bold ${compact ? "text-base" : "text-lg"} ${primary}`}>
          {SITE.brand.company}
        </span>
        <span className={`block text-xs sm:text-xs ${secondary}`}>
          {SITE.brand.course} • {SITE.brand.batch} • {SITE.brand.branch}
        </span>
        {!compact && <span className="block text-xs font-semibold text-leafsoft">{SITE.brand.governmentPartner}-এর সহযোগিতায়</span>}
      </span>
    </div>
  );
}
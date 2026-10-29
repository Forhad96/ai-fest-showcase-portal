import { useState } from "react";
import { ChevronsLeftRight, MoveHorizontal } from "lucide-react";

export default function BeforeAfter({
  src,
  alt,
  ratio = "aspect-[4/5]",
}: {
  src: string;
  alt: string;
  ratio?: string;
}) {
  const [pos, setPos] = useState(50);
  const [touched, setTouched] = useState(false);

  return (
    <div className={`group relative ${ratio} w-full overflow-hidden rounded-xl bg-pine select-none`}>
      {/* AFTER (base) */}
      <img
        src={src}
        alt={`${alt} — এআই এনহ্যান্সড`}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "saturate(1.18) contrast(1.06) brightness(1.03)" }}
        draggable={false}
      />
      {/* BEFORE (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        aria-hidden
      >
        <img
          src={src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            filter: "grayscale(0.72) brightness(0.78) contrast(0.72) blur(1.6px) sepia(0.18)",
            transform: "scale(1.03)",
          }}
          draggable={false}
        />
        <div className="absolute inset-0 bg-ink/20" />
      </div>

      {/* labels */}
      <span
        className={`absolute left-3 top-3 rounded-md bg-ink/80 px-2.5 py-1 text-[11px] font-bold text-white/90 backdrop-blur-sm transition-opacity ${pos < 18 ? "opacity-0" : "opacity-100"}`}
      >
        আগে
      </span>
      <span
        className={`absolute right-3 top-3 rounded-md bg-leaf px-2.5 py-1 text-[11px] font-bold text-white shadow-lg shadow-leaf/40 transition-opacity ${pos > 82 ? "opacity-0" : "opacity-100"}`}
      >
        পরে ✨
      </span>

      {/* divider + handle */}
      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }} aria-hidden>
        <div className="absolute inset-y-0 -ml-px w-0.5 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.5)]" />
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-xl ring-4 ring-white/30 transition-transform group-hover:scale-110">
          <ChevronsLeftRight className="h-5 w-5" />
        </div>
      </div>

      {/* hint */}
      {!touched && (
        <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-ink/75 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm">
          <MoveHorizontal className="h-3.5 w-3.5 text-leafsoft" />
          টেনে পার্থক্য দেখুন
        </span>
      )}

      {/* accessible drag surface */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => {
          setPos(Number(e.target.value));
          setTouched(true);
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        aria-label={`${alt}: আগে ও পরের তুলনা স্লাইডার`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
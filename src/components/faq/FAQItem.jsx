import { useState } from "react";
import { cn } from "../../utils/cn";

export function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <button
      type="button"
      onClick={() => setOpen((value) => !value)}
      className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:bg-white/10"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-white">{q}</div>
          {open ? (
            <div className="mt-2 text-sm leading-relaxed text-white/70">{a}</div>
          ) : null}
        </div>
        <div
          className={cn(
            "mt-0.5 select-none rounded-full border border-white/10 px-2 py-1 text-xs text-white/60 transition",
            open ? "bg-white/10" : "bg-white/5"
          )}
        >
          {open ? "–" : "+"}
        </div>
      </div>
    </button>
  );
}

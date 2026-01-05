import { cn } from "../../utils/cn";

export function Pill({ icon: Icon, label, className = "" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70",
        className
      )}
    >
      <Icon className="h-4 w-4 text-white/70" />
      {label}
    </span>
  );
}

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function TopBar({ productName, trustLine, hotmartUrl, ctaPrimary }) {
  return (
    <div className="relative z-20 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-black font-black">
            YC
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">{productName}</div>
            <div className="text-xs text-white/60">{trustLine}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button href={hotmartUrl}>
            {ctaPrimary}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

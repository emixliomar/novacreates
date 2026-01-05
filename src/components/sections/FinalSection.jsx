import { ArrowRight, ChevronDown, ShieldCheck } from "lucide-react";
import { Button } from "../ui/Button";

export function FinalSection({ copy, hotmartUrl }) {
  return (
    <section className="relative z-10 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-white/70">
                <ShieldCheck className="h-4 w-4" />
                Instant access
              </div>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">{copy.final.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{copy.final.text}</p>
              <p className="mt-4 text-xs text-white/50">{copy.final.disclaimer}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <div className="text-sm font-semibold">{copy.productName}</div>
              <div className="mt-1 text-xs text-white/60">PDF · Instant access · Secure checkout</div>
              <div className="mt-6 grid gap-3">
                <Button href={hotmartUrl}>
                  {copy.ctaPrimary}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="#inside" variant="secondary">
                  {copy.ctaSecondary}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-10 pb-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} · {copy.productName}
        </footer>
      </div>
    </section>
  );
}

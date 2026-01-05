import { ArrowRight, Check } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export function InsideSection({ copy, hotmartUrl }) {
  return (
    <section id="inside" className="relative z-10 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Contents"
          title="What’s inside"
          subtitle="Short chapters. Clear actions. Built to be used, not just read."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold">Chapters</div>
            <div className="mt-4 grid gap-3">
              {copy.chapters.map((chapter) => (
                <div
                  key={chapter.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-sm font-semibold">{chapter.title}</div>
                  <div className="mt-1 text-sm text-white/70">{chapter.text}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <div className="text-sm font-semibold">Who it’s for</div>
            <div className="mt-4 grid gap-3">
              {copy.audience.map((audienceItem) => (
                <div key={audienceItem} className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-6 w-6 place-items-center rounded-xl bg-white text-black font-black">
                    <Check className="h-4 w-4" />
                  </div>
                  <div className="text-sm text-white/75">{audienceItem}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-sm font-semibold">Delivery</div>
              <div className="mt-1 text-xs leading-relaxed text-white/60">
                Instant access after purchase. Download the PDF and start.
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={hotmartUrl}>
            {copy.ctaPrimary}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Lock, ShieldCheck } from "lucide-react";
import { fadeUp } from "../../constants/animations";
import { Card } from "../ui/Card";
import { Pill } from "../ui/Pill";
import { Button } from "../ui/Button";

export function HeroSection({ copy, hotmartUrl }) {
  return (
    <header className="relative z-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-2">
            {copy.pills.map((pill) => (
              <Pill key={pill.label} icon={pill.icon} label={pill.label} />
            ))}
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {copy.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {copy.heroNote}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href={hotmartUrl}>
              {copy.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#inside" variant="secondary">
              {copy.ctaSecondary}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <Card>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-white/55">
                  Visual preview
                </div>
                <div className="mt-2 text-xl font-semibold">Cover + quick trust</div>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-black">
                <Lock className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                <img
                  src="/ycst-cover.jpg"
                  alt="Your Change Starts Today ebook cover"
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <div className="p-4 text-xs text-white/60">
                  If you don’t see an image, add <b>/public/ycst-cover.jpg</b>.
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                <img
                  src="/ycst-mockup.png"
                  alt="Ebook mockup"
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <div className="p-4 text-xs text-white/60">
                  Optional: add <b>/public/ycst-mockup.png</b> for extra polish.
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="flex items-start gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-2xl bg-white text-black">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Guarantee</div>
                  <div className="mt-1 text-xs leading-relaxed text-white/60">
                    Refunds follow the platform terms. No drama.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button href={hotmartUrl}>
                {copy.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </header>
  );
}

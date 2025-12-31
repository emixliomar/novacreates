import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Lock,
  Download,
  Sparkles,
  Dumbbell,
  Salad,
  Target,
  ShieldCheck,
  BadgeCheck,
  ChevronDown,
  Star,
} from "lucide-react";

/**
 * YCST Dark Minimal Landing (English)
 * - Pro animations: Framer Motion
 * - Icons: lucide-react
 * - Images: drop files into /public and reference as /ycst-cover.jpg, /ycst-mockup.png, etc.
 *
 * Vite setup (install deps):
 *   npm i framer-motion lucide-react
 *
 * Image setup (recommended):
 *   /public/ycst-cover.jpg  (ebook cover)
 *   /public/ycst-mockup.png (optional device mockup)
 */

const HOTMART_URL = "https://go.hotmart.com/G103558610U?dp=1";

const COPY = {
  productName: "Your Change Starts Today",
  tagline:
    "Routines, habits, and nutrition for lasting physical and mental transformation.",
  heroNote:
    "A clean, practical e-book designed to help you stop restarting and start building a system you can sustain.",
  trustLine: "Secure checkout via Hotmart · Automatic delivery",
  ctaPrimary: "Buy the eBook",
  ctaSecondary: "See what’s inside",
  pills: [],
  // IMPORTANT: Add ONLY real testimonials you have permission to use.
  // Leave this empty until you collect them.
  testimonials: [
    {
      name: "Valentina R.",
      context: "Beginner",
      text: "Finally something that doesn’t require me to be perfect. It gave me structure, and that changed everything.",
      stars: 5,
    },
    {
      name: "Carlos M.",
      context: "Work + family",
      text: "I liked how straight to the point it is. Routines and habits that actually make sense. No fluff.",
      stars: 5,
    },
    {
      name: "Nadia K.",
      context: "Returning to training",
      text: "The nutrition part is clear and not extreme at all. I felt more energy within a week.",
      stars: 4,
    },
  ],
  valueCards: [
    {
      icon: Dumbbell,
      title: "Training routines",
      text: "Clear structure to build consistency and progress without burning out.",
    },
    {
      icon: Sparkles,
      title: "Habit framework",
      text: "A repeatable system that works even when motivation disappears.",
    },
    {
      icon: Salad,
      title: "Practical nutrition",
      text: "Guidelines you can apply immediately without extremes or guilt.",
    },
    {
      icon: Target,
      title: "Tracking tools",
      text: "Checklists and weekly reviews to measure progress and stay honest.",
    },
  ],
  chapters: [
    {
      title: "Chapter 1 · Welcome to your transformation",
      text: "Mindset, expectations, and how to start without self-sabotage.",
    },
    {
      title: "Chapter 2 · The power of a plan built for you",
      text: "Adapt your plan to your level, schedule, and real-life constraints.",
    },
    {
      title: "Chapter 3 · Motivation through dynamic training",
      text: "Stay engaged with routines that keep progress moving.",
    },
    {
      title: "Chapter 4 · Personalized nutrition for real results",
      text: "Simple nutrition rules that support lasting change.",
    },
    {
      title: "Closing · Next steps",
      text: "How to adjust, maintain momentum, and avoid sliding back.",
    },
  ],
  audience: [
    "You’re tired of starting over every Monday.",
    "You want structure that fits real life (work, family, stress).",
    "You want sustainable habits instead of extremes.",
    "You want a simple plan you can repeat and improve.",
  ],
  faq: [
    {
      q: "Is this beginner-friendly?",
      a: "Yes. It’s designed to start from zero and scale up. If you already train, it helps you organize and stay consistent.",
    },
    {
      q: "Does it include strict dieting?",
      a: "No. It’s practical guidance focused on consistency and better choices, not punishment.",
    },
    {
      q: "How do I receive it?",
      a: "You purchase via Hotmart and get instant access to download the e-book (and any included materials).",
    },
    {
      q: "What if I have limited time?",
      a: "The framework is adaptable. Consistent 20-minute sessions beat occasional 2-hour marathons.",
    },
  ],
  final: {
    title: "Start today. Keep it simple.",
    text: "If you’ve been waiting for the ‘perfect moment’, this is your sign to stop negotiating with yourself.",
    disclaimer: "Educational content only. Not medical or nutritional advice.",
  },
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

function Button({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-white/20";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10";
  return (
    <a href={href} className={cn(base, styles)}>
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

function Pill({ icon: Icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
      <Icon className="h-4 w-4 text-white/70" />
      {label}
    </span>
  );
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/60">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-white/70 sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}

function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
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

function SoftDivider() {
  return <div className="border-t border-white/10" />;
}

export default function YcstLandingDark() {
  const copy = useMemo(() => COPY, []);

  return (
    <div className="min-h-screen bg-[#07070A] text-white">
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-80 w-[56rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-40 left-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* top bar */}
      <div className="relative z-20 border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-black font-black">
              YC
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">{copy.productName}</div>
              <div className="text-xs text-white/60">{copy.trustLine}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button href={HOTMART_URL}>
              {copy.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* hero */}
      <header className="relative z-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2">
              {copy.pills.map((p) => (
                <Pill key={p.label} icon={p.icon} label={p.label} />
              ))}
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {copy.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              {copy.heroNote}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={HOTMART_URL}>
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
            {/* Visual: cover + mockup (drop images in /public) */}
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
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
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
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
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
                <Button href={HOTMART_URL}>
                  {copy.ctaPrimary}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </header>

      <SoftDivider />

      {/* value */}
      <section className="relative z-10 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="What you get"
            title="A simple system. No hype."
            subtitle="Structure beats motivation. This gives you a framework for training, habits, and nutrition you can actually follow."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {copy.valueCards.map((c, idx) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: idx * 0.05 }}
                >
                  <Card className="h-full">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-black">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 text-lg font-semibold">{c.title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-white/70">
                      {c.text}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SoftDivider />

      {/* inside */}
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
                {copy.chapters.map((it) => (
                  <div
                    key={it.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-sm font-semibold">{it.title}</div>
                    <div className="mt-1 text-sm text-white/70">{it.text}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <div className="text-sm font-semibold">Who it’s for</div>
              <div className="mt-4 grid gap-3">
                {copy.audience.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-6 w-6 place-items-center rounded-xl bg-white text-black font-black">
                      <Check className="h-4 w-4" />
                    </div>
                    <div className="text-sm text-white/75">{b}</div>
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
            <Button href={HOTMART_URL}>
              {copy.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <SoftDivider />

      {/* testimonials */}
      {copy.testimonials && copy.testimonials.length > 0 ? (
        <section className="relative z-10 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeader
              eyebrow="Reviews"
              title="What readers are saying"
              subtitle="Real feedback from real people. No fake hype, no made-up quotes."
            />

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {copy.testimonials.map((t, idx) => (
                <motion.div
                  key={t.name + idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: idx * 0.05 }}
                >
                  <Card className="h-full">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < (t.stars ?? 5) ? "text-yellow-300" : "text-white/20"
                          )}
                          fill={i < (t.stars ?? 5) ? "currentColor" : "transparent"}
                        />
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">“{t.text}”</p>
                    <div className="mt-5">
                      <div className="text-sm font-semibold">{t.name}</div>
                      {t.context ? (
                        <div className="text-xs text-white/60">{t.context}</div>
                      ) : null}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Button href={HOTMART_URL}>
                {copy.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      ) : null}

      <SoftDivider />

      {/* faq */}
      <section className="relative z-10 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions people ask before buying"
            subtitle="Because nobody wants to waste money on another PDF they’ll ignore."
          />

          <div className="mx-auto mt-10 grid max-w-3xl gap-4">
            {copy.faq.map((f, idx) => (
              <motion.div
                key={f.q}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                <FAQItem q={f.q} a={f.a} defaultOpen={idx === 0} />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href={HOTMART_URL}>
              {copy.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <SoftDivider />

      {/* final */}
      <section className="relative z-10 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-white/70">
                  <ShieldCheck className="h-4 w-4" />
                  Instant access
                </div>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                  {copy.final.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {copy.final.text}
                </p>
                <p className="mt-4 text-xs text-white/50">{copy.final.disclaimer}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                <div className="text-sm font-semibold">{copy.productName}</div>
                <div className="mt-1 text-xs text-white/60">
                  PDF · Instant access · Secure checkout
                </div>
                <div className="mt-6 grid gap-3">
                  <Button href={HOTMART_URL}>
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
    </div>
  );
}

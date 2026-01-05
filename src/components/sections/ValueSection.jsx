import { motion } from "framer-motion";
import { fadeUp } from "../../constants/animations";
import { Card } from "../ui/Card";
import { SectionHeader } from "../common/SectionHeader";

export function ValueSection({ valueCards }) {
  return (
    <section className="relative z-10 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="What you get"
          title="A simple system. No hype."
          subtitle="Structure beats motivation. This gives you a framework for training, habits, and nutrition you can actually follow."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
              >
                <Card className="h-full">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-black">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-lg font-semibold">{card.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-white/70">{card.text}</div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

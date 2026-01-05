import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "../../constants/animations";
import { SectionHeader } from "../common/SectionHeader";
import { Button } from "../ui/Button";
import { FAQItem } from "../faq/FAQItem";

export function FaqSection({ faq, copy, hotmartUrl }) {
  return (
    <section className="relative z-10 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions people ask before buying"
          subtitle="Because nobody wants to waste money on another PDF they’ll ignore."
        />

        <div className="mx-auto mt-10 grid max-w-3xl gap-4">
          {faq.map((faqItem, index) => (
            <motion.div
              key={faqItem.q}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              <FAQItem q={faqItem.q} a={faqItem.a} defaultOpen={index === 0} />
            </motion.div>
          ))}
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

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { fadeUp } from "../../constants/animations";
import { cn } from "../../utils/cn";
import { SectionHeader } from "../common/SectionHeader";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export function TestimonialsSection({ testimonials, copy, hotmartUrl }) {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="relative z-10 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Reviews"
          title="What readers are saying"
          subtitle="Real feedback from real people. No fake hype, no made-up quotes."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name + index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
            >
              <Card className="h-full">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={cn(
                        "h-4 w-4",
                        starIndex < (testimonial.stars ?? 5)
                          ? "text-yellow-300"
                          : "text-white/20"
                      )}
                      fill={
                        starIndex < (testimonial.stars ?? 5)
                          ? "currentColor"
                          : "transparent"
                      }
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">“{testimonial.text}”</p>
                <div className="mt-5">
                  <div className="text-sm font-semibold">{testimonial.name}</div>
                  {testimonial.context ? (
                    <div className="text-xs text-white/60">{testimonial.context}</div>
                  ) : null}
                </div>
              </Card>
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

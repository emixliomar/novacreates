import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export function Card({ children, className = "" }) {
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

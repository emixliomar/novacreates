import { cn } from "../../utils/cn";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-white/20";
const variants = {
  primary: "bg-white text-black hover:bg-white/90",
  secondary: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
};

export function Button({ href, children, variant = "primary", className = "", ...rest }) {
  return (
    <a href={href} className={cn(baseStyles, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}

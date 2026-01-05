import { useMemo } from "react";
import { BackgroundGlow } from "../components/layout/BackgroundGlow";
import { TopBar } from "../components/layout/TopBar";
import { SoftDivider } from "../components/common/SoftDivider";
import { HeroSection } from "../components/sections/HeroSection";
import { ValueSection } from "../components/sections/ValueSection";
import { InsideSection } from "../components/sections/InsideSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { FaqSection } from "../components/sections/FaqSection";
import { FinalSection } from "../components/sections/FinalSection";
import { COPY, HOTMART_URL } from "../content/landingContent";

export default function Landing() {
  const copy = useMemo(() => COPY, []);

  return (
    <div className="min-h-screen bg-[#07070A] text-white">
      <BackgroundGlow />

      <TopBar
        productName={copy.productName}
        trustLine={copy.trustLine}
        hotmartUrl={HOTMART_URL}
        ctaPrimary={copy.ctaPrimary}
      />

      <HeroSection copy={copy} hotmartUrl={HOTMART_URL} />
      <SoftDivider />

      <ValueSection valueCards={copy.valueCards} />
      <SoftDivider />

      <InsideSection copy={copy} hotmartUrl={HOTMART_URL} />
      <SoftDivider />

      <TestimonialsSection
        testimonials={copy.testimonials}
        copy={copy}
        hotmartUrl={HOTMART_URL}
      />
      <SoftDivider />

      <FaqSection faq={copy.faq} copy={copy} hotmartUrl={HOTMART_URL} />
      <SoftDivider />

      <FinalSection copy={copy} hotmartUrl={HOTMART_URL} />
    </div>
  );
}

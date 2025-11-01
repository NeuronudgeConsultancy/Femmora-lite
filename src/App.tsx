import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { HowItWorksSection } from "@/sections/HowItWorksSection";
import { PricingSection } from "@/sections/PricingSection";
import { CommunitySection } from "@/sections/CommunitySection";
import { ChipSection } from "@/sections/ChipSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { FAQSection } from "@/sections/FAQSection";
import { CTASection } from "@/sections/CTASection";
import { Footer } from "@/sections/Footer";
import { Attribution } from "@/components/Attribution";

export const App = () => {
  return (
    <body className="text-gray-800 text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-ui_sans_serif">
      <Header />
      <Hero />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <CommunitySection />
      <ChipSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <Attribution />
    </body>
  );
};

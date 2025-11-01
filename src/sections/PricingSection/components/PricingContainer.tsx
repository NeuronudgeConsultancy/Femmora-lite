import { SectionHeader } from "@/components/SectionHeader";
import { PricingGrid } from "@/sections/PricingSection/components/PricingGrid";

export const PricingContainer = () => {
  return (
    <div className="box-border caret-transparent max-w-none w-full mx-auto px-4 md:max-w-screen-xl">
      <SectionHeader
        title="Simple, Transparent Pricing"
        description="Choose the plan that fits your needs. Cancel anytime."
        variant="mb-16"
      />
      <PricingGrid />
    </div>
  );
};

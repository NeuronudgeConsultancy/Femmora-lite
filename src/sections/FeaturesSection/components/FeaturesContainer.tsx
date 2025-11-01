import { SectionHeader } from "@/components/SectionHeader";
import { FeaturesGrid } from "@/sections/FeaturesSection/components/FeaturesGrid";

export const FeaturesContainer = () => {
  return (
    <div className="box-border caret-transparent max-w-none w-full mx-auto px-4 md:max-w-screen-xl">
      <SectionHeader
        title="Empowering Your Reproductive Journey"
        description="FEMMORA Lite combines cutting-edge AI with women's health expertise to give you unprecedented insights into your fertility and hormonal health."
        variant="mb-16"
      />
      <FeaturesGrid />
    </div>
  );
};

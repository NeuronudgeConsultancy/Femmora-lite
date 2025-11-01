import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroMockup } from "@/sections/Hero/components/HeroMockup";

export const HeroContainer = () => {
  return (
    <div className="items-center box-border caret-transparent flex flex-col max-w-none w-full mx-auto px-4 py-16 md:flex-row md:max-w-screen-xl md:py-24">
      <HeroContent />
      <HeroMockup />
    </div>
  );
};

import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialsGrid } from "@/sections/TestimonialsSection/components/TestimonialsGrid";

export const TestimonialsContainer = () => {
  return (
    <div className="box-border caret-transparent max-w-none w-full mx-auto px-4 md:max-w-screen-xl">
      <SectionHeader
        title="Trusted by Women Worldwide"
        description="Hear from women who've transformed their reproductive health journey with FEMMORA Lite."
        variant="mb-12"
      />
      <TestimonialsGrid />
    </div>
  );
};

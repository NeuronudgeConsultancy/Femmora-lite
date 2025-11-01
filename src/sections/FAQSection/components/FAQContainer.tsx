import { SectionHeader } from "@/components/SectionHeader";
import { FAQList } from "@/sections/FAQSection/components/FAQList";

export const FAQContainer = () => {
  return (
    <div className="box-border caret-transparent max-w-none w-full mx-auto px-4 md:max-w-screen-xl">
      <SectionHeader
        title="Frequently Asked Questions"
        description="Everything you need to know about FEMMORA Lite and our services."
        variant="mb-12"
      />
      <FAQList />
    </div>
  );
};

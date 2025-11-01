import { FooterGrid } from "@/sections/Footer/components/FooterGrid";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const FooterContainer = () => {
  return (
    <div className="box-border caret-transparent max-w-none w-full mx-auto px-4 md:max-w-screen-xl">
      <FooterGrid />
      <FooterBottom />
    </div>
  );
};

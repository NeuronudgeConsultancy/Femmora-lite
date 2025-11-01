import { HeroButtons } from "@/sections/Hero/components/HeroButtons";
import { SecurityBadge } from "@/sections/Hero/components/SecurityBadge";

export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent w-auto mb-10 md:w-6/12 md:mb-0">
      <h1 className="text-4xl font-bold box-border caret-transparent leading-[45px] mb-6 md:text-5xl md:leading-[48px]">
        Your AI-Powered{" "}
        <span className="text-purple-600 text-4xl box-border caret-transparent leading-[45px] md:text-5xl md:leading-[48px]">
          Fertility &amp; Hormone
        </span>
        Companion
      </h1>
      <p className="text-gray-600 text-lg box-border caret-transparent leading-7 mb-8">
        FEMMORA Lite uses advanced AI to predict your hormonal patterns,
        fertility windows, and reproductive health with unprecedented accuracy.
      </p>
      <HeroButtons />
      <SecurityBadge />
    </div>
  );
};

import { CycleCard } from "@/sections/Hero/components/CycleCard";

export const HeroMockup = () => {
  return (
    <div className="box-border caret-transparent flex justify-center w-auto md:w-6/12">
      <div className="relative box-border caret-transparent max-w-md w-full">
        <div className="absolute bg-purple-200 box-border caret-transparent h-32 opacity-50 w-32 rounded-full -left-10 -top-10"></div>
        <div className="absolute bg-pink-200 box-border caret-transparent h-32 opacity-50 w-32 rounded-full -right-10 -bottom-10"></div>
        <CycleCard />
      </div>
    </div>
  );
};

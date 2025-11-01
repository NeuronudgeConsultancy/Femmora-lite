import { ChipContent } from "@/sections/ChipSection/components/ChipContent";
import { WaitlistForm } from "@/sections/ChipSection/components/WaitlistForm";

export const ChipContainer = () => {
  return (
    <div className="box-border caret-transparent max-w-none w-full mx-auto px-4 md:max-w-screen-xl">
      <ChipContent />
      <WaitlistForm />
    </div>
  );
};

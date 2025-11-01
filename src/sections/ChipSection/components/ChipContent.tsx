import { ChipFeatures } from "@/sections/ChipSection/components/ChipFeatures";
import { ChipVisual } from "@/sections/ChipSection/components/ChipVisual";

export const ChipContent = () => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent block max-w-4xl overflow-hidden mx-auto rounded-xl md:flex">
      <ChipFeatures />
      <ChipVisual />
    </div>
  );
};

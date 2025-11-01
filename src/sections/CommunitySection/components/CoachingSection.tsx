import { CoachingContent } from "@/sections/CommunitySection/components/CoachingContent";
import { CoachingCoaches } from "@/sections/CommunitySection/components/CoachingCoaches";

export const CoachingSection = () => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent max-w-4xl overflow-hidden mx-auto rounded-xl">
      <div className="box-border caret-transparent block md:flex">
        <CoachingContent />
        <CoachingCoaches />
      </div>
    </div>
  );
};

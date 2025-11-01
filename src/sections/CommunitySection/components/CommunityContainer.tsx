import { SectionHeader } from "@/components/SectionHeader";
import { CommunityGrid } from "@/sections/CommunitySection/components/CommunityGrid";
import { CoachingSection } from "@/sections/CommunitySection/components/CoachingSection";

export const CommunityContainer = () => {
  return (
    <div className="box-border caret-transparent max-w-none w-full mx-auto px-4 md:max-w-screen-xl">
      <SectionHeader
        title="You're Not Alone"
        description="Connect with others who understand your journey in our supportive communities."
        variant="mb-16"
      />
      <CommunityGrid />
      <CoachingSection />
    </div>
  );
};

import { CommunityCard } from "@/sections/CommunitySection/components/CommunityCard";

export const CommunityGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 mb-16 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
      <CommunityCard
        iconVariant="bg-pink-100"
        iconClass="text-pink-600"
        title="POI & Early Menopause"
        description="Connect with women navigating premature ovarian insufficiency or early menopause."
        memberCount="1,200+ members"
      />
      <CommunityCard
        iconVariant="bg-blue-100"
        iconClass="text-blue-600"
        title="IVF & Fertility Treatment"
        description="Share experiences and get support through your fertility treatment journey."
        memberCount="2,500+ members"
      />
      <CommunityCard
        iconVariant="bg-purple-100"
        iconClass="text-purple-600"
        title="Perimenopause Transition"
        description="Learn from others navigating the physical and emotional changes of perimenopause."
        memberCount="3,800+ members"
      />
    </div>
  );
};

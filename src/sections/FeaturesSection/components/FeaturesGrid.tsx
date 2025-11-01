import { FeatureCard } from "@/sections/FeaturesSection/components/FeatureCard";

export const FeaturesGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
      <FeatureCard
        iconContainerVariant="text-purple-600 bg-purple-100"
        iconClassName="before:text-purple-600"
        title="AI-Powered Hormonal Forecast"
        description="Predictive analytics based on your cycle tracking and wearable data to anticipate hormonal shifts before they happen."
        tag1Text="Cycle Tracking"
        tag2Text="Wearable Integration"
        tagVariant="text-purple-800 text-xs bg-purple-100"
      />
      <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent overflow-hidden rounded-xl">
        <FeatureCard
          iconClassName=""
          title="Fertility Timeline Prediction"
          description="Advanced algorithms analyze your data or third-party hormone readings (Mira/Oova) to pinpoint your optimal conception windows."
          tag1Text="Ovulation Tracking"
          tag2Text="Device Integration"
          tagVariant="text-pink-800 bg-pink-100"
          containerVariant=""
          iconContainerVariant={undefined}
        />
      </div>
      <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent overflow-hidden rounded-xl">
        <FeatureCard
          iconContainerVariant="text-blue-600 items-center bg-blue-100"
          iconClassName="before:text-blue-600"
          title="Reproductive Age Score"
          description="Our proprietary AI calculates your biological fertility age based on hormone patterns, lifestyle, and medical history."
          tag1Text="Personalized Score"
          tag2Text="AI Analysis"
          tagVariant="text-blue-800 bg-blue-100"
        />
      </div>
      <FeatureCard
        iconContainerVariant="text-green-600 items-center bg-green-100"
        iconClassName="before:text-green-600"
        title="Perimenopause Support"
        description="Track symptoms and mood changes with intelligent pattern recognition to help navigate perimenopause with confidence."
        tag1Text="Symptom Tracker"
        tag2Text="Mood Analysis"
        tagVariant="text-green-800 bg-green-100"
      />
      <FeatureCard
        iconContainerVariant="text-yellow-600 items-center bg-yellow-100"
        iconClassName=""
        title="Specialized Communities"
        description="Connect with others facing similar challenges - POI, early menopause, or IVF anxiety in our moderated, supportive spaces."
        tag1Text="Support Groups"
        tag2Text="Expert Coaching"
        tagVariant="text-yellow-800 text-xs bg-yellow-100"
      />
      <FeatureCard
        iconContainerVariant="text-indigo-600 bg-indigo-100"
        iconClassName="before:text-indigo-600"
        title="Future Chip Implant"
        description="Join our waitlist for the revolutionary FEMMORA chip that will provide continuous hormone monitoring and real-time insights."
        tag1Text="Coming Soon"
        tag2Text="Waitlist Open"
        tagVariant="text-indigo-800 bg-indigo-100"
      />
    </div>
  );
};

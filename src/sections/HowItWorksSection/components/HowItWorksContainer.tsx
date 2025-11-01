import { SectionHeader } from "@/components/SectionHeader";
import { Step } from "@/sections/HowItWorksSection/components/Step";

export const HowItWorksContainer = () => {
  return (
    <div className="box-border caret-transparent max-w-none w-full mx-auto px-4 md:max-w-screen-xl">
      <SectionHeader
        title="How FEMMORA Lite Works"
        description="Our AI learns your unique patterns to provide personalized insights and predictions about your reproductive health."
        variant="mb-16"
      />
      <Step
        stepNumber="1"
        title="1. Connect Your Data Sources"
        description="Sync your wearable devices, fertility trackers, or manually input your cycle data. FEMMORA Lite integrates with Apple Health, Fitbit, Oura, Mira, Oova and more."
        layoutVariant="mb-16 md:flex-row"
        contentVariant="pr-0 md:pr-10"
        deviceIcons={[
          { type: "icon", iconClass: "text-gray-700 text-3xl" },
          { type: "icon", iconClass: "text-blue-500 text-3xl" },
          {
            type: "image",
            imageUrl: "https://ouraring.com/favicon.ico",
            alt: "Oura",
          },
          {
            type: "image",
            imageUrl: "https://www.miracare.com/favicon.ico",
            alt: "Mira",
          },
          {
            type: "image",
            imageUrl: "https://www.oova.life/favicon.ico",
            alt: "Oova",
          },
        ]}
        mockupVariant="connect"
        mockupTitle="Connect Devices"
        devices={[
          {
            name: "Apple Health",
            status: "Connected",
            iconColor: "text-blue-600",
            bgColor: "bg-blue-100",
            statusColor: "text-gray-500",
            checkIconColor: "text-green-500",
          },
          {
            name: "Fitbit",
            status: "Tap to connect",
            iconColor: "text-green-600",
            bgColor: "bg-green-100",
            statusColor: "text-gray-500",
            checkIconColor: "text-gray-400",
          },
          {
            name: "Mira Analyzer",
            status: "Tap to connect",
            iconColor: "text-purple-600",
            bgColor: "bg-purple-100",
            statusColor: "text-gray-500",
            checkIconColor: "text-gray-400",
          },
          {
            name: "Add Manual Data",
            status: "Enter your metrics",
            iconColor: "text-pink-600",
            bgColor: "bg-pink-100",
            statusColor: "text-gray-500",
            checkIconColor: "text-gray-400",
          },
        ]}
      />
      <Step
        stepNumber="2"
        title="2. AI Learns Your Patterns"
        description="Our proprietary algorithms analyze your hormonal data, symptoms, and lifestyle factors to identify patterns and predict future cycles with increasing accuracy."
        layoutVariant="mb-16 md:flex-row-reverse"
        contentVariant="pl-0 md:pl-10"
        patternFeature={{
          iconColor: "text-purple-600",
          bgColor: "bg-purple-100",
          title: "Pattern Recognition",
          subtitle: "AI identifies your unique cycle patterns",
        }}
        mockupVariant="analysis"
        mockupTitle="Cycle Analysis"
        mockupBadge="AI Processing"
        mockupCycleDay="Day 14"
        mockupCycleImageUrl="https://c.animaapp.com/mhfcsu6szWgqCt/assets/image-1.png"
        mockupCycleInsights={[
          "Your ovulation typically occurs 2 days earlier than average for your cycle length.",
          "Your LH surge pattern suggests optimal fertility window begins tomorrow.",
        ]}
      />
      <Step
        stepNumber="3"
        title="3. Get Personalized Insights"
        description="Receive actionable recommendations, fertility predictions, and health insights tailored specifically to your body and goals."
        layoutVariant="md:flex-row"
        contentVariant="pr-0 md:pr-10"
        insightFeatures={[
          {
            iconColor: "text-green-600",
            bgColor: "bg-green-100",
            title: "Real-time Notifications",
            subtitle:
              "Get alerts for fertile windows, period predictions, and hormonal shifts",
          },
          {
            iconColor: "text-blue-600",
            bgColor: "bg-blue-100",
            title: "Detailed Reports",
            subtitle: "Monthly summaries and trend analysis",
          },
          {
            iconColor: "text-purple-600",
            bgColor: "bg-purple-100",
            title: "Doctor-Ready Data",
            subtitle: "Exportable reports for your healthcare provider",
          },
        ]}
        mockupVariant="insights"
        mockupTitle="Your Insights"
        mockupBadge="New"
        mockupMainInsight={{
          title: "High Fertility Window",
          subtitle: "Starts tomorrow at 87% probability",
          iconColor: "text-purple-600",
          bgColor: "bg-purple-100",
        }}
        mockupOptimalDays={{
          label: "Optimal Conception Days",
          value: "3 days",
          progress: "w-9/12",
        }}
        mockupMetrics={[
          {
            label: "Basal Temp Rise",
            value: "Expected in 2 days",
            iconColor: "text-blue-600",
            bgColor: "bg-blue-100",
          },
          {
            label: "Cervical Fluid",
            value: "Egg-white likely",
            iconColor: "text-pink-600",
            bgColor: "bg-pink-100",
          },
          {
            label: "Energy Level",
            value: "Peak expected",
            iconColor: "text-green-600",
            bgColor: "bg-green-100",
          },
        ]}
        mockupShowCalendarButton={true}
      />
    </div>
  );
};

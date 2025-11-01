import { StepMockup } from "@/sections/HowItWorksSection/components/StepMockup";

export type StepProps = {
  stepNumber: string;
  title: string;
  description: string;
  layoutVariant: string;
  contentVariant: string;
  devices?: Array<{
    name: string;
    status: string;
    iconColor: string;
    bgColor: string;
    statusColor: string;
    checkIconColor: string;
  }>;
  deviceIcons?: Array<{
    type: "icon" | "image";
    iconClass?: string;
    imageUrl?: string;
    alt?: string;
  }>;
  patternFeature?: {
    iconColor: string;
    bgColor: string;
    title: string;
    subtitle: string;
  };
  insightFeatures?: Array<{
    iconColor: string;
    bgColor: string;
    title: string;
    subtitle: string;
  }>;
  mockupVariant: string;
  mockupTitle: string;
  mockupBadge?: string;
  mockupCycleDay?: string;
  mockupCycleImageUrl?: string;
  mockupCycleInsights?: string[];
  mockupMainInsight?: {
    title: string;
    subtitle: string;
    iconColor: string;
    bgColor: string;
  };
  mockupOptimalDays?: {
    label: string;
    value: string;
    progress: string;
  };
  mockupMetrics?: Array<{
    label: string;
    value: string;
    iconColor: string;
    bgColor: string;
  }>;
  mockupShowCalendarButton?: boolean;
};

export const Step = (props: StepProps) => {
  return (
    <div
      className={`items-center box-border caret-transparent flex flex-col ${props.layoutVariant}`}
    >
      <div
        className={`box-border caret-transparent w-auto mb-8 md:w-6/12 md:mb-0 ${props.contentVariant}`}
      >
        <h3 className="text-2xl font-bold box-border caret-transparent leading-8 mb-4">
          {props.title}
        </h3>
        <p className="text-gray-600 box-border caret-transparent mb-6">
          {props.description}
        </p>

        {props.deviceIcons && (
          <div className="box-border caret-transparent gap-x-3 flex flex-wrap gap-y-3">
            {props.deviceIcons.map((icon, index) => (
              <div
                key={index}
                className="items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex h-16 justify-center w-16 rounded-xl"
              >
                {icon.type === "icon" ? (
                  <i
                    className={`${icon.iconClass} box-border caret-transparent block leading-9 font-font_awesome_6_brands`}
                  ></i>
                ) : (
                  <img
                    src={icon.imageUrl}
                    alt={icon.alt}
                    className="box-border caret-transparent h-8 max-w-full w-8"
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {props.patternFeature && (
          <div className="box-border caret-transparent bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] inline-block p-4 rounded-lg">
            <div className="items-center box-border caret-transparent flex">
              <div
                className={`${props.patternFeature.iconColor} items-center ${props.patternFeature.bgColor} box-border caret-transparent flex h-10 justify-center w-10 mr-3 rounded-full`}
              >
                <i className="font-black box-border caret-transparent block leading-4 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
              </div>
              <div className="box-border caret-transparent">
                <div className="font-medium box-border caret-transparent">
                  {props.patternFeature.title}
                </div>
                <div className="text-gray-500 text-xs box-border caret-transparent leading-4">
                  {props.patternFeature.subtitle}
                </div>
              </div>
            </div>
          </div>
        )}

        {props.insightFeatures && (
          <div className="box-border caret-transparent">
            {props.insightFeatures.map((feature, index) => (
              <div
                key={index}
                className={`items-start box-border caret-transparent flex ${index > 0 ? "mt-4" : ""}`}
              >
                <div
                  className={`${feature.iconColor} items-center ${feature.bgColor} box-border caret-transparent flex h-8 justify-center w-8 mr-3 mt-1 rounded-full`}
                >
                  <i className="text-sm font-black box-border caret-transparent block leading-5 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-sm before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
                </div>
                <div className="box-border caret-transparent">
                  <div className="font-medium box-border caret-transparent">
                    {feature.title}
                  </div>
                  <div className="text-gray-500 text-sm box-border caret-transparent leading-5">
                    {feature.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <StepMockup
        variant={props.mockupVariant}
        title={props.mockupTitle}
        badge={props.mockupBadge}
        devices={props.devices}
        cycleDay={props.mockupCycleDay}
        cycleImageUrl={props.mockupCycleImageUrl}
        cycleInsights={props.mockupCycleInsights}
        mainInsight={props.mockupMainInsight}
        optimalDays={props.mockupOptimalDays}
        metrics={props.mockupMetrics}
        showCalendarButton={props.mockupShowCalendarButton}
      />
    </div>
  );
};

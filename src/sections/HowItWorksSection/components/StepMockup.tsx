export type StepMockupProps = {
  variant: string;
  title: string;
  badge?: string;
  devices?: Array<{
    name: string;
    status: string;
    iconColor: string;
    bgColor: string;
    statusColor: string;
    checkIconColor: string;
  }>;
  cycleDay?: string;
  cycleImageUrl?: string;
  cycleInsights?: Array<string>;
  mainInsight?: {
    title: string;
    subtitle: string;
    iconColor: string;
    bgColor: string;
  };
  optimalDays?: {
    label: string;
    value: string;
    progress: string;
  };
  metrics?: Array<{
    label: string;
    value: string;
    iconColor: string;
    bgColor: string;
  }>;
  showCalendarButton?: boolean;
};

export const StepMockup = (props: StepMockupProps) => {
  return (
    <div className="box-border caret-transparent flex justify-center w-auto md:w-6/12">
      <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent max-w-md w-full overflow-hidden rounded-xl">
        <div
          className={`items-center bg-gray-100 box-border caret-transparent flex px-4 py-3 ${props.variant === "connect" ? "" : "justify-between"}`}
        >
          {props.variant === "connect" ? (
            <>
              <div className="box-border caret-transparent flex">
                <div className="bg-red-500 box-border caret-transparent h-3 w-3 rounded-full"></div>
                <div className="bg-yellow-500 box-border caret-transparent h-3 w-3 ml-2 rounded-full"></div>
                <div className="bg-green-500 box-border caret-transparent h-3 w-3 ml-2 rounded-full"></div>
              </div>
              <div className="box-border caret-transparent text-gray-500 text-sm leading-5 mx-auto">
                {props.title}
              </div>
            </>
          ) : (
            <>
              <div className="box-border caret-transparent text-gray-700 text-sm leading-5">
                {props.title}
              </div>
              <div
                className={`box-border caret-transparent ${props.variant === "analysis" ? "text-white text-xs bg-purple-600 leading-4 px-2 py-1 rounded-full" : "text-white text-xs bg-green-600 leading-4 px-2 py-1 rounded-full"}`}
              >
                {props.badge}
              </div>
            </>
          )}
        </div>
        <div className="box-border caret-transparent p-5">
          {props.variant === "connect" && props.devices && (
            <div className="box-border caret-transparent">
              {props.devices.map((device, index) => (
                <div
                  key={index}
                  className={`items-center box-border caret-transparent flex border border-gray-200 p-3 rounded-lg border-solid ${index > 0 ? "mt-4" : ""}`}
                >
                  <div
                    className={`${device.iconColor} items-center ${device.bgColor} box-border caret-transparent flex h-10 justify-center w-10 mr-3 rounded-full`}
                  >
                    <i className="box-border caret-transparent block leading-4 font-font_awesome_6_brands"></i>
                  </div>
                  <div className="box-border caret-transparent grow">
                    <div className="font-medium box-border caret-transparent">
                      {device.name}
                    </div>
                    <div
                      className={`${device.statusColor} text-xs box-border caret-transparent leading-4`}
                    >
                      {device.status}
                    </div>
                  </div>
                  <i
                    className={`${device.checkIconColor} font-black box-border caret-transparent block leading-4 font-font_awesome_6_free`}
                  ></i>
                </div>
              ))}
            </div>
          )}
          {props.variant === "analysis" && (
            <>
              <div className="bg-[linear-gradient(90deg,rgb(243,231,233)_0%,rgb(227,238,255)_99%,rgb(227,238,255)_100%)] box-border caret-transparent mb-4 p-4 rounded-lg">
                <div className="items-center box-border caret-transparent flex justify-between mb-3">
                  <div className="text-sm font-medium box-border caret-transparent leading-5">
                    Your Cycle Pattern
                  </div>
                  <div className="text-purple-600 text-xs bg-white box-border caret-transparent leading-4 px-2 py-1 rounded-full">
                    {props.cycleDay}
                  </div>
                </div>
                <div className="relative box-border caret-transparent h-40">
                  <img
                    src={props.cycleImageUrl}
                    className="aspect-[auto_376_/_160] box-border caret-transparent max-w-full w-[376px]"
                  />
                </div>
                <div className="text-gray-500 text-xs box-border caret-transparent flex justify-between leading-4 mt-2">
                  <span className="box-border caret-transparent block">
                    Period
                  </span>
                  <span className="box-border caret-transparent block">
                    Follicular
                  </span>
                  <span className="box-border caret-transparent block">
                    Ovulation
                  </span>
                  <span className="box-border caret-transparent block">
                    Luteal
                  </span>
                </div>
              </div>
              <div className="text-gray-600 text-sm box-border caret-transparent leading-5 mb-4">
                {props.cycleInsights?.map((insight, index) => (
                  <div
                    key={index}
                    className={`items-start box-border caret-transparent flex ${index > 0 ? "mt-2" : ""}`}
                  >
                    <i className="text-yellow-500 font-black box-border caret-transparent block leading-[14px] mr-2 mt-1 font-font_awesome_6_free"></i>
                    <span className="box-border caret-transparent block">
                      {insight}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
          {props.variant === "insights" && (
            <>
              {props.mainInsight && (
                <div className="items-center box-border caret-transparent flex mb-4">
                  <div
                    className={`${props.mainInsight.iconColor} items-center ${props.mainInsight.bgColor} box-border caret-transparent flex h-12 justify-center w-12 mr-3 rounded-full`}
                  >
                    <i className="text-xl font-black box-border caret-transparent block leading-7 font-font_awesome_6_free"></i>
                  </div>
                  <div className="box-border caret-transparent">
                    <div className="text-purple-800 font-bold box-border caret-transparent">
                      {props.mainInsight.title}
                    </div>
                    <div className="text-gray-500 text-xs box-border caret-transparent leading-4">
                      {props.mainInsight.subtitle}
                    </div>
                  </div>
                </div>
              )}
              {props.optimalDays && (
                <div className="box-border caret-transparent mb-4">
                  <div className="text-sm box-border caret-transparent flex justify-between leading-5 mb-1">
                    <span className="box-border caret-transparent block">
                      {props.optimalDays.label}
                    </span>
                    <span className="box-border caret-transparent block">
                      {props.optimalDays.value}
                    </span>
                  </div>
                  <div className="bg-gray-200 box-border caret-transparent h-2 w-full rounded-full">
                    <div
                      className={`bg-purple-600 box-border caret-transparent h-2 ${props.optimalDays.progress} rounded-full`}
                    ></div>
                  </div>
                </div>
              )}
              {props.metrics && (
                <div className="box-border caret-transparent">
                  {props.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className={`items-center box-border caret-transparent flex justify-between ${index > 0 ? "mt-3" : ""}`}
                    >
                      <div className="items-center box-border caret-transparent flex">
                        <div
                          className={`${metric.iconColor} items-center ${metric.bgColor} box-border caret-transparent flex h-8 justify-center w-8 mr-2 rounded-full`}
                        >
                          <i className="text-sm font-black box-border caret-transparent block leading-5 font-font_awesome_6_free"></i>
                        </div>
                        <span className="text-sm box-border caret-transparent block leading-5">
                          {metric.label}
                        </span>
                      </div>
                      <span className="text-sm font-medium box-border caret-transparent block leading-5">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              {props.showCalendarButton && (
                <button className="text-white items-center bg-purple-600 caret-transparent flex justify-center text-center w-full mt-4 px-0 py-2 rounded-lg hover:bg-purple-700">
                  <i className="font-black box-border caret-transparent block leading-4 mr-2 font-font_awesome_6_free"></i>
                  <span className="box-border caret-transparent block">
                    Add to Calendar
                  </span>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

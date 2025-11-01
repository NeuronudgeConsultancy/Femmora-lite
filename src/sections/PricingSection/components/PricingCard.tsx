export type PricingCardProps = {
  variant: string;
  title: string;
  description: string;
  price: string;
  priceSubtext?: string;
  buttonText: string;
  buttonVariant: string;
  showBadge?: boolean;
  badgeText?: string;
  features: Array<{
    text: string;
    enabled: boolean;
  }>;
};

export const PricingCard = (props: PricingCardProps) => {
  return (
    <div
      className={`bg-white box-border caret-transparent overflow-hidden rounded-xl border-solid ${props.variant}`}
    >
      {props.showBadge && (
        <div className="box-border caret-transparent absolute text-white text-xs font-bold bg-purple-600 leading-4 px-3 py-1 rounded-bl-lg right-0 top-0">
          {props.badgeText}
        </div>
      )}
      <div className="box-border caret-transparent p-6">
        <h3 className="text-xl font-bold box-border caret-transparent leading-7 mb-2">
          {props.title}
        </h3>
        <p className="text-gray-600 box-border caret-transparent mb-6">
          {props.description}
        </p>
        <div className="box-border caret-transparent mb-6">
          <span className="text-4xl font-bold box-border caret-transparent leading-10">
            {props.price}
          </span>
          {props.priceSubtext && (
            <span className="text-gray-500 box-border caret-transparent">
              {props.priceSubtext}
            </span>
          )}
        </div>
        <button className={props.buttonVariant}>{props.buttonText}</button>
      </div>
      <div className="box-border caret-transparent border-gray-200 p-6 border-t border-solid">
        <ul className="box-border caret-transparent list-none pl-0">
          {props.features.map((feature, index) => (
            <li
              key={index}
              className={`${feature.enabled ? "" : "text-gray-400 "}items-start box-border caret-transparent flex${index > 0 ? " mt-3" : ""}`}
            >
              <i
                className={
                  feature.enabled
                    ? "text-green-500 font-black box-border caret-transparent block leading-4 mr-2 mt-1 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-green-500 before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"
                    : "font-black box-border caret-transparent block leading-4 mr-2 mt-1 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"
                }
              ></i>
              <span className="box-border caret-transparent block">
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

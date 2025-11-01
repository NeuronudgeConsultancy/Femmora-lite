export type FeatureCardProps = {
  containerVariant?: string;
  iconContainerVariant?: string;
  iconClassName: string;
  title: string;
  description: string;
  tag1Text: string;
  tag2Text: string;
  tagVariant: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div
      className={`box-border caret-transparent bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] overflow-hidden rounded-xl ${props.containerVariant || ""}`}
    >
      <div className="box-border caret-transparent p-6">
        {props.iconContainerVariant ? (
          <div
            className={`items-center box-border caret-transparent flex h-12 justify-center w-12 mb-4 rounded-full ${props.iconContainerVariant}`}
          >
            <i
              className={`text-xl font-black box-border caret-transparent block leading-7 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-xl before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free ${props.iconClassName}`}
            ></i>
          </div>
        ) : (
          <div className="box-border caret-transparent text-pink-600 items-center bg-pink-100 flex h-12 justify-center w-12 mb-4 rounded-full">
            <i
              className={`text-xl font-black box-border caret-transparent block leading-7 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-xl before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-7 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free ${props.iconClassName}`}
            ></i>
          </div>
        )}
        <h3 className="text-xl font-bold box-border caret-transparent leading-7 mb-2">
          {props.title}
        </h3>
        <p className="text-gray-600 box-border caret-transparent mb-4">
          {props.description}
        </p>
        <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
          <span
            className={`text-xs box-border caret-transparent block leading-4 px-2 py-1 rounded-full ${props.tagVariant}`}
          >
            {props.tag1Text}
          </span>
          <span
            className={`text-xs box-border caret-transparent block leading-4 px-2 py-1 rounded-full ${props.tagVariant}`}
          >
            {props.tag2Text}
          </span>
        </div>
      </div>
    </div>
  );
};

export type CommunityCardProps = {
  iconVariant: string;
  iconClass: string;
  title: string;
  description: string;
  memberCount: string;
};

export const CommunityCard = (props: CommunityCardProps) => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent overflow-hidden rounded-xl">
      <div
        className={`items-center box-border caret-transparent flex h-48 justify-center ${props.iconVariant}`}
      >
        <i
          className={`text-6xl font-black box-border caret-transparent block leading-[60px] font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-6xl before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[60px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free ${props.iconClass}`}
        ></i>
      </div>
      <div className="box-border caret-transparent p-6">
        <h3 className="text-xl font-bold box-border caret-transparent leading-7 mb-2">
          {props.title}
        </h3>
        <p className="text-gray-600 box-border caret-transparent mb-4">
          {props.description}
        </p>
        <div className="text-gray-500 text-sm items-center box-border caret-transparent flex leading-5">
          <i className="font-black box-border caret-transparent block leading-[14px] mr-2 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-gray-500 before:text-sm before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[14px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
          <span className="box-border caret-transparent block">
            {props.memberCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export type TestimonialCardProps = {
  imageUrl: string;
  imageAlt: string;
  name: string;
  subtitle: string;
  testimonialText: string;
  avatarVariant: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent border border-gray-100 p-6 rounded-xl border-solid">
      <div className="items-center box-border caret-transparent flex mb-4">
        <div
          className={`box-border caret-transparent h-12 w-12 overflow-hidden mr-4 rounded-full ${props.avatarVariant}`}
        >
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            className="box-border caret-transparent h-full max-w-full object-cover w-full"
          />
        </div>
        <div className="box-border caret-transparent">
          <div className="font-bold box-border caret-transparent">
            {props.name}
          </div>
          <div className="text-gray-500 text-sm box-border caret-transparent leading-5">
            {props.subtitle}
          </div>
        </div>
      </div>
      <div className="text-gray-700 box-border caret-transparent mb-4">
        &quot;{props.testimonialText}&quot;
      </div>
      <div className="text-yellow-400 box-border caret-transparent flex">
        <i className="font-black box-border caret-transparent block leading-4 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-yellow-400 before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
        <i className="font-black box-border caret-transparent block leading-4 ml-1 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-yellow-400 before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
        <i className="font-black box-border caret-transparent block leading-4 ml-1 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-yellow-400 before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
        <i className="font-black box-border caret-transparent block leading-4 ml-1 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-yellow-400 before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
        <i className="font-black box-border caret-transparent block leading-4 ml-1 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-yellow-400 before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
      </div>
    </div>
  );
};

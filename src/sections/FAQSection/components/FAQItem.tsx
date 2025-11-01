export type FAQItemProps = {
  question: string;
  answer: string;
  variant?: string;
};

export const FAQItem = (props: FAQItemProps) => {
  return (
    <div
      className={`bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent overflow-hidden rounded-lg ${props.variant || ""}`}
    >
      <button className="items-center bg-transparent caret-transparent flex justify-between text-left w-full p-5">
        <span className="font-medium box-border caret-transparent block">
          {props.question}
        </span>
        <i className="text-purple-600 font-black box-border caret-transparent block leading-4 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-purple-600 before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
      </button>
      <div className="box-border caret-transparent hidden pb-5 px-5">
        <p className="text-gray-600 box-border caret-transparent">
          {props.answer}
        </p>
      </div>
    </div>
  );
};

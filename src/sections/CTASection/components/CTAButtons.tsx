export const CTAButtons = () => {
  return (
    <div className="box-border caret-transparent flex flex-col justify-center md:flex-row">
      <button className="text-purple-600 font-medium bg-white caret-transparent block px-8 py-3 rounded-full hover:bg-gray-100">
        <i className="font-black box-border caret-transparent inline-block leading-4 mr-2 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-purple-600 before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
        Download App
      </button>
      <button className="font-medium bg-transparent caret-transparent block ml-0 mt-4 px-8 py-3 rounded-full border-solid border-white md:ml-4 md:mt-0 hover:bg-purple-700">
        <i className="font-black box-border caret-transparent inline-block leading-4 mr-2 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
        Join Waitlist
      </button>
    </div>
  );
};

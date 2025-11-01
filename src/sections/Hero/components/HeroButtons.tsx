export const HeroButtons = () => {
  return (
    <div className="box-border caret-transparent flex flex-col md:flex-row">
      <button className="text-white items-center bg-purple-600 caret-transparent flex justify-center text-center px-6 py-3 rounded-full hover:bg-purple-700">
        <i className="font-black box-border caret-transparent block leading-4 mr-2 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-white before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
        <span className="box-border caret-transparent block">Download App</span>
      </button>
      <button className="text-purple-600 items-center bg-transparent caret-transparent flex justify-center text-center border border-purple-600 ml-0 mt-4 px-6 py-3 rounded-full border-solid md:ml-4 md:mt-0 hover:bg-purple-50">
        <i className="font-black box-border caret-transparent block leading-4 mr-2 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-purple-600 before:text-base before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
        <span className="box-border caret-transparent block">
          Join Waitlist
        </span>
      </button>
    </div>
  );
};

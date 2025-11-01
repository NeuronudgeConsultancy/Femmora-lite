import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";

export const HeaderActions = () => {
  return (
    <div className="items-center box-border caret-transparent flex">
      <button className="text-purple-600 bg-transparent caret-transparent hidden min-h-0 min-w-0 text-center border border-purple-600 px-4 py-2 rounded-full border-solid md:block md:min-h-[auto] md:min-w-[auto] hover:bg-purple-50">
        Log In
      </button>
      <button className="text-white items-center bg-purple-600 caret-transparent flex text-center ml-4 px-4 py-2 rounded-full hover:bg-purple-700">
        <span className="box-border caret-transparent block">
          Join Waitlist
        </span>
        <i className="text-sm font-black box-border caret-transparent block leading-5 ml-2 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
      </button>
      <MobileMenuButton />
    </div>
  );
};

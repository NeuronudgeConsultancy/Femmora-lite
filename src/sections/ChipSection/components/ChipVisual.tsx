export const ChipVisual = () => {
  return (
    <div className="items-center bg-gray-100 box-border caret-transparent flex justify-center min-h-0 min-w-0 w-auto p-8 md:min-h-[auto] md:min-w-[auto] md:w-6/12">
      <div className="relative box-border caret-transparent">
        <div className="items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent flex h-48 justify-center w-48 rounded-full">
          <div className="items-center bg-purple-100 box-border caret-transparent flex h-32 justify-center w-32 rounded-full">
            <i className="text-purple-600 text-4xl font-black box-border caret-transparent block leading-10 font-font_awesome_6_free before:accent-auto before:box-border before:caret-transparent before:text-purple-600 before:text-4xl before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-10 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_6_free"></i>
          </div>
        </div>
        <div className="absolute text-white text-xs font-bold bg-purple-600 box-border caret-transparent leading-4 px-3 py-1 rounded-full -right-4 -bottom-4">
          FUTURE TECH
        </div>
      </div>
    </div>
  );
};

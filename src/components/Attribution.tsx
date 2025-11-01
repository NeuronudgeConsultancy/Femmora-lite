export const Attribution = () => {
  return (
    <p className="fixed text-white text-xs bg-black/80 box-border caret-transparent leading-[18px] text-center z-10 mt-4 px-2 py-1 rounded-lg left-2 bottom-2">
      Made with{" "}
      <img
        src="https://enzostvs-deepsite.hf.space/logo.svg"
        alt="DeepSite Logo"
        className="box-border caret-transparent inline-block brightness-0 invert-[1] h-4 max-w-full w-4 mr-[3px]"
      />
      <a
        href="https://enzostvs-deepsite.hf.space/"
        className="box-border caret-transparent underline"
      >
        DeepSite
      </a>
      - 🧬{" "}
      <a
        href="https://enzostvs-deepsite.hf.space/?remix=mirnast/femmora"
        className="box-border caret-transparent underline"
      >
        Remix
      </a>
    </p>
  );
};

import { HeaderContainer } from "@/sections/Header/components/HeaderContainer";

export const Header = () => {
  return (
    <header className="sticky bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent z-50 top-0">
      <HeaderContainer />
    </header>
  );
};

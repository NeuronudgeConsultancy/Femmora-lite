import { Logo } from "@/components/Logo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";

export const HeaderContainer = () => {
  return (
    <div className="items-center box-border caret-transparent flex justify-between max-w-none w-full mx-auto px-4 py-3 md:max-w-screen-xl">
      <Logo />
      <DesktopNav />
      <HeaderActions />
    </div>
  );
};

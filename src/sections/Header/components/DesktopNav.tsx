export const DesktopNav = () => {
  return (
    <nav className="box-border caret-transparent hidden min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto]">
      <a
        href="#features"
        className="box-border caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto] hover:text-purple-600"
      >
        Features
      </a>
      <a
        href="#how-it-works"
        className="box-border caret-transparent inline min-h-0 min-w-0 ml-8 md:block md:min-h-[auto] md:min-w-[auto] hover:text-purple-600"
      >
        How It Works
      </a>
      <a
        href="#pricing"
        className="box-border caret-transparent inline min-h-0 min-w-0 ml-8 md:block md:min-h-[auto] md:min-w-[auto] hover:text-purple-600"
      >
        Pricing
      </a>
      <a
        href="#community"
        className="box-border caret-transparent inline min-h-0 min-w-0 ml-8 md:block md:min-h-[auto] md:min-w-[auto] hover:text-purple-600"
      >
        Community
      </a>
      <a
        href="doctor-portal.html"
        className="box-border caret-transparent inline min-h-0 min-w-0 ml-8 md:block md:min-h-[auto] md:min-w-[auto] hover:text-purple-600"
      >
        For Doctors
      </a>
    </nav>
  );
};

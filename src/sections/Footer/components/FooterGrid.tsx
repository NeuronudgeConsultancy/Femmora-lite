import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 mb-8 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
      <FooterBrand />
      <FooterColumn
        title="Product"
        links={[
          { text: "Features", href: "#" },
          { text: "Pricing", href: "#" },
          { text: "App Download", href: "#" },
          { text: "Chip Waitlist", href: "#" },
          { text: "For Clinics", href: "#" },
        ]}
      />
      <FooterColumn
        title="Resources"
        links={[
          { text: "Blog", href: "#" },
          { text: "Research", href: "#" },
          { text: "Community", href: "#" },
          { text: "Help Center", href: "#" },
          { text: "Webinars", href: "#" },
        ]}
      />
      <FooterColumn
        title="Company"
        links={[
          { text: "About Us", href: "#" },
          { text: "Careers", href: "#" },
          { text: "Press", href: "#" },
          { text: "Contact", href: "#" },
          { text: "Privacy Policy", href: "#" },
        ]}
      />
    </div>
  );
};

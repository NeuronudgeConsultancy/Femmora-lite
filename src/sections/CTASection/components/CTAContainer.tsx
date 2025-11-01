import { CTAButtons } from "@/sections/CTASection/components/CTAButtons";

export const CTAContainer = () => {
  return (
    <div className="box-border caret-transparent max-w-none text-center w-full mx-auto px-4 md:max-w-screen-xl">
      <h2 className="text-3xl font-bold box-border caret-transparent leading-9 mb-6 md:text-4xl md:leading-10">
        Ready to Take Control of Your Reproductive Health?
      </h2>
      <p className="text-xl box-border caret-transparent leading-7 max-w-screen-md mb-8 mx-auto">
        Join thousands of women who are using AI to understand their bodies like
        never before.
      </p>
      <CTAButtons />
    </div>
  );
};

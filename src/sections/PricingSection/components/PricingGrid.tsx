import { PricingCard } from "@/sections/PricingSection/components/PricingCard";

export const PricingGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] max-w-screen-lg gap-y-8 mx-auto md:grid-cols-[repeat(3,minmax(0px,1fr))]">
      <PricingCard
        variant="shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] border border-gray-200"
        title="Basic"
        description="Essential tracking for your cycle"
        price="$0"
        priceSubtext="/month"
        buttonText="Get Started"
        buttonVariant="text-purple-600 bg-transparent caret-transparent text-center w-full border border-purple-600 px-0 py-2 rounded-lg border-solid hover:bg-purple-50"
        features={[
          { text: "Cycle tracking", enabled: true },
          { text: "Symptom logging", enabled: true },
          { text: "Basic predictions", enabled: true },
          { text: "AI hormone forecasts", enabled: false },
          { text: "Reproductive Age Score", enabled: false },
          { text: "Premium community access", enabled: false },
        ]}
      />
      <PricingCard
        variant="relative shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] border-purple-600 border-2"
        title="Premium"
        description="Complete fertility & hormone insights"
        price="$9.99"
        priceSubtext="/month"
        buttonText="Start Free Trial"
        buttonVariant="text-white bg-purple-600 caret-transparent text-center w-full px-0 py-2 rounded-lg hover:bg-purple-700"
        showBadge={true}
        badgeText="MOST POPULAR"
        features={[
          { text: "Everything in Basic", enabled: true },
          { text: "AI hormone forecasts", enabled: true },
          { text: "Reproductive Age Score", enabled: true },
          { text: "Early menopause detection", enabled: true },
          { text: "Premium community access", enabled: true },
          { text: "Doctor chat (2/month)", enabled: true },
        ]}
      />
      <PricingCard
        variant="shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] border border-gray-200"
        title="Clinics"
        description="For fertility clinics & providers"
        price="Custom"
        buttonText="Contact Sales"
        buttonVariant="text-purple-600 bg-transparent caret-transparent text-center w-full border border-purple-600 px-0 py-2 rounded-lg border-solid hover:bg-purple-50"
        features={[
          { text: "Patient monitoring dashboard", enabled: true },
          { text: "Custom reporting", enabled: true },
          { text: "API integrations", enabled: true },
          { text: "White-label options", enabled: true },
          { text: "Priority support", enabled: true },
          { text: "Training & onboarding", enabled: true },
        ]}
      />
    </div>
  );
};

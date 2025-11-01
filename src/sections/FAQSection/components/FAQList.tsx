import { FAQItem } from "@/sections/FAQSection/components/FAQItem";

export const FAQList = () => {
  return (
    <div className="box-border caret-transparent max-w-screen-md mx-auto">
      <FAQItem
        question="How accurate are FEMMORA's fertility predictions?"
        answer="Our AI algorithms achieve 94% accuracy in predicting ovulation windows after just two cycles of data collection. Accuracy improves to 97% after four cycles as the system learns your unique patterns. This outperforms traditional calendar methods by 30-40%."
      />
      <FAQItem
        question="Is my health data secure with FEMMORA?"
        answer="Absolutely. We use bank-level encryption and are fully HIPAA compliant. Your data is never sold to third parties. You maintain full control over what information is shared and with whom, including options to share specific data with healthcare providers."
        variant="mt-4"
      />
      <FAQItem
        question="Can FEMMORA help if I have irregular cycles?"
        answer="Yes! Our AI specializes in identifying patterns in irregular cycles. While traditional methods struggle with variability, FEMMORA analyzes multiple data points (basal temp, LH levels, symptoms) to detect ovulation even in highly irregular cycles. Many users with PCOS or hypothalamic amenorrhea find our predictions more reliable than other methods."
        variant="mt-4"
      />
      <FAQItem
        question="What's included in the Reproductive Age Score?"
        answer="The RAS combines hormonal patterns, ovarian reserve markers (when available), lifestyle factors, and medical history to estimate your biological fertility age. It's not just about egg quantity but quality and uterine environment. The score updates as you add more data and can help guide family planning decisions."
      />
      <FAQItem
        question="How does the chip implant work?"
        answer="The FEMMORA chip is a small, sterile device inserted just under the skin (similar to a contraceptive implant). It continuously monitors key hormone levels and transmits data to your smartphone. The current version tracks estrogen, progesterone, LH, and FSH patterns. Insertion takes about 5 minutes in a clinician's office and lasts for 6 months before needing replacement."
        variant="mt-4"
      />
    </div>
  );
};

import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

export const TestimonialsGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] max-w-6xl gap-y-8 mx-auto md:grid-cols-[repeat(3,minmax(0px,1fr))]">
      <TestimonialCard
        imageUrl="https://randomuser.me/api/portraits/women/22.jpg"
        imageAlt="Jessica"
        name="Jessica T."
        subtitle="Age 34 | TTC for 2 years"
        testimonialText="FEMMORA predicted my ovulation window with such accuracy that we conceived on the first try after 18 months of unsuccessful attempts. The AI noticed patterns my doctor missed."
        avatarVariant="bg-purple-100"
      />
      <TestimonialCard
        imageUrl="https://randomuser.me/api/portraits/women/45.jpg"
        imageAlt="Priya"
        name="Priya M."
        subtitle="Age 41 | Perimenopausal"
        testimonialText="The perimenopause community and symptom tracker helped me understand what was happening to my body. I finally got the right treatment because I could show my doctor clear patterns."
        avatarVariant="bg-pink-100"
      />
      <TestimonialCard
        imageUrl="https://randomuser.me/api/portraits/women/68.jpg"
        imageAlt="Danielle"
        name="Danielle R."
        subtitle="Age 29 | POI Diagnosis"
        testimonialText="Being diagnosed with POI was devastating, but the FEMMORA community gave me hope. The Reproductive Age Score helped me understand my options and advocate for myself."
        avatarVariant="bg-blue-100"
      />
    </div>
  );
};

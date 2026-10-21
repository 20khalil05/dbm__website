import SectionTag from "./SectionTag";
import TestimonialCard from "./TestimonialCard";

const TESTIMONIALS = [
  {
    quote:
      "Working at DBM Group has been an incredible journey. The culture of innovation and the support from leadership have helped me grow both professionally and personally.",
    initials: "MR",
    name: "Mohammed R.",
    role: "Software Engineer",
    brand: "ACCENT",
  },
  {
    quote:
      "As a gamer, working for AGX is a dream come true. I get to combine my passion for gaming with my career, and the team is absolutely amazing.",
    initials: "SL",
    name: "Sara L.",
    role: "Content Creator",
    brand: "AGX",
  },
  {
    quote:
      "The flexibility and trust DBM Group gives its employees is unmatched. I feel valued and empowered to make decisions that impact our success.",
    initials: "AK",
    name: "Amine K.",
    role: "Operations Manager",
    brand: "RAMZO",
  },
];

export default function EmployeeStories() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <SectionTag className="justify-center text-red-600">
          Employee stories
        </SectionTag>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          What Our Team Says
        </h2>
        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          Hear directly from our team members about their experience at DBM
          Group
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            quote={testimonial.quote}
            initials={testimonial.initials}
            name={testimonial.name}
            role={testimonial.role}
            brand={testimonial.brand}
          />
        ))}
      </div>
    </section>
  );
}
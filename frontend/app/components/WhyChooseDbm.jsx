import {
  Award,
  Sparkles,
  Headphones,
  Tag,
  Zap,
  Wrench,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import SectionTag from "./SectionTag";
import ValueCard from "./ValueCard";

const ADVANTAGES = [
  {
    icon: Award,
    title: "Local Excellence",
    description:
      "Moroccan expertise with deep understanding of local market needs and requirements",
  },
  {
    icon: Sparkles,
    title: "Quality Guaranteed",
    description:
      "International quality standards with comprehensive warranties and support",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description:
      "Dedicated technical support and after-sales service from our local team",
  },
  {
    icon: Tag,
    title: "Competitive Pricing",
    description:
      "Best value solutions adapted to the Moroccan market without compromising quality",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Efficient logistics and distribution network for quick turnaround times",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description:
      "Tailored configurations and setups designed specifically for your needs",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security and reliability for all our solutions",
  },
  {
    icon: Handshake,
    title: "Trusted Partner",
    description:
      "Long-term partnership approach with commitment to your success",
  },
];

export default function WhyChooseDbm() {
  return (
    <section className="bg-gradient-to-br from-red-900 via-red-700 to-red-600 py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <SectionTag className="justify-center text-red-300">
          Our advantage
        </SectionTag>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
          Why Choose DBM Solutions
        </h2>
        <p className="mt-3 text-sm text-white/85 sm:text-base">
          We combine local expertise with international quality standards to
          deliver exceptional value
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {ADVANTAGES.map((advantage) => (
          <ValueCard
            key={advantage.title}
            icon={advantage.icon}
            title={advantage.title}
            description={advantage.description}
          />
        ))}
      </div>
    </section>
  );
}
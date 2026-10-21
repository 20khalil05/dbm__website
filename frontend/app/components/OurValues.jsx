import { Flag, Lightbulb, Handshake, ShieldCheck, Users, Rocket } from "lucide-react";
import SectionTag from "./SectionTag";
import ValueCard from "./ValueCard";

const VALUES = [
  {
    icon: Flag,
    title: "Local Excellence",
    description:
      "Proudly Moroccan, we understand local needs and provide solutions adapted to the Moroccan market while maintaining international quality standards.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously explore new technologies and trends to bring cutting-edge solutions that keep our customers ahead of the curve.",
  },
  {
    icon: Handshake,
    title: "Customer Commitment",
    description:
      "Our success is measured by your satisfaction. We provide exceptional support, competitive pricing, and long-term partnerships.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "We stand behind every product we sell with comprehensive warranties, professional after-sales service, and technical expertise.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We actively contribute to Morocco's tech ecosystem, supporting education, gaming culture, and digital entrepreneurship.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "From high-performance gaming rigs to professional workstations, we deliver products that excel in speed, quality, and durability.",
  },
];

export default function OurValues() {
  return (
    <section className="bg-gradient-to-b from-red-50/40 via-white to-red-50/30 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <SectionTag className="justify-center text-red-600">
          Our values
        </SectionTag>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          What Drives Us
        </h2>
        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          Core principles that guide every decision we make
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {VALUES.map((value) => (
          <ValueCard
            key={value.title}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </section>
  );
}
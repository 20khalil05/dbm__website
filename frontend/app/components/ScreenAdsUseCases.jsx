import { GraduationCap, HeartPulse, Bus, Store, Landmark } from "lucide-react";
import SectionTag from "./SectionTag";
import IndustryCard from "./IndustryCard";

const INDUSTRIES = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Smart communication for learning.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Clear information at the right time.",
  },
  {
    icon: Bus,
    title: "Transport",
    description: "Live updates for travelers.",
  },
  {
    icon: Store,
    title: "Retail",
    description: "Engage and inform your customers.",
  },
  {
    icon: Landmark,
    title: "Public Sector",
    description: "Effective communication for everyone.",
  },
];

export default function ScreenAdsUseCases() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <SectionTag className="justify-center text-red-600">
          Use cases
        </SectionTag>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Suitable for all industries
        </h2>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-stretch justify-center gap-5 px-6 lg:px-8">
        {INDUSTRIES.map((industry) => (
          <IndustryCard
            key={industry.title}
            icon={industry.icon}
            title={industry.title}
            description={industry.description}
          />
        ))}
      </div>
    </section>
  );
}
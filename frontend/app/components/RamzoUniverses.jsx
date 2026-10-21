import { Monitor, Gamepad2, GraduationCap } from "lucide-react";
import UniverseCard from "./UniverseCard";

const UNIVERSES = [
  {
    icon: Monitor,
    title: "IT & Pro",
    description: "PC, laptops, components & professional solutions",
    gradientClass: "from-blue-600 to-blue-800",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Performance",
    description: "PC Gaming, peripherals, accessories & high performance",
    gradientClass: "from-purple-600 to-purple-800",
  },
  {
    icon: GraduationCap,
    title: "Education & Digital",
    description: "Educational solutions, digital tools & adapted equipment",
    gradientClass: "from-emerald-600 to-emerald-800",
  },
];

export default function RamzoUniverses() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Our Universes
        </h2>
        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          Explore our main universes to find what you need.
        </p>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-wrap items-center justify-center gap-6 px-6 lg:px-8">
        {UNIVERSES.map((universe) => (
          <UniverseCard
            key={universe.title}
            icon={universe.icon}
            title={universe.title}
            description={universe.description}
            gradientClass={universe.gradientClass}
          />
        ))}
      </div>
    </section>
  );
}
import { Gamepad2, Flag, Target } from "lucide-react";
import DarkFeatureCard from "./DarkFeatureCard";

const FEATURES = [
  {
    icon: Gamepad2,
    title: "High Performance",
    description: "Powerful components for smooth gaming and flawless performance.",
  },
  {
    icon: Flag,
    title: "Built for Gamers",
    description: "Designed to meet the most demanding needs of gamers.",
  },
  {
    icon: Target,
    title: "Maximum Reliability",
    description:
      "Tested and optimized to ensure stability and long-lasting durability.",
  },
];

export default function AgxWhyChoose() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Why choose <span className="text-purple-600">AGX</span> ?
        </p>
        <h2 className="mt-2 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
          Why choose <span className="text-purple-600">AGX</span> ?
        </h2>
        <p className="mt-3 max-w-md text-sm text-slate-500">
          Powerful machines, built to deliver the best gaming experience.
        </p>

        <div className="mt-12 flex flex-wrap gap-6">
          {FEATURES.map((feature) => (
            <DarkFeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
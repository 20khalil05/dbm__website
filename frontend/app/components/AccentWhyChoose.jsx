import { Laptop2, GraduationCap, ShieldCheck } from "lucide-react";
import FeatureHighlightCard from "./FeatureHighlightCard";

const FEATURES = [
  {
    icon: Laptop2,
    title: "Complete Solutions",
    description:
      "PCs, LED screens, interactive displays, IT solutions, and digital tools tailored to your business and institutional needs.",
  },
  {
    icon: GraduationCap,
    title: "Digital Education",
    description:
      "Partners in digital education, helping schools and universities modernize their tools and learning platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Quality",
    description:
      "Quality products, expert technical support, and reliable after-sales service nationwide.",
  },
];

export default function AccentWhyChoose() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
          Why choose <span className="text-red-600">ACCENT</span> ?
        </h2>
        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          A trusted brand delivering innovative technological solutions and
          concrete results
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 px-6 sm:grid-cols-3 lg:px-8">
        {FEATURES.map((feature) => (
          <FeatureHighlightCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
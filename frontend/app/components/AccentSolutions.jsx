import { Building2, GraduationCap, Megaphone, Factory } from "lucide-react";
import SolutionCard from "./SolutionCard";

const SOLUTIONS = [
  {
    icon: Building2,
    title: "Businesses",
    description:
      "Tailored solutions for businesses, SMEs, and large organizations to boost productivity and drive digital transformation.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Digital tools, interactive displays, and IT equipment for smarter classrooms and secure learning environments.",
  },
  {
    icon: Megaphone,
    title: "Retail & Advertising",
    description:
      "Innovative solutions for impactful digital signage that capture attention and communicate effectively.",
  },
  {
    icon: Factory,
    title: "Industry",
    description:
      "Rugged IT solutions for harsh environments, ensuring reliability and performance in critical conditions.",
  },
];

export default function AccentSolutions() {
  return (
    <section className="bg-[#0a0e1a] py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
          Our Solutions
        </h2>
        <p className="mt-3 text-sm text-white/60 sm:text-base">
          Customized solutions for every sector of activity
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:px-8">
        {SOLUTIONS.map((solution) => (
          <SolutionCard
            key={solution.title}
            icon={solution.icon}
            title={solution.title}
            description={solution.description}
          />
        ))}
      </div>
    </section>
  );
}
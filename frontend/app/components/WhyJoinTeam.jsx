import {
  Rocket,
  Scale,
  GraduationCap,
  HandCoins,
  Users,
  Flag,
  Gamepad2,
  Lightbulb,
} from "lucide-react";
import SectionTag from "./SectionTag";
import ValueCard from "./ValueCard";

const BENEFITS = [
  {
    icon: Rocket,
    title: "Growth Opportunities",
    description:
      "Accelerate your career with continuous learning, mentorship programs, and clear advancement paths across our three brands.",
  },
  {
    icon: Scale,
    title: "Work-Life Balance",
    description:
      "Flexible working hours, remote work options, and generous time off to help you maintain a healthy lifestyle.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Access to training programs, certifications, and conferences to keep your skills at the cutting edge of technology.",
  },
  {
    icon: HandCoins,
    title: "Competitive Benefits",
    description:
      "Attractive salary packages, performance bonuses, health insurance, and exclusive employee discounts on our products.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work in a supportive, inclusive environment where your ideas are valued and teamwork drives innovation.",
  },
  {
    icon: Flag,
    title: "Local Impact",
    description:
      "Contribute to Morocco's digital transformation and be part of a homegrown success story with global ambitions.",
  },
  {
    icon: Gamepad2,
    title: "Gaming Perks",
    description:
      "Enjoy gaming sessions, esports events, and access to the latest gaming technology through our AGX brand.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Freedom",
    description:
      "Freedom to experiment, propose new ideas, and work on cutting-edge projects that push technological boundaries.",
  },
];

export default function WhyJoinTeam() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <SectionTag className="justify-center text-red-600">
          Why DBM Group
        </SectionTag>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Why Join Our Team
        </h2>
        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          Discover what makes DBM Group an exceptional place to grow your
          career and make an impact
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {BENEFITS.map((benefit) => (
          <ValueCard
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </section>
  );
}
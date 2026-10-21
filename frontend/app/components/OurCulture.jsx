import { Users, Smile, Star, Trophy } from "lucide-react";
import SectionTag from "./SectionTag";
import CheckListItem from "./CheckListItem";
import TranslucentStatCard from "./TranslucentStatCard";

const CULTURE_POINTS = [
  "Embrace diversity and inclusion",
  "Encourage risk-taking and experimentation",
  "Celebrate wins, learn from failures",
  "Prioritize customer satisfaction",
  "Foster continuous improvement",
  "Balance work with fun and gaming",
];

const STATS = [
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Smile, value: "95%", label: "Employee Satisfaction" },
  { icon: Star, value: "4.8", label: "Average Rating" },
  { icon: Trophy, value: "15+", label: "Awards Won" },
];

export default function OurCulture() {
  return (
    <section className="bg-gradient-to-br from-red-900 via-red-700 to-red-600 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        {/* Colonne gauche */}
        <div className="flex flex-col items-start gap-5">
          <SectionTag className="text-white/70">Our culture</SectionTag>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Where Innovation Meets Passion
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
            At DBM Group, we believe that the best work comes from
            passionate people who love what they do. Our culture is built
            on collaboration, creativity, and a shared commitment to
            excellence.
          </p>

          <ul className="flex flex-col gap-3">
            {CULTURE_POINTS.map((point) => (
              <CheckListItem key={point} variant="solid">
                {point}
              </CheckListItem>
            ))}
          </ul>
        </div>

        {/* Colonne droite : stats */}
        <div className="grid grid-cols-2 gap-5">
          {STATS.map((stat) => (
            <TranslucentStatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
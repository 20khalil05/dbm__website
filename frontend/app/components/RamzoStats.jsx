import { Users, Award, Star, Headphones } from "lucide-react";
import IconStatBlock from "./IconStatBlock";

const STATS = [
  { icon: Users, value: "6K+", label: "Satisfied Customers" },
  { icon: Award, value: "30+", label: "International Brands" },
  { icon: Star, value: "100%", label: "Original Products" },
  { icon: Headphones, value: "24/7", label: "Client Support" },
];

export default function RamzoStats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex max-w-4xl flex-wrap items-start justify-center gap-14 px-6 lg:px-8">
        {STATS.map((stat) => (
          <IconStatBlock
            key={stat.label}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}
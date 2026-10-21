import { Monitor, Laptop2, Mouse } from "lucide-react";
import ArsenalCard from "./ArsenalCard";

const ARSENAL = [
  {
    icon: Laptop2,
    title: "Gaming Laptops",
    description:
      "Power and mobility for gamers on the go. High performance, wherever you are.",
    isNew: true,
  },
  {
    icon: Monitor,
    title: "Desktop PCs",
    description:
      "Uncompromising performance for an immersive experience.",
    isNew: true,
  },
  {
    icon: Mouse,
    title: "Accessories & Peripherals",
    description:
      "Complete your setup with high-performance accessories designed for gamers.",
    isNew: false,
  },
];

export default function AgxArsenal() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Our <span className="text-purple-600">Arsenal</span>
        </p>
        <h2 className="mt-2 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
          Our <span className="text-purple-600">Arsenal</span>
        </h2>
        <p className="mt-3 max-w-md text-sm text-slate-500">
          A range of gaming machines for every need and every level.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARSENAL.map((item) => (
            <ArsenalCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              isNew={item.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
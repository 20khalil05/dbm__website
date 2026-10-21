import { ShoppingCart, Briefcase, ShieldCheck, Headphones } from "lucide-react";
import BenefitCard from "./BenefitCard";

const BENEFITS = [
  {
    icon: ShoppingCart,
    title: "Wide Range",
    description:
      "Thousands of products from the biggest brands in hardware and gaming.",
    iconBgClass: "bg-red-100",
    iconColorClass: "text-red-600",
  },
  {
    icon: Briefcase,
    title: "Official Distributors",
    description:
      "Official partnerships with the most reliable brands on the market.",
    iconBgClass: "bg-red-100",
    iconColorClass: "text-red-700",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Trust",
    description:
      "Guaranteed quality products and dedicated after-sales support.",
    iconBgClass: "bg-orange-100",
    iconColorClass: "text-orange-500",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description:
      "A passionate team ready to help you choose the best for your needs.",
    iconBgClass: "bg-red-100",
    iconColorClass: "text-red-600",
  },
];

export default function RamzoBenefits() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:justify-items-start lg:px-8">
        {BENEFITS.map((benefit) => (
          <BenefitCard
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            iconBgClass={benefit.iconBgClass}
            iconColorClass={benefit.iconColorClass}
          />
        ))}
      </div>
    </section>
  );
}
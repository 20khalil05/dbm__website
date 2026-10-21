import { Laptop2, Gamepad2, BarChart3 } from "lucide-react";
import BrandContactCard from "./BrandContactCard";

const BRANDS = [
  {
    icon: Laptop2,
    brandName: "ACCENT",
    description:
      "Professional IT solutions, digital equipment, and enterprise technology services for businesses and institutions.",
    buttonLabel: "Contact ACCENT",
    color: "blue",
  },
  {
    icon: Gamepad2,
    brandName: "AGX",
    description:
      "High-performance gaming hardware, custom PC builds, and gaming accessories for enthusiasts and professionals.",
    buttonLabel: "Contact AGX",
    color: "purple",
  },
  {
    icon: BarChart3,
    brandName: "SCREENADS",
    description:
      "SCREENADS is the digital signage brand of the group, offering smart and dynamic solutions for communication, advertising, and information display.",
    buttonLabel: "Contact Screenads",
    color: "green",
  },
];

export default function ContactBrands() {
  return (
    <section className="bg-gradient-to-br from-red-900 via-red-700 to-red-600 py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Contact Our Brands
        </h2>
        <p className="mt-3 text-sm text-white/90 sm:text-base">
          Each brand specializes in different technology sectors. Reach out
          to the right team for your needs.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {BRANDS.map((brand) => (
          <BrandContactCard
            key={brand.brandName}
            icon={brand.icon}
            brandName={brand.brandName}
            description={brand.description}
            buttonLabel={brand.buttonLabel}
            color={brand.color}
          />
        ))}
      </div>
    </section>
  );
}
import { Monitor, Wifi, Smartphone, Laptop2, Home } from "lucide-react";
import ProductCard from "./ProductCard";

const PRODUCTS = [
  {
    icon: Monitor,
    title: "Interactive Smartboard",
    description:
      "Interactive smartboards, 65\" & 105\" for engaging classrooms.",
    features: [
      "Touch technology",
      "OPS-C module",
      "Ultra HD image",
      "Built-in software",
    ],
  },
  {
    icon: Monitor,
    title: "LED Indoor COB",
    description:
      "COB LED screens with resolution P0.9 & P1.2 for optimal indoor display.",
    features: [
      "High contrast",
      "Wide viewing angle",
      "Refresh rate > 3840Hz",
      "Easy to install",
    ],
  },
  {
    icon: Wifi,
    title: "LED Outdoor",
    description: "Outdoor LED displays for all environments.",
    features: [
      "High brightness",
      "IP65 protection",
      "16/18-bit color",
      "Advanced stability",
    ],
  },
  {
    icon: Smartphone,
    title: "Totems & Podiums",
    description: "Modular and stylish solutions for events and signage.",
    features: [
      "22\" - 110\" formats",
      "Touch technology",
      "Android systems",
      "Custom design",
    ],
  },
  {
    icon: Laptop2,
    title: "PCs & Notebooks",
    description: "High-performance computers for professionals.",
    features: [
      "Intel 13th/14th Gen processors",
      "SSD storage",
      "Ergonomic design",
      "Extended warranty",
    ],
  },
  {
    icon: Home,
    title: "Smart Home",
    description: "Smart solutions for a connected and secure home.",
    features: [
      "WiFi cameras",
      "Connected sensors",
      "Smart intercoms",
      "Mobile app control",
    ],
  },
];

export default function AccentProducts() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
          Our Products
        </h2>
        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          Discover our complete range of cutting-edge technology solutions.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.title}
            icon={product.icon}
            title={product.title}
            description={product.description}
            features={product.features}
          />
        ))}
      </div>
    </section>
  );
}
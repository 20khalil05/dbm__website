import { Monitor, Rows3, Tablet, Smartphone } from "lucide-react";
import SectionTag from "./SectionTag";
import CenteredFeatureCard from "./CenteredFeatureCard";

const PRODUCTS = [
  {
    icon: Monitor,
    title: "LED Screens",
    description: "High brightness and stunning visuals for maximum impact.",
  },
  {
    icon: Rows3,
    title: "LED Walls",
    description: "LED technology for large-format seamless displays.",
  },
  {
    icon: Tablet,
    title: "Interactive Screens",
    description: "Engaging and interactive experience for your audience.",
  },
  {
    icon: Smartphone,
    title: "Mobile Screens",
    description: "Mobile solutions for flexible and easy use.",
  },
  {
    icon: Monitor,
    title: "Video Walls",
    description: "Ultra-wide displays for immersive and spectacular visuals.",
  },
  {
    icon: Tablet,
    title: "Touch Screens",
    description: "Interactive screens for intuitive and dynamic use.",
  },
  {
    icon: Smartphone,
    title: "Indoor/Outdoor Totems",
    description: "Elegant and durable totem solutions for any environment.",
  },
  {
    icon: Monitor,
    title: "LCD & COB Panels",
    description: "State-of-the-art display technology for optimal performance.",
  },
];

export default function ScreenAdsProducts() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <SectionTag className="justify-center text-red-600">
          Our products
        </SectionTag>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          A complete range of screens
        </h2>
        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          High-performance screens designed for all your display needs.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-6 px-6 sm:grid-cols-4 lg:px-8">
        {PRODUCTS.map((product, index) => (
          <CenteredFeatureCard
            key={`${product.title}-${index}`}
            icon={product.icon}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
}
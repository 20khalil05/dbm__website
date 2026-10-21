import Image from "next/image";
import { Laptop2, Gamepad2, MonitorPlay } from "lucide-react";
import SectionTag from "./SectionTag";
import BrandDetailCard from "./BrandDetailCard";

const accentImage = "/ourBrand_accent.png";
const agxImage = "/ourBrand_AGX.png";
const screenAdsImage = "/ourBrand_screenAds.png";
const sectionBackgroundImage = "/bg_our_brand.png";

const BRANDS = [
  {
    image: accentImage,
    icon: Laptop2,
    brandName: "ACCENT",
    tagline: "Professional Technology Solutions",
    description:
      "ACCENT is the flagship technology brand of DBM Group, offering a comprehensive range of IT solutions tailored for professionals, institutions, and individuals.",
    features: [
      "Professional PCs & Laptops",
      "Interactive Solutions & LED Displays",
      "Digital Education & E-learning",
      "Adapted for Moroccan Ecosystem",
      "Premium After-Sales Service",
    ],
    href: "https://accent.ma",
    bgClassName: "bg-blue-950",
  },
  {
    image: agxImage,
    icon: Gamepad2,
    brandName: "AGX",
    tagline: "Gaming Excellence",
    description:
      "AGX is the gaming brand of the group, primarily targeting young gamers and high-performance computing enthusiasts passionate about cutting-edge technology.",
    features: [
      "High-Performance Gaming PCs",
      "Premium Gaming Accessories",
      "Engaged in Moroccan Gaming Culture",
      "Bridge Between Local & International",
      "Target: Gamers 15-35 years",
    ],
    href: "https://agx.ma",
    bgClassName: "bg-purple-950",
  },
  {
    image: screenAdsImage,
    icon: MonitorPlay,
    brandName: "SCREENADS",
    tagline: "Digital Signage Without Limits",
    description:
      "SCREENADS is the digital signage brand of the group, offering smart and dynamic solutions for communication, advertising, and information display.",
    features: [
      "Indoor LED Screens & Video Walls",
      "Outdoor LED Screens & Totems",
      "Digital Signage Players & Software",
      "Professional Mounts & Stands",
      "Complete AV Solutions",
    ],
    href: "https://screenads.ma",
    bgClassName: "bg-green-800",
  },
];

export default function AboutOurBrands() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">
      {/* Image de fond de section */}
      <div className="absolute inset-0">
        <Image
          src={sectionBackgroundImage}
          alt="Our brands background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-50/85" />
      </div>

      {/* Motif réseau en arrière-plan (décoratif) */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <svg
          className="h-full w-full"
          viewBox="0 0 800 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#ef4444" strokeWidth="1" opacity="0.3">
            <line x1="50" y1="50" x2="250" y2="120" />
            <line x1="250" y1="120" x2="180" y2="280" />
            <line x1="180" y1="280" x2="50" y2="380" />
            <line x1="250" y1="120" x2="400" y2="60" />
            <line x1="180" y1="280" x2="380" y2="220" />
          </g>
          <g fill="#ef4444" opacity="0.4">
            <circle cx="50" cy="50" r="3" />
            <circle cx="250" cy="120" r="3" />
            <circle cx="180" cy="280" r="3" />
            <circle cx="50" cy="380" r="3" />
            <circle cx="400" cy="60" r="3" />
            <circle cx="380" cy="220" r="3" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex max-w-2xl flex-col items-start gap-4">
          <SectionTag className="text-red-600">Our brands</SectionTag>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Three Brands, One Vision
          </h2>
          <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
            Each brand serves a specific audience while contributing to our
            unified mission of technological excellence and innovation in
            Morocco.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap items-start justify-center gap-8 lg:flex-nowrap lg:justify-between">
          {BRANDS.map((brand) => (
            <BrandDetailCard key={brand.brandName} {...brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
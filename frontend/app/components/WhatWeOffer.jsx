import {
  BarChart3,
  Monitor,
  Cpu,
  ShieldCheck,
  GraduationCap,
  Wrench,
} from "lucide-react";
import SectionTag from "./SectionTag";
import ProductCategoryCard from "./ProductCategoryCard";

const CATEGORIES = [
  {
    icon: BarChart3,
    title: "Computing Solutions",
    items: [
      "Professional Desktops & Workstations",
      "Gaming PCs & Custom Builds",
      "Laptops & Notebooks",
      "Servers & Storage Solutions",
      "Client Light Systems",
    ],
  },
  {
    icon: Monitor,
    title: "Display Technologies",
    items: [
      "Interactive LED Walls (COB P1.25)",
      "Video Walls & Multi-Screen Setups",
      "Interactive Whiteboards",
      "Dual Screen Displays",
      "Visualizers & Presentation Tools",
    ],
  },
  {
    icon: Cpu,
    title: "Gaming Hardware",
    items: [
      "High-Performance GPUs",
      "Gaming Keyboards & Mice",
      "Gaming Headsets & Audio",
      "Streaming Equipment",
      "Gaming Chairs & Desks",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security & Infrastructure",
    items: [
      "Cybersecurity Solutions",
      "Network Equipment",
      "Cloud Infrastructure",
      "Data Protection Systems",
      "WiFi Dongles & Connectivity",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education Technology",
    items: [
      "E-learning Platforms",
      "Digital Classroom Solutions",
      "Interactive Teaching Tools",
      "Student Devices",
      "Educational Software",
    ],
  },
  {
    icon: Wrench,
    title: "Services & Support",
    items: [
      "Technical Consulting",
      "Custom PC Building",
      "Installation & Setup",
      "After-Sales Support",
      "Warranty & Maintenance",
    ],
  },
];

export default function WhatWeOffer() {
  return (
    <section className="bg-gradient-to-b from-red-950 via-red-700 to-red-600 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <SectionTag className="justify-center text-red-400">
          Product range
        </SectionTag>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
          What We Offer
        </h2>
        <p className="mt-3 text-sm text-white/70 sm:text-base">
          Comprehensive technology solutions across all three brands
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {CATEGORIES.map((category) => (
          <ProductCategoryCard
            key={category.title}
            icon={category.icon}
            title={category.title}
            items={category.items}
          />
        ))}
      </div>
    </section>
  );
}
import { Laptop2, Gamepad2, Monitor, ShieldCheck, GraduationCap, Truck } from "lucide-react";
import SectionTag from "./SectionTag";
import PortfolioCard from "./PortfolioCard";

const PORTFOLIO = [
  {
    icon: Laptop2,
    brand: "ACCENT",
    title: "Professional IT Solutions",
    description:
      "Complete IT infrastructure and computing solutions for businesses of all sizes, from startups to large enterprises.",
    features: [
      "Professional Desktops & Workstations",
      "Business Laptops & Notebooks",
      "Servers & Storage Systems",
      "Network Infrastructure",
    ],
  },
  {
    icon: Gamepad2,
    brand: "AGX",
    title: "Gaming Solutions",
    description:
      "High-performance gaming setups and equipment for casual gamers, content creators, and professional esports athletes.",
    features: [
      "Custom Gaming PC Builds",
      "Gaming Peripherals & Accessories",
      "Streaming Equipment",
      "Esports Arena Setup",
    ],
  },
  {
    icon: Monitor,
    brand: "ACCENT",
    title: "Interactive Display Solutions",
    description:
      "State-of-the-art LED walls, video walls, and interactive displays for presentations, control rooms, and digital signage.",
    features: [
      "COB LED Walls (P1.25)",
      "Interactive Whiteboards",
      "Video Wall Systems",
      "Digital Signage Solutions",
    ],
  },
  {
    icon: ShieldCheck,
    brand: "ACCENT",
    title: "Cloud & Cybersecurity",
    description:
      "Secure cloud infrastructure and comprehensive cybersecurity solutions to protect your business data and operations.",
    features: [
      "Cloud Migration Services",
      "Data Protection & Backup",
      "Network Security",
      "Threat Monitoring",
    ],
  },
  {
    icon: GraduationCap,
    brand: "ACCENT",
    title: "E-Learning Solutions",
    description:
      "Digital education platforms and interactive learning tools designed for modern educational institutions and remote learning.",
    features: [
      "Learning Management Systems",
      "Interactive Classrooms",
      "Student Devices",
      "Educational Software",
    ],
  },
  {
    icon: Truck,
    brand: "RAMZO",
    title: "Distribution & Logistics",
    description:
      "Efficient hardware distribution and logistics solutions with AI-powered inventory management and omnichannel fulfillment.",
    features: [
      "Bulk Hardware Distribution",
      "Inventory Management",
      "B2B & B2C Fulfillment",
      "Last-Mile Delivery",
    ],
  },
];

export default function SolutionsPortfolio() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <SectionTag className="justify-center text-red-600">
          What we offer
        </SectionTag>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Our Solutions Portfolio
        </h2>
        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          Comprehensive technology solutions designed to meet the diverse
          needs of businesses, institutions, and individuals across Morocco.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {PORTFOLIO.map((item) => (
          <PortfolioCard
            key={item.title}
            icon={item.icon}
            brand={item.brand}
            title={item.title}
            description={item.description}
            features={item.features}
          />
        ))}
      </div>
    </section>
  );
}
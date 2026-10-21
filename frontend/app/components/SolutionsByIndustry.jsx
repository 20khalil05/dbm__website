import { Building2, GraduationCap, Gamepad2, Store } from "lucide-react";
import SectionTag from "./SectionTag";
import IndustryTagCard from "./IndustryTagCard";

const INDUSTRIES = [
  {
    icon: Building2,
    iconBgClass: "bg-blue-900",
    title: "Enterprise & Corporate",
    description:
      "Empower your workforce with enterprise-grade IT infrastructure, collaboration tools, and secure cloud solutions designed for scalability and performance.",
    tags: ["Workstations", "Cloud Services", "Cybersecurity", "Video Conferencing"],
  },
  {
    icon: GraduationCap,
    iconBgClass: "bg-purple-500",
    title: "Education & E-Learning",
    description:
      "Transform learning experiences with interactive classrooms, digital platforms, and student devices that enable modern, engaging education.",
    tags: ["Interactive Displays", "LMS Platforms", "Student Laptops", "Smart Classrooms"],
  },
  {
    icon: Gamepad2,
    iconBgClass: "bg-red-600",
    title: "Gaming & Esports",
    description:
      "Build the ultimate gaming experience with high-performance PCs, professional streaming equipment, and complete esports arena setups.",
    tags: ["Gaming PCs", "Streaming Gear", "Gaming Peripherals", "Arena Setup"],
  },
  {
    icon: Store,
    iconBgClass: "bg-orange-500",
    title: "Retail & Distribution",
    description:
      "Optimize your retail operations with POS systems, inventory management, and distribution solutions that streamline your supply chain.",
    tags: ["POS Systems", "Inventory Management", "Digital Signage", "Logistics"],
  },
];

export default function SolutionsByIndustry() {
  return (
    <section className="bg-gradient-to-br from-black via-red-800 to-red-600 py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <SectionTag className="justify-center text-white/70">
          Industry focus
        </SectionTag>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
          Solutions by Industry
        </h2>
        <p className="mt-3 text-sm text-white/90 sm:text-base">
          Tailored technology solutions designed for specific industry
          requirements and challenges
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:px-8">
        {INDUSTRIES.map((industry) => (
          <IndustryTagCard
            key={industry.title}
            icon={industry.icon}
            iconBgClass={industry.iconBgClass}
            title={industry.title}
            description={industry.description}
            tags={industry.tags}
          />
        ))}
      </div>
    </section>
  );
}
import Image from "next/image";
import { Briefcase, Headphones, Monitor } from "lucide-react";
import SectionTag from "./SectionTag";
import AudienceCard from "./AudienceCard";

const sectionBackgroundImage = "/bg_our_brand.png";

const accentAudienceImage = "/ourBrand_accent.png";
const agxAudienceImage = "/ourBrand_agx.png";
const screenAdsAudienceImage = "/who_we_serve_screenads.png";

const AUDIENCES = [
  {
    image: accentAudienceImage,
    icon: Briefcase,
    brandName: "ACCENT",
    segment: "Professionals & Enterprises",
    description:
      "IT managers, businesses, educational institutions, and government organizations seeking reliable, professional-grade technology solutions.",
  },
  {
    image: agxAudienceImage,
    icon: Headphones,
    brandName: "AGX",
    segment: "Gamers 15-35 Years",
    description:
      "From casual gamers to esports professionals, content creators, and tech enthusiasts who demand high-performance gaming equipment.",
  },
  {
    image: screenAdsAudienceImage,
    icon: Monitor,
    brandName: "SCREENADS",
    segment: "Digital Signage & Display",
    description:
      "Dynamic display solutions, totems, and video walls for impactful communication.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Image de fond de section */}
      <div className="absolute inset-0">
        <Image
          src={sectionBackgroundImage}
          alt="Who we serve background"
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

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <SectionTag className="justify-center text-red-600">
          Target audience
        </SectionTag>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Who We Serve
        </h2>
        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          Each brand is strategically positioned to serve specific market
          segments with tailored solutions
        </p>
      </div>

      <div className="relative mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {AUDIENCES.map((audience) => (
          <AudienceCard
            key={audience.brandName}
            image={audience.image}
            icon={audience.icon}
            brandName={audience.brandName}
            segment={audience.segment}
            description={audience.description}
          />
        ))}
      </div>
    </section>
  );
}
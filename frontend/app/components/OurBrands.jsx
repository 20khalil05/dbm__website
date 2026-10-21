import Image from "next/image";
import SectionTag from "./SectionTag";
import BrandCard from "./BrandCard";
import TextLink from "./TextLink";


export default function OurBrands() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="/bg_our_brand.png"
          alt="Our brands background"
          fill
        />
        <div className="absolute inset-0 bg-gray-50/80" />
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
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-6">
            <SectionTag className="text-[#FF0033]">Our brands</SectionTag>
            <TextLink href="/brands" className="shrink-0">
              Explore all brands
            </TextLink>
          </div>

          <div className="flex max-w-md flex-col items-start gap-4">
            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Three Brands, One Vision
            </h2>
            <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
              Accent, AGX and RAMZO work together to power Morocco&apos;s digital
              transformation.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-start justify-center gap-8 lg:flex-nowrap lg:justify-between lg:gap-6">
          <BrandCard
            image="/ourBrand_accent.png"
            logo="/logo_accent.png"
            logoAlt="Accent"
            title="IT Solutions & Digital Equipment"
            description="Complete IT solutions for professionals, institutions & educational organizations."
            overlayClassName="from-blue-950/90 via-blue-950/40 to-transparent"
            className="mt-0 lg:mt-[120px] rounded-tl-[35px] rounded-br-[35px]"
          />

          <BrandCard
            image="/ourBrand_AGX.png"
            logo="/Logo_agx.png"
            logoAlt="AGX Gaming"
            title="Gaming & High Performance"
            description="High-performance hardware & gear for gamers and tech enthusiasts."
            overlayClassName="from-purple-950/90 via-purple-950/40 to-transparent"
            className="mt-0 rounded-bl-[35px] rounded-tr-[35px]"
          />

          <BrandCard
            image="/ourBrand_screenAds.png"
            logo="/logo_screenAds.png"
            logoAlt="ScreenADS"
            title="Digital Signage & Display"
            description="Dynamic display solutions, totems, and video walls for impactful communication."
            overlayClassName="from-green-950/90 via-green-950/40 to-transparent"
            className="mt-0 lg:mt-[117px] rounded-tl-[35px] rounded-br-[35px]"
          />
        </div>
      </div>
    </section>
  );
}
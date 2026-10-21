import Image from "next/image";
import { ExternalLink, ArrowRight, Quote } from "lucide-react";
import CheckListItem from "./CheckListItem";
import StatMiniCard from "./StatMiniCard";
import Button from "./Button";

export default function BrandDetailHero({
  badgeLabel,
  badgeClassName = "bg-blue-600/20 text-blue-300",
  brandName,
  brandNameColorClass = "text-blue-500",
  description,
  stats,
  statValueColorClass = "text-blue-600",
  features,
  websiteUrl,
  productsUrl,
  productsLabel = "View Products",
  backgroundImage,
  mockupImage,
  brandLogo,
  quoteTitle,
  quoteDescription,
  reverse = false,
  logoPosition = "right",
}) {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Image de fond plein écran */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={`${brandName} office`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#05070d]/50" />
      </div>

      {/* Logo marque - coin haut gauche ou droit de la section */}
      <div
        className={`absolute top-6 z-10 lg:top-8 ${
          logoPosition === "left" ? "left-6 lg:left-8" : "right-6 lg:right-8"
        }`}
      >
        <Image
          src={brandLogo}
          alt={`${brandName} logo`}
          width={160}
          height={44}
          className="h-7 w-auto object-contain opacity-90 sm:h-9"
        />
      </div>

      <div
        className={`relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8 ${
          reverse ? "lg:[direction:rtl]" : ""
        }`}
      >
        {/* Colonne texte */}
        <div
          className={`flex flex-col items-start gap-5 ${
            reverse ? "lg:[direction:ltr]" : ""
          }`}
        >
          <span
            className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide ${badgeClassName}`}
          >
            {badgeLabel}
          </span>

          <h2 className={`text-4xl font-bold ${brandNameColorClass}`}>
            {brandName}
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-white/60">
            {description}
          </p>

          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <StatMiniCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                valueColorClass={statValueColorClass}
              />
            ))}
          </div>

          <ul className="flex flex-col gap-3">
            {features.map((feature) => (
              <CheckListItem key={feature} variant="redSolid">
                {feature}
              </CheckListItem>
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Button variant="primary" href={websiteUrl} icon={ExternalLink}>
              Visit Website
            </Button>
            {productsUrl && (
              <Button variant="dark" href={productsUrl} icon={ArrowRight}>
                {productsLabel}
              </Button>
            )}
          </div>
        </div>

        {/* Colonne carte : image + mockup + quote overlay */}
        <div
          className={`relative mx-auto h-80 w-full max-w-md overflow-hidden rounded-3xl shadow-2xl sm:h-96 lg:mx-0 ${
            reverse ? "lg:[direction:ltr] lg:mr-auto" : "lg:ml-auto"
          }`}
        >
          <Image
            src={mockupImage}
            alt={`${brandName} product mockup`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-x-0 bottom-0 flex items-start gap-3 bg-black/70 p-5 backdrop-blur-sm">
            <Quote size={28} className="shrink-0 text-red-600" />
            <div>
              <p className="text-base font-bold text-white">{quoteTitle}</p>
              <p className="mt-1 text-xs leading-relaxed text-white/70">
                {quoteDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
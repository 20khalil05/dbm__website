import Image from "next/image";
import CheckListItem from "./CheckListItem";
import TextLink from "./TextLink";

export default function BrandDetailCard({
  image,
  icon: Icon,
  brandName,
  tagline,
  description,
  features,
  href,
  bgClassName,
}) {
  return (
    <div className="flex w-full max-w-sm flex-col overflow-hidden rounded-2xl shadow-xl">
      {/* Image du haut */}
      <div className="relative h-44 w-full">
        <Image src={image} alt={brandName} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
          <Icon size={18} className="text-white" />
        </div>

        <div className="absolute bottom-4 left-5">
          <p className="text-2xl font-bold tracking-wide text-white">
            {brandName}
          </p>
          <p className="text-xs text-white/70">{tagline}</p>
        </div>
      </div>

      {/* Corps coloré */}
      <div className={`flex flex-1 flex-col items-start gap-5 p-6 ${bgClassName}`}>
        <p className="text-sm leading-relaxed text-white/85">{description}</p>

        <ul className="flex flex-col gap-3">
          {features.map((feature) => (
            <CheckListItem key={feature} variant="minimal">
              {feature}
            </CheckListItem>
          ))}
        </ul>

        <TextLink href={href} className="mt-1">
          Visit Website
        </TextLink>
      </div>
    </div>
  );
}
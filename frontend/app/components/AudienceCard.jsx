import Image from "next/image";

export default function AudienceCard({
  image,
  icon: Icon,
  brandName,
  segment,
  description,
}) {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-lg">
      <Image src={image} alt={brandName} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
          <Icon size={20} className="text-white" />
        </span>
        <p className="text-lg font-bold text-white">{brandName}</p>
        <p className="text-sm font-semibold text-white/90">{segment}</p>
        <p className="text-xs leading-relaxed text-white/60">{description}</p>
      </div>
    </div>
  );
}
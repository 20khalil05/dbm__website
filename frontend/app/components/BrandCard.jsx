import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BrandCard({
  image,
  logo,
  logoAlt,
  title,
  description,
  overlayClassName = "from-black/90 via-black/40 to-transparent",
  className = "",
}) {
  return (
    <div
      className={`relative h-[262px] w-[335px] shrink-0 overflow-hidden  shadow-2xl ${className}`}
    >
      <Image src={image} alt={title} fill className="object-cover" />
      <div className={`absolute inset-0 bg-gradient-to-t ${overlayClassName}`} />

      <div className="absolute left-5 top-6">
        <Image
          src={logo}
          alt={logoAlt}
          width={110}
          height={32}
          className="h-7 w-auto object-contain"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-5">
        <div>
          <p className="text-base font-bold leading-snug text-white">
            {title}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-white/70">
            {description}
          </p>
        </div>
        <button
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors duration-200 hover:bg-white/30"
          aria-label={`Learn more about ${title}`}
        >
          <ArrowRight size={14} className="text-white" />
        </button>
      </div>
    </div>
  );
}
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServiceImageCard({
  image,
  icon: Icon,
  title,
  description,
  className = "",
}) {
  return (
    <div
      className={`relative h-[258px] w-[337px] overflow-hidden rounded-tl-[35px] rounded-br-[35px] shadow-2xl ${className}`}
    >
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-red-600">
        {Icon && <Icon size={16} className="text-white" />}
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4">
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
import { Quote } from "lucide-react";

const AVATAR_BG_STYLES = {
  ACCENT: "bg-purple-600",
  AGX: "bg-red-600",
  RAMZO: "bg-blue-800",
};

export default function TestimonialCard({ quote, initials, name, role, brand }) {
  return (
    <div className="relative flex h-full flex-col justify-between gap-6 rounded-2xl bg-[#0a0e1a] p-7">
      <Quote size={28} className="absolute right-6 top-6 text-red-600/40" />

      <p className="text-sm italic leading-relaxed text-white/80">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${AVATAR_BG_STYLES[brand]}`}
        >
          {initials}
        </span>
        <div>
          <p className="text-sm font-bold text-white">{name}</p>
          <p className="text-xs text-white/50">
            {role}, {brand}
          </p>
        </div>
      </div>
    </div>
  );
}
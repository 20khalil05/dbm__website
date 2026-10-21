import { Briefcase, MapPin, Clock } from "lucide-react";
import Button from "./Button";

const BRAND_TAG_STYLES = {
  ACCENT: "bg-blue-900 text-white",
  AGX: "bg-purple-700 text-white",
  RAMZO: "bg-red-800 text-white",
};

export default function JobCard({ id, title, brand, location, type, tags }) {
  const tagStyle = BRAND_TAG_STYLES[brand] || "bg-slate-700 text-white";

  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-[#0a0e1a] p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col items-start gap-3">
        <p className="text-lg font-bold text-white">{title}</p>

        <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
          <span className="flex items-center gap-1.5">
            <Briefcase size={13} className="text-red-500" />
            {brand}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-red-500" />
            {location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} className="text-red-500" />
            {type}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-[11px] font-medium ${tagStyle}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/70">
          {type}
        </span>
        <Button variant="primary" size="sm" href={`/careers/apply/${id}`}>
          Apply Now
        </Button>
      </div>
    </div>
  );
}
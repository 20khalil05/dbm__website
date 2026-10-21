import { User } from "lucide-react";

const BRAND_BADGE_STYLES = {
  "DBM Group": "bg-slate-800 text-white",
  ACCENT: "bg-blue-900 text-white",
  AGX: "bg-purple-700 text-white",
  RAMZO: "bg-red-800 text-white",
};

const AVATAR_BG_STYLES = {
  "DBM Group": "bg-gradient-to-br from-blue-700 to-blue-900",
  ACCENT: "bg-gradient-to-br from-blue-700 to-blue-900",
  AGX: "bg-gradient-to-br from-indigo-400 to-purple-600",
  RAMZO: "bg-gradient-to-br from-red-500 to-red-800",
};

export default function TeamMemberCard({ name, role, brand }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl">
      <div
        className={`flex h-52 items-center justify-center ${AVATAR_BG_STYLES[brand]}`}
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
          <User size={32} className="text-white/80" />
        </span>
      </div>

      <div className="flex flex-col items-start gap-2 bg-[#0a0e1a] p-5">
        <p className="text-base font-bold text-white">{name}</p>
        <p className="text-sm font-medium text-red-500">{role}</p>
        <span
          className={`rounded-full px-3 py-1 text-[11px] font-medium ${BRAND_BADGE_STYLES[brand]}`}
        >
          {brand}
        </span>
      </div>
    </div>
  );
}
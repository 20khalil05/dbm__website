import { Flag } from "lucide-react";

export default function FloatingCard({ icon: Icon = Flag, title, description }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-[#111827]/80 p-4 shadow-xl backdrop-blur-[20px]">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600">
        <Icon size={16} className="text-white" />
      </span>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-xs text-white/50">{description}</p>
      </div>
    </div>
  );
}
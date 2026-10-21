import { Check } from "lucide-react";

export default function CheckListItem({ children, variant = "solid" }) {
  if (variant === "minimal") {
    return (
      <li className="flex items-center gap-2 text-sm text-white/90">
        <Check size={14} className="shrink-0 text-red-500" />
        {children}
      </li>
    );
  }

  if (variant === "redSolid") {
    return (
      <li className="flex items-center gap-2.5 text-sm text-white/80">
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600">
          <Check size={12} className="text-white" />
        </span>
        {children}
      </li>
    );
  }

  return (
    <li className="flex items-center gap-2 text-sm text-white/90">
      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/20">
        <Check size={11} className="text-white" />
      </span>
      {children}
    </li>
  );
}
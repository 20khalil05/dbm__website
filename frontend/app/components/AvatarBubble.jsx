import { User } from "lucide-react";

export default function AvatarBubble({ colorClass = "bg-purple-500" }) {
  return (
    <span
      className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white ${colorClass}`}
    >
      <User size={16} className="text-white" />
    </span>
  );
}
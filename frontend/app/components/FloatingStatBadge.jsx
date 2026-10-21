export default function FloatingStatBadge({ value, label, className = "" }) {
  return (
    <div
      className={`flex w-40 flex-col items-start gap-1 rounded-xl bg-transparent p-4 backdrop-blur-sm ${className}`}
    >
      <p className="text-xl font-bold text-red-500">{value}</p>
      <p className="text-xs text-white/60">{label}</p>
    </div>
  );
}
export default function InlineStatBlock({ value, label }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <p className="text-2xl font-bold text-red-600 sm:text-3xl">{value}</p>
      <p className="text-xs text-white/60">{label}</p>
    </div>
  );
}
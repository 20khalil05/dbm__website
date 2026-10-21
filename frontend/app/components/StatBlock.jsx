export default function StatBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <p className="text-2xl font-bold text-red-600 sm:text-3xl">{value}</p>
      <p className="text-xs text-slate-500 sm:text-sm">{label}</p>
    </div>
  );
}
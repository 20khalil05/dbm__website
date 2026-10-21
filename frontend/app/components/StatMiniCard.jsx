export default function StatMiniCard({ value, label, valueColorClass = "text-blue-600" }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-2xl bg-white px-6 py-5 text-center shadow-lg">
      <p className={`text-xl font-bold sm:text-2xl ${valueColorClass}`}>{value}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  );
}
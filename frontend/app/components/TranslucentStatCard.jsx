export default function TranslucentStatCard({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl bg-white/15 p-8 text-center">
      <Icon size={22} className="text-white" />
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="text-xs text-white/80">{label}</p>
    </div>
  );
}
const ICON_BG_STYLES = {
  facebook: "bg-blue-100 text-blue-600",
  instagram: "bg-pink-100 text-pink-500",
  tiktok: "bg-slate-900 text-white",
  linkedin: "bg-blue-100 text-blue-700",
};

export default function StatCard({ icon: Icon, iconType, value, label }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white px-6 py-6 shadow-sm">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full ${ICON_BG_STYLES[iconType]}`}
      >
        <Icon size={18} />
      </span>
      <p className="text-xl font-bold text-slate-900">{value}</p>
      <p className="text-xs text-slate-400">{label}</p>
    </div>
  );
}
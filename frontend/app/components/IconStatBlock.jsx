export default function IconStatBlock({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <Icon size={20} className="text-red-600" />
      <p className="text-2xl font-bold text-red-600 sm:text-3xl">{value}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  );
}
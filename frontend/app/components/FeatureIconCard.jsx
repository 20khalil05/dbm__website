export default function FeatureIconCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-start gap-3 rounded-2xl bg-white p-6 shadow-sm">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
        <Icon size={18} className="text-red-600" />
      </span>
      <p className="text-sm font-bold text-slate-900">{title}</p>
      <p className="text-xs leading-relaxed text-slate-500">{description}</p>
    </div>
  );
}
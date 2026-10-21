export default function CenteredFeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white p-6 text-center">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
        <Icon size={18} className="text-red-600" />
      </span>
      <p className="text-sm font-bold text-slate-900">{title}</p>
      <p className="text-xs leading-relaxed text-slate-500">{description}</p>
    </div>
  );
}
export default function FeatureHighlightCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-8 text-center shadow-sm">
      <Icon size={32} className="text-red-600" />
      <h3 className="text-base font-bold text-slate-900">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-500">{description}</p>
    </div>
  );
}
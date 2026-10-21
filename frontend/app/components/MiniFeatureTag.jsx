export default function MiniFeatureTag({ icon: Icon, title, description, bgClass }) {
  return (
    <div className={`flex flex-col items-start gap-1 rounded-xl p-4 ${bgClass}`}>
      <div className="flex items-center gap-2">
        <Icon size={14} className="text-white" />
        <p className="text-xs font-bold text-white">{title}</p>
      </div>
      <p className="text-[11px] leading-relaxed text-white/70">{description}</p>
    </div>
  );
}
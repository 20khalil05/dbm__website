export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex h-[96px] w-[177px] flex-col items-start justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600/20 text-red-500">
        <Icon size={14} />
      </span>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-0.5 text-xs text-white/50">{description}</p>
      </div>
    </div>
  );
}
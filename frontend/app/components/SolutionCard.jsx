export default function SolutionCard({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white/5 p-6">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-600/20">
        <Icon size={18} className="text-red-500" />
      </span>
      <div>
        <p className="text-sm font-bold text-red-500">{title}</p>
        <p className="mt-1 text-xs leading-relaxed text-white/60">
          {description}
        </p>
      </div>
    </div>
  );
}
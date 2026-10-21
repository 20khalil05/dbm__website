export default function IndustryCard({ icon: Icon, title, description }) {
  return (
    <div className="flex w-full max-w-[190px] flex-col items-center gap-3 rounded-2xl bg-[#0a0e1a] p-6 text-center">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-red-900">
        <Icon size={18} className="text-white" />
      </span>
      <p className="text-sm font-bold text-white">{title}</p>
      <p className="text-xs leading-relaxed text-white/50">{description}</p>
    </div>
  );
}
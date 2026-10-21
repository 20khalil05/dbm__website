export default function UniverseCard({ icon: Icon, title, description, gradientClass }) {
  return (
    <div
      className={`flex h-[279px] w-[351px] max-w-full flex-col justify-between rounded-2xl bg-gradient-to-br p-6 ${gradientClass}`}
    >
      <span className="flex h-9 w-9 items-center justify-center">
        <Icon size={26} className="text-white" strokeWidth={1.5} />
      </span>

      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold leading-snug text-white">{title}</p>
        <p className="text-xs leading-relaxed text-white/70">{description}</p>
      </div>
    </div>
  );
}
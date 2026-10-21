export default function BenefitCard({ icon: Icon, title, description, iconBgClass, iconColorClass }) {
  return (
    <div className="flex h-[367px] w-[282px] max-w-full flex-col items-center gap-4 rounded-2xl bg-gray-100 px-6 py-10 text-center">
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBgClass}`}
      >
        <Icon size={20} className={iconColorClass} />
      </span>
      <p className="text-sm font-bold text-slate-900">{title}</p>
      <p className="text-xs leading-relaxed text-slate-500">{description}</p>
    </div>
  );
}
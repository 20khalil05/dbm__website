export default function ContactInfoCard({ icon: Icon, title, line1, line2 }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-8 text-center shadow-sm">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
        <Icon size={22} className="text-red-600" />
      </span>
      <h3 className="text-base font-bold text-slate-900">{title}</h3>
      <div className="flex flex-col gap-0.5">
        <p className="text-sm text-slate-500">{line1}</p>
        <p className="text-xs text-slate-400">{line2}</p>
      </div>
    </div>
  );
}
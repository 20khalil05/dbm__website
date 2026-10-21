export default function ValueCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-red-100 bg-white p-8 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
        <Icon size={22} />
      </span>
      <h3 className="text-base font-bold text-red-600">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}
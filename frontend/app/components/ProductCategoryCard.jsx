export default function ProductCategoryCard({ icon: Icon, title, items }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/15">
      <div className="flex flex-col items-center gap-2 bg-white/10 px-6 py-6">
        <span className="flex h-10 w-10 items-center justify-center">
          <Icon size={26} className="text-white" />
        </span>
        <p className="text-sm font-bold text-white">{title}</p>
      </div>

      <ul className="flex flex-col gap-3 px-6 py-6">
        {items.map((item) => (
          <li key={item} className="text-xs text-white/70">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
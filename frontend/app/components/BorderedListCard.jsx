import CheckListItem from "./CheckListItem";

export default function BorderedListCard({ title, items, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-red-200 bg-white/60 p-8 ${className}`}
    >
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <CheckListItem key={item} variant="minimal">
            <span className="text-slate-700">{item}</span>
          </CheckListItem>
        ))}
      </ul>
    </div>
  );
}
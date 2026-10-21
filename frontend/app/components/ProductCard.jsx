import CheckListItem from "./CheckListItem";
import Button from "./Button";

export default function ProductCard({ icon: Icon, title, description, features }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
      <div className="flex h-24 items-center justify-center bg-[#0a0e1a]">
        <Icon size={26} className="text-white" />
      </div>

      <div className="flex flex-1 flex-col items-start gap-4 p-5">
        <div>
          <p className="text-sm font-bold text-slate-900">{title}</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-500">
            {description}
          </p>
        </div>

        <ul className="flex flex-col gap-2">
          {features.map((feature) => (
            <CheckListItem key={feature} variant="minimal">
              <span className="text-xs text-slate-600">{feature}</span>
            </CheckListItem>
          ))}
        </ul>

        <Button variant="primary" size="sm" href="#" className="mt-auto w-full">
          Learn more
        </Button>
      </div>
    </div>
  );
}
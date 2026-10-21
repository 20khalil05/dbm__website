import CheckListItem from "./CheckListItem";
import TextLink from "./TextLink";

const BRAND_BADGE_STYLES = {
  ACCENT: "bg-blue-900 text-white",
  AGX: "bg-purple-600 text-white",
  RAMZO: "bg-red-600 text-white",
};

export default function PortfolioCard({
  icon: Icon,
  brand,
  title,
  description,
  features,
}) {
  return (
    <div className="flex min-h-[546px] w-full flex-col overflow-hidden rounded-2xl border border-red-200">
      <div className="relative flex h-40 items-center justify-center border-b border-red-200">
        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${BRAND_BADGE_STYLES[brand]}`}
        >
          {brand}
        </span>
        <Icon size={40} className="text-red-600" strokeWidth={1.5} />
      </div>

      <div className="flex flex-1 flex-col items-start gap-4 p-6">
        <h3 className="text-lg font-bold text-red-600">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>

        <ul className="flex flex-col gap-2.5">
          {features.map((feature) => (
            <CheckListItem key={feature} variant="minimal">
              <span className="text-sm text-slate-700">{feature}</span>
            </CheckListItem>
          ))}
        </ul>

        <TextLink href="#" className="mt-auto">
          Learn More
        </TextLink>
      </div>
    </div>
  );
}
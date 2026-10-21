import Tag from "./Tag";

export default function IndustryTagCard({
  icon: Icon,
  iconBgClass,
  title,
  description,
  tags,
}) {
  return (
    <div className="flex h-full min-h-[280px] w-full flex-col items-start gap-4 rounded-2xl bg-white p-8">
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBgClass}`}
      >
        <Icon size={22} className="text-white" />
      </span>

      <h3 className="text-lg font-bold text-red-600">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}
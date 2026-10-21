export default function SocialIconButton(props) {
  const Icon = props.icon;
  const href = props.href || "#";
  const label = props.label;

  return (
    <a href={href} aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-colors duration-200 hover:bg-slate-200 hover:text-slate-700">
      <Icon size={16} />
    </a>
  );
}
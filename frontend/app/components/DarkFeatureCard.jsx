export default function DarkFeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex h-[396px] w-[360px] flex-col items-start gap-4 rounded-2xl bg-[#0a0e1a] p-8">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-purple-500/15">
        <Icon size={20} className="text-purple-500" />
      </span>
      <h3 className="text-lg font-bold uppercase leading-snug text-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-white/50">{description}</p>
    </div>
  );
}
export default function GlassInfoCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-md">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600/20 text-red-500">
        <Icon size={20} />
      </span>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/70">{description}</p>
    </div>
  );
}
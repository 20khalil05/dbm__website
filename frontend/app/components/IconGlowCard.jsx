export default function IconGlowCard({ icon: Icon, colorClass = "text-red-500" }) {
  return (
    <div className="relative flex h-64 w-full max-w-md items-center justify-center overflow-hidden rounded-2xl bg-[#0a0e1a] sm:h-72">
      <div className={`absolute h-24 w-24 rounded-full bg-red-600/30 blur-2xl`} />
      <Icon size={64} strokeWidth={1} className={`relative ${colorClass}`} />
    </div>
  );
}
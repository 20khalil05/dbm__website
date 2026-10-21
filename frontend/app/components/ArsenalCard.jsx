import { ArrowRight } from "lucide-react";

export default function ArsenalCard({ icon: Icon, title, description, isNew = false }) {
  return (
    <div className="relative flex h-[522px] w-full flex-col overflow-hidden rounded-2xl bg-[#0a0e1a]">
      {isNew && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-red-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          New
        </span>
      )}

      <div className="flex h-52 items-center justify-center bg-gradient-to-br from-purple-900/60 to-[#0a0e1a]">
        <Icon size={40} className="text-white/70" strokeWidth={1.5} />
      </div>

      <div className="flex flex-1 flex-col items-start gap-3 p-6">
        <h3 className="text-lg font-bold uppercase leading-snug text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-white/50">{description}</p>

        <a href="#" className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-purple-500 transition-colors duration-200 hover:text-purple-400">
          Learn more
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
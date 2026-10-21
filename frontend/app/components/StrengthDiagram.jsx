export default function StrengthDiagram() {
  return (
    <div className="relative mx-auto flex max-w-2xl flex-col items-center py-8">
      <div className="flex w-full items-center">
        {/* ACCENT */}
        <div className="flex h-20 flex-1 flex-col items-center justify-center gap-0.5 rounded-2xl bg-blue-900 px-4 text-center shadow-lg">
          <p className="text-sm font-bold text-white">ACCENT</p>
          <p className="text-[11px] text-blue-200">Professional Solutions</p>
        </div>

        {/* Ligne ACCENT — DBM */}
        <div className="h-px flex-1 bg-blue-400/50" />

        {/* DBM GROUP */}
        <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center gap-0.5 rounded-full bg-red-600 text-center shadow-xl">
          <p className="text-sm font-bold leading-tight text-white">DBM</p>
          <p className="text-sm font-bold leading-tight text-white">GROUP</p>
        </div>

        {/* Ligne DBM — AGX */}
        <div className="h-px flex-1 bg-blue-400/50" />

        {/* AGX */}
        <div className="flex h-20 flex-1 flex-col items-center justify-center gap-0.5 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-400 px-4 text-center shadow-lg">
          <p className="text-sm font-bold text-white">AGX</p>
          <p className="text-[11px] text-white/80">Gaming Excellence</p>
        </div>
      </div>

      {/* Ligne verticale DBM — SCREENADS */}
      <div className="h-8 w-px bg-blue-400/50" />

      {/* SCREENADS */}
      <div className="flex h-20 w-48 flex-col items-center justify-center gap-0.5 rounded-2xl bg-red-700 px-4 text-center shadow-lg">
        <p className="text-sm font-bold text-white">SCREENADS</p>
        <p className="text-[11px] text-red-100">Digital Signage Solutions</p>
      </div>
    </div>
  );
}
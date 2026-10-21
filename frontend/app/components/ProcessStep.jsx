export default function ProcessStep({ number, title, description, isLast = false }) {
  return (
    <div className="relative flex flex-1 flex-col items-center gap-3 text-center">
      {!isLast && (
        <div className="absolute left-1/2 top-8 hidden h-px w-full bg-gradient-to-r from-red-600 to-red-600/20 sm:block" />
      )}

      <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
        {number}
      </span>

      <p className="text-base font-bold text-slate-900">{title}</p>
      <p className="max-w-[180px] text-xs leading-relaxed text-slate-500">
        {description}
      </p>
    </div>
  );
}
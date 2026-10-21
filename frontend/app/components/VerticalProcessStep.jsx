export default function VerticalProcessStep({ number, title, description, isLast = false }) {
  return (
    <div className={`relative flex items-start gap-6 ${isLast ? "" : "pb-10"}`}>
      {!isLast && (
        <div className="absolute left-7 top-7 bottom-0 w-0.5 -translate-x-1/2 bg-red-600" />
      )}

      <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-red-600 bg-white text-xl font-bold text-red-600">
        {number}
      </span>

      <div className="flex-1 rounded-2xl bg-[#0a0e1a] p-6">
        <p className="text-base font-bold text-white">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-white/50">
          {description}
        </p>
      </div>
    </div>
  );
}
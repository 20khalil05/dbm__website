export default function TextArea({ label, rows = 4, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-semibold text-slate-900">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        {...props}
        className="resize-none rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      />
    </div>
  );
}
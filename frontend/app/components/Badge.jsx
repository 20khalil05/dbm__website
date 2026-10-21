export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-block rounded-full border border-red-500/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-red-500 ${className}`}
    >
      {children}
    </span>
  );
}
export default function SectionTag({ children, className = "" }) {
  return (
    <p
      className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </p>
  );
}
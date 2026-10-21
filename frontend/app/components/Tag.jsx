export default function Tag({ children }) {
  return (
    <span className="rounded-full bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700">
      {children}
    </span>
  );
}
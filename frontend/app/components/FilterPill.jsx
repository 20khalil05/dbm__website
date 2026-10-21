export default function FilterPill({ children, active = false, icon: Icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
        active
          ? "bg-red-600 text-white hover:bg-red-700"
          : "bg-white/10 text-white/80 hover:bg-white/20"
      }`}
    >
      {Icon && <Icon size={14} />}
      {children}
    </button>
  );
}
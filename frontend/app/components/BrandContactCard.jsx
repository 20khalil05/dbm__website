const COLOR_STYLES = {
  blue: {
    icon: "text-blue-600",
    button: "border-blue-600 text-blue-600 hover:bg-blue-50",
  },
  purple: {
    icon: "text-purple-600",
    button: "border-purple-600 text-purple-600 hover:bg-purple-50",
  },
  green: {
    icon: "text-green-600",
    button: "border-green-600 text-green-600 hover:bg-green-50",
  },
};

export default function BrandContactCard({ icon: Icon, brandName, description, buttonLabel, color }) {
  const styles = COLOR_STYLES[color];

  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-8 text-center shadow-sm">
      <Icon size={28} className={styles.icon} />
      <h3 className="text-lg font-bold text-slate-900">{brandName}</h3>
      <p className="text-sm leading-relaxed text-slate-500">{description}</p>

      <button
        className={`mt-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${styles.button}`}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
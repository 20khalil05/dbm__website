export default function PaginationDots({ total = 4, activeIndex = 0 }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={`h-1.5 rounded-full transition-all duration-200 ${
            index === activeIndex ? "w-6 bg-red-600" : "w-1.5 bg-white/30"
          }`}
        />
      ))}
    </div>
  );
}
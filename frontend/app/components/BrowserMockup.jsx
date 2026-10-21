export default function BrowserMockup() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-[#0a0e1a] p-5 shadow-2xl">
      <div className="flex items-center gap-1.5 pb-4">
        <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="h-16 rounded-lg bg-white/10" />
        <div className="h-16 rounded-lg bg-white/10" />
        <div className="col-span-2 h-16 rounded-lg bg-white/10" />
        <div className="h-16 rounded-lg bg-white/10" />
        <div className="h-16 rounded-lg bg-white/10" />
      </div>
    </div>
  );
}
import StatMiniCard from "./StatMiniCard";
import AvatarBubble from "./AvatarBubble";

const STATS = [
  { value: "6.2K", label: "Players" },
  { value: "3.7K", label: "Machines sold" },
  { value: "687", label: "Online" },
];

export default function JoinCommunity() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
          JOIN THE <span className="text-purple-600">COMMUNITY</span>
        </h2>
        <p className="mt-3 text-sm text-slate-500">
          Thousands of gamers already trust AGX.
        </p>

        <div className="mt-8 flex items-center justify-center gap-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <p className="text-xl font-bold text-purple-600 sm:text-2xl">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center -space-x-2">
          <AvatarBubble />
          <AvatarBubble />
          <AvatarBubble />
        </div>
      </div>
    </section>
  );
}
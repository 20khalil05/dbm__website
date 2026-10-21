import SectionTag from "./SectionTag";
import CheckListItem from "./CheckListItem";
import BorderedListCard from "./BorderedListCard";
import Image from "next/image";

const MARKET_TRENDS = [
  "Growing gaming market (18-35 years)",
  "Digitalization of educational institutions",
  "Post-COVID e-commerce boom",
  "Rise of local brands vs. imports",
  "High mobile & social media penetration",
  'Government "Maroc Digital" initiatives',
];

const COMPETITIVE_ADVANTAGES = [
  "Competitive pricing adapted to local market",
  "Proximity and understanding of Moroccan needs",
  "Responsive local support and after-sales service",
  "Solutions specifically designed for Moroccan context",
  "Strong community engagement across social platforms",
];

export default function MarketPosition() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">
      {/* Image de fond */}
            <div className="absolute inset-0">
              <Image
                src="/bg-market-position.png"
                alt="Our brands background"
                fill
              />
              <div className="absolute inset-0 bg-gray-50/80" />
            </div>
      {/* Motif réseau en arrière-plan (décoratif, à droite) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-40">
        <svg
          className="h-full w-full"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#ef4444" strokeWidth="1" opacity="0.3">
            <line x1="100" y1="80" x2="300" y2="150" />
            <line x1="300" y1="150" x2="220" y2="320" />
            <line x1="220" y1="320" x2="100" y2="420" />
            <line x1="300" y1="150" x2="450" y2="90" />
            <line x1="220" y1="320" x2="420" y2="260" />
          </g>
          <g fill="#ef4444" opacity="0.4">
            <circle cx="100" cy="80" r="3" />
            <circle cx="300" cy="150" r="3" />
            <circle cx="220" cy="320" r="3" />
            <circle cx="100" cy="420" r="3" />
            <circle cx="450" cy="90" r="3" />
            <circle cx="420" cy="260" r="3" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-start lg:px-8">
        {/* Colonne gauche */}
        <BorderedListCard
          title="Market Trends We're Capitalizing On:"
          items={MARKET_TRENDS}
        />

        {/* Colonne droite */}
        <div className="flex flex-col items-start gap-5">
          <SectionTag className="text-red-600">Market position</SectionTag>

          <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            Competing with Global Giants, Rooted in Local Excellence
          </h2>

          <p className="text-sm leading-relaxed text-slate-600">
            The Moroccan IT and technology market is experiencing sustained
            growth, driven by economic digitalization, government Maroc
            Digital plans, and the expansion of the education sector.
          </p>

          <p className="text-sm leading-relaxed text-slate-600">
            DBM Maroc positions itself as a strong local alternative to
            multinationals like HP, Dell, ASUS ROG, and MSI. Our competitive
            advantages include:
          </p>

          <ul className="flex flex-col gap-3">
            {COMPETITIVE_ADVANTAGES.map((item) => (
              <CheckListItem key={item} variant="minimal">
                <span className="text-slate-700">{item}</span>
              </CheckListItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
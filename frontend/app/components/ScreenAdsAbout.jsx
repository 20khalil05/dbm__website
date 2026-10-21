import { Monitor } from "lucide-react";
import SectionTag from "./SectionTag";
import CheckListItem from "./CheckListItem";
import IconGlowCard from "./IconGlowCard";

const FEATURES = [
  "Intuitive interface",
  "Online in just a few steps",
  "Real-time update",
  "Scalable & flexible",
];

export default function ScreenAdsAbout() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        {/* Colonne gauche */}
        <div className="flex justify-center lg:justify-start">
          <IconGlowCard icon={Monitor} />
        </div>

        {/* Colonne droite */}
        <div className="flex flex-col items-start gap-5">
          <SectionTag className="text-red-600">About ScreenADS</SectionTag>

          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Reinvented <span className="text-red-600">dynamic display</span>
          </h2>

          <p className="text-sm leading-relaxed text-slate-600">
            ScreenADS, by DBM Maroc is a dynamic display management solution
            designed to meet the diverse needs of businesses, organizations,
            and public institutions. Easily publish, organize, and schedule
            your content to deliver the right message at the right time.
          </p>

          <p className="text-sm leading-relaxed text-slate-600">
            With ScreenADS, simplify your communication, captivate your
            audience, and optimize your impact.
          </p>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <CheckListItem key={feature} variant="redSolid">
                <span className="text-slate-700">{feature}</span>
              </CheckListItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
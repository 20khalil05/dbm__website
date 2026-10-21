import Image from "next/image";
import SectionTag from "./SectionTag";
import StatBlock from "./StatBlock";


export default function AboutWhoWeAre() {
  return (
    <section className="bg-red-600 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        {/* Colonne gauche */}
        <div className="flex flex-col items-start gap-5">
          <SectionTag className="text-white/80">Who we are</SectionTag>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            A Moroccan Tech Ecosystem Designed for the Future
          </h2>

          <p className="text-sm leading-relaxed text-white/80 sm:text-base">
            DBM Maroc is a leading technology group positioned at the
            intersection of innovation, performance, and accessibility. We
            are a proudly Moroccan brand with a clear ambition: to build
            Moroccos digital future through cutting-edge technology
            solutions.
          </p>

          <p className="text-sm leading-relaxed text-white/80 sm:text-base">
            Our group brings together three powerful brands—ACCENT, AGX, and
            RAMZO—each serving distinct market segments while creating a
            synergistic ecosystem that covers the entire technology value
            chain, from professional solutions to gaming hardware and
            e-commerce distribution.
          </p>

          <p className="text-sm leading-relaxed text-white/80 sm:text-base">
            In a market dominated by multinationals, we differentiate
            ourselves through our local expertise, competitive pricing,
            exceptional support, and solutions specifically adapted to the
            Moroccan context.
          </p>
        </div>

        {/* Colonne droite : image + carte statistiques */}
        <div className="relative">
          <div className="relative h-72 w-full overflow-hidden rounded-3xl sm:h-80">
            <Image
              src="/about_who we are.png"
              alt="DBM Maroc offices"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-red-950/30" />
          </div>

          <div className="mx-auto -mt-10 flex w-[92%] items-center justify-around gap-4 rounded-2xl bg-white px-6 py-6 shadow-2xl sm:absolute sm:-bottom-10 sm:left-1/2 sm:mt-0 sm:w-11/12 sm:-translate-x-1/2">
            <StatBlock value="3" label="Complementary Brands" />
            <StatBlock value="15K+" label="Social Media Community" />
            <StatBlock value="100%" label="Moroccan Made" />
          </div>
        </div>
      </div>
    </section>
  );
}
import AgxHero from "../../components/AgxHero";
import AgxWhyChoose from "../../components/AgxWhyChoose";
import AgxArsenal from "../../components/AgxArsenal";
import JoinCommunity from "../../components/JoinCommunity";
import BrandCta from "../../components/BrandCta";

export const metadata = {
  title: "AGX | DBM Maroc",
  description:
    "High-performance gaming machines, designed for gamers who seek power, reliability, and an unmatched experience.",
};

export default function AgxPage() {
  return (
    <main>
      <AgxHero />
      <AgxWhyChoose />
      <AgxArsenal />
      <JoinCommunity />
      <BrandCta />
    </main>
  );
}
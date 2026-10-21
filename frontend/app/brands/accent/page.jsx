import AccentHero from "../../components/AccentHero";
import AccentWhyChoose from "../../components/AccentWhyChoose";
import AccentProducts from "../../components/AccentProducts";
import AccentSolutions from "../../components/AccentSolutions";
import BrandCta from "../../components/BrandCta";

export const metadata = {
  title: "ACCENT | DBM Maroc",
  description:
    "More than 30 years providing IT solutions, electronic equipment and digital tools to businesses and institutions.",
};

export default function AccentPage() {
  return (
    <main>
      <AccentHero />
      <AccentWhyChoose />
      <AccentProducts />
      <AccentSolutions />
      <BrandCta />
    </main>
  );
}
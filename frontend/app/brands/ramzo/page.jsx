import RamzoHero from "../../components/RamzoHero";
import RamzoBenefits from "../../components/RamzoBenefits";
import RamzoUniverses from "../../components/RamzoUniverses";
import RamzoPopularProducts from "../../components/RamzoPopularProducts";
import RamzoStats from "../../components/RamzoStats";

export const metadata = {
  title: "RAMZO | DBM Maroc",
  description:
    "RAMZO est la plateforme e-commerce de référence qui connecte les marques tech marocaines (ACCENT, AGX) aux professionnels, gamers et particuliers. Livraison partout au Royaume.",
};

export default function RamzoPage() {
  return (
    <main>
      <RamzoHero />
      <RamzoBenefits />
      <RamzoUniverses />
      <RamzoPopularProducts />
      <RamzoStats />
    </main>
  );
}
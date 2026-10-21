import AboutHero from "../components/AboutHero";
import AboutWhoWeAre from "../components/AboutWhoWeAre";
import AboutOurBrands from "../components/AboutOurBrands";
import MissionVision from "../components/MissionVision";
import OurValues from "../components/OurValues";
import OurStrength from "../components/OurStrength";
import MarketPosition from "../components/MarketPosition";
import CtaSection from "../components/CtaSection";

export const metadata = {
  title: "About DBM | DBM Maroc",
  description:
    "A Moroccan Tech Group building the digital future through three complementary brands: ACCENT, AGX, and RAMZO",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutWhoWeAre />
      <AboutOurBrands />
      <MissionVision />
      <OurValues />
      <OurStrength />
      <MarketPosition />
      <CtaSection />
    </main>
  );
}
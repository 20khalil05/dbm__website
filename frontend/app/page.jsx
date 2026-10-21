import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import OurBrands from "./components/OurBrands";
import DbmEcosystem from "./components/DbmEcosystem";
import OurImpact from "./components/OurImpact";
import OurVision from "./components/OurVision";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <OurBrands />
      <DbmEcosystem />
      <OurImpact />
      <OurVision />
    </main>
  );
}
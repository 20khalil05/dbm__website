import ScreenAdsHero from "../../components/ScreenAdsHero";
import ScreenAdsAbout from "../../components/ScreenAdsAbout";
import ScreenAdsFeatures from "../../components/ScreenAdsFeatures";
import ScreenAdsProducts from "../../components/ScreenAdsProducts";
import ScreenAdsUseCases from "../../components/ScreenAdsUseCases";
import ScreenAdsCmsPlatform from "../../components/ScreenAdsCmsPlatform";
import BrandCta from "../../components/BrandCta";

export const metadata = {
  title: "ScreenADS | DBM Maroc",
  description:
    "ScreenADS is a digital signage solution that allows you to manage your screens remotely, schedule your content at any time, and reach your audience with dynamic, captivating content.",
};

export default function ScreenAdsPage() {
  return (
    <main>
      <ScreenAdsHero />
      <ScreenAdsAbout />
      <ScreenAdsFeatures />
      <ScreenAdsProducts />
      <ScreenAdsUseCases />
      <ScreenAdsCmsPlatform />
      <BrandCta description="Discover how ScreenADS can revolutionize your dynamic display." />
    </main>
  );
}
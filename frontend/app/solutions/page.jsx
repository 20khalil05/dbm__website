import SolutionsHero from "../components/SolutionsHero";
import SolutionsPortfolio from "../components/SolutionsPortfolio";
import SolutionsByIndustry from "../components/SolutionsByIndustry";
import FeaturedSolutions from "../components/FeaturedSolutions";
import WhyChooseDbm from "../components/WhyChooseDbm";
import ImplementationProcess from "../components/ImplementationProcess";
import SolutionsCta from "../components/SolutionsCta";

export const metadata = {
  
  title: "Solutions | DBM Maroc",
  description:
    "From professional IT infrastructure to high-performance gaming setups, we deliver end-to-end technology solutions tailored to your needs.",
};

export default function SolutionsPage() {
  return (
    <main>
      <SolutionsHero />
      <SolutionsPortfolio />
      <SolutionsByIndustry />
      <FeaturedSolutions />
      <WhyChooseDbm />
      <ImplementationProcess />
      <SolutionsCta />
    </main>
  );
}
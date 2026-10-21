import BrandsHero from "../components/BrandsHero";
import BrandDetailHero from "../components/BrandDetailHero";
import WhoWeServe from "../components/WhoWeServe";
import WhatWeOffer from "../components/WhatWeOffer";

const accentBackgroundImage = "/who we are_1.png";
const accentMockupImage = "/ourBrand_accent.png";
const accentLogo = "/accent_logo.png";

const agxBackgroundImage = "/ourBrand_agx.png";
const agxMockupImage = "/ourBrand_agx.png";
const agxLogo = "/Logo_agx.png";

const screenAdsBackgroundImage = "/ourBrand_screenads.png";
const screenAdsMockupImage = "/ourBrand_screenads.png";
const screenAdsLogo = "/logo_screenAds.png";

export const metadata = {
  title: "Our Brands | DBM Maroc",
  description:
    "Three powerful brands, one unified vision. Discover how ACCENT, AGX, and RAMZO are transforming Morocco's technology landscape.",
};

export default function BrandsPage() {
  return (
    <main>
      <BrandsHero />

      <BrandDetailHero
        badgeLabel="Professional Solutions"
        badgeClassName="bg-blue-600/20 text-blue-300"
        brandName="ACCENT"
        brandNameColorClass="text-blue-500"
        description="ACCENT is the flagship technology brand of DBM Group, delivering comprehensive IT solutions tailored for professionals, institutions, and individuals across Morocco. We bridge the gap between cutting-edge technology and practical business needs."
        stats={[
          { value: "4.6K", label: "Facebook Followers" },
          { value: "952", label: "LinkedIn Professionals" },
          { value: "100%", label: "Moroccan Support" },
        ]}
        statValueColorClass="text-blue-600"
        features={[
          "Professional PCs & Laptops",
          "Interactive LED Displays & Video Walls",
          "Digital Education & E-learning Solutions",
          "Cloud Infrastructure & Cybersecurity",
          "Digital Transformation Consulting",
        ]}
        websiteUrl="https://accent.ma"
        productsUrl="/brands/accent/products"
        backgroundImage={accentBackgroundImage}
        mockupImage={accentMockupImage}
        brandLogo={accentLogo}
        quoteTitle="Empowering Moroccan Businesses"
        quoteDescription="From SMEs to large institutions, ACCENT provides tailored technology solutions that drive growth and innovation."
        logoPosition="right"
      />

      <BrandDetailHero
        badgeLabel="Gaming Excellence"
        badgeClassName="bg-purple-600/20 text-purple-300"
        brandName="AGX"
        brandNameColorClass="text-purple-500"
        description="AGX is Morocco's premier gaming brand, designed for passionate gamers and high-performance computing enthusiasts. We bring international gaming culture to Morocco with locally-adapted solutions and competitive pricing."
        stats={[
          { value: "6.2K", label: "Instagram Followers" },
          { value: "3.7K", label: "Facebook Community" },
          { value: "687", label: "TikTok Followers" },
        ]}
        statValueColorClass="text-purple-600"
        features={[
          "High-Performance Gaming PCs",
          "Premium Gaming Accessories & Peripherals",
          "Custom PC Building Services",
          "Esports Integration & Support",
          "Low-Latency Streaming Equipment",
        ]}
        websiteUrl="https://agx.ma"
        productsUrl="/brands/agx/products"
        productsLabel="Shop Gaming Gear"
        backgroundImage={agxBackgroundImage}
        mockupImage={agxMockupImage}
        brandLogo={agxLogo}
        quoteTitle="Level Up Your Game"
        quoteDescription="From casual gamers to professional esports athletes, AGX delivers the performance you need to dominate."
        reverse
        logoPosition="left"
      />

      <BrandDetailHero
        badgeLabel="Digital Signage Without Limits"
        badgeClassName="bg-green-600/20 text-green-300"
        brandName="SCREENADS"
        brandNameColorClass="text-green-500"
        description="SCREENADS is the digital signage brand of the group, offering smart and dynamic solutions for communication, advertising, and information display."
        stats={[
          { value: "3K+", label: "Screens Deployed" },
          { value: "2K+", label: "Satisfied Clients" },
          { value: "98%", label: "Uptime Performance" },
        ]}
        statValueColorClass="text-green-600"
        features={[
          "Indoor LED Screens & Video Walls",
          "Outdoor LED Screens & Totems",
          "Digital Signage Players & Software",
          "Professional Mounts & Stands",
          "Complete AV Solutions",
        ]}
        websiteUrl="https://screenads.ma"
        backgroundImage={screenAdsBackgroundImage}
        mockupImage={screenAdsMockupImage}
        brandLogo={screenAdsLogo}
        quoteTitle="Powerful displays."
        quoteDescription="Limitless impact."
        logoPosition="right"
      />

      <WhoWeServe />
      <WhatWeOffer />
    </main>
  );
}
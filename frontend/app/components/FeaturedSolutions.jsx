import {
  Cloud,
  Repeat,
  Database,
  TrendingUp,
  Wrench,
  Zap,
  Video,
  Headphones,
  MonitorSmartphone,
  Move,
  Rows3,
  Puzzle,
  ArrowRight,
} from "lucide-react";
import SectionTag from "./SectionTag";
import DeepDiveRow from "./DeepDiveRow";

const cloudImage = "/ourBrand_accent.png";
const gamingImage = "/ourBrand_AGX.png";
const ledImage = "/ourBrand_screenads.png";

const ROWS = [
  {
    image: cloudImage,
    title: "Cloud Infrastructure & Digital Transformation",
    titleColorClass: "text-blue-800",
    description:
      "Accelerate your digital transformation journey with our comprehensive cloud solutions. We help businesses migrate to the cloud, optimize operations, and scale efficiently.",
    features: [
      { icon: Cloud, title: "Cloud Migration", description: "Seamless transition from on-premise to cloud infrastructure" },
      { icon: Repeat, title: "Hybrid Solutions", description: "Flexible hybrid cloud architecture for optimal performance" },
      { icon: Database, title: "Data Management", description: "Secure storage, backup, and disaster recovery solutions" },
      { icon: TrendingUp, title: "Scalability", description: "Scale resources up or down based on demand" },
    ],
    featureBgClass: "bg-blue-900",
    buttonLabel: "Get Started",
    buttonIcon: ArrowRight,
    reverse: false,
  },
  {
    image: gamingImage,
    title: "High-Performance Gaming Setups",
    titleColorClass: "text-purple-600",
    description:
      "From custom-built gaming PCs to complete esports arena configurations, AGX delivers cutting-edge gaming solutions that give you the competitive edge.",
    features: [
      { icon: Wrench, title: "Custom Builds", description: "Tailored gaming PCs optimized for specific needs" },
      { icon: Zap, title: "Max Performance", description: "Latest GPUs, CPUs, and cooling systems for peak performance" },
      { icon: Video, title: "Streaming Ready", description: "Complete streaming setups for content creators" },
      { icon: Headphones, title: "Pro Peripherals", description: "Professional-grade keyboards, mice, and headsets" },
    ],
    featureBgClass: "bg-purple-700",
    buttonLabel: "Build Your PC",
    buttonIcon: ArrowRight,
    reverse: true,
  },
  {
    image: ledImage,
    title: "Interactive LED & Display Solutions",
    titleColorClass: "text-green-700",
    description:
      "Transform your space with stunning visual displays. From conference rooms to control centers, our interactive LED solutions deliver exceptional clarity and engagement.",
    features: [
      { icon: MonitorSmartphone, title: "COB Technology", description: "Chip-on-Board LED with P1.25 pixel pitch for ultra clarity" },
      { icon: Move, title: "Touch Interactive", description: "Multi-touch capabilities for collaborative work" },
      { icon: Rows3, title: "Video Walls", description: "Seamless multi-screen configurations" },
      { icon: Puzzle, title: "Easy Integration", description: "Compatible with all major platforms and software" },
    ],
    featureBgClass: "bg-green-700",
    buttonLabel: "View Displays",
    buttonIcon: ArrowRight,
    reverse: false,
  },
];

export default function FeaturedSolutions() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <SectionTag className="justify-center text-red-600">
          Deep dive
        </SectionTag>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Featured Solutions
        </h2>
        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          Explore our most comprehensive and impactful technology solutions
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-20 px-6 lg:px-8">
        {ROWS.map((row) => (
          <DeepDiveRow
            key={row.title}
            image={row.image}
            title={row.title}
            titleColorClass={row.titleColorClass}
            description={row.description}
            features={row.features}
            featureBgClass={row.featureBgClass}
            buttonLabel={row.buttonLabel}
            buttonIcon={row.buttonIcon}
            reverse={row.reverse}
          />
        ))}
      </div>
    </section>
  );
}
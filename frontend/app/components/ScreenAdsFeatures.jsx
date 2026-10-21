import {
  SquarePen,
  Monitor,
  Tablet,
  RotateCw,
  Users,
  Cloud,
  MapPin,
  Calendar,
  MessageSquare,
} from "lucide-react";
import SectionTag from "./SectionTag";
import FeatureIconCard from "./FeatureIconCard";

const FEATURES = [
  {
    icon: SquarePen,
    title: "Screen Ads",
    description:
      "Create attractive ads and messages tailored to your audience in just a few clicks.",
  },
  {
    icon: Monitor,
    title: "Dynamic Screen",
    description:
      "Transform your screens into real communication tools with dynamic and engaging content.",
  },
  {
    icon: Tablet,
    title: "Online Reading",
    description:
      "Display your content in real time from anywhere, on any internet connected device.",
  },
  {
    icon: RotateCw,
    title: "Real Time Sync",
    description:
      "Keep your screens up to date in real time with instant content synchronization.",
  },
  {
    icon: Users,
    title: "Group Management",
    description:
      "Organize your screens by groups for simplified and efficient management.",
  },
  {
    icon: Cloud,
    title: "Cloud Hosting",
    description:
      "Host your content securely on the cloud for maximum availability.",
  },
  {
    icon: MapPin,
    title: "Geolocation",
    description:
      "Target your screens by location for even more relevant local communication.",
  },
  {
    icon: Calendar,
    title: "Advanced Scheduling",
    description:
      "Plan your content in advance and automate its display at the right times.",
  },
  {
    icon: MessageSquare,
    title: "7/7 Support",
    description:
      "Our team is available 7/7 to support you and quickly resolve any issues.",
  },
];

export default function ScreenAdsFeatures() {
  return (
    <section className="bg-gradient-to-br from-black via-red-800 to-red-600 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <SectionTag className="justify-center text-white">
          Features
        </SectionTag>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Everything you need to manage your screens
        </h2>
        <p className="mt-3 text-sm text-white/90 sm:text-base">
          A powerful and simple platform to efficiently manage your content
          across all your screens.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {FEATURES.map((feature) => (
          <FeatureIconCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
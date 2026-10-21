import Image from "next/image";
import { Target, Eye } from "lucide-react";
import SectionTag from "./SectionTag";
import GlassInfoCard from "./GlassInfoCard";

const missionVisionBackgroundImage = "/bg_dbm_ecosystem.png";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <Image
          src={missionVisionBackgroundImage}
          alt="DBM Maroc office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#05070d]/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start gap-3">
          <SectionTag className="text-red-600">Our purpose</SectionTag>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Mission & Vision
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <GlassInfoCard
            icon={Target}
            title="Our Mission"
            description="To democratize access to high-quality technology in Morocco by providing innovative, locally-adapted solutions that empower businesses, educators, gamers, and individuals. We commit to delivering exceptional products backed by superior customer service and technical support, while fostering the growth of Morocco's digital ecosystem."
          />
          <GlassInfoCard
            icon={Eye}
            title="Our Vision"
            description="To become Morocco's leading homegrown technology group, recognized for excellence in innovation, customer satisfaction, and contribution to the nation's digital transformation. We envision a future where Moroccan brands compete confidently with international giants, offering world-class products that reflect local understanding and global standards."
          />
        </div>
      </div>
    </section>
  );
}
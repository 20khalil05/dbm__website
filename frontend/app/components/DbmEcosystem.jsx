import Image from "next/image";
import { MapPin, Sparkles, Users, Award } from "lucide-react";
import SectionTag from "./SectionTag";
import FeatureCard from "./FeatureCard";
import EcosystemTree from "./EcosystemTree";



export default function DbmEcosystem() {
  return (
    <section className="relative overflow-hidden bg-[#05070d] py-24">
      <div className="absolute inset-0">
        <Image
          src="/bg_dbm_ecosystem.png"
          alt="DBM Ecosystem background"
          fill
          className="object-cover opacity-60 blur-md"
        />
        <div className="absolute inset-0 bg-gradient-to-r " />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        {/* Colonne gauche */}
        <div className="flex flex-col items-start gap-5 lg:pl-8 xl:pl-12">
          <SectionTag className="text-red-600">DBM Ecosystem</SectionTag>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4  lg:pl-7 xl:pl-12">
            The Power Behind <br />
            Accent, AGX & SCREENADS
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-white/60 sm:text-base lg:pl-8 xl:pl-12">
            A unified Moroccan group combining innovation, expertise, and
            local value to serve every tech need.
          </p>

          <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:pl-8 xl:pl-12">
            <FeatureCard
              icon={MapPin}
              title="Local Expertise"
              description="Made in Morocco"
            />
            <FeatureCard
              icon={Sparkles}
              title="Innovation"
              description="Tech that evolves"
            />
            <FeatureCard
              icon={Users}
              title="Community"
              description="Growing together"
            />
            <FeatureCard
              icon={Award}
              title="Quality"
              description="Reliable & trusted"
            />
          </div>
        </div>

        {/* Colonne droite : organigramme */}
        <div className="flex justify-center lg:justify-end">
          <EcosystemTree />
        </div>
      </div>
    </section>
  );
}
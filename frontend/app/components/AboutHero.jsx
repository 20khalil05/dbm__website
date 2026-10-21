import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "./Button";



export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#05070d]">
      <div className="absolute inset-0">
        <Image
          src="/bg_hero_home.png"
          alt="DBM Group offices"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r " />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
        {/* Contenu gauche */}
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            About <span className="text-red-600">DBM Group</span>
          </h1>

          <p className="max-w-md text-base text-white/60">
            A Moroccan Tech Group building the digital future through three
            complementary brands: ACCENT, AGX, and RAMZO
          </p>

          <Button variant="primary" href="#story" icon={ArrowRight}>
            Discover Our Story
          </Button>
        </div>
      </div>
    </section>
  );
}
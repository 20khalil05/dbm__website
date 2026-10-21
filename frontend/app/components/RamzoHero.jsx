import Image from "next/image";
import { ArrowRight, Store } from "lucide-react";
import Button from "./Button";

const ramzoHeroBackgroundImage = "/who_we_serve_screenads.png";
const ramzoLogo = "/logo_ramzo.png";

export default function RamzoHero() {
  return (
    <section className="relative overflow-hidden bg-[#05070d]">
      <div className="absolute inset-0">
        <Image
          src={ramzoHeroBackgroundImage}
          alt="RAMZO logistics and delivery"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/70 to-[#05070d]/50" />
      </div>

      {/* Logo RAMZO - coin haut droit */}
      <div className="absolute right-6 top-6 z-10 lg:right-8 lg:top-8">
        <Image
          src={ramzoLogo}
          alt="RAMZO logo"
          width={180}
          height={90}
          className="h-16 w-auto object-contain sm:h-20"
        />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center lg:py-36">
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Le Hub Hardware & <span className="text-red-600">Gaming</span> au
          Maroc
        </h1>

        <p className="mt-5 max-w-2xl text-sm text-white/70 sm:text-base">
          RAMZO est la plateforme e-commerce de référence qui connecte les
          marques tech marocaines (ACCENT, AGX) aux professionnels, gamers et
          particuliers. Livraison partout au Royaume.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" href="#shop" icon={ArrowRight}>
            Acheter maintenant
          </Button>
          <Button variant="outline" href="/contact" icon={Store}>
            Devenir Revendeur
          </Button>
        </div>
      </div>
    </section>
  );
}
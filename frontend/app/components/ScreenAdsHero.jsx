import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import FloatingStatBadge from "./FloatingStatBadge";

const screenAdsHeroBackgroundImage = "/ourBrand_screenAds.png";
const screenAdsHeroLogo = "/logo_screenAds.png";

export default function ScreenAdsHero() {
  return (
    <section className="relative overflow-hidden bg-[#05070d]">
      <div className="absolute inset-0">
        <Image
          src={screenAdsHeroBackgroundImage}
          alt="ScreenADS analytics dashboard"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r " />
      </div>

      {/* Logo ScreenADS - coin haut droit */}
      <div className="absolute right-6 top-6 z-10 lg:right-8 lg:top-8">
        <Image
          src={screenAdsHeroLogo}
          alt="ScreenADS logo"
          width={220}
          height={60}
          className="h-9 w-auto object-contain sm:h-11"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
        {/* Colonne gauche */}
        <div className="flex flex-col items-start gap-5">
          <span className="rounded-full bg-red-600/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-red-400">
            Solution 100% Marocaine
          </span>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Publish your <br />
            messages in <br />
            <span className="text-red-600">just a few clicks</span>
          </h1>

          <p className="max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
            ScreenADS is a digital signage solution that allows you to manage
            your screens remotely, schedule your content at any time, and
            reach your audience with dynamic, captivating content.
          </p>

          <Button variant="primary" href="#solution" icon={ArrowRight}>
            Discover the solution
          </Button>
        </div>

        {/* Colonne droite : réservée à l'image de fond (dashboard déjà en fond de section) */}
        <div className="hidden lg:block" />
      </div>

      {/* Cartes stats flottantes */}
      <div className="absolute bottom-10 right-6 z-10 flex flex-col gap-4 lg:right-8">
        <FloatingStatBadge value="7/7j" label="Support 7/7 included" />
        <FloatingStatBadge value="3s" label="Screen switching speed" />
      </div>
    </section>
  );
}
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

const agxHeroBackgroundImage = "/ourBrand_AGX.png";
const agxHeroLogo = "/Logo_agx.png";

export default function AgxHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0518]">
      <div className="absolute inset-0">
        <Image
          src={agxHeroBackgroundImage}
          alt="AGX gaming setup"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0518] via-[#0a0518]/40 to-[#0a0518]/60" />
      </div>

      {/* Logo AGX - coin haut droit */}
      <div className="absolute right-6 top-6 z-10 flex items-center gap-2 lg:right-8 lg:top-8">
        <Image
          src={agxHeroLogo}
          alt="AGX logo"
          width={160}
          height={44}
          className="h-8 w-auto object-contain sm:h-10"
        />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center lg:py-36">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
          THE FIRST <br />
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            GAMING BRAND
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-sm text-white/70 sm:text-base">
          High-performance gaming machines, designed for gamers who seek
          power, reliability, and an unmatched experience.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" href="#products" icon={ArrowRight}>
            Discover our products
          </Button>
          <Button variant="outline" href="/contact" >
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
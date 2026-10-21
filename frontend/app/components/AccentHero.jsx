import Image from "next/image";
import { ArrowRight} from "lucide-react";
import Button from "./Button";
import InlineStatBlock from "./InlineStatBlock";

const accentHeroBackgroundImage = "/ourBrand_accent.png";
const accentHeroLogo = "/accent_logo.png";

export default function AccentHero() {
  return (
    <section className="relative overflow-hidden bg-[#05070d]">
      <div className="absolute inset-0">
        <Image
          src={accentHeroBackgroundImage}
          alt="ACCENT office"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r " />
      </div>

      {/* Logo ACCENT - coin haut droit */}
      <div className="absolute right-6 top-6 z-10 lg:right-8 lg:top-8">
        <Image
          src={accentHeroLogo}
          alt="ACCENT logo"
          width={180}
          height={50}
          className="h-8 w-auto object-contain sm:h-10"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
        {/* Colonne gauche */}
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            IT Solutions & <br />
            <span className="text-red-600">Digital Equipment</span>
          </h1>

          <p className="max-w-md text-sm text-white/60 sm:text-base">
            More than 30 years providing IT solutions, electronic equipment
            and digital tools to businesses and institutions.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" href="#products" icon={ArrowRight}>
              Discover our products
            </Button>
            <Button variant="outline" href="/contact" >
              Contact us
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-10">
            <InlineStatBlock value="30+" label="Years of experience" />
            <InlineStatBlock value="100%" label="Leading brands" />
            <InlineStatBlock value="5000+" label="Satisfied customers" />
          </div>
        </div>
      </div>
    </section>
  );
}
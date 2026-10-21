import Image from "next/image";
import Button from "./Button";

const ctaBackgroundImage = "/bg_dbm_ecosystem.png";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={ctaBackgroundImage}
          alt="DBM Maroc office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center lg:px-8 lg:py-32">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Experience the DBM Difference?
        </h2>

        <p className="mt-5 max-w-xl text-sm text-white/85 sm:text-base">
          Explore our brands and discover technology solutions designed for
          Moroccos future
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" href="https://accent.ma">
            Explore ACCENT
          </Button>
          <Button variant="outline" href="https://agx.ma">
            Discover AGX
          </Button>
        </div>
      </div>
    </section>
  );
}
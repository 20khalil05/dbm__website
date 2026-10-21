import Image from "next/image";
import SectionTag from "./SectionTag";
import UnderlineLink from "./UnderlineLink";


export default function OurVision() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/bg_our vision.png"
          alt="Casablanca skyline at night"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="flex max-w-2xl flex-col items-start gap-5">
          <SectionTag className="text-red-600">Our vision</SectionTag>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Empowering The Next Generation of Moroccan Technology
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            Through innovation, gaming culture, digital education and
            accessible tech solutions.
          </p>

          <UnderlineLink href="/vision" className="mt-2">
            Discover our vision
          </UnderlineLink>
        </div>
      </div>
    </section>
  );
}
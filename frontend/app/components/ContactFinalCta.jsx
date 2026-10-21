import Image from "next/image";
import Button from "./Button";

const contactFinalCtaBackgroundImage = "/ourBrand_accent.png";

export default function ContactFinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={contactFinalCtaBackgroundImage}
          alt="DBM Maroc office at night"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center lg:px-8 lg:py-28">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
          Ready to Transform Your Technology?
        </h2>

        <p className="mt-5 max-w-xl text-sm text-white/80 sm:text-base">
          Whether you need enterprise IT solutions, gaming setups, or
          digital education tools, we&apos;re here to help you succeed.
        </p>

        <div className="mt-8">
          <Button variant="light" href="#form">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
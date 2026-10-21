import Image from "next/image";
import { Send } from "lucide-react";
import Button from "./Button";

const contactHeroBackgroundImage = "/about_who we are.png";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#05070d]">
      <div className="absolute inset-0">
        <Image
          src={contactHeroBackgroundImage}
          alt="DBM Maroc office"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[#05070d]/60" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center lg:px-8 lg:py-28">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
          Contact <span className="text-red-600">Us</span>
        </h1>

        <p className="mt-5 max-w-xl text-sm text-white/70 sm:text-base">
          Get in touch with our team of experts. We&apos;re here to help
          you build Morocco&apos;s digital future through innovative
          technology solutions.
        </p>

        <div className="mt-8">
          <Button variant="primary" href="#form" icon={Send} iconPosition="left">
            Send us a Message
          </Button>
        </div>
      </div>
    </section>
  );
}
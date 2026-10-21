import Image from "next/image";
import { Calendar, Download } from "lucide-react";
import Button from "./Button";

const solutionsCtaBackgroundImage = "/bg_our vision.png";

export default function SolutionsCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={solutionsCtaBackgroundImage}
          alt="Casablanca skyline at sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#05070d]/70" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center lg:px-8 lg:py-28">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
          Ready to Transform Your Technology?
        </h2>

        <p className="mt-5 max-w-xl text-sm text-white/80 sm:text-base">
          Let&apos;s discuss how our solutions can help you achieve your goals.
          Our experts are ready to design the perfect solution for your
          needs.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" href="/contact" icon={Calendar} iconPosition="left">
            Schedule Consultation
          </Button>
          <Button variant="outline" href="#" icon={Download} iconPosition="left">
            Download Brochure
          </Button>
        </div>
      </div>
    </section>
  );
}
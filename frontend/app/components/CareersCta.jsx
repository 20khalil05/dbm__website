import Image from "next/image";
import { Search, Send } from "lucide-react";
import Button from "./Button";

const careersCtaBackgroundImage = "/bg_careers.png";

export default function CareersCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={careersCtaBackgroundImage}
          alt="DBM Maroc careers"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center lg:px-8 lg:py-28">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
          Ready to Join Our Team?
        </h2>

        <p className="mt-5 max-w-xl text-sm text-white/80 sm:text-base">
          Don&apos;t see a position that fits? We&apos;re always looking for
          talented individuals. Send us your resume and we&apos;ll keep you
          in mind for future opportunities.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" href="#jobs" icon={Search} iconPosition="left">
            View Open Positions
          </Button>
          <Button variant="outline" href="/careers/apply" icon={Send} iconPosition="left">
            Submit Your Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
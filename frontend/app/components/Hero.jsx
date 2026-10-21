import Image from "next/image";
import { Play, ArrowRight } from "lucide-react";
import Badge from "./Badge";
import Button from "./Button";
import FloatingCard from "./FloatingCard";
import PaginationDots from "./PaginationDots";
import Link from "next/link";




export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#05070d]">
      <div className="absolute inset-0">
        <Image
          src="/bg_hero_home.png"
          alt="DBM Maroc background"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r " />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-32">
        {/* Contenu gauche */}
        <div className="flex flex-col items-start gap-6">
          <Badge>Building Morocco&apos;s Digital Future</Badge>

          <h1
            className="max-w-xl text-white"
            style={{
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 5vw, 82px)",
              lineHeight: "0.95",
              letterSpacing: "-3px",
            }}
          >
            Building <br />
            Morocco&apos;s <br />
            <span className="text-red-600">Digital Future</span>
          </h1>

          <p className="max-w-md text-base text-white/60">
            DBM Group is a Moroccan technology ecosystem specialized in IT
            solutions, digital education, gaming innovation, and tech
            distribution.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" href="/about">
              Discover our ecosystem
            </Button>
            <Button variant="dark" href="#" icon={Play} iconPosition="left">
              Watch video
            </Button>
          </div>
        </div>

        {/* Carte droite */}
        <div className="relative">
          <div className="overflow-hidden rounded-[35px] border border-white/[0.08] bg-white/[0.21] p-9 shadow-2xl backdrop-blur-[20px]">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[25px]">
              <Image
                src="/bg_hero_home.png"
                alt="DBM Group"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center justify-between px-2 py-4">
              <div>
                <p className="text-lg font-semibold text-white">DBM Group</p>
                <p className="text-sm text-white/50">
                  Proudly Moroccan, innovating for the future.
                </p>
              </div>
              <Link
                href="/about"
                className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#E31D20]"
              >
                <ArrowRight size={18} className="text-white" />
              </Link>
            </div>
          </div>

          <div className="mt-4 hidden sm:absolute sm:-bottom-22 sm:right-0 sm:mt-0 sm:block">
            <FloatingCard
              title="Proudly Moroccan"
              description="Innovating for local needs & regional growth"
            />
          </div>
        </div>
      </div>

      <div className="relative flex justify-center pb-10">
        <PaginationDots total={4} activeIndex={0} />
      </div>
    </section>
  );
}
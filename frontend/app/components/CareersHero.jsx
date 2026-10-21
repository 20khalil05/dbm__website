import Image from "next/image";
import JobSearchBar from "./JobSearchBar";

const careersHeroBackgroundImage = "/bg_careers.png";

export default function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-[#05070d]">
      <div className="absolute inset-0">
        <Image
          src={careersHeroBackgroundImage}
          alt="DBM Maroc careers"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[#05070d]/60" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center lg:px-8 lg:py-32">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
          Build Morocco&apos;s <span className="text-red-600">Digital</span>
          <br />
          <span className="text-red-600">Future</span> With Us
        </h1>

        <p className="mt-6 max-w-2xl text-sm text-white/70 sm:text-base">
          Join a team of passionate innovators, gamers, and tech enthusiasts.
          At DBM Group, we&apos;re not just building products – we&apos;re
          building the future of technology in Morocco.
        </p>

        <div className="mt-8">
          <JobSearchBar />
        </div>
      </div>
    </section>
  );
}
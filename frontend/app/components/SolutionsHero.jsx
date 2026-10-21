"use client";

import { useState } from "react";
import Image from "next/image";
import { LayoutGrid, Briefcase, Gamepad2, GraduationCap, Network } from "lucide-react";
import FilterPill from "./FilterPill";

const solutionsHeroBackgroundImage = "/who we are_2.png";

const FILTERS = [
  { label: "All Solutions", icon: LayoutGrid },
  { label: "Professional", icon: Briefcase },
  { label: "Gaming", icon: Gamepad2 },
  { label: "Education", icon: GraduationCap },
  { label: "Infrastructure", icon: Network },
];

export default function SolutionsHero() {
  const [activeFilter, setActiveFilter] = useState("All Solutions");

  return (
    <section className="relative overflow-hidden bg-[#05070d]">
      <div className="absolute inset-0">
        <Image
          src={solutionsHeroBackgroundImage}
          alt="DBM Maroc technology solutions"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[#05070d]/70" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center lg:px-8 lg:py-32">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
          Comprehensive <span className="text-red-600">Technology</span>
          <br />
          <span className="text-red-600">Solutions</span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm text-white/70 sm:text-base">
          From professional IT infrastructure to high-performance gaming
          setups, we deliver end-to-end technology solutions tailored to
          your needs. Discover how DBM Group can transform your digital
          experience.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {FILTERS.map((filter) => (
            <FilterPill
              key={filter.label}
              icon={filter.icon}
              active={activeFilter === filter.label}
              onClick={() => setActiveFilter(filter.label)}
            >
              {filter.label}
            </FilterPill>
          ))}
        </div>
      </div>
    </section>
  );
}
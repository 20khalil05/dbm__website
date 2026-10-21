"use client";

import { useState } from "react";
import Image from "next/image";
import FilterPill from "./FilterPill";

const brandsHeroBackgroundImage = "/bg_hero_home.png";

const FILTERS = ["All Brands", "ACCENT", "AGX", "RAMZO"];

export default function BrandsHero() {
  const [activeFilter, setActiveFilter] = useState("All Brands");

  return (
    <section className="relative overflow-hidden bg-[#05070d]">
      <div className="absolute inset-0">
        <Image
          src={brandsHeroBackgroundImage}
          alt="DBM Maroc brands"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r [#05070d]/90 " />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center lg:px-8 lg:py-28">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
          Our <span className="text-red-600">Brands</span>
        </h1>

        <p className="mt-5 max-w-2xl text-sm text-white/60 sm:text-base">
          Three powerful brands, one unified vision. Discover how ACCENT,
          AGX, and RAMZO are transforming Morocco&apos;s technology landscape.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {FILTERS.map((filter) => (
            <FilterPill
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </FilterPill>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Building2 } from "lucide-react";
import Button from "./Button";

export default function JobSearchBar() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [brand, setBrand] = useState("All Brands");

  function handleSearch() {
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("keyword", keyword.trim());
    if (location.trim()) params.set("location", location.trim());
    if (brand !== "All Brands") params.set("brand", brand);

    router.push(`/careers?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="w-full max-w-2xl rounded-2xl bg-[#11162a] p-5">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3">
          <Search size={16} className="shrink-0 text-white/40" />
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Job title, keyword, or..."
            className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3">
          <MapPin size={16} className="shrink-0 text-white/40" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Location"
            className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3">
          <Building2 size={16} className="shrink-0 text-white/40" />
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full appearance-none bg-transparent text-sm text-white focus:outline-none"
          >
            <option className="bg-[#11162a]" value="All Brands">All Brands</option>
            <option className="bg-[#11162a]" value="ACCENT">ACCENT</option>
            <option className="bg-[#11162a]" value="AGX">AGX</option>
            <option className="bg-[#11162a]" value="SCREENADS">SCREENADS</option>
            <option className="bg-[#11162a]" value="RAMZO">RAMZO</option>
          </select>
        </div>
      </div>

      <div className="mt-3">
        <Button variant="primary" icon={Search} iconPosition="left" onClick={handleSearch}>
          Search Jobs
        </Button>
      </div>
    </div>
  );
}
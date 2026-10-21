"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SectionTag from "./SectionTag";
import FilterPill from "./FilterPill";
import JobCard from "./JobCard";

const FILTERS = ["All Positions", "ACCENT", "AGX", "RAMZO", "Full-Time", "Part-Time", "Remote"];

function getActiveFilterFromParams(searchParams) {
  const brand = searchParams.get("brand");
  const type = searchParams.get("type");
  const remote = searchParams.get("remote");

  if (brand) return brand;
  if (remote === "true") return "Remote";
  if (type) return type;
  return "All Positions";
}

export default function JobsBoard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [jobs, setJobs] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | success | error

  const activeFilter = getActiveFilterFromParams(searchParams);

  useEffect(() => {
    async function fetchJobs() {
      setStatus("loading");
      try {
        const res = await fetch(`/api/jobs?${searchParams.toString()}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error);
        setJobs(data.jobs);
        setStatus("success");
      } catch {
        setStatus("error");
      }
    }
    fetchJobs();
  }, [searchParams]);

  function handleFilterClick(filter) {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("brand");
    params.delete("type");
    params.delete("remote");

    if (["ACCENT", "AGX", "RAMZO"].includes(filter)) {
      params.set("brand", filter);
    } else if (filter === "Full-Time" || filter === "Part-Time") {
      params.set("type", filter);
    } else if (filter === "Remote") {
      params.set("remote", "true");
    }
    // "All Positions" => on ne remet rien, ça reset les filtres

    router.push(`/careers?${params.toString()}`, { scroll: false });
  }

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <SectionTag className="justify-center text-red-600">
          Open positions
        </SectionTag>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Join Our Team Today
        </h2>
        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          Explore current opportunities across ACCENT, AGX, and RAMZO
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-3 px-6 lg:px-8">
        {FILTERS.map((filter) => (
          <FilterPill
            key={filter}
            active={activeFilter === filter}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </FilterPill>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-4 px-6 lg:px-8">
        {status === "loading" && (
          <p className="text-center text-sm text-slate-400">Chargement des offres...</p>
        )}

        {status === "error" && (
          <p className="text-center text-sm text-red-500">
            Impossible de charger les offres pour le moment.
          </p>
        )}

        {status === "success" && jobs.length === 0 && (
          <p className="text-center text-sm text-slate-400">
            Aucune offre ne correspond à ces critères.
          </p>
        )}

        {status === "success" &&
          jobs.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              brand={job.brand}
              location={job.location}
              type={job.type}
              tags={job.tags}
            />
          ))}
      </div>
    </section>
  );
}
import { Suspense } from "react";
import CareersHero from "../components/CareersHero";
import WhyJoinTeam from "../components/WhyJoinTeam";
import JobsBoard from "../components/JobsBoard";
import OurCulture from "../components/OurCulture";
import HiringProcess from "../components/HiringProcess";
import MeetOurTeam from "../components/MeetOurTeam";
import EmployeeStories from "../components/EmployeeStories";
import CareersCta from "../components/CareersCta";

export const metadata = {
  title: "Careers | DBM Maroc",
  description:
    "Join a team of passionate innovators, gamers, and tech enthusiasts. At DBM Group, we're not just building products – we're building the future of technology in Morocco.",
};

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <WhyJoinTeam />
      <Suspense fallback={<div className="py-24 text-center text-sm text-slate-400">Chargement des offres...</div>}>
        <JobsBoard />
      </Suspense>
      <OurCulture />
      <HiringProcess />
      <MeetOurTeam />
      <EmployeeStories />
      <CareersCta />
    </main>
  );
}
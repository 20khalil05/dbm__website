import { Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import SectionTag from "./SectionTag";
import CheckListItem from "./CheckListItem";
import ServiceImageCard from "./ServiceImageCard";
import Button from "./Button";

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-tl from-[#FF0000] to-[#740303] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[3fr_7fr] lg:items-center lg:px-8">
        {/* Colonne gauche — 30% */}
        <div className="flex flex-col items-start gap-5">
          <SectionTag className="text-[#FF0033]">Who we are</SectionTag>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            A Moroccan Tech Ecosystem
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
            We design innovative technology solutions adapted to Moroccan
            professionals, students, gamers, and institutions.
          </p>

          <ul className="flex flex-col gap-3">
            <CheckListItem>IT & Digital Solutions</CheckListItem>
            <CheckListItem>Digital Education & E-learning</CheckListItem>
            <CheckListItem>Hardware & Tech Distribution</CheckListItem>
          </ul>

          <Button variant="lightAccent" href="/about" icon={ArrowRight}>
            Learn more about DBM
          </Button>
        </div>

        {/* Colonne droite — 70%, cartes chevauchées */}
        <div className="relative mx-auto flex w-full max-w-md flex-col items-center gap-6 sm:hidden">
          <ServiceImageCard
            image="/who we are_1.png"
            icon={Briefcase}
            title="IT Solutions for Businesses"
            description="Computers, laptops, infrastructure & professional services for businesses and organizations."
          />
          <ServiceImageCard
            image="/who we are_2.png"
            icon={GraduationCap}
            title="Digital Education Solutions"
            description="Interactive screens, e-learning platforms & smart classrooms for schools and educational institutions."
          />
        </div>

        <div className="relative hidden w-full sm:block lg:h-[320px]">
          <ServiceImageCard
            image="/who we are_1.png"
            icon={Briefcase}
            title="IT Solutions for Businesses"
            description="Computers, laptops, infrastructure & professional services for businesses and organizations."
            className="relative z-10 lg:absolute lg:left-0 lg:top-0 lg:h-[230px] lg:w-[300px]"
          />
          <ServiceImageCard
            image="/who we are_2.png"
            icon={GraduationCap}
            title="Digital Education Solutions"
            description="Interactive screens, e-learning platforms & smart classrooms for schools and educational institutions."
            className="mt-6 lg:absolute lg:right-0 lg:top-[90px] lg:z-20 lg:mt-0 lg:h-[230px] lg:w-[300px]"
          />
        </div>
      </div>
    </section>
  );
}
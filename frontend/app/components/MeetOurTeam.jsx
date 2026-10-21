import SectionTag from "./SectionTag";
import TeamMemberCard from "./TeamMemberCard";

const TEAM = [
  { name: "Yassmine Bourrah", role: "Group Strategy Lead", brand: "DBM Group" },
  { name: "Ahmed Tazi", role: "Head of Gaming Division", brand: "AGX" },
  { name: "Sara El Amrani", role: "E-commerce Director", brand: "RAMZO" },
  { name: "Karim Bennani", role: "Technical Lead", brand: "ACCENT" },
];

export default function MeetOurTeam() {
  return (
    <section className="bg-gradient-to-br from-red-900 via-red-700 to-red-600 py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <SectionTag className="justify-center text-red-300">
          Meet our team
        </SectionTag>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
          People Behind DBM
        </h2>
        <p className="mt-3 text-sm text-white/85 sm:text-base">
          Get to know some of the talented individuals who make DBM Group
          great
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-6 px-6 sm:grid-cols-4 lg:px-8">
        {TEAM.map((member) => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            brand={member.brand}
          />
        ))}
      </div>
    </section>
  );
}
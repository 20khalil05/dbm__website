import SectionTag from "./SectionTag";
import TextLink from "./TextLink";
import StatCard from "./StatCard";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TikTokIcon } from "./SocialIcons";

const STATS = [
  { icon: FacebookIcon, iconType: "facebook", value: "4.6K", label: "Accent" },
  { icon: FacebookIcon, iconType: "facebook", value: "3.7K", label: "AGX" },
  { icon: InstagramIcon, iconType: "instagram", value: "423", label: "Accent" },
  { icon: InstagramIcon, iconType: "instagram", value: "6.2K", label: "AGX" },
  { icon: TikTokIcon, iconType: "tiktok", value: "687", label: "AGX" },
  { icon: LinkedinIcon, iconType: "linkedin", value: "1000", label: "Accent" },
];

export default function OurImpact() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* En-tête */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-start">
          <div className="flex flex-col items-start gap-3">
            <SectionTag className="text-red-600">Our impact</SectionTag>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              A Growing Community <br />
              Across Platforms
            </h2>
          </div>

          <TextLink href="#" className="shrink-0">
            Follow us everywhere
          </TextLink>
        </div>

        {/* Grille de statistiques */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {STATS.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              iconType={stat.iconType}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
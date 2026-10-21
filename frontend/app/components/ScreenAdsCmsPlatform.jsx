import SectionTag from "./SectionTag";
import CheckListItem from "./CheckListItem";
import BrowserMockup from "./BrowserMockup";

const FEATURES = [
  "Plan and schedule your content",
  "Real-time updates",
  "Advanced performance analytics",
  "Multi-user management",
  "Secure and GDPR compliant",
];

export default function ScreenAdsCmsPlatform() {
  return (
    <section className="bg-[#0a0e1a] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 to-red-800 p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Colonne gauche */}
            <div className="flex flex-col items-start gap-4">
              <SectionTag className="text-white/70">CMS Platform</SectionTag>

              <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Control all your screens from a single interface
              </h2>

              <p className="max-w-md text-sm leading-relaxed text-white/80">
                Our CMS platform allows you to manage your content, publish,
                schedule, and analyze your screens performance in real time.
              </p>

              <ul className="flex flex-col gap-2.5">
                {FEATURES.map((feature) => (
                  <CheckListItem key={feature} variant="solid">
                    {feature}
                  </CheckListItem>
                ))}
              </ul>
            </div>

            {/* Colonne droite : mockup */}
            <div className="flex justify-center lg:justify-end">
              <BrowserMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
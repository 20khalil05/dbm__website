import SectionTag from "./SectionTag";
import VerticalProcessStep from "./VerticalProcessStep";

const STEPS = [
  {
    title: "Application Submission",
    description:
      "Submit your resume and cover letter through our online portal. We review every application carefully and respond within 48 hours.",
  },
  {
    title: "Initial Screening",
    description:
      "A brief phone or video call with our HR team to discuss your background, interests, and career goals.",
  },
  {
    title: "Technical Assessment",
    description:
      "Role-specific tests or portfolio reviews to evaluate your skills and expertise relevant to the position.",
  },
  {
    title: "Team Interview",
    description:
      "Meet with potential colleagues and managers to discuss the role, team dynamics, and company culture.",
  },
  {
    title: "Offer & Onboarding",
    description:
      "Receive your offer letter and begin our comprehensive onboarding program to set you up for success.",
  },
];

export default function HiringProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <SectionTag className="justify-center text-red-600">
          How to apply
        </SectionTag>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Our Hiring Process
        </h2>
        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          A transparent and efficient process designed to find the best
          match for both you and DBM Group
        </p>
      </div>

      <div className="mx-auto mt-14 flex max-w-2xl flex-col px-6 lg:px-8">
        {STEPS.map((step, index) => (
          <VerticalProcessStep
            key={step.title}
            number={index + 1}
            title={step.title}
            description={step.description}
            isLast={index === STEPS.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
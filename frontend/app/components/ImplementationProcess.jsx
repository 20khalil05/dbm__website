import SectionTag from "./SectionTag";
import ProcessStep from "./ProcessStep";

const STEPS = [
  {
    title: "Consultation",
    description: "We analyze your needs and requirements through detailed discussions",
  },
  {
    title: "Proposal",
    description: "Custom solution design with detailed specifications and pricing",
  },
  {
    title: "Implementation",
    description: "Professional installation and configuration by our experts",
  },
  {
    title: "Training",
    description: "Comprehensive training for your team on new systems",
  },
  {
    title: "Support",
    description: "Ongoing maintenance and technical support",
  },
];

export default function ImplementationProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <SectionTag className="justify-center text-red-600">
          Our implementation process
        </SectionTag>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          A streamlined approach to delivering your technology solutions
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col items-stretch gap-10 px-6 sm:flex-row sm:gap-4 lg:px-8">
        {STEPS.map((step, index) => (
          <ProcessStep
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
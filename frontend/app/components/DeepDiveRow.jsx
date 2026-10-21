import Image from "next/image";
import Button from "./Button";
import MiniFeatureTag from "./MiniFeatureTag";

export default function DeepDiveRow({
  image,
  title,
  titleColorClass,
  description,
  features,
  featureBgClass,
  buttonLabel,
  buttonIcon,
  reverse = false,
}) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-72">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="flex flex-col items-start gap-4">
        <h3 className={`text-2xl font-bold ${titleColorClass}`}>{title}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>

        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <MiniFeatureTag
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bgClass={featureBgClass}
            />
          ))}
        </div>

        <Button variant="primary" href="#" icon={buttonIcon} className="mt-2">
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}
import Image from "next/image";

const VARIANT_STYLES = {
  blue: {
    border: "border-blue-500/40",
    bg: "bg-blue-950/60",
    iconBg: "bg-blue-500/20",
    iconText: "text-blue-400",
  },
  purple: {
    border: "border-purple-500/40",
    bg: "bg-purple-950/60",
    iconBg: "bg-purple-500/20",
    iconText: "text-purple-400",
  },
  green: {
    border: "border-green-500/40",
    bg: "bg-green-950/60",
    iconBg: "bg-green-500/20",
    iconText: "text-green-400",
  },
};

export default function BrandNode({
  logo,
  logoAlt,
  icon: Icon,
  description,
  variant = "blue",
}) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div
      className={`flex h-[118px] w-[115px] flex-col items-center justify-center gap-2 rounded-xl border ${styles.border} ${styles.bg} p-3 backdrop-blur-sm`}
    >
      <Image
        src={logo}
        alt={logoAlt}
        width={100}
        height={24}
        className="h-4 w-auto object-contain"
      />
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full ${styles.iconBg} ${styles.iconText}`}
      >
        <Icon size={12} />
      </span>
      <p className="text-center text-[9px] leading-snug text-white/70">
        {description}
      </p>
    </div>
  );
}
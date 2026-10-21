import Link from "next/link";

const VARIANT_STYLES = {
  primary: "bg-red-600 hover:bg-red-700 text-white",
  dark: "bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur-sm",
  light: "bg-white hover:bg-gray-100 text-slate-900",
  outline: "bg-transparent border border-red-500 text-white hover:bg-red-600/10",
  outlineLight: "bg-transparent border border-red-500 text-red-600 hover:bg-red-50",
  lightAccent: "bg-white hover:bg-gray-100 text-[#FF0033] border border-[#FF2B2F]/20",
};

const SIZE_STYLES = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-sm",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon: Icon,
  iconPosition = "right",
  className = "",
  onClick,
  type = "button",
}) {
  const baseStyles = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={16} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={16} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyles}>
      {content}
    </button>
  );
}
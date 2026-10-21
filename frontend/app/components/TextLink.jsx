import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TextLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF0033] transition-colors duration-200 hover:text-red-700 ${className}`}
    >
      {children}
      <ArrowRight size={14} />
    </Link>
  );
}
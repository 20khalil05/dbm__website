import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function UnderlineLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 border-b border-white/60 pb-1 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:border-white hover:text-white/90 ${className}`}
    >
      {children}
      <ArrowRight size={14} />
    </Link>
  );
}
import Link from "next/link";

export default function NavLink({ href, children, active = false }) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors duration-200 ${
        active ? "text-red-600" : "text-white/80 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
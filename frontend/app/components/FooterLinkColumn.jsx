import Link from "next/link";

export default function FooterLinkColumn({ title, links, icon: Icon }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <p className="text-sm font-bold text-slate-900">{title}</p>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={`flex items-center gap-2 text-sm transition-colors duration-200 ${
                link.active
                  ? "text-red-600 hover:text-red-700"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {link.icon && <link.icon size={14} className="shrink-0" />}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
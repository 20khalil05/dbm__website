"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import NavLink from "./NavLink";
import DropdownMenu from "./DropdownMenu";

const BRAND_LINKS = [
  { label: "ACCENT", href: "/brands/accent" },
  { label: "AGX", href: "/brands/agx" },
  { label: "SCREEADS", href: "/brands/screenads" },
  { label: "RAMZO", href: "/brands/ramzo" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isBrandsSection = pathname.startsWith("/brands");

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0e1a]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo />

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink href="/" active={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/about" active={pathname === "/about"}>
            About DBM
          </NavLink>

          <DropdownMenu label="Brands" href="/brands" items={BRAND_LINKS} active={isBrandsSection} />

          <NavLink href="/solutions" active={pathname === "/solutions"}>
            Solutions
          </NavLink>
          <NavLink href="/careers" active={pathname === "/careers"}>
            Careers
          </NavLink>
          <NavLink href="/contact" active={pathname === "/contact"}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center gap-1 text-sm font-medium">
            <span className="text-white">FR</span>
            <span className="text-white/40">|</span>
            <span className="text-white/50">EN</span>
          </div>
          {isHomePage && (
            <Button variant="light" size="sm" href="/contact" icon={ArrowRight}>
              Get in touch
            </Button>
          )}
        </div>

        {/* Bouton menu mobile */}
        <button
          className="text-white lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Navigation mobile */}
      {isMenuOpen && (
        <nav className="flex flex-col gap-4 border-t border-white/10 bg-[#0a0e1a] px-6 py-6 lg:hidden">
          <NavLink href="/" active={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/about" active={pathname === "/about"}>
            About DBM
          </NavLink>

          {/* Sous-liens marques en mobile (liste dépliée, pas de dropdown au survol) */}
          <div className="flex flex-col gap-3 border-t border-white/10 pt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
              Brands
            </p>
            {BRAND_LINKS.map((brand) => (
              <NavLink
                key={brand.label}
                href={brand.href}
                active={pathname === brand.href}
              >
                {brand.label}
              </NavLink>
            ))}
          </div>

          <NavLink href="/solutions" active={pathname === "/solutions"}>
            Solutions
          </NavLink>
          <NavLink href="/careers" active={pathname === "/careers"}>
            Careers
          </NavLink>
          <NavLink href="/contact" active={pathname === "/contact"}>
            Contact
          </NavLink>

          <div className="flex items-center gap-1 text-sm font-medium">
            <span className="text-white">FR</span>
            <span className="text-white/40">|</span>
            <span className="text-white/50">EN</span>
          </div>
          {isHomePage && (
            <Button
              variant="light"
              size="sm"
              href="/contact"
              icon={ArrowRight}
              className="w-fit"
            >
              Get in touch
            </Button>
          )}
        </nav>
      )}
    </header>
  );
}
import Logo from "./Logo";
import SocialIconButton from "./SocialIconButton";
import FooterLinkColumn from "./FooterLinkColumn";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TikTokIcon } from "./SocialIcons";
import { MapPin, Mail, Phone } from "lucide-react";

const footerLogo = "/logo_dbm.png";

const QUICK_LINKS = [
  { label: "About DBM", href: "/about" },
  { label: "Brands", href: "/brands" },
  { label: "Solutions", href: "/solutions" },
  { label: "Careers", href: "/careers" },
  { label: "News", href: "/news" },
];

const BRAND_LINKS = [
  { label: "Accent", href: "/brands/accent" },
  { label: "AGX", href: "/brands/agx" },
  { label: "SCREEADS", href: "/brands/screenads" },
  { label: "RAMZO", href: "/brands/ramzo" },
];

const SOLUTIONS_LINKS = [
  { label: "IT Solutions", href: "/solutions/it" },
  { label: "Digital Education", href: "/solutions/education" },
  { label: "Gaming", href: "/solutions/gaming", active: false },
  { label: "Tech Distribution", href: "/solutions/distribution" },
];

const CONTACT_LINKS = [
  { label: "Casablanca, Morocco", href: "#", icon: MapPin },
  { label: "contact@dbmgroup.ma", href: "mailto:contact@dbmgroup.ma", icon: Mail },
  { label: "+212 5 22 90 03 03", href: "tel:+212522900303", icon: Phone },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Bloc logo / tagline / réseaux sociaux */}
          <div className="flex flex-col items-start gap-4 lg:col-span-1">
            <Logo src={footerLogo} width={100} height={48} className="h-11 w-auto object-contain" />
            <p className="text-sm leading-relaxed text-slate-500">
              Building Moroccos digital future <br />
              <span className="text-red-600">with local innovation</span> and
              lasting value.
            </p>
            <div className="flex items-center gap-3">
              <SocialIconButton icon={FacebookIcon} label="Facebook" />
              <SocialIconButton icon={InstagramIcon} label="Instagram" />
              <SocialIconButton icon={LinkedinIcon} label="LinkedIn" />
              <SocialIconButton icon={TikTokIcon} label="TikTok" />
            </div>
          </div>

          <FooterLinkColumn title="Quick Links" links={QUICK_LINKS} />
          <FooterLinkColumn title="Our Brands" links={BRAND_LINKS} />
          <FooterLinkColumn title="Solutions" links={SOLUTIONS_LINKS} />
          <FooterLinkColumn title="Contact" links={CONTACT_LINKS} />
        </div>
      </div>

      {/* Barre basse */}
      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-slate-400 sm:flex-row lg:px-8">
          <p>© 2026 DBM Group. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/terms" className="transition-colors duration-200 hover:text-slate-600">
              Terms of Use
            </a>
            <a href="/privacy" className="transition-colors duration-200 hover:text-slate-600">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
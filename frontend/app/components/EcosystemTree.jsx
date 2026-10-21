import Image from "next/image";
import { Smartphone, Gamepad2, BarChart3 } from "lucide-react";
import BrandNode from "./BrandNode";


export default function EcosystemTree() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Logo DBM Group en haut */}
      <div className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 shadow-xl">
        <Image
          src="/logo_dbm.png"
          alt="DBM Maroc Group"
          width={90}
          height={32}
          className="h-8 w-auto object-contain "
        />
      </div>

      {/* Ligne verticale + horizontale de connexion */}
      <div className="relative h-10 w-full max-w-md">
        <div className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-blue-400/40" />
        <div className="absolute left-1/2 top-6 h-px w-full max-w-xs -translate-x-1/2 bg-blue-400/40" />
        <div className="absolute left-[16%] top-6 h-4 w-px bg-blue-400/40" />
        <div className="absolute left-1/2 top-6 h-4 w-px -translate-x-1/2 bg-blue-400/40" />
        <div className="absolute right-[16%] top-6 h-4 w-px bg-blue-400/40" />
      </div>

      {/* Noeuds marques */}
      <div className="flex flex-wrap items-start justify-center gap-3">
        <BrandNode
          logo="/accent_logo.png"
          logoAlt="Accent"
          icon={Smartphone}
          description="IT & Digital Solutions"
          variant="blue"
        />
        <BrandNode
          logo="/Logo_agx.png"
          logoAlt="AGX Gaming"
          icon={Gamepad2}
          description="Gaming & High Performance"
          variant="purple"
        />
        <BrandNode
          logo="/logo_screenAds.png"
          logoAlt="ScreenADS"
          icon={BarChart3}
          description="Digital Signage & Display Solutions"
          variant="green"
        />
      </div>
    </div>
  );
}
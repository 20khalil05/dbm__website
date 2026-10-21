import Image from "next/image";

const logoImage = "/dbm_logo.png";

export default function Logo({
  src = logoImage,
  alt = "DBM Maroc",
  width = 200,
  height = 50,
  className = "h-9 w-auto object-contain sm:h-10",
}) {
  return (
    <Image src={src} alt={alt} width={width} height={height} className={className} priority />
  );
}
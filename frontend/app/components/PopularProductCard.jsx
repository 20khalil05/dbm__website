import Image from "next/image";
import Button from "./Button";

export default function PopularProductCard({
  image,
  brand,
  title,
  specs,
  price,
}) {
  return (
    <div className="flex h-[381px] w-[282px] max-w-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="relative h-40 w-full bg-gray-100">
        <Image src={image} alt={title} fill className="object-contain p-8" />
      </div>

      <div className="flex flex-1 flex-col items-start gap-1.5 p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-red-600">
          {brand}
        </p>
        <p className="text-sm font-bold text-slate-900">{title}</p>
        <p className="text-xs text-slate-400">{specs}</p>
        <p className="mt-1 text-base font-bold text-slate-900">{price}</p>

        <Button
          variant="dark"
          size="sm"
          href="#"
          className="mt-auto w-full !bg-[#0a0e1a] hover:!bg-[#171d30]"
        >
          View product
        </Button>
      </div>
    </div>
  );
}
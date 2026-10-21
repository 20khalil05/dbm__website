import PopularProductCard from "./PopularProductCard";

const asusImage = "/logo_pc.png";
const logitechImage = "/logo_cask.png";
const samsungImage = "/logo_pc2.png";
const razerImage = "/logo_sourie.png";

const PRODUCTS = [
  {
    image: asusImage,
    brand: "ASUS",
    title: "TUF Gaming A15 Ryzen 7",
    specs: "15.6\" FHD / 16GB / 512GB SSD / RTX 4060",
    price: "15 950 MAD",
  },
  {
    image: logitechImage,
    brand: "LOGITECH",
    title: "G Pro X Wireless Headset",
    specs: "Lightspeed / Blue VOICE / Surround 7.1",
    price: "1 290 MAD",
  },
  {
    image: samsungImage,
    brand: "SAMSUNG",
    title: "Odyssey 27\" IPS 165Hz",
    specs: "QHD / 1ms / HDR10",
    price: "3 450 MAD",
  },
  {
    image: razerImage,
    brand: "RAZER",
    title: "DeathAdder V3 Pro Wireless",
    specs: "30K DPI / 63g / Optical Gen-3",
    price: "1 200 MAD",
  },
];

export default function RamzoPopularProducts() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Popular Products
        </h2>
        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          The best picks from our selection, at the best prices.
        </p>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-wrap items-stretch justify-center gap-6 px-6 lg:px-8">
        {PRODUCTS.map((product) => (
          <PopularProductCard
            key={product.title}
            image={product.image}
            brand={product.brand}
            title={product.title}
            specs={product.specs}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
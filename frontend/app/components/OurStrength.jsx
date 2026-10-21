import SectionTag from "./SectionTag";
import StrengthDiagram from "./StrengthDiagram";

export default function OurStrength() {
  return (
    <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-900 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <SectionTag className="justify-center text-white/70">
          Our strength
        </SectionTag>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
          An Integrated Ecosystem
        </h2>
        <p className="mt-3 text-sm text-white/80 sm:text-base">
          The synergy between our three brands creates a unique,
          comprehensive technology ecosystem
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-white px-6 py-14 shadow-2xl lg:px-12">
        <StrengthDiagram />

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-slate-500">
          This integrated approach allows us to serve diverse market segments
          while maintaining operational efficiency, shared expertise, and a
          unified commitment to excellence.
        </p>
      </div>
    </section>
  );
}
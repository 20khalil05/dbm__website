import Button from "./Button";

export default function BrandCta({
  title = "Ready to transform your communication?",
  description = "Discover how our solutions can make your message more impactful and creative",
  buttonLabel = "Contact us now",
  buttonHref = "/contact",
}) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 to-red-800 px-8 py-14 text-center">
          <div className="pointer-events-none absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-white/10 blur-2xl" />

          <div className="relative mx-auto max-w-xl">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              {title}
            </h2>
            <p className="mt-3 text-sm text-white/80">{description}</p>

            <div className="mt-6 flex justify-center">
              <Button variant="light" href={buttonHref}>
                {buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import ContactForm from "./ContactForm";
import LocationMap from "./LocationMap";

export default function ContactFormSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 lg:grid-cols-2 lg:px-8">
        <ContactForm />
        <LocationMap />
      </div>
    </section>
  );
}
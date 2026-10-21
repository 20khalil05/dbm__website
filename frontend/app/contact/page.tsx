import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import ContactFormSection from "../components/ContactFormSection";
import ContactBrands from "../components/ContactBrands";
import ContactFinalCta from "../components/ContactFinalCta";

export const metadata = {
  title: "Contact Us | DBM Maroc",
  description:
    "Get in touch with our team of experts. We're here to help you build Morocco's digital future through innovative technology solutions.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <ContactBrands />
      <ContactFinalCta />
    </main>
  );
}
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactInfoCard from "./ContactInfoCard";

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Phone",
    line1: "+212 5 22 90 03 03",
    line2: "Mon-Fri, 9am - 6pm",
  },
  {
    icon: Mail,
    title: "Email",
    line1: "contact@dbmgroup.ma",
    line2: "We'll respond within 24h",
  },
  {
    icon: MapPin,
    title: "Location",
    line1: "Casablanca, Morocco",
    line2: "Tech Hub District",
  },
  {
    icon: Clock,
    title: "Working Hours",
    line1: "Mon - Fri: 9:00 AM - 6:00 PM",
    line2: "Saturday: By appointment",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {CONTACT_INFO.map((info) => (
          <ContactInfoCard
            key={info.title}
            icon={info.icon}
            title={info.title}
            line1={info.line1}
            line2={info.line2}
          />
        ))}
      </div>
    </section>
  );
}
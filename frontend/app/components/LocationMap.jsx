export default function LocationMap() {
  return (
    <div
      className="h-full min-h-[400px] w-full overflow-hidden rounded-2xl"
      style={{ backgroundColor: "#E5E3DF" }}
    >
      <iframe
        title="DBM Maroc location"
        src="https://www.google.com/maps?q=Casablanca,Morocco&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
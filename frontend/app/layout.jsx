import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "DBM Maroc",
  description: "Building Morocco's Digital Future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#05070d] antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
// PREVIEW ONLY — Ellen's real layout loads Poppins with next/font.
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" style={{ ["--font-poppins" as string]: "Poppins" }}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

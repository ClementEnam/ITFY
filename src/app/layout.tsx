import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/footer/Footer";

// Poppins isn't a variable font, so each weight you use must be listed.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"], // italic is used for the pink hero highlight
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IT For Youth Ghana",
  description: "Empowering Youth Through Technology",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
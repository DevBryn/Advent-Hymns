import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Advent Hymns",
  description: "Adventist hymnal songs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#0a3e3e] to-dark-green min-h-screen text-white`}
      >
        <Header />
        <div className="max-w-[90vw] sm:max-w-[80vw] mx-auto">{children}</div>
      </body>
    </html>
  );
}

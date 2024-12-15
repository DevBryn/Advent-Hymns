import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#083333] to-dark-green text-sm min-h-screen`}
      >
        <Header />
        <div className="max-w-[80vw] mx-auto">{children}</div>
      </body>
    </html>
  );
}

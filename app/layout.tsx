import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar/nav-links";
import Footer from "./ui/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mangajozu",
  description: "mangajozu anime application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

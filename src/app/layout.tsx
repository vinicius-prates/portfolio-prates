import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinicius Prates",
  description: "Portifólio Vinicius Prates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className="overflow-x-hidden">
        <header >
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}

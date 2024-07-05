import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="middle-content">{children}</div>
        <footer className="flex justify-center p-8 bg-[#f9f9f9] items-center">
          <h1 className="text-4xl font-bold text-center">Footer</h1>
        </footer>
      </body>
    </html>
  );
}

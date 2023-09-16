import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rito Hirade",
  description: "Personal site generated by create next app",
  authors: { name: "Rito Hirade" },
  icons: ["/favicon.svg"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.className}>
      <body className="flex justify-center w-full">
        <div className="w-[696px]">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
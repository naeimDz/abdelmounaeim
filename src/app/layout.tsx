import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";





export const metadata: Metadata = {
  title: "AbdelMounaeim Portfolio",
  description: "hello,its me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
      {
       //<Navbar /> 
      }
        <section> {children}</section>
        </body>
    </html>
  );
}

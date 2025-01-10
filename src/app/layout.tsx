import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/compontents/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { roboto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drop Zone",
  description: "Leezy Boost 103 Drop Countdown",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

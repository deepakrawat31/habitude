import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pitagon = localFont({
  src: "../font/PitagonSansMono.woff2",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Habitude",
  description: "habit tracker build in next app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pitagon.className} bg-neutral-950 tracking-wide text-neutral-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

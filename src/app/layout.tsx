import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const robit = localFont({
   src: [
      {
         path: "../font/Robit-Regular.woff2",
         weight: "400",
         style: "normal",
      },
      {
         path: "../font/Robit-Bold.woff2",
         weight: "700",
         style: "normal",
      },
   ],
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
            className={`${robit.className} bg-neutral-950 text-neutral-200 antialiased`}
         >
            {children}
         </body>
      </html>
   );
}

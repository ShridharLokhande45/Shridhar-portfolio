import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import GlobalSpotlight from "@/components/GlobalSpotlight";

export const metadata: Metadata = {
  title: "Shridhar Portfolio",
  description: "Full Stack Developer Portfolio",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <GlobalSpotlight />
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import GlobalSpotlight from "@/components/GlobalSpotlight";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Shridhar | Full Stack Developer",
    template: "%s | Shridhar",
  },
  description:
    "Portfolio of Shridhar - Full Stack Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-black text-white`}>
        <ScrollProgressBar />
        <GlobalSpotlight />
        {children}
      </body>
    </html>
  );
}
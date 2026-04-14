import { Cormorant_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-cormorant",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-mono",
});

export const metadata = {
  title: "Eurus - Simple. Useful. Crafted.",
  description: "Eurus is an indie software studio building tools that are simple, useful, and crafted with deliberation.",
  openGraph: {
    images: ["/EURUS_software_studio.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/EURUS_software_studio.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

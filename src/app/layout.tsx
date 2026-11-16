import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LOVE LASA | Haute Couture & Editorial Fashion",
  description:
    "Love Lasa is a premium editorial fashion and lifestyle brand, defined by understated luxury, sculptural silhouettes, and cinematic storytelling.",
  keywords: ["Love Lasa", "Editorial Fashion", "Haute Couture", "Luxury Apparel", "Minimalist Fashion"],
  openGraph: {
    title: "LOVE LASA | Haute Couture & Editorial Fashion",
    description:
      "A premium, editorial, photography-led fashion and lifestyle brand.",
    siteName: "LOVE LASA",
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)]">
        {children}
      </body>
    </html>
  );
}

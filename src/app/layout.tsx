import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: "She's & Hers — Beauty Palace | Uyo, Nigeria",
  description: "She's & Hers Beauty Palace — wigs, weave-on, hair accessories, makeup, cosmetics, jewellery, bags and more. Based in Uyo, Nigeria. Serving 3,000+ clients.",
  keywords: ["wigs Nigeria", "hair accessories Uyo", "makeup Nigeria", "jewellery Uyo", "beauty shop Nigeria"],
  openGraph: {
    title: "She's & Hers Beauty Palace",
    description: "We don't just sell beauty. We sell confidence.",
    type: 'website',
    images: [
      {
        url: '/images/banner.jpg',
        width: 1200,
        height: 630,
        alt: "She's & Hers Beauty Palace",
      }
    ],
  },
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-sh-blush dark:bg-sh-base text-sh-base dark:text-sh-white transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

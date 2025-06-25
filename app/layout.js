import { Quicksand } from 'next/font/google';
import "./globals.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
});

export const metadata = {
  title: "Pasticeri Tori",
  description: "Finest pastry shop in Berat",
  keywords: "pastry shop, sweets, Berat, traditional desserts, modern pastries, pasticeri, embelsir, food, snacks, takeaway",
  openGraph: {
    title: "Pasticeri Tori",
    description: "Berat's finest traditional and modern sweets.",
    images: ["https://pasticeritori.netlify.app/tori-banner.png"],
    url: "https://pasticeritori.netlify.app",
    type: "website",
    siteName:"Pasticeri Tori",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pasticeri Tori",
    description: "Taste the tradition of Berat with every bite.",
    images: ["https://pasticeritori.netlify.app/tori-banner.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth `${quicksand.variable}`">
      <Head>
      <title>Pasticeri Tori – Traditional & Modern Sweets in Berat</title>
      <meta name="description" content="Pasticeri Tori offers the finest traditional and modern sweets in Berat, Albania. Come taste the tradition!" />
      <meta name="keywords" content="pasticeri, tori, Berat, sweets, pastry shop, embelsira, bakllava, desserts, ice cream, traditional, best, food, snacks" />

      <meta property="og:title" content="Pasticeri Tori" />
      <meta property="og:description" content="Berat's best traditional and modern sweets - handmade with love." />
      <meta property="og:image" content="https://pasticeritori.netlify.app/tori-banner.png" />
      <meta property="og:url" content="https://pasticeritori.netlify.app" />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Pasticeri Tori" />
      <meta name="twitter:description" content="Taste Berat's tradition with our handmade pastries." />
      <meta name="twitter:image" content="https://pasticeritori.netlify.app/tori-banner.png" />

      <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

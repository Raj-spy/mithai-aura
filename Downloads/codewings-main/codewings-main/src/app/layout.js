import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { site } from "../lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Theeditroom Labs | AI, Products, Brands & Growth Studio",
    template: "%s | Theeditroom Labs",
  },
  description: site.description,
  applicationName: site.name,
  verification: {
    google: "google38112569afb0b07a.html",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Theeditroom Labs | AI, Products, Brands & Growth Studio",
    description: site.description,
    url: site.url,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Theeditroom Labs — Make good happen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theeditroom Labs | AI, Products, Brands & Growth Studio",
    description: site.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-144.png", sizes: "144x144", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white font-sans text-[#0000FF] antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { Geist, Geist_Mono, Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ClientWrapper from "./ClientWrapper"; // We'll create this
import AOSProvider from "@/lib/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ivyPresto = localFont({
  src: "../public/fonts/Ivy-Presto-Headline-Semi-Bold.otf",
  variable: "--font-ivy-presto",
  weight: "600",
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Damilola Fayanjuola",
  description: "Your freelance coach",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        {/* Resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${workSans.variable} ${ivyPresto.variable} antialiased`}
      >        <AOSProvider />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

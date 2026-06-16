import { Geist, Geist_Mono, Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";
import AOSProvider from "@/lib/AOSProvider";
import { Analytics } from "@vercel/analytics/next";

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
  metadataBase: new URL("https://www.damifayanjuola.com"),
  title: {
    default:
      "Remote Job Coach — Land Global Jobs That Pay in USD | Dami Fayanjuola",
    // template: "%s | Jane Doe",
  },
  description:
    "Remote job coaching for African professionals. Land global roles that pay in foreign currency with a proven system that's placed 200+ people. Book a free training. ",
  keywords: [
    "remote job coach",
    "find remote jobs",
    "remote career coaching",
    "work from home jobs",
    "remote job search strategy",
  ],
  authors: [
    {
      name: "Remote Job Coach — Land Global Jobs That Pay in USD | Dami Fayanjuola",
      url: "https://www.damifayanjuola.com",
    },
  ],
  creator:
    "Remote Job Coach — Land Global Jobs That Pay in USD | Dami Fayanjuola",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.damifayanjuola.com",
    siteName:
      "Remote Job Coach — Land Global Jobs That Pay in USD | Dami Fayanjuola",
    title:
      "Remote Job Coach — Land Global Jobs That Pay in USD | Dami Fayanjuola",
    description:
      "Remote job coaching for African professionals. Land global roles that pay in foreign currency with a proven system that's placed 200+ people. Book a free training.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Remote Job Coach — Land Global Jobs That Pay in USD | Dami Fayanjuola",
      },
    ],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Damilola Fayanjuola",
    url: "https://www.damifayanjuola.com",
    // image: "https://yoursite.com/jane-doe.jpg",
    sameAs: [
      "https://www.linkedin.com/in/damifayanjuola",
      "https://x.com/damifayanjuola",
      "https://www.youtube.com/@damifayanjuola",
    ],
    jobTitle:
      "Remote Job Coach — Land Global Jobs That Pay in USD | Dami Fayanjuola",
    description:
      "Remote job coaching for African professionals. Land global roles that pay in foreign currency with a proven system that's placed 200+ people. Book a free training.",
  };
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${workSans.variable} ${ivyPresto.variable} antialiased`}
      >
        <AOSProvider />
        <ClientWrapper>{children}</ClientWrapper>
        <Analytics />
      </body>
    </html>
  );
}

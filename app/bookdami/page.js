import NavBar from "@/components/NavBar";
import React from "react";
import BookDamiHero from "@/components/bookDamiComponents/BookDamiHero";
import BookDamiSection1 from "@/components/bookDamiComponents/BookDamiSection1";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import WatchDamiSpeak from "@/components/bookDamiComponents/WatchDamiSpeak";
import HandPickYourTopic from "@/components/bookDamiComponents/HandPickYourTopic";
import BookDamiSlider from "@/components/bookDamiComponents/BookDamiSlider";
import BookDamiDialog from "@/components/modals/BookDamiDialog";

export const metadata = {
  title:
    "Remote Job Coach — Land Global Jobs That Pay in USD | Dami Fayanjuola ",
  description:
    "Remote job coaching for African professionals. Land global roles that pay in foreign currency with a proven system that's placed 200+ people. Book a free training.",
  alternates: {
    canonical: "https://www.damifayanjuola.com/bookdami",
  },
  openGraph: {
    title:
      "Remote Job Coach — Land Global Jobs That Pay in USD | Dami Fayanjuola ",
    description:
      "Remote job coaching for African professionals. Land global roles that pay in foreign currency with a proven system that's placed 200+ people. Book a free training.",
    url: "https://www.damifayanjuola.com/bookdami",
    // images: [{ url: "/og-coaching.jpg", width: 1200, height: 630 }],
  },
};

function page() {
  return (
    <div className="overflow-x-clip">
      <NavBar />
      <BookDamiHero />

      <BookDamiSection1 />
      <Brands className="hidden md:block" />
      <WatchDamiSpeak />
      <HandPickYourTopic />
      <BookDamiSlider />
      <Footer />
    </div>
  );
}

export default page;

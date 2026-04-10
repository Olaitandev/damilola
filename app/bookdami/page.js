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

function page() {
  return (
    <div>
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

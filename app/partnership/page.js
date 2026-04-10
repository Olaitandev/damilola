"use client";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import PartnershipHero from "@/components/partnershipComponents/PartnershipHero";
import Section1 from "@/components/partnershipComponents/Section1";
import Section2 from "@/components/partnershipComponents/Section2";
import ContactDialog from "@/components/modals/ContactDialog";
import React from "react";

function PartnershipPage() {
  return (
    <div>
      <NavBar />
      <PartnershipHero
        title=" Work With Dami"
        description=" I partner with forward-thinking brands to shape the future of work and careers. From building HR strategies that scale across borders to creating authentic campaigns that resonate, I bring expertise and reach that drive results."
        button1Text="Start the Conversation"
        DialogComponent={ContactDialog}
        mobileRoute="/submit-partnership-request" // Add your mobile route here
      />
      <Section1 />
      <Section2 />
      <Brands />
      <PartnershipHero
        title=" Ready to Create Impact Together?"
        button1Text="Start the Conversation"
        DialogComponent={ContactDialog}
        mobileRoute="/submit-partnership-request" // Add your mobile route here
      />
      <Footer />
    </div>
  );
}

export default PartnershipPage;

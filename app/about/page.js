import Section1 from "@/components/aboutComponents/Section1";
import NavBar from "@/components/NavBar";
import AboutHero from "@/components/aboutComponents/AboutHero";
import Section2 from "@/components/aboutComponents/Section2";
import Section3 from "@/components/aboutComponents/Section3";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import Section11 from "@/components/Section1";
import SignatureSpeakingTopics from "@/components/aboutComponents/SignatureSpeakingTopics";
import WhatiBring from "@/components/aboutComponents/WhatiBring";
import PartnershipHero from "@/components/partnershipComponents/PartnershipHero";

export default function About() {
  return (
    <div className="min-h-screen bg-white overflow-clip">
      {/* Navigation Bar */}
      <NavBar />

      <AboutHero />

      <Section1 />

      <Section2 />

      <Section3 />

      <Brands />



      <WhatiBring />


   
      <SignatureSpeakingTopics />


 

      <PartnershipHero
        title="Ready to Build Your Global Career?"
        description="Don’t Just read my story. Start building yours today. Whether you want step-by-step coaching, proven digital tools, or direct strategy from me, the next move is yours"
        button1Text="Join Coaching"
        button2Text="Explore Digital Products"
        button1Route="https://damiexpressions.selar.com/remoteready"
        button2Route="https://damiexpressions.selar.com"
      />
      {/* </AnimatedSection> */}

      {/*  */}
      {/* <AnimatedSection variant="fadeInUp" delay={0.2}> */}
      <Section11
        title1="Learn How to Build a"
        title2="Global Remote Career "
        title3="from Scratch"
        description="Grab my free 10-minute training and learn 3 proven steps to land your first remote job that pays in foreign currency."
      />
      {/* </AnimatedSection> */}

      {/* footer */}
      {/* <AnimatedSection variant="fadeInUp" delay={0.1}> */}
      <Footer />
      {/* </AnimatedSection> */}
    </div>
  );
}

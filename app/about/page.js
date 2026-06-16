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

export const metadata = {
  title:
    "Remote Job Coach — Land Global Jobs That Pay in USD | Dami Fayanjuola ",
  description:
    "Remote job coaching for African professionals. Land global roles that pay in foreign currency with a proven system that's placed 200+ people. Book a free training.",
  alternates: {
    canonical: "https://www.damifayanjuola.com/about",
  },
  openGraph: {
    title:
      "Remote Job Coach — Land Global Jobs That Pay in USD | Dami Fayanjuola ",
    description:
      "Remote job coaching for African professionals. Land global roles that pay in foreign currency with a proven system that's placed 200+ people. Book a free training.",
    url: "https://www.damifayanjuola.com/about",
    // images: [{ url: "/og-coaching.jpg", width: 1200, height: 630 }],
  },
};

export default function About() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "About",
    name: "Remote Job Coach — Land Global Jobs That Pay in USD | Dami Fayanjuola ",
    provider: {
      "@type": "Person",
      name: "Remote Job Coach — Land Global Jobs That Pay in USD | Dami Fayanjuola ",
      url: "https://www.damifayanjuola.com",
    },
    description:
      "Remote job coaching for African professionals. Land global roles that pay in foreign currency with a proven system that's placed 200+ people. Book a free training.",
    url: "https://www.damifayanjuola.com/about",
  };

  return (
    <div className="bg-white overflow-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
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
        description="Don’t just read my story. Start building yours today. Whether you want step-by-step coaching, proven digital tools, or direct strategy from me, the next move is yours."
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

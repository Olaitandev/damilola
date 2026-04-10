import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Brands from "@/components/Brands";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Book1on1 from "@/components/Book1on1";
import Reviews from "@/components/Reviews";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import LetsCollaborate from "@/components/LetsCollaborate";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { FloatingElements } from "@/components/animations/FloatingElements";
import PartnershipHero from "@/components/partnershipComponents/PartnershipHero";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white overflow-clip">
      <NavBar />

      <Hero />

      <Section1
        title1="Kick Start Your Global"
        title2="Remote Career Today."
        description=" Watch this FREE 10-minute training by Dami and discover 3 proven
              steps to land your first remote job that pays in foreign currency."
      />
      <Section2 />
      
      <Brands />

      <Section3 />

      <Section4 />

      {/* lets collaborate */}
      {/* <AnimatedSection variant="fadeInUp" delay={0.1}>
        <LetsCollaborate />
      </AnimatedSection> */}

      {/* section 5 */}

      <PartnershipHero
        title="Get Unstuck and Land the Remote Job You’ve Been Chasing"
        description=" In our one-on-one consultation, I will review your situation, show you what is blocking your progress, and give you a clear action plan to land the remote job you want."
        button1Text="Book a One-on-One Consultation"
        button1Route="/contact"
      />

      {/* Reviews Section */}

      <Reviews />

      {/* faqs */}

      <Faqs />

      {/* Footer */}

      <Footer />
    </div>
  );
}

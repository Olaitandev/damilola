import ContactForm from "@/components/contactComponents/ContactForm";
import ContactHero from "@/components/contactComponents/ContactHero";
import SocialLinks from "@/components/contactComponents/SocialLinks";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Section1 from "@/components/Section1";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import PartnershipForm from "@/components/partnershipComponents/PartnershipForm";

export default function BookDamiSM() {
  return (
    <div className="min-h-screen bg-white overflow-clip ">
      <ScrollProgress />
      {/* Navigation Bar */}
      <NavBar />

      {/* <AnimatedSection variant="fadeInUp">
        <ContactHero />
      </AnimatedSection> */}

      <AnimatedSection variant="fadeInLeft" delay={0.1}>
        {/* <ContactForm /> */}
        <PartnershipForm />
      </AnimatedSection>

      <AnimatedSection variant="fadeInUp" delay={0.2}>
        <Footer />
      </AnimatedSection>
    </div>
  );
}

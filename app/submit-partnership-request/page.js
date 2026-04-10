import ContactForm from "@/components/contactComponents/ContactForm";
import ContactHero from "@/components/contactComponents/ContactHero";
import SocialLinks from "@/components/contactComponents/SocialLinks";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Section1 from "@/components/Section1";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import PartnershipForm from "@/components/partnershipComponents/PartnershipForm";

export default function Contact() {
  return (
    <div className="bg-white overflow-clip ">
      <ScrollProgress />
      {/* Navigation Bar */}
      <NavBar />

      {/* <AnimatedSection variant="fadeInUp">
        <ContactHero />
      </AnimatedSection> */}

  
        {/* <ContactForm /> */}
        <PartnershipForm />




        <Footer />
   
    </div>
  );
}

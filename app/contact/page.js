import ContactForm from "@/components/contactComponents/ContactForm";
import ContactHero from "@/components/contactComponents/ContactHero";
import SocialLinks from "@/components/contactComponents/SocialLinks";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Section1 from "@/components/Section1";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ScrollProgress } from "@/components/animations/ScrollProgress";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white overflow-clip">
    
      <NavBar />


        <ContactHero />
    

  
        <ContactForm />



        <SocialLinks />
   


        <Section1
          title1="Learn How to Build a"
          title2="Global Remote Career "
          title3="from Scratch"
          description="Grab my free 10-minute training and learn 3 proven steps to land your first remote job that pays in foreign currency."
        />



        <Footer />

    </div>
  );
}

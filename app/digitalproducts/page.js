"use client";
import NavBar from "@/components/NavBar";
import React, { useEffect } from "react";
import DigitalProductHero from "@/components/digitalProductComponents/DigitalProductHero";
import DigitalProductSection1 from "@/components/digitalProductComponents/DigitalProductSection1";
import { supabase } from "@/lib/supabase";
import TopBanner from "./TopBanner";
import Reviews from "@/components/Reviews";
import ProductsFaqs from "@/components/digitalProductComponents/ProductsFaqs";
import Section1 from "@/components/Section1";
import PartnershipHero from "@/components/partnershipComponents/PartnershipHero";
import Footer from "@/components/Footer";

function DigitalProducts() {
  const getProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("digital_products")
        .select("*");
      console.log("Products:", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="overflow-x-clip">
      {/* <NavBar cartVisible={true} /> */}
      <NavBar  />
      <div className="pt-16 md:pt-[65px] lg:pt-24">{/* <TopBanner /> */}</div>
      <DigitalProductHero />
      <DigitalProductSection1 />
      <Reviews />
      <ProductsFaqs />
      <PartnershipHero
        title="Your Remote Career Starts Here"
        description="Pick the product you need today. Take action now, and you could be applying smarter by tonight."
        button1Text="Shop All Product"
        button1Route="/digitalproducts"
      />
      <Footer />
    </div>
  );
}

export default DigitalProducts;

"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import React, { useState, useEffect, use } from "react";
import { useDispatch, useSelector } from "react-redux"; // Add useDispatch and useSelector
import { addToCart } from "@/store/slices/cartSlice"; // Import addToCart action
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation"; // Add useRouter for navigation
import { ArrowRight, Dot } from "lucide-react";
import PartnershipHero from "@/components/partnershipComponents/PartnershipHero";
import RemoteReadyFaq from "@/components/remoteReadyFaq";
import Section1 from "@/components/Section1";

const ProductPage = () => {
  const dispatch = useDispatch(); // Initialize dispatch
  const router = useRouter(); // Initialize router

  const courseContent = [
    {
      id: 1,
      title: "40+ Tutorials",
      description:
        "Go from ignored applications to interviews with proven strategies for resumes, LinkedIn, recruiter outreach, portfolios, and interview prep.",
    },
    {
      id: 2,
      title: "15+ Resources",
      description:
        "Templates, scripts, and guides that save you months of wasted effort",
    },
    {
      id: 3,
      title: "Personal Resume & LinkedIn Review",
      description: "Direct feedback so you finally know what to fix.",
    },
    {
      id: 4,
      title: "Mock Interviews & Coaching",
      description:
        "Get coached through every stage — from “Tell me about yourself” to salary negotiation.",
    },
    {
      id: 5,
      title: "Monthly Recruiter Q&A",
      description: "Hear directly from recruiters hiring for remote roles.",
    },
    ,
  ];

  const courseContent2 = [
    {
      id: 1,
      title: "Monthly 1:1 Call With Me",
      description: "Private strategy sessions to recalibrate your job search.",
    },
    {
      id: 2,
      title: "Ask-Me-Anything Access",
      description: "Real answers, anytime you need them.",
    },
    {
      id: 3,
      title: "Weekly Live Coaching",
      description: "Breakthrough group sessions every week.",
    },
  ];

  // create a array of local pictures
  const reviewImages = [
    "/review1.jpg",
    "/review2.jpg",
    "/review4.jpg",
    "/review3.jpg",
  ];

  // Get cart items to check if product is already in cart
  const cartItems = useSelector((state) => state.cart.items);

  const [activeTab, setActiveTab] = useState("overview");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if current product is already in cart
  const isInCart = cartItems.some((item) => item.id === product?.id);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("remoteready")
        .select("*")
        // .eq("id", 1)
        .single();

      if (error) {
        throw error;
      }

      setProduct(data);
      console.log("Fetched product:", data);
    } catch (error) {
      console.error("Error fetching product:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (product && !isInCart) {
      const cartItem = {
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price, // Use default price if not available
        quantity: 1,
        image: product.image || "/Placeholder_Image.svg",
        product_id: product.product_id,
      };

      dispatch(addToCart(cartItem));

      // Optional: Show success message or redirect
      alert("Product added to cart successfully!");
    } else if (isInCart) {
      alert("Product is already in your cart!");
    }
  };

  // Handle Buy Now
  const handleBuyNow = () => {
    if (product) {
      // Add to cart first if not already added
      if (!isInCart) {
        handleAddToCart();
      }
      // Navigate to cart page
      router.push("/cart");
    }
  };

  // Handle Reload
  const handleReload = () => {
    router.reload();
  };

  // Tab content components
  const OverViewTab = () => (
    <div className="py-6">
      <h3 className="mb-4 text-lg font-semibold">Why I Bulit This Community</h3>
      <div className="space-y-4 text-gray-600">
        <p>
          I know what it feels like to be skilled but broke, sending hundreds of
          applications and hearing nothing back. When I finally cracked the code
          and landed my first remote job, I promised myself I’d build the system
          I wish I had back then. This community is that system — and it’s
          already helping thousands move from rejection to remote offers.
        </p>
      </div>
    </div>
  );

  const CourseContentTab = () => (
    <div className="py-6">
      <h3 className="mb-4 text-lg font-semibold">Course Content</h3>

      <div className="grid grid-cols-1 md:gap-10 md:grid-cols-2">
        <div className="mb-3">
          <h4 className="mb-4 text-lg font-bold text-black text-md">
            Here’s What You’ll Get When You Join
          </h4>
          {courseContent.map((item) => (
            <div key={item.id} className="mb-3">
              <div className="flex flex-row items-start">
                <Dot className="flex-shrink-0 mt-1 size-6" />
                <h2 className="flex-wrap ml-2">
                  <span className="font-semibold ">{item.title} </span>
                  {" ➜ "}
                  <span>{item.description}</span>
                </h2>
              </div>
            </div>
          ))}
        </div>

        <div>
          <button
            onClick={handleAddToCart}
            disabled={isInCart}
            className={`py-2 px-6 rounded-full font-medium transition-colors w-full mb-3 hidden md:block ${
              isInCart
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#EDF296] text-black hover:bg-yellow-300"
            }`}
          >
            {isInCart ? "Added to Cart" : "Join the Coaching Community Today"}
          </button>
          {courseContent2.map((item) => (
            <div key={item.id} className="mb-3">
              <div className="flex flex-row items-start">
                <Dot className="flex-shrink-0 mt-1 size-6" />
                <h2 className="flex-wrap ml-2">
                  <span className="font-semibold ">{item.title} </span>
                  {" ➜ "}
                  <span>{item.description}</span>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="space-y-6">
        <div className="p-4 border rounded-lg">
          <h4 className="mb-2 font-semibold">
            Module 1: Pre-Interview Preparation
          </h4>
          <ul className="ml-4 space-y-1 text-gray-600 list-disc list-inside">
            <li>Research techniques for companies and roles</li>
            <li>Setting up your remote workspace</li>
            <li>Technical requirements checklist</li>
            <li>Portfolio and resume optimization</li>
          </ul>
          <span className="text-sm text-gray-500">Duration: 1.5 hours</span>
        </div>

        <div className="p-4 border rounded-lg">
          <h4 className="mb-2 font-semibold">
            Module 2: Technical Interview Mastery
          </h4>
          <ul className="ml-4 space-y-1 text-gray-600 list-disc list-inside">
            <li>Common technical questions and answers</li>
            <li>Screen sharing best practices</li>
            <li>Coding challenges preparation</li>
            <li>Problem-solving frameworks</li>
          </ul>
          <span className="text-sm text-gray-500">Duration: 2 hours</span>
        </div>

        <div className="p-4 border rounded-lg">
          <h4 className="mb-2 font-semibold">
            Module 3: Behavioral Interview Excellence
          </h4>
          <ul className="ml-4 space-y-1 text-gray-600 list-disc list-inside">
            <li>STAR method implementation</li>
            <li>Remote work specific scenarios</li>
            <li>Communication skills for virtual meetings</li>
            <li>Handling difficult questions</li>
          </ul>
          <span className="text-sm text-gray-500">Duration: 1.5 hours</span>
        </div>

        <div className="p-4 border rounded-lg">
          <h4 className="mb-2 font-semibold">
            Module 4: Salary Negotiation & Follow-up
          </h4>
          <ul className="ml-4 space-y-1 text-gray-600 list-disc list-inside">
            <li>Research salary ranges effectively</li>
            <li>Negotiation strategies for remote roles</li>
            <li>Follow-up email templates</li>
            <li>Handling multiple offers</li>
          </ul>
          <span className="text-sm text-gray-500">Duration: 1 hour</span>
        </div>
      </div> */}
    </div>
  );

  const ReviewsTab = () => (
    <div className="py-6">
      <div>
        {/* Review Images Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {reviewImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image
                src={src}
                // src="../../../public/review4.jpg"
                alt={`Review ${index + 1}`}
                width={300}
                height={300}
                className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverViewTab />;
      case "content":
        return <CourseContentTab />;
      case "reviews":
        return <ReviewsTab />;
      default:
        return <OverViewTab />;
    }
  };

  // Add loading state
  if (loading) {
    return (
      <div>
        <NavBar cartVisible={true} />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-4 border-4 border-gray-300 rounded-full animate-spin border-t-green-600"></div>
            <p className="text-lg text-gray-500">Loading product...</p>
          </div>
        </div>
      </div>
    );
  }

  // Add error state
  if (error || !product) {
    return (
      <div>
        <NavBar cartVisible={true} />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-lg text-red-500">
              {error || "Product not found"}
            </p>
            <button
              onClick={handleReload}
              className="px-4 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-700"
            >
              Reload
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar cartVisible={true} />

      <div className="lg:px-24 md:px-2 m md:mt-10 ">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div className="flex lg:justify-end lg:items-end">
            <Image
              src={product.image || "/Placeholder_Image.svg"}
              alt={product.headline || "Product Image"}
              width={600}
              height={500}
              priority
              className="object-cover md:w-[500px] md:h-auto "
            />
          </div>
          <div className="px-5 md:px-5 h-auto flex flex-col lg:max-w-[500px]">
            <div className="mt-2">
              <h2 className="text-[20px] lg:text-[30px] font-ivy-presto">
                {product.title}
              </h2>
              <hr className="mt-2 opacity-50" />
              <p className="mt-2 ">{product.description}</p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-4 lg:mt-10">
              <h2 className="text-2xl font-ivy-presto">
                ₦{product.price?.toLocaleString() || "25,000"} /{" "}
              </h2>
              <p className="text-md">{product.duration} </p>
            </div>
            <div className="mt-8 lg:mt-10 bg-[#FFA500] p-5 rounded-lg">
              <p className="mt-2 text-xl text-center lg:mt-5 font-ivy-presto">
                {product.bannerText}
              </p>
            </div>

            <div className="flex flex-row justify-end gap-3 mt-5 lg:mt-10">
              <button
                onClick={handleAddToCart}
                disabled={isInCart}
                className={`py-2 px-6 rounded-full font-medium transition-colors w-full ${
                  isInCart
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#EDF296] text-black hover:bg-yellow-300"
                }`}
              >
                {isInCart
                  ? "Added to Cart"
                  : "Join the Coaching Community Today"}
              </button>
              {/* <button
                onClick={handleBuyNow}
                className="bg-[#EDF296] text-black py-2 px-6 rounded-full font-medium hover:bg-yellow-300 transition-colors w-full"
              >
                Buy Now
              </button> */}
            </div>
          </div>
        </div>

        <div className="px-5 mt-16 lg:px-48">
          <div className="flex items-center justify-center gap-5 lg:items-start md:justify-start">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-3 text-sm font-medium  transition-colors ${
                activeTab === "overview"
                  ? "font-semibold  rounded-xl border"
                  : "text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-300"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("content")}
              className={`px-6 py-3 text-sm font-medium  transition-colors ${
                activeTab === "content"
                  ? "font-semibold  rounded-xl border"
                  : "text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-300"
              }`}
            >
              Course Content
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-6 py-3 text-sm font-medium  transition-colors ${
                activeTab === "reviews"
                  ? "font-semibold  rounded-xl border"
                  : "text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-300"
              }`}
            >
              Reviews
            </button>
          </div>
          <div className="min-h-[400px]  ">{renderTabContent()}</div>
        </div>
      </div>
      <PartnershipHero
        title="This Is Where Rejection Ends."
        description="You’ve waited long enough. Every day you delay is another missed offer. This is your chance to join the system that works and the community that wins."
        button1Text="Join the Coaching Community Today"
      />
      <RemoteReadyFaq />
      {/* <Section1
        title1="Not Ready for Coaching"
        title2="Yet? Start Smaller"
        description=" If you’re not ready to commit ₦150,000, start with Remote Ready™ — my entry-level product that gives you everything you need to optimize your resume and LinkedIn, pass ATS scans, and start getting noticed."
      /> */}
      <div className="bg-[#FFF7F3] w-full">
        <div className="flex flex-col gap-8 px-4 py-16 md:flex-row md:items-center md:justify-between lg:px-32 lg:py-24">
          <div className="mb-8 md:w-1/2 lg:mb-0 md:pr-12">
            <span className="block w-full text-3xl font-bold leading-tight font-ivy-presto md:text-5xl lg:text-5xl text-nowrap">
              Not Ready for Coaching
              <br />
              Yet? Start Smaller
              <br />
            </span>
          </div>
          <div className="flex flex-col gap-4 mt-4 md:w-1/3 lg:mt-0">
            <div>
              <p className="font-medium font-work-sans">
                If you’re not ready to commit ₦150,000, start with Remote Ready™
                — my entry-level product that gives you everything you need to
                optimize your resume and LinkedIn, pass ATS scans, and start
                getting noticed.
              </p>
            </div>
            <div className="flex flex-col gap-4 ">
              <button className="bg-[#EDF296] text-black rounded-full p-2">
                Get Remote Ready™️ for ₦18,500
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;

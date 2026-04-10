"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import React, { useState, useEffect, use } from "react";
import { useDispatch, useSelector } from "react-redux"; // Add useDispatch and useSelector
import { addToCart } from "@/store/slices/cartSlice"; // Import addToCart action
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation"; // Add useRouter for navigation
import CartHero from "@/components/CartComponents/CartHero";
import { Check, SquareCheckBig } from "lucide-react";

const ProductPage = ({ params }) => {
  // Unwrap the params Promise using React.use()
  const resolvedParams = use(params);
  const dispatch = useDispatch(); // Initialize dispatch
  const router = useRouter(); // Initialize router

  // Get cart items to check if product is already in cart
  const cartItems = useSelector((state) => state.cart.items);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if current product is already in cart
  const isInCart = cartItems.some((item) => item.id === product?.id);

  // Fetch product data based on the ID from params
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("product_id", resolvedParams.id)
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

    if (resolvedParams.id) {
      fetchProduct();
    }
  }, [resolvedParams.id]);

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (product && !isInCart) {
      const cartItem = {
        id: product.id,
        title: product.headline,
        description: product.subline,
        price: product.price || 25000, // Use default price if not available
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

  // Handle Go Back
  const handleGoBack = () => {
    router.back();
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
              onClick={handleGoBack}
              className="px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-700"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar cartVisible={true} />
      <CartHero
        title={product.headline}
        bgImage={product.image || "/Placeholder_Image.svg"}
      />
      {product.banner_text && (
        <div className="flex items-center justify-center w-full h-20 px-5 bg-[#FFA500] justify-text-center md:px-24 lg:px-60">
          <h1 className="text-lg font-bold text-center ">
            {product.banner_text}
          </h1>
        </div>
      )}
      <div className="mb-20 px-7 md:px-24 lg:px-60">
        <div className="mt-5">
          {/* <h1>{product.headline}</h1> */}
          <p className="font-normal">{product.subline}</p>
        </div>

        <div className="mt-10">
          <h2 className="font-semibold">
            {" "}
            What's Inside: {product.what_is_inside_title}
          </h2>
          {product.what_is_inside &&
            (() => {
              // Handle case where JSONB might be stored as string
              const whatIsInside =
                typeof product.what_is_inside === "string"
                  ? JSON.parse(product.what_is_inside)
                  : product.what_is_inside;

              return Array.isArray(whatIsInside)
                ? whatIsInside.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center gap-2 mt-2 mb-5"
                    >
                      {/* <SquareCheckBig
                        color="green"
                        className="flex-shrink-0 w-6 h-6"
                      /> */}
                      ✅<p className="text-sm md:text-md">{item}</p>
                    </div>
                  ))
                : null;
            })()}
        </div>

        {product.why_it_works && (
          <div className="mt-10">
            <h2 className="font-semibold">Why it Works:</h2>
            <p className="mt-2 text-sm md:text-md">{product.why_it_works}</p>
          </div>
        )}

        {product.proof && (
          <div className="mt-10">
            <h2 className="font-semibold">Proof:</h2>
            <p className="mt-2 text-sm md:text-md">{product.proof}</p>
          </div>
        )}

        <div className="bg-[#FFA500] inline-block py-5 rounded-lg px-5 mt-10">
          <h1 className="font-semibold">{product.urgency}</h1>
        </div>

        <div className="flex flex-row gap-2 mt-10">
          <h2 className="font-semibold">Price: </h2>
          <h2 className="font-semibold">₦{product.price?.toLocaleString()}</h2>
        </div>

        <div className="flex flex-col-reverse justify-between mt-5 md:mt-10 md:flex-row">
          <div>
            <button
              className="bg-white text-black rounded-full border px-8 py-3 mt-10 text-sm font-medium lg:p-4.5 lg:text-md"
              onClick={handleGoBack}
            >
              Back
            </button>
          </div>

          <div className="flex flex-col md:gap-3 md:flex-row">
            <button
              className={`bg-[#FFEEE6] text-black rounded-full p-3 mt-10 text-sm font-medium lg:p-4.5 lg:text-md ${
                isInCart && "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              onClick={handleAddToCart}
              disabled={isInCart}
            >
              {isInCart
                ? "Added to Cart"
                : "Add Bundle to Cart - Instant Access"}
            </button>
            {/* <button
              className="bg-[#EDF296] text-black rounded-full p-3 mt-10 text-sm font-medium lg:p-4.5 lg:text-md"
              // onClick={handleButton1Click}
            >
              Buy Now
            </button> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;

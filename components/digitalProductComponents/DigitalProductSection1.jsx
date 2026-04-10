"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Add this import
import {
  Card,
  CardFooter,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ChevronRight } from "lucide-react";
import { supabase } from "../../lib/supabase";
import Image from "next/image";

function DigitalProductSection1() {
  const router = useRouter(); // Add this line
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from Supabase
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from("products").select("*").eq("status", "active");
        // .order("created_at", { ascending: false });

        if (error) {
          throw error;
        }

        setProducts(data || []);
        console.log("Fetched products:", data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.headline?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.subline?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (productId) => {
    // Navigate to the product page with the product ID
    router.push(`/product/${productId}`);
  };

  if (loading) {
    return (
      <section className="w-full px-5 pt-16 pb-16 mx-auto lg:px-48 lg:pb-24">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-4 border-4 border-gray-300 rounded-full animate-spin border-t-green-600"></div>
            <p className="text-lg text-gray-500">Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full px-5 pt-16 pb-16 lg:px-24 lg:pb-24">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg text-red-500">Error: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-700"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full px-5 pt-16 pb-16 lg:px-48 lg:pb-24">
      <div className="flex items-center justify-center mb-12">
        <div className="relative w-full md:max-w-1/2">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-12 border rounded-full"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-4 top-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid justify-center grid-cols-1 gap-20 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className="relative flex flex-col pt-0 overflow-hidden transition-shadow duration-300 border-none hover:shadow-lg w-[405px] h-auto "
          >
            {product.label && (
              <div className="absolute px-2 py-1 bg-[#FFEEE6] top-2 left-2 rounded-xl">
                <p className="text-semibold">{product.label}</p>
              </div>
            )}
            <div className="bg-gray-200 ">
              <Image
                src={product.image}
                alt={product.headline}
                width={300}
                height={400}
                className="object-cover w-full h-[350px] transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-center font-ivy-presto">
                {product.headline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 line-clamp-3">{product.subline}</p>
            </CardContent>
            <CardFooter className="">
              <a
                  href={product.selar_url}
                  target="_blank"
                  rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-6 py-3 font-normal text-white transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none "
              >
                <span className="mr-2 text-black">View Product</span>
                <ChevronRight className="w-5 h-5 text-black" />
              </a>
            </CardFooter>
          </Card>

    

        ))}
      </div>

      {/* No results message */}
      {filteredProducts.length === 0 && !loading && (
        <div className="py-12 text-center">
          <p className="text-lg text-gray-500">
            No products found matching your search.
          </p>
        </div>
      )}
    </section>
  );
}

export default DigitalProductSection1;

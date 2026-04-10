"use client";
import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "@/store/slices/cartSlice";
import { useRouter } from "next/navigation";

function CartDetails() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    items: cartItems,
    totalAmount,
    totalQuantity,
  } = useSelector((state) => state.cart);

  const [email, setEmail] = useState("");

  // Remove mock data initialization - use real cart data
  useEffect(() => {
    // Remove the mock data initialization
    // The cart will be populated by actual product additions
  }, []);

  // Delete item from cart
  const handleDeleteItem = (id) => {
    dispatch(removeFromCart(id));
  };

  // Handle continue shopping
  const handleContinueShopping = () => {
    router.push("/digitalproducts");
  };

  // Handle go back
  const handleGoBack = () => {
    router.back();
  };

  // Handle product click
  const handleProductClick = (productId) => {
    // check if the productId = "remoteReadyBundle"
    if (productId === "remoteReadyBundle") {
      router.push("/remoteready");
    } else {
      router.push(`/product/${productId}`);
    }
  };

  // Handle place order
  const handlePlaceOrder = () => {
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    // Here you would typically integrate with a payment processor
    // For now, we'll just show a success message and clear the cart
    alert(
      `Order placed successfully! Digital products will be sent to ${email}`
    );
    dispatch(clearCart());
    setEmail("");
    router.push("/");
  };

  // Calculate totals
  const subtotal = totalAmount;
  const vat = subtotal * 0.15;
  const total = subtotal + vat;

  return (
    <section className="w-full px-5 pt-16 pb-16 lg:px-24 lg:pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center lg:text-4xl">
          Shopping Cart ({totalQuantity}{" "}
          {totalQuantity === 1 ? "item" : "items"})
        </h1>

        {cartItems.length === 0 ? (
          <div className="py-12 text-center">
            <p className="mb-4 text-lg text-gray-500">Your cart is empty</p>
            <button
              onClick={handleContinueShopping}
              className="bg-[#EDF296] text-black py-2 px-6 rounded-full font-medium hover:bg-yellow-300 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="">
              {cartItems.map((item) => (
                <div key={item.id} className="mb-8 transition-shadow bg-white ">
                  <div className="flex flex-row gap-4 md:items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="object-cover w-20 h-auto transition-opacity cursor-pointer lg:w-40 lg:h-40 hover:opacity-80"
                      onClick={() => handleProductClick(item.product_id)}
                    />
                    <div
                      className="flex flex-col transition-opacity cursor-pointer md:flex-row md:gap-5 md:items-center hover:opacity-80"
                      onClick={() => handleProductClick(item.product_id)}
                    >
                      <div className="flex flex-col max-w-lg">
                        <h2 className="text-lg font-bold font-ivy-presto ">
                          {item.title}
                        </h2>
                        <p className="text-sm text-gray-600 lg:mt-4 line-clamp-2">
                          {item.description}
                        </p>
                        {/* <p className="mt-2 text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p> */}
                      </div>
                      <h3 className="mt-1 text-xl md:mt-4 text-semibold font-ivy-presto md:ml-30 md:mr-20">
                        ₦{item.price?.toLocaleString()}
                      </h3>
                    </div>

                    <Trash2
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteItem(item.id);
                      }}
                      className="w-20 mt-3 cursor-pointer md:mt-0 hover:text-red-500 lg:w-36"
                    />
                  </div>
                </div>
              ))}
            </div>
            <hr />

            {/* Cart Summary */}
            <div className="rounded-lg ">
              <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                <div className="mt-6">
                  <h2 className="text-xl font-ivy-presto">Shipping Details</h2>
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 mt-3 border border-gray-300 rounded-full"
                  />
                  <p className="text-[14px] mt-2">
                    This is the email address the digital products will be sent
                    to
                  </p>
                </div>

                <div className="mt-6 md:w-1/2">
                  <h2 className="text-xl font-ivy-presto">Cart Total</h2>

                  <div className="p-4 mt-4 border rounded-xl ">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm font-medium">Subtotal</p>
                      <p className="font-semibold text-md">
                        ₦{subtotal.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm font-medium">VAT (15%)</p>
                      <p className="font-semibold text-md">
                        ₦{vat.toLocaleString()}
                      </p>
                    </div>
                    <hr className="mb-4" />
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm font-medium">Total</p>
                      <p className="text-lg font-bold">
                        ₦{total.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-5 md:flex-row">
                    <button
                      onClick={handleGoBack}
                      className="bg-[#FFEEE6] text-black py-2 px-6 rounded-full font-medium hover:bg-yellow-300 transition-colors w-full"
                    >
                      Go back
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      className="bg-[#EDF296] text-black py-2 px-6 rounded-full font-medium hover:bg-yellow-300 transition-colors w-full"
                    >
                      Place order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default CartDetails;

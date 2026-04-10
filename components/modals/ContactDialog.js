"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCircle, CircleCheck } from "lucide-react";

const ContactDialog = ({
  triggerText = "Start the Conversation",
  triggerClassName,
}) => {
  const [open, setOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    message: "",
    timeline: "",
    userType: "",
    subscribe: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fade out success toast after 3 seconds
  useEffect(() => {
    if (showSuccess) {
      const timeout = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [showSuccess]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone))
      newErrors.phone = "Enter a valid phone number.";
    if (!formData.brand.trim()) newErrors.brand = "Brand name is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/send-partnership-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");

      setOpen(false); // close the main modal
      setFormData({
        name: "",
        email: "",
        phone: "",
        brand: "",
        message: "",
        timeline: "",
        userType: "",
        subscribe: false,
      });
      setErrors({});
      setShowSuccess(true); // show success toast
    } catch (err) {
      console.error("send error:", err);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* MAIN DIALOG */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            className={
              triggerClassName ||
              "bg-[#EDF296] text-black rounded-full p-3 mt-10 text-sm font-medium lg:p-4.5 lg:text-md"
            }
          >
            {triggerText}
          </button>
        </DialogTrigger>

        <DialogContent className="flex flex-col max-w-2xl overflow-y-auto">
          <form onSubmit={handleSubmit} className="flex flex-col flex-1">
            <DialogHeader className="flex-shrink-0 mt-2">
              <DialogTitle className="text-2xl text-center font-ivy-presto">
                Let's Build Something That Works
              </DialogTitle>
              <DialogDescription className="mt-2 text-sm text-center text-gray-600">
                Tell me a bit about your brand and the type of partnership
                you’re interested in. My team and I will respond quickly to
                explore how we can collaborate.
              </DialogDescription>
            </DialogHeader>

            <div className="flex-1 px-1 ">
              <div className="flex flex-col gap-4 mt-3 md:mt-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name}</p>
                )}

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  suppressHydrationWarning
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email}</p>
                )}

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
                />
                {errors.phone && (
                  <p className="text-xs text-red-500">{errors.phone}</p>
                )}

                <input
                  type="text"
                  name="brand"
                  placeholder="Brand Name"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
                />
                {errors.brand && (
                  <p className="text-xs text-red-500">{errors.brand}</p>
                )}

                <p className="mb-3 font-medium">Which best describes you?</p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="userType"
                      value="HR Consulting"
                      checked={formData.userType === "HR Consulting"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    HR Consulting
                  </label>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="userType"
                      value="Second choice"
                      checked={formData.userType === "Second choice"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Second choice
                  </label>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="userType"
                      value="Campaigns & influencer Partnerships"
                      checked={
                        formData.userType ===
                        "Campaigns & influencer Partnerships"
                      }
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Campaigns & influencer Partnerships
                  </label>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="userType"
                      value="Workshops & Corporate Training"
                      checked={
                        formData.userType === "Workshops & Corporate Training"
                      }
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Workshops & Corporate Training
                  </label>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="userType"
                      value="others"
                      checked={formData.userType === "others"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Others
                  </label>
                </div>

                <textarea
                  name="message"
                  placeholder="Tell me more about your goals"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32 p-2 border border-gray-300 resize-none rounded-xl focus:ring-2 focus:ring-blue-500"
                />
                {errors.message && (
                  <p className="text-xs text-red-500">{errors.message}</p>
                )}

                <select
                  name="timeline"
                  value={formData.timeline || ""}
                  onChange={handleChange}
                  className="w-full p-2 text-gray-700 bg-white border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Timeline
                  </option>
                  <option value="Immediate">Immediate</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="4-6 months">4-6 months</option>
                  <option value="Flexible">Flexible</option>
                </select>

                <div className="flex flex-row items-start">
                  <input
                    type="checkbox"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                    className="mt-1 mr-2"
                  />
                  <p className="text-sm">
                    By submitting, you agree to our{" "}
                    <span className="underline">
                      <Link href="/terms">Terms & Conditions</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <DialogFooter className="flex-shrink-0 mt-4">
              {/* <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose> */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#EDF296] text-black hover:bg-[#EDF296]/90"
              >
                {isSubmitting ? "Submitting..." : "Submit Partnership Request"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* SUCCESS TOAST */}
      {showSuccess && (
        <div
          className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ${
            showSuccess ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-sm text-center animate-fade-in">
            {/* <CheckCircle className="w-12 h-12 mx-auto mb-3 text-black" /> */}
            <CircleCheck className="w-12 h-12 mx-auto mb-3 text-black" />
            <h2 className="text-xl font-semibold">
              Thank You — Your Request Has Been Received
            </h2>
            <p className="mt-5 text-gray-600">
              I’ll review your details and get back to you within 48 hours. In
              the meantime, feel free to connect with me on [LinkedIn],
              [Instagram], or [X] for insights on remote work, HR strategy, and
              brand partnerships.
            </p>
            <p className="mt-5 font-semibold">
              If this is time-sensitive or urgent, you can also reach me
              directly at fayanjuoladamilola@gmail.com.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactDialog;

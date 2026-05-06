"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "../animations/AnimatedText";
import { StaggerContainer } from "../animations/StaggerContainer";

const EDGE_FN_URL =
  "https://vqyyxwtacovdqzhsdafi.supabase.co/functions/v1/send-contact-form";

const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Add to INITIAL_FORM
const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  message: "",
  subscribe: false,
  _honey: "", // honeypot
};

// ── Client-side validation (mirrors edge function rules) ────────────────────
function validateForm(data) {
  const errors = {};
  if (!data.name || data.name.trim().length < 2)
    errors.name = "Full name must be at least 2 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    errors.email = "Enter a valid email address.";
  if (!/^\+?[\d\s\-().]{7,20}$/.test(data.phone.trim()))
    errors.phone = "Enter a valid phone number.";
  if (!data.message || data.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [serverError, setServerError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear the field error as the user corrects it
    if (fieldErrors[name]) setFieldErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    if (formData._honey) return;

    // Client-side validation first
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(EDGE_FN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });

      const text = await res.text();
      let data = {};
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(`Unexpected response (${res.status}): ${text}`);
      }

      if (!res.ok) throw new Error(data.error || `Server error ${res.status}`);

      setStatus("success");
      setFormData(INITIAL_FORM);
      setFieldErrors({});
      setShowPopup(true);
    } catch (err) {
      setStatus("error");
      setServerError(err.message || "Failed to send. Please try again later.");
      setShowPopup(true);
      console.error("Form error:", err);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    if (status === "success") setStatus("idle");
    if (status === "error") setStatus("idle");
  };

  const isSuccess = status === "success";
  const isLoading = status === "loading";

  return (
    <section className="bg-[#FFFFFF] w-full px-5  lg:max-w-7xl mx-auto py-16">
      <AnimatedText>
        <h2 className="max-w-lg mx-auto text-3xl font-work-sans md:text-4xl lg:text-4xl">
          Let's Connect
        </h2>
      </AnimatedText>

      <div className="flex flex-col max-w-lg mx-auto mt-7">
        <AnimatedText delay={0.2}>
          <p className="text-sm md:text-base lg:text-lg">
            Need a remote job hunting strategy? Seeking Partnerships and
            collaborations? Have any questions about my work? Share the details
            and I'll get back to you personally.
          </p>
        </AnimatedText>

        <StaggerContainer staggerDelay={0.1}>
          <form
            className="flex flex-col gap-4 mt-3"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Full Name */}
            <div className="flex flex-col gap-1">
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className={`p-2 transition-all duration-200 border rounded-full focus:ring-2 focus:ring-blue-500 ${
                  fieldErrors.name ? "border-red-400" : "border-gray-300"
                }`}
                whileFocus={{ scale: 1.02 }}
              />
              {fieldErrors.name && (
                <p className="pl-3 text-xs text-red-500">{fieldErrors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className={`p-2 transition-all duration-200 border rounded-full focus:ring-2 focus:ring-blue-500 ${
                  fieldErrors.email ? "border-red-400" : "border-gray-300"
                }`}
                whileFocus={{ scale: 1.02 }}
              />
              {fieldErrors.email && (
                <p className="pl-3 text-xs text-red-500">{fieldErrors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <motion.input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className={`p-2 transition-all duration-200 border rounded-full focus:ring-2 focus:ring-blue-500 ${
                  fieldErrors.phone ? "border-red-400" : "border-gray-300"
                }`}
                whileFocus={{ scale: 1.02 }}
              />
              {fieldErrors.phone && (
                <p className="pl-3 text-xs text-red-500">{fieldErrors.phone}</p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type your message here"
                className={`h-32 p-2 transition-all duration-200 border resize-none rounded-xl focus:ring-2 focus:ring-blue-500 ${
                  fieldErrors.message ? "border-red-400" : "border-gray-300"
                }`}
                whileFocus={{ scale: 1.02 }}
              />
              {fieldErrors.message && (
                <p className="pl-3 text-xs text-red-500">
                  {fieldErrors.message}
                </p>
              )}
            </div>
            {/* Honeypot - hidden from humans */}
            <input
              type="text"
              name="_honey"
              value={formData._honey}
              onChange={handleInputChange}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />
            {/* Terms checkbox */}
            <div className="flex flex-row items-start gap-2">
              <input
                type="checkbox"
                id="subscribe"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleInputChange}
                className="mt-1"
              />
              <p className="text-sm">
                By submitting, you agree to our{" "}
                <span className="underline">
                  <Link href="/terms">Terms & Conditions</Link>
                </span>
              </p>
            </div>

            <div className="flex justify-end">
              <motion.button
                type="submit"
                disabled={isLoading || isSuccess}
                className="bg-[#EDF296] text-black rounded-full p-2 px-4 md:px-10 font-medium mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {isLoading ? "Sending..." : isSuccess ? "Sent! ✓" : "Submit"}
              </motion.button>
            </div>
          </form>
        </StaggerContainer>

        {/* Success / Error Popup */}
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="max-w-md p-6 mx-4 bg-white shadow-2xl md:p-8 rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center text-center">
                {isSuccess ? (
                  <div className="flex items-center justify-center w-16 h-16 mb-4 bg-green-100 rounded-full">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-16 h-16 mb-4 bg-red-100 rounded-full">
                    <svg
                      className="w-8 h-8 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                )}
                <h3
                  className={`text-xl md:text-2xl font-semibold mb-2 ${isSuccess ? "text-green-700" : "text-red-700"}`}
                >
                  {isSuccess ? "Message Sent!" : "Error"}
                </h3>
                <p className="mb-6 text-gray-600">
                  {isSuccess
                    ? "Thanks for reaching out! I'll get back to you personally soon."
                    : serverError}
                </p>
                <motion.button
                  onClick={closePopup}
                  className={`px-6 py-2 rounded-full font-medium text-white ${
                    isSuccess
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-red-500 hover:bg-red-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ContactForm;

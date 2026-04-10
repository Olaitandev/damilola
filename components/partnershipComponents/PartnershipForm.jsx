"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";

const EDGE_FN_URL =
  "https://vqyyxwtacovdqzhsdafi.supabase.co/functions/v1/send-partnership-form";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  brand: "",
  message: "",
  timeline: "",
  userType: "",
  subscribe: false,
};

function validate(data) {
  const errors = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errors.name = "Full name must be at least 2 characters.";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address.";
  if (!data.phone.trim() || !/^\+?[0-9\s\-().]{7,20}$/.test(data.phone))
    errors.phone = "Enter a valid phone number.";
  if (!data.brand.trim()) errors.brand = "Brand name is required.";
  if (!data.message.trim() || data.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

function PartnershipForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      const t = setTimeout(() => setShowSuccess(false), 6000);
      return () => clearTimeout(t);
    }
  }, [showSuccess]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
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
          brand: formData.brand.trim(),
          message: formData.message.trim(),
          timeline: formData.timeline,
          userType: formData.userType,
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
      setErrors({});
      setShowSuccess(true);
    } catch (err) {
      setStatus("error");
      setServerError(err.message || "Failed to send. Please try again later.");
      console.error("Form error:", err);
    }
  };

  const isLoading = status === "loading";
  const isSuccess = status === "success";

  const inputClass = (field) =>
    `w-full p-2 border rounded-full focus:ring-2 focus:ring-blue-500 transition-colors ${
      errors[field] ? "border-red-400" : "border-gray-300"
    }`;

  return (
    <div className="bg-[#FFFFFF] w-full px-5 md:px-[100px] lg:px-[200px] py-32">
      <div className="text-center">
        <h1 className="text-2xl font-ivy-presto">
          Let's Build Something That Works
        </h1>
        <p className="mt-4 mb-4">
          Tell me a bit about your brand and the type of partnership you're
          interested in. My team and I will respond quickly to explore how we
          can collaborate.
        </p>
      </div>

      <div className="flex-1 px-1">
        <div className="flex flex-col gap-4 mt-3 md:mt-4">
          {/* Full Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass("name")}
          />
          {errors.name && (
            <p className="pl-3 text-xs text-red-500">{errors.name}</p>
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass("email")}
          />
          {errors.email && (
            <p className="pl-3 text-xs text-red-500">{errors.email}</p>
          )}

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass("phone")}
          />
          {errors.phone && (
            <p className="pl-3 text-xs text-red-500">{errors.phone}</p>
          )}

          {/* Brand */}
          <input
            type="text"
            name="brand"
            placeholder="Brand Name"
            value={formData.brand}
            onChange={handleChange}
            className={inputClass("brand")}
          />
          {errors.brand && (
            <p className="pl-3 text-xs text-red-500">{errors.brand}</p>
          )}

          {/* User type */}
          <p className="mb-1 font-medium">Which best describes you?</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              "HR Consulting",
              "Second choice",
              "Campaigns & influencer Partnerships",
              "Workshops & Corporate Training",
              "Others",
            ].map((opt) => (
              <label
                key={opt}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="userType"
                  value={opt}
                  checked={formData.userType === opt}
                  onChange={handleChange}
                />
                {opt}
              </label>
            ))}
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Tell me more about your goals"
            value={formData.message}
            onChange={handleChange}
            className={`w-full h-32 p-2 mt-4 border resize-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-colors ${
              errors.message ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.message && (
            <p className="pl-3 text-xs text-red-500">{errors.message}</p>
          )}

          {/* Timeline */}
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full p-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Timeline
            </option>
            <option value="Immediate">Immediate</option>
            <option value="1-3 months">1-3 months</option>
            <option value="4-6 months">4-6 months</option>
            <option value="Flexible">Flexible</option>
          </select>

          {/* Terms */}
          <div className="flex flex-row items-start gap-2 mt-3">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="mt-1"
            />
            <p className="text-sm">
              By submitting, you agree to our{" "}
              <span className="underline">
                <Link href="/terms">Terms & Conditions</Link>
              </span>
            </p>
          </div>

          {/* Server error */}
          {status === "error" && (
            <p className="text-sm text-center text-red-500">{serverError}</p>
          )}

          <Button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading || isSuccess}
            className="bg-[#EDF296] text-black hover:bg-[#EDF296]/90 mt-8 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading
              ? "Submitting..."
              : isSuccess
                ? "Request Sent!"
                : "Submit Partnership Request"}
          </Button>
        </div>
      </div>

      {/* Success overlay */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowSuccess(false)}
          />
          <div className="relative z-10 bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-sm text-center animate-fade-in">
            <CircleCheck className="w-12 h-12 mx-auto mb-3 text-black" />
            <h2 className="text-xl font-semibold">
              Thank You — Your Request Has Been Received
            </h2>
            <p className="mt-5 text-gray-600">
              I'll review your details and get back to you within 48 hours. In
              the meantime, feel free to connect with me on LinkedIn, Instagram,
              or X for insights on remote work, HR strategy, and brand
              partnerships.
            </p>
            <p className="mt-5 font-semibold">
              If this is time-sensitive, you can reach me directly at
              fayanjuoladamilola@gmail.com.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-6 px-6 py-2 rounded-full bg-[#EDF296] text-black font-medium hover:bg-[#EDF296]/80 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PartnershipForm;

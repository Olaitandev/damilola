"use client";
import React, { useState } from "react";

const EDGE_FN_URL =
  "https://vqyyxwtacovdqzhsdafi.supabase.co/functions/v1/send-free-product";

// Your project's public anon key — safe to expose in the browser
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function Section1({ title1, title2, title3, description }) {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
    };

    try {
      const res = await fetch(EDGE_FN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      // If the response isn't JSON (e.g. a gateway/CORS error page),
      // surface the raw text so you can see exactly what went wrong.
      const text = await res.text();
      let data = {};
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(`Non-JSON response (${res.status}): ${text}`);
      }

      if (!res.ok) {
        throw new Error(data.error || `Server error ${res.status}`);
      }

      setStatus("success");
      setFormData({ name: "", email: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Failed to send. Please try again later.");
      console.error("Form error:", err);
    }
  };

  const isSubmitted = status === "success";
  const isLoading = status === "loading";

  return (
    <section className="bg-[#FFF7F3] w-full">
      <div className="grid w-full grid-cols-1 gap-12 px-6 py-16 mx-auto md:grid-cols-2 max-w-7xl md:px-12 lg:py-24 md:gap-16 md:items-center">
        {/* Headline */}
        <div data-aos="fade-right" data-aos-duration="800">
          <span className="block text-3xl font-bold leading-tight font-ivy-presto md:text-5xl lg:text-5xl">
            {title1}
            <br />
            {title2}
            <br />
            {title3}
          </span>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <p className="font-medium font-work-sans">{description}</p>

          <input
            type="text"
            name="name"
            placeholder="First Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitted}
            className="w-full p-2 bg-white border border-gray-300 rounded-md disabled:opacity-50"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            suppressHydrationWarning
            onChange={handleChange}
            required
            disabled={isSubmitted}
            className="w-full p-2 bg-white border border-gray-300 rounded-md disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={isLoading || isSubmitted}
            className="bg-[#EDF296] text-black rounded-full p-2 hover:bg-[#EDF296]/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading
              ? "Sending..."
              : isSubmitted
                ? "Guide Sent! 🎉"
                : "Get Instant Access"}
          </button>

          {isSubmitted && (
            <p className="text-sm text-center text-green-600">
              ✅ Thank you! Please check your inbox soon.
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-center text-red-500">{errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Section1;

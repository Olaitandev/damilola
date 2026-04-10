"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleCheck } from "lucide-react";

const EDGE_FN_URL =
  "https://vqyyxwtacovdqzhsdafi.supabase.co/functions/v1/send-bookdami-form";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const BookDamiDialog = ({ triggerText = "Book Dami", triggerClassName }) => {
  const [open, setOpen] = useState(false);

  // Handler for trigger click
  const handleTriggerClick = (e) => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1024) {
        e.preventDefault();
        window.location.href = "/bookdami-sm";
        return;
      }
      setOpen(true);
    }
  };
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    eventName: "",
    eventDate: "",
    eventLocation: "",
    engagementType: "",
    customEngagementType: "",
    audience: "",
    topic: "",
    customTopics: "",
    speakingBudget: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    // Tab 0 validation - Contact Information
    if (currentTab === 0) {
      if (!formData.name.trim()) newErrors.name = "Full name is required.";
      if (!formData.email.trim()) newErrors.email = "Email is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = "Enter a valid email.";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
      else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone))
        newErrors.phone = "Enter a valid phone number.";
      if (!formData.organization.trim())
        newErrors.organization = "Organization is required.";
    }

    // Tab 1 validation - Event Details
    if (currentTab === 1) {
      // Message is optional, no validation needed
    }

    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setCurrentTab((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentTab((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      const res = await fetch(EDGE_FN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      const text = await res.text();
      let data = {};
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(`Unexpected response (${res.status}): ${text}`);
      }
      if (!res.ok) throw new Error(data.error || "Failed to send");

      setOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        eventName: "",
        eventDate: "",
        eventLocation: "",
        engagementType: "",
        customEngagementType: "",
        audience: "",
        topic: "",
        customTopics: "",
        speakingBudget: "",
        message: "",
      });
      setErrors({});
      setShowSuccess(true);
    } catch (err) {
      console.error("send error:", err);
      alert(err.message || "Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (!isOpen) {
            setCurrentTab(0);
            setErrors({});
          }
        }}
      >
        <DialogTrigger asChild>
          <button className={triggerClassName} onClick={handleTriggerClick}>
            {triggerText}
          </button>
        </DialogTrigger>

        <DialogContent className="flex flex-col max-w-2xl overflow-y-auto">
          <form onSubmit={handleSubmit} className="flex flex-col flex-1">
            <DialogHeader className="flex-shrink-0 mt-2">
              <DialogTitle className="text-2xl text-center font-ivy-presto">
                Secure Dami for Your Next Event
              </DialogTitle>
              <DialogDescription className="mt-2 text-sm text-center text-gray-600">
                Speaking engagements are limited and reviewed carefully. Use the
                form below to request Dami for your conference, summit, or
                corporate event. My team will respond within 48 hours to discuss
                availability, format, and fees.
              </DialogDescription>

              {/* Tab Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                <div
                  className={`h-2 w-16 rounded-full ${
                    currentTab === 0 ? "bg-[#EDF296]" : "bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`h-2 w-16 rounded-full ${
                    currentTab === 1 ? "bg-[#EDF296]" : "bg-gray-300"
                  }`}
                ></div>
              </div>
            </DialogHeader>

            <div className="flex-1 px-1">
              {/* Tab 0: Contact Information & Event Details */}
              {currentTab === 0 && (
                <div className="flex flex-col gap-4 mt-3 md:mt-4">
                  <h1 className="text-xl font-semibold">Contact Information</h1>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-full focus:ring-2 focus:ring-blue-500 ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && (
                    <p className="pl-3 text-xs text-red-500">{errors.name}</p>
                  )}

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    suppressHydrationWarning
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-full focus:ring-2 focus:ring-blue-500 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="pl-3 text-xs text-red-500">{errors.email}</p>
                  )}

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-full focus:ring-2 focus:ring-blue-500 ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && (
                    <p className="pl-3 text-xs text-red-500">{errors.phone}</p>
                  )}

                  <input
                    type="text"
                    name="organization"
                    placeholder="Brand Name"
                    value={formData.organization}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-full focus:ring-2 focus:ring-blue-500 ${
                      errors.organization ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.organization && (
                    <p className="pl-3 text-xs text-red-500">
                      {errors.organization}
                    </p>
                  )}

                  <h1 className="text-xl font-semibold">Event Details</h1>

                  <input
                    type="text"
                    name="eventName"
                    placeholder="Event Name"
                    value={formData.eventName}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-full focus:ring-2 focus:ring-blue-500 ${
                      errors.eventName ? "border-red-500" : "border-gray-300"
                    }`}
                  />

                  <input
                    type="date"
                    name="eventDate"
                    placeholder="Event Date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-full focus:ring-2 focus:ring-blue-500 ${
                      errors.eventDate ? "border-red-500" : "border-gray-300"
                    }`}
                  />

                  <input
                    type="text"
                    name="eventLocation"
                    placeholder="Event Location: City, Country, or Virtual"
                    value={formData.eventLocation}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-full focus:ring-2 focus:ring-blue-500 ${
                      errors.eventLocation
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />

                  <p className="mb-3 font-medium">Engagement Type</p>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="engagementType"
                        value="Keynote Speech"
                        checked={formData.engagementType === "Keynote Speech"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Keynote Speech
                    </label>

                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="engagementType"
                        value="Workshop/Masterclass"
                        checked={
                          formData.engagementType === "Workshop/Masterclass"
                        }
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Workshop/Masterclass
                    </label>

                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="engagementType"
                        value="Panel Discussion"
                        checked={formData.engagementType === "Panel Discussion"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Panel Discussion
                    </label>

                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="engagementType"
                        value="Fireside Chat"
                        checked={formData.engagementType === "Fireside Chat"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Fireside Chat
                    </label>
                  </div>

                  <input
                    type="text"
                    name="customEngagementType"
                    placeholder="Others: Please specify"
                    value={formData.customEngagementType}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}

              {/* Tab 1 */}
              {currentTab === 1 && (
                <div className="flex flex-col gap-4 mt-3 md:mt-4">
                  <h1 className="text-xl font-semibold">Audience & Topics</h1>
                  <input
                    type="text"
                    name="audience"
                    placeholder="Audience size & profile"
                    value={formData.audience}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-gray-600">
                    Approximate number of attendees and who they are (students,
                    professionals, executives, etc.
                  </p>

                  <p className="mb-3 font-medium">
                    Topics You're Interested In
                  </p>

                  <div className="grid grid-cols-1 gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="topic"
                        value="Remote Work & The Future of Work"
                        checked={
                          formData.topic === "Remote Work & The Future of Work"
                        }
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Remote Work & The Future of Work
                    </label>

                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="topic"
                        value="Entrepreneurship in the Digital Economy"
                        checked={
                          formData.topic ===
                          "Entrepreneurship in the Digital Economy"
                        }
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Entrepreneurship in the Digital Economy
                    </label>

                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="topic"
                        value="Career Development & Navigating the Workspace"
                        checked={
                          formData.topic ===
                          "Career Development & Navigating the Workspace"
                        }
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Career Development & Navigating the Workspace
                    </label>
                  </div>

                  <input
                    type="text"
                    name="customTopics"
                    placeholder="Custom Topics: Please specify"
                    value={formData.customTopics}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
                  />

                  <input
                    type="text"
                    name="speakingBudget"
                    placeholder="Speaking Budget"
                    value={formData.speakingBudget}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-gray-600">
                    Please share the budget you have allocated for this
                    engagement. This helps us recommend the best format and
                    package for your event.
                  </p>

                  <textarea
                    name="message"
                    placeholder="Additional details : Share anything else we should know about your event or expectations."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-2xl h-32 focus:ring-2 focus:ring-blue-500 ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  ></textarea>
                </div>
              )}
            </div>

            <DialogFooter className="flex-shrink-0 mt-4">
              <div className="flex justify-between gap-10">
                {currentTab > 0 && (
                  <Button
                    type="button"
                    onClick={handleBack}
                    className="text-black bg-gray-200 hover:bg-gray-300"
                  >
                    Back
                  </Button>
                )}

                {currentTab < 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-[#EDF296] text-black hover:bg-[#EDF296]/90 flex-1 rounded px-4 py-2"
                  >
                    Next
                  </button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#EDF296] text-black hover:bg-[#EDF296]/90 flex-1"
                  >
                    {isSubmitting ? "Submitting..." : "Request Booking"}
                  </Button>
                )}
              </div>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {showSuccess && (
        <div
          className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ${
            showSuccess ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-sm text-center animate-fade-in">
            <CircleCheck className="w-12 h-12 mx-auto mb-3 text-black" />
            <h2 className="text-xl font-semibold">
              Thank You — Your Booking Request Has Been Received
            </h2>
            <p className="mt-5 text-gray-600">
              I'll review your event details and get back to you within 48
              hours. In the meantime, feel free to connect with me on
              [LinkedIn], [Instagram], or [X] for insights on remote work, HR
              strategy, and speaking engagements.
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

export default BookDamiDialog;

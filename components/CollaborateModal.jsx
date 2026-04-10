"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";

export default function CollaborateModal() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    radio: "",
    message: "",
    terms: false,
  });
  const [submitActive, setSubmitActive] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRadio = (value) => {
    setForm((prev) => ({ ...prev, radio: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitActive(true);
    setSubmitMessage("");

    // Check if terms are accepted
    if (!form.terms) {
      setSubmitMessage("Please accept the terms before submitting.");
      setSubmitActive(false);
      return;
    }

    try {
      // Save to Supabase
      const { data, error } = await supabase
        .from("partnerships")
        .insert({
          full_name: form.name,
          email_address: form.email,
          phone_number: form.phone,
          brand_name: form.brand,
          what_best_describe_you: form.radio,
          message: form.message,
          // terms_accepted: form.terms,
          // created_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      setSubmitMessage(
        "Thank you! Your collaboration request has been submitted successfully."
      );

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        brand: "",
        radio: "",
        message: "",
        terms: false,
      });

      // Close modal after 2 seconds
      setTimeout(() => {
        setIsOpen(false);
        setSubmitMessage("");
      }, 2000);
    } catch (error) {
      console.error("Error submitting collaboration form:", error);
      setSubmitMessage(
        "Sorry, there was an error submitting your request. Please try again."
      );
    } finally {
      setSubmitActive(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} className="bg-white">
      <DialogTrigger asChild>
        <motion.button
          className="bg-[#EDF296] text-black rounded-full p-3 mt-10 text-sm font-medium lg:p-4.5 lg:text-md active:bg-yellow-400"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Let's Collaborate
        </motion.button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <DialogHeader>
            <DialogTitle className="font-ivy-presto text-2xl lg:text-4xl text-center">
              Partnership
            </DialogTitle>
            <DialogDescription className="text-center mb-5 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="border p-3 rounded-full w-full"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="mt-4 border p-3 rounded-full w-full"
            />
            <input
              type="number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="mt-4 border p-3 rounded-full w-full"
            />
            <input
              type="text"
              name="brand"
              value={form.brand}
              onChange={handleChange}
              placeholder="Brand Name"
              className="mt-4 border p-3 rounded-full w-full mb-4"
            />

            <Label htmlFor="description" className="mb-3">
              Which best describes you?
            </Label>
            <RadioGroup
              value={form.radio}
              onValueChange={handleRadio}
              className="flex flex-row justify-between gap-4"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="firstChoice" id="r1" />
                  <Label htmlFor="r1">First choice</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="thirdChoice" id="r3" />
                  <Label htmlFor="r3">Third choice</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="fifthChoice" id="r5" />
                  <Label htmlFor="r5">Fifth choice</Label>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="secondChoice" id="r2" />
                  <Label htmlFor="r2">Second choice</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="fourthChoice" id="r4" />
                  <Label htmlFor="r4">Fourth choice</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="other" id="r6" />
                  <Label htmlFor="r6">Other</Label>
                </div>
              </div>
            </RadioGroup>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className="mt-4 border rounded-xl p-4 w-full"
              rows="4"
            ></textarea>

            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="terms"
                name="terms"
                checked={form.terms}
                onCheckedChange={(checked) =>
                  handleChange({
                    target: { name: "terms", type: "checkbox", checked },
                  })
                }
                required
              />
              <Label htmlFor="terms" className="text-sm">
                I accept the terms <span className="text-red-500">*</span>
              </Label>
            </div>

            <div className="flex justify-end">
              <motion.button
                type="submit"
                disabled={submitActive || !form.terms}
                className={`bg-[#EDF296] text-black rounded-full p-3 mt-10 text-sm font-medium lg:p-4.5 lg:text-md w-32 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed ${
                  submitActive ? "bg-yellow-400" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {submitActive ? "Submitting..." : "Submit"}
              </motion.button>
            </div>

            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 p-3 rounded-lg text-center text-sm ${
                  submitMessage.includes("successfully")
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "bg-red-100 text-red-700 border border-red-300"
                }`}
              >
                {submitMessage}
              </motion.div>
            )}
          </form>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

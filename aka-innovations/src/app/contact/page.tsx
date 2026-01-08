"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Show loading toast
    const loadingToast = toast.loading("Sending message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        toast.success("Message sent successfully!", { id: loadingToast });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "General Inquiry",
          message: "",
        });
      } else {
        setStatus("error");
        toast.error("Failed to send message. Please try again.", { id: loadingToast });
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      toast.error("An error occurred. Please try again later.", { id: loadingToast });
    }
  };
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#e8eaed] flex items-center justify-center py-16 px-4">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Purple Orb */}
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[15%] left-[5%] w-[350px] h-[350px] rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-[100px] opacity-70"
        />

        {/* Top Right Cyan/Green Orb */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[10%] right-[0%] w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-cyan-300 via-blue-400 to-purple-500 blur-[100px] opacity-70"
        />

        {/* Bottom Left Blue Orb */}
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[5%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-400 to-cyan-300 blur-[100px] opacity-70"
        />

        {/* Bottom Right Purple/Pink Orb */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-[15%] right-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-tl from-purple-500 to-pink-400 blur-[80px] opacity-60"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg">
            Lets build something intelligent
          </p>
        </div>

        {/* Glass Card with Strong Border */}
        <div className="w-full bg-white/50 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border-2 border-white/60 overflow-hidden flex flex-col lg:flex-row">
          {/* Left Side: Contact Info */}
          <div className="w-full lg:w-[38%] relative p-10 md:p-12 flex flex-col justify-between overflow-hidden">
            {/* Pink/Purple Gradient Glow behind heading */}
            <div className="absolute top-[15%] left-[10%] w-[250px] h-[150px] bg-gradient-to-br from-pink-400 via-purple-400 to-transparent blur-[60px] opacity-60 pointer-events-none" />

            {/* Purple gradient at bottom */}
            <div className="absolute bottom-[10%] left-[20%] w-[280px] h-[280px] bg-gradient-to-t from-purple-400 via-blue-400 to-transparent blur-[80px] opacity-50 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-gray-900 p-1.5 rounded">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-base text-gray-900 font-semibold">
                    hr@akainnovations.com
                  </span>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-gray-900 p-1.5 rounded">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 leading-relaxed text-sm max-w-[250px]">
                    08 Triveni Tower 3rd Floor, Central Avenue, GandhiPutla,
                    Itwari, Nagpur 440002, India.
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons at Bottom */}
            <div className="relative z-10 mt-16 flex space-x-4">
              <a
                href="#"
                className="p-2.5 bg-[#1DA1F2] text-white rounded-md hover:scale-110 transition-transform"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2.5 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white rounded-md hover:scale-110 transition-transform"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2.5 bg-[#0077B5] text-white rounded-md hover:scale-110 transition-transform"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-[62%] p-10 md:p-12 relative bg-white/30">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="text-sm font-medium text-gray-900 block mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-gray-400 focus:border-gray-900 outline-none pb-2 text-gray-900 transition-colors"
                  />
                </div>
                <div className="relative">
                  <label className="text-sm font-medium text-gray-900 block mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-gray-400 focus:border-gray-900 outline-none pb-2 text-gray-900 transition-colors"
                  />
                </div>
              </div>

              {/* Contact Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="text-sm font-medium text-gray-900 block mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-gray-400 focus:border-gray-900 outline-none pb-2 text-gray-900 transition-colors"
                  />
                </div>
                <div className="relative">
                  <label className="text-sm font-medium text-gray-900 block mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-gray-400 focus:border-gray-900 outline-none pb-2 text-gray-900 transition-colors"
                  />
                </div>
              </div>

              {/* Subject Selection */}
              <div>
                <label className="text-sm font-bold text-gray-900 block mb-4">
                  Select Subject?
                </label>
                <div className="flex flex-wrap gap-6">
                  {[
                    "General Inquiry",
                    "Brand Identity",
                    "Product",
                    "Got an Idea",
                  ].map((subject) => (
                    <label
                      key={subject}
                      className="flex items-center cursor-pointer space-x-2.5 group"
                    >
                      <div className="relative w-4 h-4 rounded-full border-2 border-gray-900 flex items-center justify-center">
                        <input
                          type="radio"
                          name="subject"
                          value={subject}
                          checked={formData.subject === subject}
                          onChange={handleChange}
                          className="peer w-full h-full opacity-0 absolute cursor-pointer"
                        />
                        <div className="w-2 h-2 bg-gray-900 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-sm text-gray-900 font-medium">
                        {subject}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <label className="text-sm font-medium text-gray-900 block mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={1}
                  placeholder="Write your message.."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-gray-400 focus:border-gray-900 outline-none pb-2 text-gray-900 placeholder:text-gray-500 transition-colors resize-none"
                />
              </div>

              {/* Footer Action */}
              <div className="flex items-center justify-end pt-6 relative">
                {/* Paper Plane Trail */}
                <div className="absolute left-0 bottom-8 pointer-events-none hidden lg:block">
                  <svg
                    width="280"
                    height="100"
                    viewBox="0 0 280 100"
                    fill="none"
                    className="opacity-40"
                  >
                    <path
                      d="M 20 80 Q 80 20 140 60 T 260 50"
                      stroke="#9333ea"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Paper Plane Icon */}
                <div className="absolute right-44 -bottom-2 pointer-events-none hidden lg:block text-gray-600">
                  <Send size={40} className="rotate-45" strokeWidth={1.5} />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold py-3.5 px-10 rounded-lg transition-all active:scale-95 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

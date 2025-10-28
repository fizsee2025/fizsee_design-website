"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

interface ConsultationPopupProps {
  showPopup: boolean;
  onClose: () => void;
}

interface Web3FormResponse {
  success: boolean;
  message?: string;
}

const ConsultationPopup: React.FC<ConsultationPopupProps> = ({
  showPopup,
  onClose,
}) => {
  const [loading, setLoading] = useState(false);

  if (!showPopup) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const toastId = toast.loading("Sending...");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          subject: "New Consultation Form Submission",
          form_name: "Consultation Form",
        }),
      });

      let result: Web3FormResponse = { success: false };
      try {
        result = (await res.json()) as Web3FormResponse;
      } catch {}

      if (result.success) {
        toast.success(result.message || "Message sent successfully!", {
          id: toastId,
        });
        form.reset();
        setTimeout(onClose, 1400);
      } else {
        toast.error(result.message || "Failed to send message", {
          id: toastId,
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999]"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div
        className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center animate-fadeIn z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
          aria-label="Close consultation popup"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Get a Free Consultation
        </h2>
        <p className="text-gray-600 mb-6">
          Let us help you grow your business with expert solutions.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <input
            type="hidden"
            name="access_key"
            value="80e59204-d542-42e8-b0c7-f988a94dcb42"
          />

          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              required
              disabled={loading}
              className="peer w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2B4A28] outline-none placeholder-black"
              placeholder="Your Name"
              aria-label="Your name"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              required
              disabled={loading}
              className="peer w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2B4A28] outline-none placeholder-black"
              placeholder="Your Email"
              aria-label="Your email"
            />
          </div>
          <div className="relative">
            <input
              type="number"
              name="number"
              id="number"
              required
              disabled={loading}
              className="peer w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2B4A28] outline-none placeholder-black"
              placeholder="Your Number"
              aria-label="Your Number"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2B4A28] text-white py-3 rounded-lg font-semibold hover:bg-[#233d21] transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Get Free Consultation"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationPopup;

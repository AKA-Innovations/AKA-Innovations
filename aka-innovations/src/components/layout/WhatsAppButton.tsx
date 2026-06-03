"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface WhatsAppButtonProps {
  variant?: "floating" | "inline";
  number?: string;
  message?: string;
  className?: string;
}

export function WhatsAppButton({
  variant = "floating",
  number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  message = "Hello! I would like to get in touch regarding your services.",
  className = "",
}: WhatsAppButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const formattedNumber = number.startsWith("91") ? number : `91${number}`;
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    if (variant === "floating") {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [variant]);

  const handleOpenWhatsApp = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const whatsappIcon = (
    <svg
      className="w-6 h-6 fill-current"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97-1.861-1.868-4.339-2.897-6.97-2.899-5.437 0-9.862 4.37-9.866 9.8.001 1.961.506 3.81 1.468 5.474l-.98 3.58 3.688-.956zm11.53-6.19c-.3-.149-1.774-.864-2.046-.962-.272-.098-.471-.147-.669.149-.197.297-.767.962-.94.1.162-.174-.173-.3-.42-.864-2.278-2.007-4.048-3.644-4.662-4.698-.174-.298-.018-.459.13-.607.134-.133.3-.347.45-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.774-.717 2.022-1.41.248-.693.248-1.288.173-1.41-.074-.124-.272-.198-.57-.347z" />
    </svg>
  );

  if (variant === "inline") {
    return (
      <button
        type="button"
        onClick={handleOpenWhatsApp}
        className={`flex items-center justify-center gap-2 border-2 border-[#25D366] hover:bg-[#25D366] text-[#25D366] hover:text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-300 active:scale-95 shadow-sm hover:shadow-[0_4px_12px_rgba(37,211,102,0.2)] cursor-pointer ${className}`}
      >
        {whatsappIcon}
        <span>WhatsApp Us</span>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end ${className}`}>
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-3 mr-1 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-3.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 dark:border-slate-800 flex items-center gap-3 max-w-[260px] relative text-sm font-medium"
          >
            <div className="absolute right-6 bottom-[-6px] w-3 h-3 bg-white dark:bg-slate-900 border-r border-b border-slate-100 dark:border-slate-800 rotate-45" />
            <span>Need help? Chat with us on WhatsApp!</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-0.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleOpenWhatsApp}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.6)] transition-all cursor-pointer overflow-visible"
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none group-hover:animate-none" />
        {whatsappIcon}
      </motion.button>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function WhatsAppFloatingButton() {
  return (
    <motion.a
      href="https://wa.me/919247790025"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 1.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] group"
    >
      {/* Pulse background ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none pointer-events-none" style={{ animationDuration: '2s' }} />

      {/* WhatsApp SVG Icon */}
      <svg
        className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10 filter drop-shadow-sm transition-transform duration-300 group-hover:rotate-12"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 2.01 14.116.984 11.487.984c-5.448 0-9.873 4.372-9.877 9.802-.001 1.762.48 3.483 1.391 5.016l-.99 3.616 3.733-.974zm12.355-6.914c-.313-.156-1.85-.91-2.138-1.014-.287-.104-.497-.156-.706.156-.21.312-.81 1.014-.992 1.22-.183.207-.367.234-.68.079-.313-.156-1.32-.486-2.515-1.551-.93-.83-1.558-1.855-1.74-2.16-.183-.313-.02-.482.137-.638.14-.14.313-.365.47-.547.157-.183.21-.313.313-.52.103-.209.052-.392-.026-.548-.078-.156-.706-1.7-.967-2.327-.254-.61-.513-.526-.706-.536-.183-.01-.392-.01-.6-.01-.208 0-.547.078-.833.39-.286.313-1.096 1.071-1.096 2.613 0 1.541 1.122 3.031 1.278 3.239.156.208 2.209 3.373 5.353 4.73.748.323 1.332.516 1.787.66.753.24 1.438.206 1.98.125.604-.09 1.85-.756 2.112-1.448.263-.692.263-1.287.183-1.414-.078-.127-.287-.208-.6-.364z" />
      </svg>
    </motion.a>
  );
}

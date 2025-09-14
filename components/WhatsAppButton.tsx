"use client"

import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    const phoneNumber = "2349035177568" // <-- replace with your number (no + or leading zeros)
    const message = "Hello SmartTech Academy! I'm interested in your courses."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 flex items-center gap-2 px-5 py-3 rounded-full 
                 bg-green-500 text-white font-medium shadow-lg 
                 animate-bounce hover:bg-green-600 transition-all z-50"
    >
      <FaWhatsapp className="text-2xl" />
      Chat with us
    </button>
  )
}

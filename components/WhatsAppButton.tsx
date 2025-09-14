"use client"

import { usePathname } from "next/navigation"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  const pathname = usePathname()

  // Hide button on enrollment page
  if (pathname === "/enroll") {
    return null
  }

  const openWhatsApp = () => {
    const phoneNumber = "2348012345678" // <-- replace with your number
    const message = "Hello SmartTech Academy! I'm interested in your courses."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-4 right-4 flex items-center gap-2 px-3 py-2 rounded-full
                 bg-green-500 text-white font-medium shadow-lg
                 animate-bounce hover:bg-green-600 transition-all z-50
                 text-sm sm:text-base sm:px-5 sm:py-3"
    >
      <FaWhatsapp className="text-xl sm:text-2xl" />
      <span className="hidden sm:inline">Chat with us</span>
      <span className="inline sm:hidden">Chat</span>
    </button>
  )
}

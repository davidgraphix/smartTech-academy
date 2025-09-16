"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Zap, Code2 } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-cyan-400/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex items-center group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 animate-pulse-glow">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white group-hover:text-gradient group-hover:animate-neon-flicker">
              DSmartTech Academy
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("courses")}
              className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110 relative group px-3 py-2 rounded-lg hover:bg-black/50"
            >
              Courses
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110 relative group px-3 py-2 rounded-lg hover:bg-black/50"
            >
              Benefits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110 relative group px-3 py-2 rounded-lg hover:bg-black/50"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-110 relative group px-3 py-2 rounded-lg hover:bg-black/50"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* <Button
              variant="outline"
              className="bg-black/60 border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 hover-lift backdrop-blur-sm"
              onClick={() => router.push("/login")}
            >
              Login
            </Button> */}
            <Button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white animate-pulse-glow hover-lift neon-border"
              onClick={() => router.push("/enroll")}
            >
              <Zap className="mr-2 h-4 w-4" />
              Enroll Now
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg bg-black/60 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 bg-black/80 backdrop-blur-md border-t border-cyan-400/20 animate-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col space-y-6">
              <button
                onClick={() => scrollToSection("courses")}
                className="text-white hover:text-cyan-400 transition-all duration-300 text-left"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-white hover:text-cyan-400 transition-all duration-300 text-left"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-white hover:text-cyan-400 transition-all duration-300 text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-cyan-400 transition-all duration-300 text-left"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-3 pt-4">
                <Button
                  variant="outline"
                  className="bg-black/60 border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 backdrop-blur-sm"
                  onClick={() => router.push("/login")}
                >
                  Login
                </Button>
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white"
                  onClick={() => router.push("/enroll")}
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Enroll Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

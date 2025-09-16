"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frontend Developer at TechCorp",
    content:
      "SmartTech Academy transformed my career! The hands-on projects and mentorship helped me land my dream job in just 4 months.",
    rating: 5,
    avatar: "/professional-woman-smiling.png",
  },
  {
    name: "Michael Chen",
    role: "Fullstack Developer at StartupXYZ",
    content:
      "The curriculum is incredibly practical. I built real applications that I could showcase to employers. The career support was outstanding.",
    rating: 5,
    avatar: "/professional-man-smiling.png",
  },
  {
    name: "Aisha Okafor",
    role: "UI/UX Designer at DesignStudio",
    content:
      "The Figma course was comprehensive and the portfolio projects helped me transition from marketing to design. Highly recommended!",
    rating: 5,
    avatar: "/professional-woman-designer.png",
  },
  {
    name: "David Rodriguez",
    role: "Backend Developer at CloudTech",
    content:
      "Excellent instruction and real-world projects. The mentorship program made all the difference in my learning journey.",
    rating: 5,
    avatar: "/professional-man-developer.png",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-20 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What Our <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Students Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join hundreds of successful graduates who transformed their careers with DSmartTech Academy
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-10 bg-gradient-to-br from-gray-800 to-gray-900 border border-pink-500/30 shadow-lg rounded-2xl relative overflow-hidden">
            <CardContent className="text-center space-y-6">
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow" />
                ))}
              </div>

              <blockquote className="text-xl text-gray-200 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <Avatar className="h-14 w-14 border-2 border-pink-500/40 shadow-lg">
                  <AvatarImage
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                  />
                  <AvatarFallback className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold">
                    {testimonials[currentIndex].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-semibold text-white">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-gray-400">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-gradient-to-r from-pink-500 to-purple-500 scale-110" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

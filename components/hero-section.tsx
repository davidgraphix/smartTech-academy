"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Users, Award, Zap, Rocket } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function HeroSection() {
  const router = useRouter()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden min-h-screen flex items-center">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 255, 0.15), transparent 40%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism mb-6 animate-float">
              <Zap className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Next-Gen Tech Education</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance mb-6 leading-tight text-white">
              Master <span className="text-gradient animate-neon-flicker">Professional Tech Skills</span> with Job-Ready
              Training
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 text-pretty mb-12 max-w-4xl mx-auto leading-relaxed">
            Learn Frontend, Backend, Fullstack Development & UI/UX Design with hands-on projects, 1-on-1 mentorship, and
            career support that gets you hired in the tech industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="text-lg px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white animate-pulse-glow hover-lift neon-border"
              onClick={() => router.push("/enroll")}
            >
              <Rocket className="mr-3 h-6 w-6" />
              Start Learning Today
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-12 py-4 glass-morphism border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 hover-lift bg-transparent"
              onClick={() => {
                document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              View Courses
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center group hover-lift">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-4 glass-morphism animate-float group-hover:animate-pulse-glow">
                <Code className="h-10 w-10 text-cyan-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">4</div>
              <div className="text-lg text-gray-300">Professional Courses</div>
            </div>

            <div className="flex flex-col items-center group hover-lift" style={{ animationDelay: "1s" }}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center mb-4 glass-morphism animate-float group-hover:animate-pulse-glow">
                <Users className="h-10 w-10 text-purple-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">1-on-1</div>
              <div className="text-lg text-gray-300">Expert Mentorship</div>
            </div>

            <div className="flex flex-col items-center group hover-lift" style={{ animationDelay: "2s" }}>
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-2xl flex items-center justify-center mb-4 glass-morphism animate-float group-hover:animate-pulse-glow">
                <Award className="h-10 w-10 text-orange-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-lg text-gray-300">Job-Ready Training</div>
            </div>
          </div>

          <div className="absolute top-20 left-10 opacity-20 animate-float">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 flex items-center justify-center">
              <Code className="h-8 w-8 text-cyan-400" />
            </div>
          </div>
          <div className="absolute top-40 right-20 opacity-20 animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-600/30 flex items-center justify-center">
              <Zap className="h-6 w-6 text-purple-400" />
            </div>
          </div>
          <div className="absolute bottom-20 left-20 opacity-20 animate-float" style={{ animationDelay: "3s" }}>
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500/30 to-red-600/30 flex items-center justify-center">
              <Rocket className="h-7 w-7 text-orange-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

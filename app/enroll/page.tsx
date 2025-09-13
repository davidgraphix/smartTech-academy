"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, CheckCircle, Code, Palette, Server, Layers, Zap, Star, Clock, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { LiveBackground } from "@/components/live-background"

export default function EnrollPage() {
  const router = useRouter()
  const [selectedCourse, setSelectedCourse] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    goals: "",
    agreeToTerms: false,
  })

  const courses = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: Code,
      price: "₦80,000",
      originalPrice: "₦100,000",
      duration: "3 months",
      level: "Beginner to Advanced",
      description: "Master React, Next.js, TypeScript, and modern frontend technologies",
      features: ["React & Next.js", "TypeScript", "Tailwind CSS", "State Management", "API Integration"],
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: Server,
      price: "₦80,000",
      originalPrice: "₦100,000",
      duration: "3 months",
      level: "Beginner to Advanced",
      description: "Build scalable APIs with Node.js, databases, and cloud deployment",
      features: ["Node.js & Express", "Database Design", "API Development", "Authentication", "Cloud Deployment"],
    },
    {
      id: "fullstack",
      title: "Fullstack Development",
      icon: Layers,
      price: "₦120,000",
      originalPrice: "₦150,000",
      duration: "4 months",
      level: "Intermediate to Advanced",
      description: "Complete web development from frontend to backend and deployment",
      features: [
        "Full MERN Stack",
        "Database Integration",
        "DevOps Basics",
        "Project Management",
        "Portfolio Development",
      ],
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      icon: Palette,
      price: "₦60,000",
      originalPrice: "₦75,000",
      duration: "2.5 months",
      level: "Beginner to Advanced",
      description: "Design beautiful, user-friendly interfaces and experiences",
      features: ["Design Principles", "Figma Mastery", "User Research", "Prototyping", "Design Systems"],
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", { ...formData, selectedCourse })
    alert("Enrollment submitted successfully! We'll contact you within 24 hours.")
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <LiveBackground />

      <div className="relative z-10">
        {/* Header */}
        <header className="glass-morphism border-b border-cyan-400/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => router.back()}
                className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
              <h1 className="text-2xl font-bold text-gradient">Enroll Now</h1>
              <div></div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">Start Your Tech Journey Today</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose your course and take the first step towards a successful tech career with expert mentorship and
                job-ready training.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Course Selection */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Choose Your Course</h2>
                <div className="space-y-6">
                  {courses.map((course) => {
                    const Icon = course.icon
                    return (
                      <Card
                        key={course.id}
                        className={`glass-morphism border-2 transition-all duration-300 hover-lift cursor-pointer ${
                          selectedCourse === course.id
                            ? "border-cyan-400 bg-cyan-400/5"
                            : "border-gray-700 hover:border-cyan-400/50"
                        }`}
                        onClick={() => setSelectedCourse(course.id)}
                      >
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                                <Icon className="h-6 w-6 text-cyan-400" />
                              </div>
                              <div>
                                <CardTitle className="text-white text-xl">{course.title}</CardTitle>
                                <CardDescription className="text-gray-400">{course.level}</CardDescription>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-gradient">{course.price}</div>
                              <div className="text-sm text-gray-500 line-through">{course.originalPrice}</div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-300 mb-4">{course.description}</p>
                          <div className="flex items-center gap-6 mb-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {course.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              1-on-1 Mentorship
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4" />
                              Certificate
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {course.features.map((feature, index) => (
                              <span key={index} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>

              {/* Enrollment Form */}
              <div>
                <Card className="glass-morphism border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl flex items-center gap-2">
                      <Zap className="h-6 w-6 text-cyan-400" />
                      Complete Your Enrollment
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Fill out the form below to secure your spot in the program
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-white">
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="glass-morphism border-gray-600 text-white"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-white">
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="glass-morphism border-gray-600 text-white"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-white">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="glass-morphism border-gray-600 text-white"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-white">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="glass-morphism border-gray-600 text-white"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="experience" className="text-white">
                          Programming Experience
                        </Label>
                        <Select
                          value={formData.experience}
                          onValueChange={(value) => setFormData({ ...formData, experience: value })}
                        >
                          <SelectTrigger className="glass-morphism border-gray-600 text-white">
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Complete Beginner</SelectItem>
                            <SelectItem value="some">Some Experience</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="goals" className="text-white">
                          Career Goals
                        </Label>
                        <Textarea
                          id="goals"
                          value={formData.goals}
                          onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                          placeholder="Tell us about your career goals and what you hope to achieve..."
                          className="glass-morphism border-gray-600 text-white"
                          rows={4}
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                        />
                        <Label htmlFor="terms" className="text-sm text-gray-300">
                          I agree to the terms and conditions and privacy policy
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 animate-pulse-glow hover-lift text-lg py-3"
                        disabled={!selectedCourse || !formData.agreeToTerms}
                      >
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Complete Enrollment
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

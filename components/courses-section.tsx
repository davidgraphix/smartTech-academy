"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Layers, Palette, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const courses = [ 
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Master HTML, CSS, JavaScript, Bootstrap, and React to build modern, responsive websites and applications.",
    icon: Code,
    originalPrice: "₦200,000",
    discountedPrice: "₦150,000",
    discount: "25% OFF",
    features: [
      "React & JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "State Management",
    ],
    duration: "12 weeks",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: "backend",
    title: "Backend Development (C# & .NET)",
    description:
      "Learn backend engineering with C#, .NET, and MSSQL. Build scalable APIs, database-driven applications, and deploy to the cloud.",
    icon: Server,
    originalPrice: "₦450,000",
    discountedPrice: "₦350,000",
    discount: "22% OFF",
    features: [
      "C# (CSharp) & .NET",
      "MSSQL Database Design",
      "API Development",
      "Cloud Deployment",
    ],
    duration: "16 weeks",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    id: "fullstack",
    title: "Fullstack Development",
    description:
      "Become a complete developer by combining React (frontend) with C#/.NET (backend) and MSSQL database integration.",
    icon: Layers,
    originalPrice: "₦500,000",
    discountedPrice: "₦450,000",
    discount: "10% OFF",
    features: [
      "React & TypeScript",
      "C# & .NET Backend",
      "MSSQL Integration",
      "Authentication & Deployment",
    ],
    duration: "24 weeks",
    popular: true,
    gradient: "from-purple-500 to-pink-400",
  },
  {
    id: "uiux",
    title: "UI/UX Design (Figma)",
    description:
      "Design beautiful, user-friendly interfaces with industry-standard tools.",
    icon: Palette,
    originalPrice: "₦120,000",
    discountedPrice: "₦95,000",
    discount: "21% OFF",
    features: [
      "Figma Mastery",
      "Design Systems",
      "User Research",
      "Prototyping",
    ],
    duration: "10 weeks",
    gradient: "from-orange-500 to-yellow-400",
  },
];


export function CoursesSection() {
  const router = useRouter();

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tech Career Path
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional courses designed to get you job-ready with hands-on
            projects and industry mentorship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <Card
                key={course.id}
                className={`relative overflow-hidden rounded-2xl border-0 bg-gradient-to-br ${course.gradient} p-[2px]  hover-lift transition-all`}
              >
                <div className="bg-gray-900 rounded-2xl h-full w-full p-6 flex flex-col justify-between ">
                  {course.popular && (
                    <Badge className="absolute -top-0.5 left-1/2 -translate-x-1/2 bg-gradient-to-r animate-pulse from-pink-500 to-purple-500 text-white shadow-lg">
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader>
                    <div
                      className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${course.gradient} shadow-md`}
                    >
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {course.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-cyan-400">
                        {course.discountedPrice}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        {course.originalPrice}
                      </span>
                    </div>
                    <Badge className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1">
                      {course.discount}
                    </Badge>

                    <div className="space-y-2">
                      <div className="text-sm text-gray-400">
                        Duration: {course.duration}
                      </div>
                      <ul className="space-y-1">
                        {course.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-sm text-gray-300"
                          >
                            <CheckCircle className="h-4 w-4 text-cyan-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white animate-pulse-glow hover-lift neon-border"
                      onClick={() => router.push("/enroll")}
                    >
                      Enroll Now
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

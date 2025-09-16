import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Briefcase, Users, MessageSquare, FileText, Globe, UserCheck } from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "Certificate of Completion",
    description: "Industry-recognized certificates to showcase your skills to employers",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Briefcase,
    title: "Real-World Portfolio Projects",
    description: "Build impressive projects that demonstrate your abilities to potential employers",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: Globe,
    title: "Job-Ready Portfolio Website",
    description: "Professional portfolio website to showcase your work (for development students)",
    gradient: "from-teal-500 to-green-400",
  },
  {
    icon: FileText,
    title: "Resume & LinkedIn Setup",
    description: "Professional resume writing and LinkedIn profile optimization support",
    gradient: "from-orange-500 to-yellow-400",
  },
  {
    icon: Users,
    title: "1-on-1 Mentorship & Q&A",
    description: "Personal guidance from industry experts to accelerate your learning",
    gradient: "from-pink-500 to-red-400",
  },
  {
    icon: MessageSquare,
    title: "Private Tech Community",
    description: "Access to exclusive WhatsApp/Telegram community for networking and support",
    gradient: "from-indigo-500 to-blue-400",
  },
  {
    icon: UserCheck,
    title: "Internship Recommendations",
    description: "Connect with internship opportunities through our industry network",
    gradient: "from-green-500 to-emerald-400",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">DSmartTech Academy?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We don't just teach you to code – we prepare you for a successful tech career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card
                key={index}
                className="relative overflow-hidden border-0 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 hover:shadow-2xl transition-all group"
              >
                <div className={`absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity bg-gradient-to-br ${benefit.gradient}`} />
                <CardHeader className="relative z-10">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br ${benefit.gradient} shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base text-gray-200">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

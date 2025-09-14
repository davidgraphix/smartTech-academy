import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CoursesSection } from "@/components/courses-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { DiscountBanner } from "@/components/discount-banner"
import { Footer } from "@/components/footer"
import { LiveBackground } from "@/components/live-background"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <LiveBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <DiscountBanner />
          <CoursesSection />
          <BenefitsSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

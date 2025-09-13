"use client"

import { useState, useEffect } from "react"
import { Clock, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function DiscountBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45,
  })
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white py-6 relative overflow-hidden animate-gradient-shift"
      id="discount"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 animate-pulse"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse-glow">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-xl text-white">Limited-Time Early Bird Discount!</div>
              <div className="text-white/90 text-sm">Save up to 25% OFF - First 10 students only</div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-white bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
                  {timeLeft.days}
                </div>
                <div className="text-xs text-white/80 mt-1">DAYS</div>
              </div>
              <div className="text-white text-xl">:</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
                  {timeLeft.hours}
                </div>
                <div className="text-xs text-white/80 mt-1">HOURS</div>
              </div>
              <div className="text-white text-xl">:</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
                  {timeLeft.minutes}
                </div>
                <div className="text-xs text-white/80 mt-1">MINS</div>
              </div>
              <div className="text-white text-xl">:</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
                  {timeLeft.seconds}
                </div>
                <div className="text-xs text-white/80 mt-1">SECS</div>
              </div>
            </div>

            <Button
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-6 py-3 hover-lift animate-pulse-glow"
              onClick={() => router.push("/enroll")}
            >
              <Zap className="mr-2 h-4 w-4" />
              Claim Discount
            </Button>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 md:relative md:top-0 md:right-0 p-2 hover:bg-white/20 rounded-full transition-all duration-300 text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

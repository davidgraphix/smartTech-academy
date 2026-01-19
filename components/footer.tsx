import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Mail, Phone, Code2 } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
           <div className="flex">
             <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 animate-pulse-glow">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary text-white font-bold">
              DSmartTech Academy
            </h3>
           </div>
            <p className="text-background/80">
              Equipping individuals with professional tech skills for successful
              careers in technology.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <Link href="https://wa.me/+2349022720268">
                  <span className="text-sm">WhatsApp Business</span>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <Link href="mailto:dsmarttechacademy@gmail.com">
                  <span className="text-sm">dsmarttechacademy@gmail.com</span>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <Link href="phone:+2348160499031">
                  <span className="text-sm">+234 (8) 160 499 031</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Courses</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="/enroll" className="hover:text-secondary transition-colors">
                  Frontend Development
                </a>
              </li>
              <li>
                <a href="/enroll" className="hover:text-secondary transition-colors">
                  Backend Development
                </a>
              </li>
              <li>
                <a href="/enroll" className="hover:text-secondary transition-colors">
                  Fullstack Development
                </a>
              </li>
              <li>
                <a href="/enroll" className="hover:text-secondary transition-colors">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Support</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Student Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Career Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary  transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Stay Updated</h4>
            <p className="text-background/80 text-sm">
              Get the latest course updates and tech career tips.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2025 SmartTech Academy. All rights reserved. | Building the next
            generation of tech professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}

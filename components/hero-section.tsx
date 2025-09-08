"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/40 to-background relative overflow-hidden">
      {/* Decorative gradient blur circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="space-y-4">
            <Image
              src="/ahmed.jpg"
              alt="Ahmed Hamada Ragab"
              width={220}
              height={220}
              className="rounded-full mx-auto shadow-2xl hover:scale-105 transition-transform duration-300"
            />

            <h1 className="font-montserrat font-extrabold text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ahmed Hamada Ragab
            </h1>

            <h2 className="font-montserrat font-semibold text-lg md:text-2xl lg:text-3xl text-primary">
              Mobile Application Developer & Full Stack Developer
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up">
            Full Stack Developer with expertise in building dynamic web and mobile applications using React.js, Next.js,
            Node.js, and Flutter. Skilled in scalable apps, performance optimization, and user experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

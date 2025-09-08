"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Mail } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl text-foreground text-balance">
              Ahmed Hamada Ragab
            </h1>
            <h2 className="font-montserrat font-semibold text-xl md:text-2xl lg:text-3xl text-primary">
              Mobile Application Developer & Full Stack Developer
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Full Stack Developer with expertise in building dynamic web and mobile applications using React.js, Next.js,
            Node.js, and Flutter. Skilled in scalable apps, performance optimization, and user experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-3 bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

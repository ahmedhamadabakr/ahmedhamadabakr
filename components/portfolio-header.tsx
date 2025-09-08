"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function PortfolioHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = ["about", "skills", "experience", "projects", "education", "contact"]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <div className="font-montserrat font-extrabold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
            Ahmed Bakr
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-muted-foreground hover:text-primary transition-colors duration-200 capitalize after:content-[''] after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full after:mt-1"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 px-6 border-t border-border bg-background/95 rounded-xl shadow-lg animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors duration-200 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

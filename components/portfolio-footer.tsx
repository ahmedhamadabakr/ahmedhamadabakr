import { Heart, ArrowUpRight } from "lucide-react"

export function PortfolioFooter() {
  return (
    <footer className="relative border-t border-border/50 bg-background/80 backdrop-blur-xl">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-foreground">
                Ahmed Hamada Bakr
              </span>
              . All rights reserved.
            </p>
          </div>

          {/* Made With */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Crafted with</span>

            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />

            <span>using</span>

            <span className="font-medium text-foreground">
              Next.js
            </span>

            <span className="text-primary">•</span>

            <span className="font-medium text-foreground">
              Tailwind CSS
            </span>

            <span className="text-primary">•</span>

            <span className="font-medium text-foreground">
              Framer Motion
            </span>
          </div>

          {/* Small Signature */}
          <div className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors cursor-default">
            <span>Built for modern experiences</span>

            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </footer>
  )
}
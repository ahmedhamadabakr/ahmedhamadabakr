import { Heart } from "lucide-react"

export function PortfolioFooter() {
  return (
    <footer className="bg-muted/30 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
          
          {/* حقوق الملكية */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ahmed Hamada Bakr. All rights reserved.
          </p>

          {/* Made with */}
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with 
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" /> 
            using <span className="font-semibold text-foreground">Next.js</span> & 
            <span className="font-semibold text-foreground"> Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

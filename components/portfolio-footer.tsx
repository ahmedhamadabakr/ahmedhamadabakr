import { Heart } from "lucide-react"

export function PortfolioFooter() {
  return (
    <footer className="bg-muted/30 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">© 2025 Ahmed Hamada Ragab. All rights reserved.</p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

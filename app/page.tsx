import { PortfolioHeader } from "@/components/portfolio-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { PortfolioFooter } from "@/components/portfolio-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <PortfolioFooter />
    </div>
  )
}

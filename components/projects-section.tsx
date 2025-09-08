import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Store (Web)",
      description:
        "A full-featured e-commerce platform built with Next.js and MongoDB, featuring user authentication, product management, shopping cart, and payment integration.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      title: "AITU Dev Platform",
      description:
        "A comprehensive platform for the AITU Dev student community, featuring project showcases, learning resources, and collaboration tools.",
      image: "/student-developer-platform-interface.jpg",
      technologies: ["React.js", "Node.js", "Express", "PostgreSQL"],
      demoLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      title: "Bu3qar.com Real Estate Platform",
      description:
        "A modern real estate platform connecting buyers, sellers, and agents with advanced search filters and property management features.",
      image: "/real-estate-platform.png",
      technologies: ["Next.js", "MongoDB", "Mapbox", "Cloudinary"],
      demoLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      title: "E-commerce Mobile App",
      description:
        "Cross-platform mobile e-commerce application built with Flutter, featuring smooth animations and state management with GetX.",
      image: "/mobile-ecommerce-app.png",
      technologies: ["Flutter", "Dart", "GetX", "Firebase"],
      demoLink: "#",
      githubLink: "#",
      featured: false,
    },
    {
      title: "Weather App",
      description:
        "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather information.",
      image: "/weather-app-interface.png",
      technologies: ["Flutter", "Weather API", "Geolocator"],
      demoLink: "#",
      githubLink: "#",
      featured: false,
    },
    {
      title: "To-do List App",
      description:
        "A productivity-focused todo application with task categorization, reminders, and progress tracking features.",
      image: "/todo-list-app-interface.png",
      technologies: ["Flutter", "SQLite", "Provider"],
      demoLink: "#",
      githubLink: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`border-border hover:shadow-xl transition-all duration-300 group ${
                  project.featured ? "lg:col-span-1" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="font-montserrat font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1 bg-transparent"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

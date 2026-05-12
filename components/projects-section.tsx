"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowUpRight,
} from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Happy Moments – Event System",
      description:
        "Smart event invitation platform with WhatsApp Business API integration, QR code check-ins, and real-time analytics dashboards.",
      image: "/happy-moments.png",
      technologies: [
        "Next.js",
        "Node.js",
        "WhatsApp API",
        "MongoDB",
        "QR System",
      ],
      demoLink: "https://happy-moments-beige.vercel.app/",
      githubLink: "#",
      featured: true,
    },
    {
      title: "Tamazight Siwa – Tourism Platform",
      description:
        "Modern tourism booking platform for Siwa Oasis with dynamic reservations, automated confirmations, and real-time seat management.",
      image: "/siwa-tourism.png",
      technologies: [
        "Next.js",
        "MongoDB",
        "Cloudinary",
        "TailwindCSS",
      ],
      demoLink: "https://www.tamazight-siwa.com/",
      githubLink: "#",
      featured: true,
    },
    {
      title: "E-commerce Store",
      description:
        "Full-stack graduation project with secure authentication, product management dashboard, and optimized shopping workflows.",
      image: "/e-commerce.avif",
      technologies: [
        "Next.js",
        "MongoDB",
        "NextAuth",
        "Cloudinary",
      ],
      demoLink: "https://e-commerce-store-bgmf.vercel.app/",
      githubLink: "#",
      featured: false,
    },
    {
      title: "AITU Dev Platform",
      description:
        "Collaborative student platform with analytics dashboards, file uploads, and scalable team management systems.",
      image: "/aitu.png",
      technologies: [
        "Next.js",
        "MongoDB",
        "Recharts",
        "Zod",
      ],
      demoLink: "https://aitudev.vercel.app/",
      githubLink: "#",
      featured: false,
    },
    {
      title: "Bu3qar.com Real Estate",
      description:
        "Advanced real estate marketplace with intelligent property filtering, map integrations, and modern listing management.",
      image: "/bu3qar.png",
      technologies: [
        "Next.js",
        "MongoDB",
        "Mapbox",
        "Cloudinary",
      ],
      demoLink: "https://bu3qar.com",
      githubLink: "#",
      featured: true,
    },
  ]

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-background to-muted/30"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 blur-3xl rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
              <Sparkles className="h-4 w-4" />
              Portfolio Showcase
            </div>

            <h2 className="font-montserrat text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              A collection of modern web & mobile applications focused on
              performance, scalability, and elegant user experiences.
            </p>

            <div className="w-28 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent mx-auto mt-8" />
          </motion.div>

          {/* Projects */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={project.featured ? "xl:col-span-1" : ""}
              >
                <Card className="group relative overflow-hidden border border-border/50 bg-background/70 backdrop-blur-xl rounded-3xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 h-full">
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-5 right-5 z-20">
                      <div className="flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold shadow-lg">
                        <Sparkles className="h-3 w-3" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <CardContent className="p-7 flex flex-col h-[calc(100%-15rem)]">
                    <div className="flex-1 space-y-5">
                      <div>
                        <h3 className="font-montserrat text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>

                        <p className="mt-3 text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border/40 hover:border-primary/40 hover:text-primary transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 mt-8">
                      <Link
                        href={project.demoLink}
                        target="_blank"
                        className="flex-1"
                      >
                        <Button className="w-full rounded-2xl h-11 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </Link>

                      <Link
                        href={project.githubLink}
                        target="_blank"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-2xl h-11 w-11 border-border hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
                        >
                          <Github className="h-5 w-5" />
                        </Button>
                      </Link>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight className="h-5 w-5 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
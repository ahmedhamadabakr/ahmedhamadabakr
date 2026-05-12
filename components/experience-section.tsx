import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Team Leader",
      company: "AITU Dev Student Tech Team",
      period: "2024 – Present",
      location: "Assiut, Egypt",
      description:
        "Leading a cross-functional team to design and maintain the AITU Dev platform. Coordinating between UI/UX designers and engineers while mentoring junior developers in React.js and Next.js best practices.",
      skills: ["Leadership", "Next.js", "Team Coordination", "Mentoring", "Git"],
    },
    {
      title: "Full Stack Developer",
      company: "Darwaza Al Safwa Real Estate — Bu3qar.com",
      period: "2025 – Present",
      location: "Remote",
      description:
        "Maintaining a large-scale real estate platform. Implemented secure authentication, advanced search filters, and optimized SEO and performance for high-traffic property listings.",
      skills: ["Next.js", "MongoDB", "SEO", "Dashboards", "JWT"],
    },
    {
      title: "Project Manager",
      company: "Salonat App",
      period: "2024 – 2025",
      location: "Remote",
      description:
        "Managed end-to-end delivery of an online salon booking platform. Coordinated multi-disciplinary teams ensuring quality assurance and on-time deployment.",
      skills: ["Project Management", "QA", "Agile", "Leadership"],
    },
    {
      title: "Freelance Full Stack & Mobile Developer",
      company: "Self-Employed",
      period: "2023 – Present",
      location: "Remote",
      description:
        "Delivering production-grade apps using Flutter (GetX) and Next.js. Integrated WhatsApp Business API, Cloudinary, and built secure RBAC systems with Zod validation.",
      skills: ["Flutter", "Next.js", "Node.js", "Firebase", "Zod", "GetX"],
    },
  ]

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-background via-background to-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience
            </h2>

            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Professional journey building scalable products, leading teams,
              and delivering modern web & mobile experiences.
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="w-5 h-5 rounded-full bg-primary border-4 border-background shadow-md"></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-10" : "md:pl-10"
                    } pl-14 md:pl-0`}
                  >
                    <Card
                      className="
                        border border-border/60
                        bg-background/70
                        backdrop-blur-md
                        shadow-sm
                        hover:shadow-lg
                        transition-all
                        duration-300
                        hover:-translate-y-1
                      "
                    >
                      <CardContent className="p-6 md:p-7">
                        {/* Title */}
                        <div className="mb-4">
                          <h3 className="font-montserrat font-bold text-xl md:text-2xl">
                            {exp.title}
                          </h3>

                          <p className="text-primary font-medium mt-1">
                            {exp.company}
                          </p>
                        </div>

                        {/* Meta */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground mb-5">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>

                          <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground"></div>

                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-7 mb-6">
                          {exp.description}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="
                                px-3 py-1.5
                                rounded-full
                                text-sm
                                border border-primary/20
                                bg-primary/5
                                text-primary
                                transition-all
                                duration-300
                                hover:bg-primary/10
                              "
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
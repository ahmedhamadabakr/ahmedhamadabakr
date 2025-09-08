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
        "Leading a team of student developers, organizing tech workshops, and mentoring junior developers in modern web and mobile technologies.",
      skills: ["Leadership", "Mentoring", "Project Management", "Team Coordination"],
    },
    {
      title: "Full Stack Developer",
      company: "Bu3qar.com",
      period: "2025 – Present",
      location: "Remote",
      description:
        "Developing and maintaining a comprehensive real estate platform using modern web technologies, focusing on user experience and performance optimization.",
      skills: ["Next.js", "React.js", "Node.js", "MongoDB", "Real Estate Tech"],
    },
    {
      title: "Project Manager",
      company: "Salonat App",
      period: "2024 – 2025",
      location: "Remote",
      description:
        "Managed the development lifecycle of a beauty salon booking application, coordinating between design, development, and testing teams.",
      skills: ["Project Management", "Flutter", "Team Coordination", "Mobile Development"],
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      period: "2023 – Present",
      location: "Remote",
      description:
        "Providing web and mobile development services to various clients, specializing in React.js, Next.js, and Flutter applications.",
      skills: ["React.js", "Next.js", "Flutter", "Client Management", "Full Stack Development"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot with pulse */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2">
                    <div className="relative w-5 h-5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-primary border-4 border-background"></span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                    <Card className="border-border hover:shadow-xl hover:scale-105 transition-transform duration-300">
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h3 className="font-montserrat font-bold text-xl text-foreground">{exp.title}</h3>
                          <p className="font-semibold text-primary">{exp.company}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-sm rounded-full hover:scale-105 transition-transform"
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

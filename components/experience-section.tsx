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
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10"></div>

                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                    <Card className="border-border hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="space-y-4">
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
                                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
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

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Information Technology",
      institution: "Assiut International Technological University",
      period: "2023 – 2027",
      status: "In Progress",
      description:
        "Pursuing a comprehensive degree in Information Technology with focus on software development, database systems, and modern web technologies.",
    },
    {
      degree: "Computer & Graphics Department",
      institution: "Industrial Technical Institute",
      period: "2022 – 2023",
      status: "Completed",
      description:
        "Specialized in computer graphics, web design, and multimedia development with hands-on projects in visual design and programming.",
    },
    {
      degree: "Computer Department",
      institution: "Industrial Technical Institute",
      period: "2021 – 2022",
      status: "Completed",
      description: "Foundation in computer science fundamentals, programming basics, and computer hardware systems.",
    },
  ]

  const certifications = [
    {
      title: "Flutter & Dart - The Complete Guide",
      provider: "Udemy",
      year: "2023",
      description:
        "Comprehensive course covering Flutter development from basics to advanced concepts including state management and native features.",
    },
    {
      title: "React - The Complete Guide",
      provider: "Udemy",
      year: "2023",
      description: "In-depth React.js course covering hooks, context, routing, and modern React development patterns.",
    },
    {
      title: "UI/UX Design Specialization",
      provider: "Coursera",
      year: "2023",
      description: "Design thinking, user research, prototyping, and creating user-centered digital experiences.",
    },
    {
      title: "React JS Development",
      provider: "Mahara Tech",
      year: "2022",
      description: "Practical React.js development course with focus on building real-world applications.",
    },
    {
      title: "Full Stack Node.js Diploma",
      provider: "Various Platforms",
      year: "2023",
      description: "Comprehensive backend development with Node.js, Express.js, databases, and API development.",
    },
  ]

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Education & Certifications
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-foreground">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <h4 className="font-montserrat font-semibold text-lg text-foreground">{edu.degree}</h4>
                          <span
                            className={`px-3 py-1 text-xs rounded-full ${
                              edu.status === "In Progress" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                            }`}
                          >
                            {edu.status}
                          </span>
                        </div>
                        <p className="font-medium text-primary">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                        <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-foreground">Certifications</h3>
              </div>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <h4 className="font-montserrat font-semibold text-lg text-foreground">{cert.title}</h4>
                          <span className="text-sm text-muted-foreground">{cert.year}</span>
                        </div>
                        <p className="font-medium text-primary">{cert.provider}</p>
                        <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

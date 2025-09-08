import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Code, Smartphone, Server, Wrench } from "lucide-react"

export function AboutSection() {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend",
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "GraphQL"],
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile",
      skills: ["Flutter", "Dart", "GetX", "Provider", "Firebase", "SQLite"],
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Firebase", "Vercel"],
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="mt-3 w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="space-y-6 max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up">
                I'm a passionate Full Stack Developer with a strong foundation in both web and mobile application
                development. Currently pursuing my degree in Information Technology at Assiut International
                Technological University while actively working on real-world projects.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up [animation-delay:200ms]">
                My journey in tech started with a curiosity about how applications work, which led me to master
                technologies like React.js, Next.js, Node.js, and Flutter. I enjoy creating scalable solutions that
                provide excellent user experiences and solve real problems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up [animation-delay:400ms]">
                When I'm not coding, I'm leading the AITU Dev Student Tech Team, mentoring fellow developers, and
                continuously learning new technologies to stay at the forefront of software development.
              </p>

              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6 py-3 shadow-lg hover:scale-105 transition-transform"
              >
                <a href="/Ahmed_Bakr_CV.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Right side - Skills */}
            <div className="grid sm:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">{category.icon}</div>
                      <h3 className="font-montserrat font-semibold text-lg text-foreground">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-muted to-muted/60 text-muted-foreground text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

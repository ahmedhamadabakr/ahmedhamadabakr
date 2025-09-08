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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Developer with a strong foundation in both web and mobile application
                development. Currently pursuing my degree in Information Technology at Assiut International
                Technological University while actively working on real-world projects.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech started with a curiosity about how applications work, which led me to master
                technologies like React.js, Next.js, Node.js, and Flutter. I enjoy creating scalable solutions that
                provide excellent user experiences and solve real problems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I'm leading the AITU Dev Student Tech Team, mentoring fellow developers, and
                continuously learning new technologies to stay at the forefront of software development.
              </p>

              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">{category.icon}</div>
                      <h3 className="font-montserrat font-semibold text-lg text-foreground">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
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

import { Card, CardContent } from "@/components/ui/card"

export function SkillsSection() {
  const skills = [
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 80, category: "Frontend" },
    { name: "Flutter", level: 85, category: "Mobile" },
    { name: "Dart", level: 85, category: "Mobile" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "MongoDB", level: 75, category: "Backend" },
    { name: "MySQL", level: 70, category: "Backend" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "Figma", level: 75, category: "Tools" },
    { name: "Firebase", level: 80, category: "Tools" },
  ]

  const categories = ["Frontend", "Mobile", "Backend", "Tools"]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Card key={category} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-xl text-foreground mb-6 text-center">{category}</h3>
                  <div className="space-y-4">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
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

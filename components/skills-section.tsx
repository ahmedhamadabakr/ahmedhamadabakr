"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  Code2,
  Smartphone,
  Database,
  Wrench,
} from "lucide-react"

export function SkillsSection() {
  const skills = [
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "Next.js", level: 88, category: "Frontend" },
    { name: "JavaScript", level: 92, category: "Frontend" },
    { name: "TypeScript", level: 82, category: "Frontend" },

    { name: "Flutter", level: 87, category: "Mobile" },
    { name: "Dart", level: 85, category: "Mobile" },
    { name: "Firebase", level: 80, category: "Mobile" },

    { name: "Node.js", level: 84, category: "Backend" },
    { name: "MongoDB", level: 78, category: "Backend" },
    { name: "MySQL", level: 72, category: "Backend" },

    { name: "Git", level: 88, category: "Tools" },
    { name: "Figma", level: 76, category: "Tools" },
    { name: "Postman", level: 82, category: "Tools" },
  ]

  const categories = [
    {
      title: "Frontend",
      icon: <Code2 className="h-6 w-6" />,
      gradient: "from-blue-500 via-cyan-500 to-sky-400",
      glow: "shadow-blue-500/20",
    },
    {
      title: "Mobile",
      icon: <Smartphone className="h-6 w-6" />,
      gradient: "from-emerald-500 via-green-500 to-lime-400",
      glow: "shadow-emerald-500/20",
    },
    {
      title: "Backend",
      icon: <Database className="h-6 w-6" />,
      gradient: "from-orange-500 via-amber-500 to-yellow-400",
      glow: "shadow-orange-500/20",
    },
    {
      title: "Tools",
      icon: <Wrench className="h-6 w-6" />,
      gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
      glow: "shadow-purple-500/20",
    },
  ]

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-background via-background to-muted/30"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 blur-3xl rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
              Professional Stack
            </span>

            <h2 className="font-montserrat text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>

            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Technologies and tools I use to craft modern, scalable,
              and high-performance digital experiences.
            </p>

            <div className="mt-8 w-32 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent mx-auto" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: categoryIndex * 0.08,
                }}
              >
                <Card
                  className={`relative overflow-hidden rounded-3xl border border-border/40 bg-background/60 backdrop-blur-xl hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl ${category.glow}`}
                >
                  {/* Glow */}
                  <div
                    className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${category.gradient} opacity-10 blur-3xl`}
                  />

                  <CardContent className="relative p-7">
                    
                    {/* Category Header */}
                    <div className="flex flex-col items-center text-center mb-10">
                      <div
                        className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} text-white shadow-lg`}
                      >
                        {category.icon}
                      </div>

                      <h3 className="mt-5 text-2xl font-bold font-montserrat text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills */}
                    <div className="space-y-6">
                      {skills
                        .filter(
                          (skill) => skill.category === category.title
                        )
                        .map((skill, index) => (
                          <div key={index}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-foreground">
                                {skill.name}
                              </span>

                              <span className="text-xs font-semibold text-primary">
                                {skill.level}%
                              </span>
                            </div>

                            {/* Progress */}
                            <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted/60">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{
                                  width: `${skill.level}%`,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 1.2,
                                  ease: "easeOut",
                                  delay: index * 0.08,
                                }}
                                className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                              />

                              {/* Shine */}
                              <div className="absolute inset-0 bg-white/10 opacity-30" />
                            </div>
                          </div>
                        ))}
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
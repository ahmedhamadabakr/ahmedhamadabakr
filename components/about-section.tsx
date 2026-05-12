"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Download,
  Code,
  Smartphone,
  Server,
  Wrench,
  Sparkles,
  Briefcase,
  Layers,
  Zap,
} from "lucide-react"

import { motion } from "framer-motion"

export function AboutSection() {
  const skillCategories = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      icon: <Server className="h-5 w-5" />,
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "REST APIs",
      ],
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Mobile",
      skills: [
        "Flutter",
        "Dart",
        "Firebase",
        "GetX",
        "SQLite",
      ],
    },
    {
      icon: <Wrench className="h-5 w-5" />,
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Figma",
        "Postman",
        "Vercel",
      ],
    },
  ]

  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden bg-[#050505]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.10),transparent_35%)]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6">
              <Sparkles className="w-4 h-4 text-primary" />

              <span className="text-sm text-gray-300">
                About Me
              </span>
            </div>

            <h2 className="font-montserrat font-black text-4xl md:text-6xl text-white tracking-tight">
              Passionate About
              <span className="block bg-gradient-to-r from-primary via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                Building Digital Products
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-16 items-start">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              {/* Main Card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 md:p-10 shadow-2xl shadow-primary/5">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                    Full Stack & Mobile Developer crafting
                    scalable and modern digital experiences.
                  </h3>

                  <div className="space-y-5 text-gray-400 leading-relaxed text-lg">
                    <p>
                      I'm a passionate developer specializing in
                      web and mobile applications using modern
                      technologies like React.js, Next.js,
                      Node.js, MongoDB, and Flutter.
                    </p>

                    <p>
                      Currently pursuing Information Technology
                      at Assiut International Technological
                      University while building real-world
                      scalable products and leading development
                      teams.
                    </p>

                    <p>
                      I focus on performance, clean architecture,
                      responsive design, and building products
                      users genuinely enjoy using.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-10">
                    <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center hover:bg-white/[0.05] transition-colors duration-300">
                      <Briefcase className="w-5 h-5 text-primary mx-auto mb-3 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                      <h4 className="text-3xl font-black text-white">
                        +3
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Years Experience
                      </p>
                    </div>

                    <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center hover:bg-white/[0.05] transition-colors duration-300">
                      <Layers className="w-5 h-5 text-purple-400 mx-auto mb-3 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                      <h4 className="text-3xl font-black text-white">
                        +20
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Projects Built
                      </p>
                    </div>

                    <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center hover:bg-white/[0.05] transition-colors duration-300">
                      <Zap className="w-5 h-5 text-cyan-400 mx-auto mb-3 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                      <h4 className="text-3xl font-black text-white">
                        100%
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        Passion Driven
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <Button
                    asChild
                    size="lg"
                    className="mt-10 h-14 px-8 rounded-2xl bg-primary text-black font-bold hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(var(--primary),0.3)]"
                  >
                    <a href="Ahmed_Hamada_Ragab_CV_v2.docx" download>
                      <Download className="mr-2 h-5 w-5" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid sm:grid-cols-2 gap-5"
            >
              {skillCategories.map((category, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />

                  <CardContent className="relative z-10 p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                        {category.icon}
                      </div>

                      <h3 className="text-xl font-bold text-white">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-sm text-gray-300 hover:bg-primary hover:text-black hover:border-primary transition-colors duration-200 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
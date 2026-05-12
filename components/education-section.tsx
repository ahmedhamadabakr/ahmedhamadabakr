"use client"

import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"

import {
  GraduationCap,
  Award,
  CalendarDays,
  Sparkles,
} from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Information Technology",
      institution: "Assiut International Technological University",
      period: "2023 – 2027",
      status: "In Progress",
      description:
        "Pursuing a comprehensive degree in Information Technology with focus on software engineering, databases, and modern application development.",
    },
    {
      degree: "Diploma – Computer & Graphics",
      institution: "Industrial Technical Institute",
      period: "2022 – 2023",
      status: "Completed",
      description:
        "Specialized in computer graphics, multimedia systems, web design, and visual programming projects.",
    },
    {
      degree: "Diploma – Computer",
      institution: "Industrial Technical Institute",
      period: "2021 – 2022",
      status: "Completed",
      description:
        "Built a strong foundation in programming fundamentals, operating systems, and computer hardware.",
    },
  ]

  const certifications = [
    {
      title: "Full Stack Node.js Diploma",
      provider: "AMIT Learning",
      year: "2025",
    },
    {
      title: "Flutter & Dart - The Complete Guide",
      provider: "Udemy",
      year: "2024",
    },
    {
      title: "React - The Complete Guide",
      provider: "Udemy",
      year: "2024",
    },
    {
      title: "Next.js - The Complete Guide",
      provider: "Udemy",
      year: "2024",
    },
    {
      title: "UI/UX Design for Mobile Applications",
      provider: "Coursera / Google",
      year: "2024",
    },
    {
      title: "React JS Development",
      provider: "Mahara Tech",
      year: "2024",
    },
  ]

  return (
    <section
      id="education"
      className="relative overflow-hidden py-28 bg-[#050505]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,119,198,0.10),transparent_35%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6">
              <Sparkles className="w-4 h-4 text-primary" />

              <span className="text-sm text-gray-300">
                Education & Learning
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
              Academic Journey &
              <span className="block bg-gradient-to-r from-primary via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
              My educational background and continuous learning
              journey in software engineering and modern technologies.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
            {/* EDUCATION */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <h3 className="text-3xl font-bold text-white">
                  Education
                </h3>
              </div>

              <div className="relative pl-8 space-y-8">
                {/* Timeline line */}
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 to-transparent" />

                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-8 top-8 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(255,255,255,0.5)]" />

                    <Card className="border border-white/10 bg-white/[0.03] backdrop-blur-2xl rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                          <span
                            className={`px-4 py-1 rounded-full text-xs font-semibold ${
                              edu.status === "In Progress"
                                ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                                : "bg-primary/10 text-primary border border-primary/20"
                            }`}
                          >
                            {edu.status}
                          </span>

                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <CalendarDays className="w-4 h-4" />
                            {edu.period}
                          </div>
                        </div>

                        <h4 className="text-2xl font-bold text-white mb-2">
                          {edu.degree}
                        </h4>

                        <p className="text-primary font-medium mb-4">
                          {edu.institution}
                        </p>

                        <p className="text-gray-400 leading-relaxed">
                          {edu.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CERTIFICATIONS */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Award className="w-6 h-6" />
                </div>

                <h3 className="text-3xl font-bold text-white">
                  Certifications
                </h3>
              </div>

              <div className="space-y-5">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="group border border-white/10 bg-white/[0.03] backdrop-blur-2xl rounded-2xl hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                            {cert.title}
                          </h4>

                          <p className="text-primary text-sm mt-1">
                            {cert.provider}
                          </p>
                        </div>

                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs whitespace-nowrap">
                          {cert.year}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Extra box */}
              <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 to-purple-500/10 p-8 backdrop-blur-2xl">
                <h4 className="text-2xl font-bold text-white mb-3">
                  Continuous Learning
                </h4>

                <p className="text-gray-300 leading-relaxed">
                  I constantly invest in improving my skills by
                  learning modern frameworks, scalable architectures,
                  and best practices in web & mobile development.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
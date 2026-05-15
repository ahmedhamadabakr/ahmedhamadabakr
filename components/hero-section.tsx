"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowDown,
  Mail,
  Sparkles,
  Terminal,
  Code2,
} from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.15),transparent_40%)]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-[100px]" />

      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >

          {/* Profile */}
          <div className="relative w-40 h-40 md:w-52 md:h-52 mx-auto mb-8 md:mb-10">
            {/* Animated Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-cyan-400 animate-spin-slow p-[4px]">
              <div className="w-full h-full rounded-full bg-[#050505]" />
            </div>

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110" />

            {/* Image */}
            <div className="absolute inset-[6px] overflow-hidden rounded-full border border-white/10">
              <Image
                src="/ahmed-formal.png"
                alt="Ahmed Hamada Bakr"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-montserrat font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.1] md:leading-[0.95]"
          >
            Crafting Digital{" "}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Experiences.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex items-center justify-center gap-3 mt-6 flex-wrap"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <Code2 className="w-5 h-5 text-primary" />
              <span className="text-lg md:text-xl">
                Full Stack Developer
              </span>
            </div>

            <span className="hidden md:block text-gray-600">•</span>

            <div className="flex items-center gap-2 text-gray-400">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="text-lg md:text-xl">
                Flutter Developer
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="max-w-3xl mx-auto mt-6 md:mt-8 text-base md:text-xl leading-relaxed text-gray-400 px-4 md:px-0"
          >
            Full Stack Developer specializing in building scalable web
            and mobile applications using React.js, Next.js, Node.js,
            MongoDB, and Flutter with a strong focus on performance,
            clean architecture, and user experience.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-5 justify-center mt-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group h-14 md:h-16 px-8 md:px-10 rounded-2xl bg-primary text-black font-bold hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/20"
            >
              View Projects
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group h-14 px-8 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:scale-105"
            >
              Contact Me
              <Mail className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
            }}
            className="absolute left-1/2 -translate-x-1/2 bottom-10"
          >
           
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
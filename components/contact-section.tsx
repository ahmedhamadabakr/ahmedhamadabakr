"use client"

import type React from "react"
import { useState } from "react"

import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {
  Mail,
  Phone,
  Linkedin,
  Send,
  Loader2,
  CheckCircle,
  Github,
  Twitter,
  Facebook,
  Sparkles,
} from "lucide-react"

import { toast } from "sonner"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name")
      return false
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error("Please enter a valid email")
      return false
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message")
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        toast.success("Message sent successfully!")

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        setIsSubmitted(true)
      } else {
        toast.error("Failed to send message")
      }
    } catch (error) {
      console.error(error)
      toast.error("Server error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "ahmedhamadabakr77@gmail.com",
      href: "mailto:ahmedhamadabakr77@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+20 101 997 1564",
      href: "tel:+201019971564",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/ahmedhamadabakr/",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "Connect with me",
      href: "https://github.com/ahmedhamadabakr",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "X",
      value: "Connect with me",
      href: "https://twitter.com/ahmedhamadabak3",
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      label: "Facebook",
      value: "Connect with me",
      href: "https://www.facebook.com/A7medHbakr",
    },
  ]

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 bg-[#050505]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.12),transparent_35%)]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Glow */}
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[120px]" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6">
              <Sparkles className="w-4 h-4 text-primary" />

              <span className="text-sm text-gray-300">
                Contact Me
              </span>
            </div>

            <h2 className="font-black text-4xl md:text-6xl tracking-tight text-white">
              Let’s Build Something
              <span className="block bg-gradient-to-r from-primary via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Open for freelance projects, collaborations,
              startup ideas, and full-time opportunities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Let’s Connect
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  Whether you have a project idea, business,
                  startup, or just want to say hello —
                  feel free to reach out anytime.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 p-5 hover:-translate-y-1"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />

                      <div className="relative z-10 flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex-shrink-0">
                          {info.icon}
                        </div>

                        <div className="min-w-0">
                          <p className="text-white font-semibold">
                            {info.label}
                          </p>

                          <p className="text-sm text-gray-400 truncate break-all">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Card className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-2xl">
                <CardContent className="p-8 md:p-10">
                  <h3 className="text-3xl font-bold text-white mb-8">
                    Send Message
                  </h3>

                  {isSubmitted && (
                    <div className="mb-6 flex items-center gap-2 rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-green-400">
                      <CheckCircle className="h-5 w-5" />

                      <span>
                        Message sent successfully! I’ll get
                        back to you soon.
                      </span>
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm text-gray-300 mb-2 block">
                          Name
                        </label>

                        <Input
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={
                            isSubmitting || isSubmitted
                          }
                          className="h-12 rounded-xl border-white/10 bg-white/[0.03] text-white placeholder:text-gray-500 focus-visible:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="text-sm text-gray-300 mb-2 block">
                          Email
                        </label>

                        <Input
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={
                            isSubmitting || isSubmitted
                          }
                          className="h-12 rounded-xl border-white/10 bg-white/[0.03] text-white placeholder:text-gray-500 focus-visible:ring-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-300 mb-2 block">
                        Subject
                      </label>

                      <Input
                        name="subject"
                        placeholder="Project discussion"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={
                          isSubmitting || isSubmitted
                        }
                        className="h-12 rounded-xl border-white/10 bg-white/[0.03] text-white placeholder:text-gray-500 focus-visible:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="text-sm text-gray-300 mb-2 block">
                        Message
                      </label>

                      <Textarea
                        rows={6}
                        name="message"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        disabled={
                          isSubmitting || isSubmitted
                        }
                        className="rounded-2xl border-white/10 bg-white/[0.03] text-white placeholder:text-gray-500 focus-visible:ring-primary"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={
                        isSubmitting || isSubmitted
                      }
                      className="w-full h-14 rounded-2xl text-black font-semibold bg-primary hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
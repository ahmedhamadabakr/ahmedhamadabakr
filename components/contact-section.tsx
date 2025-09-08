"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, Send, MapPin, Loader2, CheckCircle } from "lucide-react"
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
      toast.error("Please enter a valid email address")
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
  
      if (res.ok) {
        toast.success("Message sent successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setIsSubmitted(true)
      } else {
        toast.error("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error(error)
      toast.error("Server error. Please try later.")
    } finally {
      setIsSubmitting(false)
    }
  }
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
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
      href: "https://linkedin.com/in/ahmed-hamada-ragab",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Assiut, Egypt",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-8">
              <div>
                <h3 className="font-montserrat font-bold text-2xl text-foreground mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
  {contactInfo.map((info, index) => (
    <Card
      key={index}
      className="border-border hover:shadow-xl hover:scale-105 transition-transform duration-300"
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="p-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg flex-shrink-0">
            {info.icon}
          </div>

          {/* Text */}
          <div className="min-w-0"> {/* ده مهم علشان text-ellipsis يشتغل */}
            <p className="font-medium text-foreground">{info.label}</p>
            {info.href !== "#" ? (
              <a
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200 truncate break-all"
              >
                {info.value}
              </a>
            ) : (
              <p className="text-muted-foreground truncate break-all">{info.value}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  ))}
</div>

            </div>

            {/* Contact Form */}
            <Card className="border-border shadow-md">
              <CardContent className="p-8">
                <h3 className="font-montserrat font-bold text-2xl text-foreground mb-6">Send Message</h3>

                {isSubmitted && (
                  <div className="mb-4 flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting || isSubmitted}
                        required
                        className="focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting || isSubmitted}
                        required
                        className="focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject (optional)"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting || isSubmitted}
                      className="focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting || isSubmitted}
                      required
                      className="focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-lg shadow-md hover:scale-105 transition-transform"
                    disabled={isSubmitting || isSubmitted}
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
          </div>
        </div>
      </div>
    </section>
  )
}

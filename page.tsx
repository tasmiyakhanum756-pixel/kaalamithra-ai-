"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle, Clock, Shield, Headphones, Sparkles, Phone, Mail, Loader2, AlertCircle } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: Sparkles,
    title: "Custom Strategy",
    description: "Get a tailored growth roadmap designed specifically for your business needs.",
  },
  {
    icon: Clock,
    title: "30-Min Session",
    description: "A focused, no-obligation consultation to understand your goals and challenges.",
  },
  {
    icon: Shield,
    title: "No Commitment",
    description: "Free consultation with zero pressure. Only proceed if you're satisfied.",
  },
  {
    icon: Headphones,
    title: "Expert Guidance",
    description: "Speak directly with our technology and growth experts.",
  },
]

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setStatusMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setStatusMessage(data.message || "Your consultation request has been sent! We'll reach out within 24 hours.")
        setFormData({ name: "", email: "", phone: "", company: "", message: "" })
      } else {
        setStatus("error")
        setStatusMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setStatusMessage("Network error. Please check your connection or call us at +91 88840 14055.")
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Book a Free <span className="text-primary">Consultation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business grow with AI, automation, and technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left - Benefits */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-8">
                What You'll Get
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="p-6 rounded-xl bg-card border border-border"
                  >
                    <benefit.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Prefer to call instead?
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Call us directly to schedule your consultation:
                </p>
                <a
                  href="tel:8884014055"
                  className="text-primary font-semibold hover:underline"
                >
                  8884014055
                </a>
              </div>
            </div>

            {/* Right - Form */}
            <div className="p-8 rounded-xl bg-card border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Fill in Your Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    How can we help you?
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your business and what you'd like to achieve..."
                  />
                </div>
                {status === "success" && (
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm">{statusMessage}</p>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm">{statusMessage}</p>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Book Free Consultation
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Happens <span className="text-primary">Next</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your journey to transformation starts here
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: 1, title: "Submit Form", desc: "Fill in your details and tell us about your business." },
              { step: 2, title: "We Reach Out", desc: "Our team will contact you within 24 hours to schedule." },
              { step: 3, title: "Consultation", desc: "30-min call to discuss your goals and challenges." },
              { step: 4, title: "Get Your Plan", desc: "Receive a customized roadmap for your growth." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
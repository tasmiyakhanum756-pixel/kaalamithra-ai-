"use client"

import { useState, useEffect, useRef } from "react"
import {
  Rocket,
  Target,
  BarChart3,
  ShieldCheck,
  Headphones,
  ArrowRight,
  Mail,
  Phone,
  Building2,
  MessageSquare,
  Lock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Sparkles,
  BrainCircuit,
  User,
} from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Target,
    title: "Tailored Growth Strategy",
    description: "Solutions designed for your unique business goals.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Approach",
    description: "We use AI, automation, and analytics to drive measurable growth.",
  },
  {
    icon: ShieldCheck,
    title: "Proven & Trusted",
    description: "Helping businesses transform and scale with confidence.",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    description: "From strategy to execution, we're with you every step.",
  },
]

const trustItems = [
  {
    icon: ShieldCheck,
    title: "100% Secure",
    description: "Your data is safe with us.",
  },
  {
    icon: Sparkles,
    title: "Quick Response",
    description: "We'll get back to you within 24 hours.",
  },
  {
    icon: CheckCircle,
    title: "No Commitment",
    description: "Consultation is completely free.",
  },
]

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

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
    <section
      ref={sectionRef}
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`rounded-3xl border border-border/60 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid lg:grid-cols-[45%_55%]">
            {/* ========== LEFT SIDE - Marketing Content ========== */}
            <div className="relative p-8 md:p-12 lg:p-14 bg-gradient-to-br from-[#0A0B1E] via-[#0D0F2A] to-[#111338] border-b lg:border-b-0 lg:border-r border-border/50 overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-8">
                {/* 1. Badge */}
                <div
                  className={`inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-4 py-2 rounded-full border border-primary/20 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "100ms" }}
                >
                  <Rocket className="w-3.5 h-3.5" />
                  LET'S GROW TOGETHER
                </div>

                {/* 2. Main Heading */}
                <div
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    Your Growth Starts with the{" "}
                    <span className="text-primary">Right Partner</span>
                  </h2>
                </div>

                {/* 3. Decorative Divider */}
                <div
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <div className="w-16 h-1 rounded-full bg-primary" />
                </div>

                {/* 4. Description */}
                <div
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "350ms" }}
                >
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                    Share your details and our experts will reach out to understand your goals and deliver a custom
                    growth strategy for your business.
                  </p>
                </div>

                {/* 5. Feature Cards */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, idx) => (
                    <div
                      key={feature.title}
                      className={`group p-4 rounded-xl bg-card/60 border border-border/40 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                      }`}
                      style={{ transitionDelay: `${400 + idx * 100}ms` }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground mb-1.5">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* 6. Bottom AI Illustration */}
                <div
                  className={`pt-4 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: "800ms" }}
                >
                  <div className="relative flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 border border-border/40 overflow-hidden">
                    {/* Glow effects */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08)_0%,transparent_60%)]" />
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-secondary/10 blur-3xl" />

                    <div className="relative flex items-center gap-4 md:gap-6">
                      {/* AI Brain Icon */}
                      <div className="relative">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/20 animate-pulse shadow-lg shadow-primary/10">
                          <BrainCircuit className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                        </div>
                        {/* Orbiting dots */}
                        <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-primary/60 animate-ping" />
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-secondary/60 animate-ping" style={{ animationDelay: "0.5s" }} />
                      </div>

                      {/* Text */}
                      <div>
                        <p className="text-sm font-semibold text-foreground">AI-Powered Intelligence</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Leveraging cutting-edge AI to drive your business growth
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== RIGHT SIDE - Consultation Form ========== */}
            <div className="p-8 md:p-12 lg:p-14 bg-card">
              {/* Header */}
              <div
                className={`mb-8 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Book a Free Consultation</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Tell us about your business and let's grow together.
                </p>
                <div className="w-12 h-1 rounded-full bg-primary mt-4" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <label htmlFor="consult-name" className="block text-sm font-medium text-foreground mb-1.5">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      id="consult-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      placeholder="John Doe"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                {/* Business Email */}
                <div
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "350ms" }}
                >
                  <label htmlFor="consult-email" className="block text-sm font-medium text-foreground mb-1.5">
                    Business Email <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      id="consult-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      placeholder="john@company.com"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <label htmlFor="consult-phone" className="block text-sm font-medium text-foreground mb-1.5">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      id="consult-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      placeholder="+91 98765 43210"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "450ms" }}
                >
                  <label htmlFor="consult-company" className="block text-sm font-medium text-foreground mb-1.5">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      id="consult-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                </div>

                {/* Business Requirement */}
                <div
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "500ms" }}
                >
                  <label htmlFor="consult-message" className="block text-sm font-medium text-foreground mb-1.5">
                    Business Requirement
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-muted-foreground" />
                    <textarea
                      id="consult-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
                      placeholder="Tell us about your business and what you'd like to achieve..."
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div
                    className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                    role="alert"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <p>{statusMessage}</p>
                  </div>
                )}
                {status === "error" && (
                  <div
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                    role="alert"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p>{statusMessage}</p>
                  </div>
                )}

                {/* Trust Section */}
                <div
                  className={`grid grid-cols-3 gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "550ms" }}
                >
                  {trustItems.map((item) => (
                    <div
                      key={item.title}
                      className="text-center p-3 rounded-xl bg-background/50 border border-border/40"
                    >
                      <item.icon className="w-4 h-4 text-primary mx-auto mb-1.5" />
                      <p className="text-[11px] font-semibold text-foreground">{item.title}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                      </>
                    ) : (
                      <>
                        Get Free Consultation
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy Note */}
                <div
                  className={`flex items-center justify-center gap-2 text-xs text-muted-foreground transition-all duration-500 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: "650ms" }}
                >
                  <Lock className="w-3 h-3" />
                  <span>We respect your privacy. No spam, ever.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
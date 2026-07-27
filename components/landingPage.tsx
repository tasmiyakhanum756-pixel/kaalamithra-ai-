"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import {
  Rocket,
  Sparkles,
  Zap,
  Target,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle,
  Send,
  Lock,
  BrainCircuit,
  MessageSquare,
  TrendingUp,
  Megaphone,
  Bot,
  Cog,
  Users,
  ChevronDown,
  Gift,
  ClipboardCheck,
  LayoutDashboard,
  Globe,
  Search,
  MapPin,
  Image,
  Settings,
  DollarSign,
  Download,
  Menu,
  FileText,
  Cloud,
  ShoppingCart,
  Star,
} from "lucide-react"

const growthSystems = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Lead Generation Engine",
    description: "Generate high-quality leads with our proven strategies",
  },
  {
    number: "02",
    icon: Megaphone,
    title: "Performance Marketing",
    description: "Data-driven campaigns that deliver measurable ROI",
  },
  {
    number: "03",
    icon: Bot,
    title: "AI & Automation Systems",
    description: "Intelligent automation to scale your operations",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Startup & MVP Launch Kit",
    description: "From idea to launch with our comprehensive kit",
  },
  {
    number: "05",
    icon: Cog,
    title: "Business Software & CRM",
    description: "Custom CRM solutions to manage customer relationships",
  },
  {
    number: "06",
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and DevOps pipelines",
  },
  {
    number: "07",
    icon: ShoppingCart,
    title: "E-Commerce Growth",
    description: "Strategies to scale your online store and sales",
  },
  {
    number: "08",
    icon: FileText,
    title: "Content & Branding",
    description: "Compelling content and brand identity creation",
  },
  {
    number: "09",
    icon: TrendingUp,
    title: "Sales Funnel & Closing",
    description: "Optimized funnels to convert leads into customers",
  },
  {
    number: "10",
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Data-driven insights to fuel business decisions",
  },
  {
    number: "11",
    icon: Cog,
    title: "Industry Automation",
    description: "Tailored automation solutions for your industry",
  },
]

const startupServices = [
  "Professional Logo Design",
  "Google Business Profile Setup",
  "Google Maps Listing",
  "Google Search Visibility Setup",
  "Social Media Account Setup",
  "Business Email Configuration",
  "Lead Collection Forms",
  "Technical Support",
  "Sales Funnel Setup",
  "Email Marketing Setup",
]

const qrSteps = [
  {
    number: "1",
    icon: Search,
    title: "Explore Services",
    description: "Browse our services",
  },
  {
    number: "2",
    icon: ClipboardCheck,
    title: "Select Your Requirements",
    description: "Choose what you need",
  },
  {
    number: "3",
    icon: Users,
    title: "Create Your Account",
    description: "Quick registration",
  },
  {
    number: "4",
    icon: MessageSquare,
    title: "Speak With Our Expert",
    description: "Free consultation call",
  },
  {
    number: "5",
    icon: Rocket,
    title: "Launch and Grow",
    description: "Start your journey",
  },
]

const trustFeatures = [
  { icon: ShieldCheck, title: "Select & Reliable", description: "Secure and trustworthy solutions" },
  { icon: Users, title: "Expert Technology Team", description: "Skilled professionals at work" },
  { icon: Star, title: "Long-Term Partnership", description: "Your growth is our priority" },
]

// Intersection Observer hook for scroll reveal
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)

    return () => observer.disconnect()
  }, [threshold])

  return { ref, revealed }
}

function RevealSection({ children, className = "", delay = "0s" }: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, revealed } = useReveal()
  return (
    <div
      ref={ref}
      className={`${revealed ? "revealed" : ""} reveal ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  )
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return <div className="section-kicker">{children}</div>
}

export default function LandingPage() {
  const formRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    businessStage: "",
    interestedService: "",
    requirements: "",
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
        setStatusMessage("Thank you! We'll contact you within 24 hours.")
        setFormData({ name: "", email: "", phone: "", company: "", businessStage: "", interestedService: "", requirements: "" })
      } else {
        setStatus("error")
        setStatusMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setStatusMessage("Network error. Please check your connection.")
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-noir text-bone">
      {/* ========== HERO SECTION ========== */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_10%,rgba(214,177,90,.18),transparent_34%),linear-gradient(180deg,#050505,#080808)]" />
        
        <div className="relative mx-auto max-w-[1520px]">
          <div className="max-w-5xl">
            <RevealSection delay="0s">
              <SectionKicker>KAALA MITHRA AI</SectionKicker>
              <h1 className="font-display text-[clamp(2.5rem,8vw,8rem)] leading-[0.86] tracking-tight text-bone">
                Launch,<br />
                <span className="text-gold">Automate</span>
                <br />
                and{" "}
                <span className="text-gold">Grow</span>{" "}
                Your Business
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/62 sm:text-xl">
                Technology, strategy, marketing, software and automation solutions designed to transform ideas into scalable businesses.
              </p>
            </RevealSection>

            {/* CTA Buttons */}
            <RevealSection delay="0.2s" className="mt-10">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <button onClick={scrollToForm} className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em]">
                  Claim Your Startup Benefits
                </button>
                <button onClick={scrollToContact} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-bone transition hover:border-gold/70 hover:bg-gold/10 hover:text-gold-soft">
                  Talk to a Startup Expert
                  <ArrowRight className="arrow-hover h-4 w-4" />
                </button>
              </div>
            </RevealSection>
          </div>

          {/* RIGHT - Floating Badge */}
          <RevealSection delay="0.4s" className="relative mt-16 hidden lg:flex items-center justify-end">
            <div className="gold-border-glow inline-flex items-center gap-3 rounded-xl bg-white/[0.025] p-5 backdrop-blur-sm">
              <Gift className="h-8 w-8 text-gold" />
              <div>
                <p className="text-sm font-bold text-bone">Startup & MVP Kit</p>
                <p className="text-xs text-white/48">10 Powerful Services Included</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ========== 11 GROWTH SYSTEMS SECTION ========== */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(214,177,90,.08),transparent_40%)]" />
        
        <div className="relative mx-auto max-w-[1520px]">
          <RevealSection>
            <SectionKicker>Our Systems</SectionKicker>
            <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.9] text-bone">
              11 Growth Systems.<br />
              <span className="text-gold">One Technology Partner.</span>
            </h2>
          </RevealSection>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {growthSystems.map((system, idx) => (
              <RevealSection key={system.number} delay={`${0.1 * idx}s`}>
                <div className="card-noir group rounded-2xl p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10">
                      <span className="text-xs font-bold text-gold">{system.number}</span>
                    </div>
                    <system.icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-bone">{system.title}</h3>
                  <p className="mb-4 text-xs text-white/48">{system.description}</p>
                  <button onClick={scrollToForm} className="inline-flex items-center gap-1 text-xs font-medium text-gold transition hover:text-gold-soft">
                    I'm Interested <ArrowRight className="arrow-hover h-3 w-3" />
                  </button>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LAUNCH YOUR DREAM STARTUP ========== */}
      <section className="relative overflow-hidden border-t border-white/[0.07] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1520px]">
          <RevealSection>
            <SectionKicker>Startup Package</SectionKicker>
            <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.9] text-bone">
              Launch Your <span className="text-gold">Dream Startup</span>
            </h2>
            <p className="mt-4 max-w-2xl text-white/48">
              Get essential technology, branding, marketing, and growth systems in one powerful startup package.
            </p>
          </RevealSection>

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            {/* LEFT - Gift Box + Services */}
            <RevealSection>
              <div className="card-noir rounded-2xl p-8 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gold/10">
                  <Gift className="h-10 w-10 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-bone">Everything You Need</h3>
                <p className="mb-6 text-sm text-white/48">10 essential services to launch your startup</p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {startupServices.map((service, idx) => (
                  <div key={idx} className="card-noir flex items-center gap-3 rounded-xl p-3">
                    <CheckCircle className="h-4 w-4 shrink-0 text-gold" />
                    <span className="text-sm text-bone/80">{service}</span>
                  </div>
                ))}
              </div>

              <div className="gold-border-glow mt-6 rounded-xl bg-gradient-to-r from-gold/10 to-transparent p-4 text-center">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  <CheckCircle className="h-4 w-4" />
                  10 Startup Services Included
                </div>
              </div>
            </RevealSection>

            {/* RIGHT - CTA Card */}
            <RevealSection delay="0.2s">
              <div className="card-noir rounded-2xl p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10">
                  <Rocket className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-bone">Startup & MVP Launch Kit</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/48">
                  Services are available to eligible Startup & MVP Kit customers. Scope and eligibility will be confirmed during consultation.
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    "Professional Logo Design",
                    "Google Business Profile Setup",
                    "Google Maps Listing",
                    "Google Search Visibility Setup",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-bone/80">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold/40" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button onClick={scrollToForm} className="btn-gold mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em]">
                  Register for Startup & MVP Kit
                </button>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ========== FROM QR SCAN TO BUSINESS GROWTH ========== */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1520px]">
          <RevealSection>
            <SectionKicker>How It Works</SectionKicker>
            <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.9] text-bone">
              From QR Scan to <span className="text-gold">Business Growth</span>
            </h2>
          </RevealSection>

          {/* Timeline Steps */}
          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {qrSteps.map((step, idx) => (
              <RevealSection key={step.number} delay={`${0.1 * idx}s`}>
                <div className="relative text-center group">
                  {idx < qrSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-gold/40 to-transparent" />
                  )}
                  <div className="relative mx-auto mb-4">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gradient-to-br from-gold/20 to-gold/5 text-sm font-bold text-gold transition-transform duration-300 group-hover:scale-110">
                      {step.number}
                    </div>
                  </div>
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10">
                    <step.icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-bone">{step.title}</h3>
                  <p className="text-xs text-white/48">{step.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* ========== FORM + LOGIN SECTION ========== */}
          <div ref={formRef} className="mx-auto mt-20 max-w-5xl">
            <RevealSection>
              <div className="card-noir overflow-hidden rounded-2xl">
                <div className="grid divide-y divide-border lg:grid-cols-2 lg:divide-x lg:divide-y-0">
                  {/* LEFT - Lead Form */}
                  <div className="p-6 md:p-8">
                    <h3 className="mb-6 text-xl font-bold text-bone">Tell Us About Your Business</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-bone/80">
                          Full Name <span className="text-gold">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-lg border border-border bg-black/30 px-4 py-2.5 text-sm text-bone placeholder:text-white/30 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-bone/80">
                          Mobile Number <span className="text-gold">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-lg border border-border bg-black/30 px-4 py-2.5 text-sm text-bone placeholder:text-white/30 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-bone/80">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-lg border border-border bg-black/30 px-4 py-2.5 text-sm text-bone placeholder:text-white/30 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-bone/80">Company or Startup Name</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full rounded-lg border border-border bg-black/30 px-4 py-2.5 text-sm text-bone placeholder:text-white/30 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-bone/80">Business Stage</label>
                        <select
                          value={formData.businessStage}
                          onChange={(e) => setFormData({ ...formData, businessStage: e.target.value })}
                          className="w-full rounded-lg border border-border bg-black/30 px-4 py-2.5 text-sm text-bone focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20"
                        >
                          <option value="">Select stage</option>
                          <option value="idea">Idea Stage</option>
                          <option value="mvp">MVP / Development</option>
                          <option value="launch">Launching Soon</option>
                          <option value="growth">Scaling / Growth</option>
                          <option value="established">Established Business</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-bone/80">Interested Service</label>
                        <select
                          value={formData.interestedService}
                          onChange={(e) => setFormData({ ...formData, interestedService: e.target.value })}
                          className="w-full rounded-lg border border-border bg-black/30 px-4 py-2.5 text-sm text-bone focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20"
                        >
                          <option value="">Select service</option>
                          <option value="lead-gen">Lead Generation</option>
                          <option value="marketing">Performance Marketing</option>
                          <option value="ai-automation">AI & Automation</option>
                          <option value="startup-kit">Startup & MVP Kit</option>
                          <option value="crm">Business Software & CRM</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-bone/80">Business Requirement</label>
                        <textarea
                          rows={3}
                          value={formData.requirements}
                          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                          className="w-full resize-none rounded-lg border border-border bg-black/30 px-4 py-2.5 text-sm text-bone placeholder:text-white/30 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20"
                          placeholder="Tell us about your business needs..."
                        />
                      </div>

                      {/* Checkbox */}
                      <div className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1 rounded border-border bg-black/30 text-gold focus:ring-gold/40" />
                        <span className="text-xs text-white/48">
                          I agree to the Terms & Conditions and Privacy Policy
                        </span>
                      </div>

                      {status === "success" && (
                        <div className="flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 p-3 text-sm text-green-400">
                          <CheckCircle className="h-4 w-4" />
                          {statusMessage}
                        </div>
                      )}
                      {status === "error" && (
                        <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
                          <MessageSquare className="h-4 w-4" />
                          {statusMessage}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="btn-gold inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] disabled:opacity-50"
                      >
                        {status === "loading" ? (
                          <>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit and Verify Mobile <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>

                      <p className="flex items-center justify-center gap-1 text-center text-xs text-white/48">
                        <Lock className="h-3 w-3" />
                        No spam. Your information is protected.
                      </p>
                    </form>
                  </div>

                  {/* RIGHT - Customer Login + Dashboard */}
                  <div className="p-6 md:p-8">
                    <h3 className="mb-6 text-xl font-bold text-bone">Customer Login</h3>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-white/48">
                        Mobile Number or Email
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          className="flex-1 rounded-lg border border-border bg-black/30 px-4 py-2.5 text-sm text-bone placeholder:text-white/30 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20"
                          placeholder="Enter phone or email"
                        />
                        <button onClick={() => alert("OTP feature coming soon. Please use the contact form to reach us.")} className="btn-gold rounded-lg px-4 py-2.5 text-xs font-medium uppercase tracking-[0.16em]">
                          Send OTP
                        </button>
                      </div>
                    </div>

                    {/* Dashboard Preview Cards */}
                    <h4 className="pt-6 text-sm font-semibold text-bone">Dashboard Preview</h4>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="card-noir rounded-xl p-3">
                        <LayoutDashboard className="mb-2 h-4 w-4 text-gold" />
                        <p className="text-[10px] text-white/48">Selected Services</p>
                        <p className="text-sm font-bold text-bone">3</p>
                      </div>
                      <div className="card-noir rounded-xl p-3">
                        <MessageSquare className="mb-2 h-4 w-4 text-gold" />
                        <p className="text-[10px] text-white/48">Enquiry Status</p>
                        <p className="text-sm font-bold text-gold">In Progress</p>
                      </div>
                      <div className="card-noir rounded-xl p-3">
                        <Users className="mb-2 h-4 w-4 text-green-500" />
                        <p className="text-[10px] text-white/48">Assigned Consultant</p>
                        <p className="text-sm font-bold text-green-500">Available</p>
                      </div>
                      <div className="card-noir rounded-xl p-3">
                        <FileText className="mb-2 h-4 w-4 text-purple-500" />
                        <p className="text-[10px] text-white/48">Proposal Status</p>
                        <p className="text-sm font-bold text-purple-500">Pending</p>
                      </div>
                    </div>

                    <button onClick={() => alert("Dashboard login coming soon. Please use the contact form to get started.")} className="btn-gold mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em]">
                      Login to Dashboard
                    </button>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ========== TRUST FEATURES ========== */}
      <section className="relative overflow-hidden border-t border-white/[0.07] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1520px]">
          <RevealSection>
            <SectionKicker>Why Choose Us</SectionKicker>
            <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.9] text-bone">
              Built for <span className="text-gold">Trust</span>
            </h2>
          </RevealSection>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {trustFeatures.map((feature, idx) => (
              <RevealSection key={feature.title} delay={`${0.1 * idx}s`}>
                <div className="card-noir rounded-xl p-5 text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10">
                    <feature.icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-bone">{feature.title}</h3>
                  <p className="text-xs text-white/48">{feature.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA + CONTACT SECTION ========== */}
      <section ref={contactRef} className="relative overflow-hidden border-t border-white/[0.07] px-5 py-20 sm:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(214,177,90,.12),transparent_40%)]" />
        
        <div className="relative mx-auto max-w-[1520px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* LEFT - CTA */}
            <RevealSection>
              <SectionKicker>Get Started</SectionKicker>
              <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.9] text-bone">
                Ready to Turn Your Idea Into <span className="text-gold">Reality?</span>
              </h2>
              <p className="mt-6 max-w-lg text-white/48">
                Register now and let our startup and technology experts understand your business requirements.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button onClick={scrollToForm} className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em]">
                  Get Started
                </button>
                <a href="https://wa.me/918884014055" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-green-600/40 bg-green-600/10 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-green-400 shadow-[0_0_35px_rgba(22,163,74,.08)] transition hover:bg-green-600 hover:text-white hover:shadow-[0_0_48px_rgba(22,163,74,.28)]">
                  <MessageSquare className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </RevealSection>

            {/* RIGHT - Contact Cards */}
            <RevealSection delay="0.2s">
              <div className="card-noir space-y-4 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-muted/30 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-white/48">Phone</p>
                    <a href="tel:8884014055" className="text-sm font-semibold text-bone hover:text-gold">8884014055</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-muted/30 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
                    <MessageSquare className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-white/48">WhatsApp</p>
                    <a href="https://wa.me/918884014055" className="text-sm font-semibold text-bone hover:text-green-500">Chat with us</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-muted/30 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
                    <Globe className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-xs text-white/48">Website</p>
                    <a href="https://kaalamithra-ai.com" className="text-sm font-semibold text-bone hover:text-purple-500">kaalamithra-ai.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-muted/30 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10">
                    <Mail className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-xs text-white/48">Email</p>
                    <a href="mailto:info@kaalamithra-ai.com" className="text-sm font-semibold text-bone hover:text-pink-500">info@kaalamithra-ai.com</a>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="relative overflow-hidden border-t border-white/[0.07] bg-black px-5 py-12 sm:px-8 lg:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(214,177,90,.12),transparent_30%)]" />
        
        <div className="relative mx-auto grid max-w-[1520px] gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:items-end">
          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-gold/70">
                <BrainCircuit className="h-6 w-6 text-noir" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-bone">KAALA</h3>
                <p className="-mt-1 text-xs text-white/48">MITHRA</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/48">
              KAALA MITHRA AI Tech Solution helps startups and businesses launch, automate and scale with powerful technology, marketing and automation solutions.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {["facebook", "instagram", "linkedin", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted/50 transition hover:border-gold/50 hover:bg-gold/10"
                >
                  <span className="text-xs font-bold uppercase text-white/48">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-bone">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-sm text-white/48 transition hover:text-gold">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-sm text-white/48 transition hover:text-gold">
                Terms and Conditions
              </Link>
              <Link href="/refund" className="block text-sm text-white/48 transition hover:text-gold">
                Refund and Cancellation Policy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-bone">Contact</h4>
            <div className="space-y-2">
              <a href="tel:8884014055" className="flex items-center gap-2 text-sm text-white/48 transition hover:text-gold">
                <Phone className="h-4 w-4" />
                8884014055
              </a>
              <a href="tel:9972702666" className="flex items-center gap-2 text-sm text-white/48 transition hover:text-gold">
                <Phone className="h-4 w-4" />
                9972702666
              </a>
              <a href="mailto:info@kaalamithra-ai.com" className="flex items-center gap-2 text-sm text-white/48 transition hover:text-gold">
                <Mail className="h-4 w-4" />
                info@kaalamithra-ai.com
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-10 flex max-w-[1520px] flex-col gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.22em] text-white/32 sm:flex-row sm:items-center sm:justify-between">
          <span>Technology, automation & growth solutions for modern businesses.</span>
          <span>© 2025 KAALA MITHRA AI Tech Solution. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Target, BarChart3, Bot, Rocket, Building2, Cloud, ShoppingCart, PenTool, Funnel, PieChart, CheckCircle, Loader2 } from "lucide-react"

interface Service {
  id: string
  icon: any
  title: string
  description: string
  href: string
  features: string[]
  benefits: string[]
  backDescription: string
}

const services: Service[] = [
  {
    id: "lead-generation",
    icon: Target,
    title: "Lead Generation Engine",
    description: "Generate qualified leads consistently through data-driven strategies and digital campaigns.",
    href: "/services/lead-generation",
    features: [
      "Target Audience Research",
      "Lead Funnel Creation",
      "Landing Pages",
      "CRM Integration",
      "Lead Nurturing",
    ],
    benefits: [
      "More Qualified Leads",
      "Higher Conversion Rates",
      "Lower Acquisition Costs",
    ],
    backDescription: "Our lead generation engine combines data-driven targeting, optimized landing pages, and automated nurturing workflows to consistently deliver high-quality leads for your sales team.",
  },
  {
    id: "performance-marketing",
    icon: BarChart3,
    title: "Performance Marketing",
    description: "Drive measurable business growth with ROI-focused digital advertising campaigns.",
    href: "/services/performance-marketing",
    features: [
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "Campaign Optimization",
      "Conversion Tracking",
    ],
    benefits: [
      "Higher ROI",
      "Increased Brand Visibility",
      "Consistent Growth",
    ],
    backDescription: "Data-driven performance marketing campaigns across Google, Meta, LinkedIn, and more — optimized continuously for maximum ROI and business growth.",
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI & Automation System",
    description: "Automate repetitive tasks and improve operational efficiency using intelligent workflows.",
    href: "/services/ai-automation",
    features: [
      "AI Chatbots",
      "Workflow Automation",
      "CRM Automation",
      "Lead Routing",
      "Task Automation",
    ],
    benefits: [
      "Reduced Manual Work",
      "Faster Response Times",
      "Improved Productivity",
    ],
    backDescription: "Intelligent AI-powered automation systems that eliminate repetitive tasks, streamline operations, and free your team to focus on what matters most.",
  },
  {
    id: "startup-mvp",
    icon: Rocket,
    title: "Startup / MVP Launch Kit",
    description: "Launch your startup faster with technology, branding, and growth systems.",
    href: "/services/startup-mvp",
    features: [
      "MVP Development",
      "Brand Identity",
      "Website Creation",
      "Growth Strategy",
      "Product Validation",
    ],
    benefits: [
      "Faster Market Entry",
      "Lower Development Risk",
      "Scalable Foundation",
    ],
    backDescription: "From concept to launch, our startup kit provides everything you need — MVP development, branding, website, and growth strategy — to hit the market fast.",
  },
  {
    id: "crm-software",
    icon: Building2,
    title: "Business Software & CRM",
    description: "Build systems that streamline operations and improve customer management.",
    href: "/services/crm-software",
    features: [
      "Custom Software",
      "CRM Setup",
      "Sales Automation",
      "Customer Management",
      "Workflow Design",
    ],
    benefits: [
      "Better Team Productivity",
      "Improved Customer Experience",
      "Centralized Operations",
    ],
    backDescription: "Custom business software and CRM solutions designed to centralize your operations, automate workflows, and deliver a seamless customer experience.",
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud & DevOps Infrastructure",
    description: "Build secure, scalable, and reliable cloud environments.",
    href: "/services/cloud-devops",
    features: [
      "Cloud Deployment",
      "Server Management",
      "DevOps Automation",
      "Security Optimization",
      "Monitoring Systems",
    ],
    benefits: [
      "Scalable Infrastructure",
      "Reduced Downtime",
      "Improved Performance",
    ],
    backDescription: "Enterprise-grade cloud infrastructure and DevOps pipelines that ensure your applications are secure, scalable, and always available.",
  },
  {
    id: "ecommerce-growth",
    icon: ShoppingCart,
    title: "E-Commerce Growth System",
    description: "Accelerate online sales through optimized e-commerce solutions.",
    href: "/services/ecommerce-growth",
    features: [
      "Store Development",
      "Marketplace Integration",
      "Conversion Optimization",
      "Product Marketing",
      "Sales Automation",
    ],
    benefits: [
      "Higher Revenue",
      "Improved Customer Experience",
      "Business Scalability",
    ],
    backDescription: "End-to-end e-commerce solutions from store development to marketplace integration and conversion optimization that drive measurable sales growth.",
  },
  {
    id: "content-branding",
    icon: PenTool,
    title: "Content & Branding System",
    description: "Build authority and trust through strategic content creation.",
    href: "/services/content-branding",
    features: [
      "Content Strategy",
      "Social Media Management",
      "Personal Branding",
      "Video Content",
      "Thought Leadership",
    ],
    benefits: [
      "Increased Visibility",
      "Stronger Brand Authority",
      "Higher Engagement",
    ],
    backDescription: "Strategic content and personal branding systems that establish your authority, build trust, and create lasting engagement with your audience.",
  },
  {
    id: "sales-funnel",
    icon: Funnel,
    title: "Sales Funnel & Closing System",
    description: "Create predictable revenue through optimized sales processes.",
    href: "/services/sales-funnel",
    features: [
      "Sales Funnels",
      "Lead Qualification",
      "Follow-Up Automation",
      "Pipeline Management",
      "Conversion Tracking",
    ],
    benefits: [
      "Higher Closing Rates",
      "More Revenue",
      "Improved Sales Efficiency",
    ],
    backDescription: "Optimized sales funnels and closing systems that turn leads into customers with automated follow-ups, pipeline management, and conversion tracking.",
  },
  {
    id: "data-analytics",
    icon: PieChart,
    title: "Data & Analytics Intelligence",
    description: "Transform business data into actionable insights.",
    href: "/services/data-analytics",
    features: [
      "Dashboards",
      "Business Intelligence",
      "Performance Tracking",
      "Forecasting",
      "Custom Reports",
    ],
    benefits: [
      "Better Decisions",
      "Improved Efficiency",
      "Data-Driven Growth",
    ],
    backDescription: "Transform raw data into actionable intelligence with custom dashboards, BI tools, performance tracking, and predictive analytics for smarter decisions.",
  },
]

// Single card with flip effect, icon-first reveal, and loading animation
function ServiceFlipCard({ service }: { service: Service }) {
  const [flipped, setFlipped] = useState(false)
  const [loading, setLoading] = useState(true)
  const [revealed, setRevealed] = useState(false)
  const Icon = service.icon

  // Simulate loading/spinning on initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      setRevealed(true)
    }, 600 + Math.random() * 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="relative w-full h-[420px] cursor-pointer group"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((prev) => !prev)}
    >
      {/* Inner container with 3D flip */}
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* ===== FRONT FACE: Icon first, then content reveals ===== */}
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-[#151738] border border-[#2A2D5A] shadow-sm hover:shadow-[#00D4FF]/10 hover:shadow-lg transition-all duration-300 [backface-visibility:hidden] overflow-hidden">
          {loading ? (
            /* Loading state: show only spinning icon */
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <Loader2 className="w-12 h-12 text-[#00D4FF] animate-spin" />
              <span className="text-sm text-[#94A3B8] font-medium animate-pulse">Loading...</span>
            </div>
          ) : (
            /* Revealed state: show icon then content slides in */
            <div className="h-full flex flex-col">
              {/* Icon area at top */}
              <div className="flex items-center justify-center pt-8 pb-4">
                <div className="w-16 h-16 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center group-hover:bg-[#00D4FF]/20 transition-all duration-500 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-[#00D4FF]" />
                </div>
              </div>

              {/* Content that fades/slides in */}
              <div
                className={`flex-1 px-6 pb-6 flex flex-col transition-all duration-700 ease-out ${
                  revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <h3 className="text-lg font-bold text-[#F8FAFC] text-center mb-2">
                  {service.title}
                </h3>
                <p className="text-base text-muted-foreground text-center leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5 mb-auto">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* Hover hint */}
                <p className="text-xs text-center text-muted-foreground mt-3 font-medium">
                  Hover or tap to flip →
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ===== BACK FACE: Full details ===== */}
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-[#0A0B1E] border border-[#2A2D5A] text-[#F8FAFC] p-6 flex flex-col [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-lg">
          <div className="flex-1 overflow-y-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#00D4FF]" />
              </div>
              <h3 className="text-lg font-bold text-[#F8FAFC]">{service.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.backDescription}</p>
            <div className="border-t border-border pt-3 mb-4">
              <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Key Benefits</h4>
              <ul className="space-y-1.5">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="space-y-1.5">
              {service.features.map((feature, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href={service.href}
            onClick={(e) => e.stopPropagation()}
            className="mt-4 w-full text-center bg-gradient-to-r from-[#00D4FF] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#00D4FF] text-[#0A0B1E] text-xs font-semibold py-3 px-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-[#00D4FF]/20"
          >
            Explore Full Page <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.06)_0%,transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] mb-6">
              Our <span className="animated-gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tap any card to flip and explore — icon first, then full details
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From AI-powered automation to performance marketing, we offer end-to-end solutions designed to help your business grow, scale, and succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid with Flip Cards */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <ServiceFlipCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent/10 backdrop-blur-sm border-y border-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Connect directly with an engineering consultant to design your specialized automation blueprint.
          </p>
          <Link 
            href="/#contact" 
            className="inline-flex items-center bg-gradient-to-r from-[#00D4FF] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#00D4FF] text-[#0A0B1E] font-semibold px-6 py-3 rounded-full transition-all duration-300 text-sm shadow-lg shadow-[#00D4FF]/20"
          >
            Get Free Audit <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </main>
  )
}
import Link from "next/link"
import { ArrowRight, Building, Heart, GraduationCap, Store, ShoppingCart, Hotel, Factory, Landmark, Rocket } from "lucide-react"

const industries = [
  {
    icon: Building,
    title: "Real Estate",
    description: "Lead generation, CRM automation, property marketing, sales funnel optimization.",
    href: "/industries/real-estate",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Patient acquisition, appointment automation, digital presence management.",
    href: "/industries/healthcare",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Admissions marketing, lead nurturing, student engagement systems.",
    href: "/industries/education",
  },
  {
    icon: Store,
    title: "Retail",
    description: "Customer acquisition, loyalty systems, digital commerce solutions.",
    href: "/industries/retail",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Store optimization, performance marketing, conversion growth.",
    href: "/industries/ecommerce",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description: "Booking growth, reputation management, customer engagement.",
    href: "/industries/hospitality",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Process automation, CRM implementation, operational optimization.",
    href: "/industries/manufacturing",
  },
  {
    icon: Landmark,
    title: "Finance",
    description: "Lead management, compliance-focused digital growth systems.",
    href: "/industries/finance",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "MVP launch, branding, growth marketing, technology development.",
    href: "/industries/startups",
  },
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Industries We <span className="text-primary">Serve</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tailored technology solutions for diverse industry verticals
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With deep expertise across multiple sectors, we understand the unique challenges and opportunities in your industry. Our solutions are customized to drive growth and efficiency in your specific market.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {industry.description}
                </p>
                <span className="inline-flex items-center text-primary text-sm font-medium">
                  Explore <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Let us help you leverage technology to stay ahead of the competition and drive sustainable growth.
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 text-lg rounded-lg neon-glow transition-all duration-300"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
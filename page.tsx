import Link from "next/link"
import { ArrowRight, Target, Eye, Heart, Zap, Users, TrendingUp, Award, CheckCircle } from "lucide-react"

const coreValues = [
  {
    icon: Zap,
    title: "Innovation",
    description: "We leverage cutting-edge technology to solve complex business challenges.",
  },
  {
    icon: Target,
    title: "Integrity",
    description: "Transparent, honest partnerships built on trust and accountability.",
  },
  {
    icon: Heart,
    title: "Customer Success",
    description: "Your growth is our success. We're committed to your long-term achievements.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "Always learning, always evolving to deliver better results.",
  },
  {
    icon: Award,
    title: "Data-Driven Decisions",
    description: "Every strategy backed by data, analytics, and measurable insights.",
  },
  {
    icon: Users,
    title: "Long-Term Partnerships",
    description: "Building lasting relationships that grow and evolve together.",
  },
]

const processSteps = [
  {
    step: 1,
    title: "Discover",
    description: "Understand your business goals, challenges, and opportunities.",
  },
  {
    step: 2,
    title: "Strategy",
    description: "Develop a customized roadmap for growth.",
  },
  {
    step: 3,
    title: "Build",
    description: "Design and implement technology and marketing systems.",
  },
  {
    step: 4,
    title: "Launch",
    description: "Deploy campaigns, software, and automation solutions.",
  },
  {
    step: 5,
    title: "Optimize",
    description: "Continuously improve performance through data analysis.",
  },
  {
    step: 6,
    title: "Scale",
    description: "Expand growth with advanced automation and optimization.",
  },
]

const statistics = [
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Clients Served" },
  { value: "100K+", label: "Leads Generated" },
  { value: "10M+", label: "Reach Generated" },
]

const whyChooseUs = [
  {
    title: "AI-First Approach",
    description: "We leverage AI to increase efficiency, productivity, and business growth.",
  },
  {
    title: "End-to-End Solutions",
    description: "From strategy to implementation, we manage the complete transformation journey.",
  },
  {
    title: "Experienced Team",
    description: "Experts in Marketing, Technology, Automation, CRM, and Growth.",
  },
  {
    title: "Fast Delivery",
    description: "Agile processes ensure quicker implementation and faster results.",
  },
  {
    title: "Scalable Systems",
    description: "Solutions designed to grow with your business.",
  },
  {
    title: "Dedicated Support",
    description: "Continuous support and optimization for long-term success.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="animated-gradient-text">KAALAMITHRA</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your Growth Partner in the Digital Age
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              KAALAMITHRA is an AI-first technology and growth company helping businesses scale through Automation, Marketing, Software Development, CRM Solutions, and Data Intelligence. We combine innovation, strategy, and technology to solve complex business challenges and create measurable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="p-8 rounded-xl bg-background border border-border">
              <Target className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower businesses with intelligent technology and growth systems that drive sustainable success.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-background border border-border">
              <Eye className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become a trusted global partner for AI-powered business transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {statistics.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Businesses <span className="text-primary">Trust Us</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              What sets KAALAMITHRA apart from the competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology for delivering results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Let's build something extraordinary together. Book a free consultation and discover how KAALAMITHRA can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 text-lg rounded-lg neon-glow transition-all duration-300"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-border hover:bg-accent text-foreground font-semibold px-10 py-4 text-lg rounded-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
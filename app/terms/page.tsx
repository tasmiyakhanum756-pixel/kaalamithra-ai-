import { Star, TrendingUp, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    rating: 5,
    quote: "KAALAMITHRA transformed our lead generation process and significantly improved our sales pipeline.",
    author: "Real Estate Business Owner",
    industry: "Real Estate",
  },
  {
    rating: 5,
    quote: "Their automation systems helped us save countless hours and improve customer engagement.",
    author: "Startup Founder",
    industry: "Technology",
  },
  {
    rating: 5,
    quote: "Professional, reliable, and results-driven. Highly recommended.",
    author: "Business Director",
    industry: "Consulting",
  },
]

const successStories = [
  {
    company: "Real Estate Company",
    problem: "Low Lead Generation",
    solution: "Meta Advertising + CRM Automation",
    result: "250% Increase in Qualified Leads",
  },
  {
    company: "Educational Institution",
    problem: "Low Admissions",
    solution: "Digital Marketing + Lead Nurturing System",
    result: "180% Increase in Admissions Enquiries",
  },
  {
    company: "Retail Brand",
    problem: "Low Online Sales",
    solution: "E-Commerce Growth System",
    result: "300% Revenue Growth",
  },
]

const metrics = [
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Clients Served" },
  { value: "100K+", label: "Leads Generated" },
  { value: "10M+", label: "Reach Generated" },
  { value: "500+", label: "Campaigns Managed" },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating
              ? "text-primary fill-primary"
              : "text-muted-foreground fill-transparent"
          }`}
        />
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Client <span className="text-primary">Testimonials</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from the businesses we've helped transform.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <StarRating rating={testimonial.rating} />
                <p className="text-muted-foreground mt-6 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real results from real businesses we've helped grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {story.company}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Problem:</p>
                    <p className="text-foreground font-medium">{story.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Solution:</p>
                    <p className="text-foreground font-medium">{story.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Result:</p>
                    <p className="text-primary font-bold text-lg">{story.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Impact</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Measurable results that speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-muted-foreground text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Join the 50+ businesses that have transformed their growth with KAALAMITHRA.
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
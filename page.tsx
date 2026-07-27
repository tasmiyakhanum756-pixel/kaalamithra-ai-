import Link from "next/link"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

const blogPosts = [
  {
    title: "How AI is Transforming Small Business Marketing",
    excerpt: "Discover how artificial intelligence is revolutionizing the way small businesses approach marketing and customer engagement.",
    date: "January 15, 2026",
    readTime: "5 min read",
    author: "KAALAMITHRA Team",
    category: "AI & Automation",
  },
  {
    title: "The Complete Guide to CRM Implementation",
    excerpt: "Learn everything you need to know about implementing a CRM system that drives sales and improves customer relationships.",
    date: "January 10, 2026",
    readTime: "8 min read",
    author: "KAALAMITHRA Team",
    category: "CRM",
  },
  {
    title: "Top Digital Marketing Trends for 2026",
    excerpt: "Stay ahead of the curve with our comprehensive overview of the most important digital marketing trends shaping 2026.",
    date: "January 5, 2026",
    readTime: "6 min read",
    author: "KAALAMITHRA Team",
    category: "Marketing",
  },
  {
    title: "Automating Your Sales Funnel for Maximum Conversions",
    excerpt: "Learn how to build and automate a sales funnel that converts leads into customers on autopilot.",
    date: "December 28, 2025",
    readTime: "7 min read",
    author: "KAALAMITHRA Team",
    category: "Sales Automation",
  },
  {
    title: "Why Your Business Needs a Custom Software Solution",
    excerpt: "Explore the benefits of custom software development versus off-the-shelf solutions for your business.",
    date: "December 20, 2025",
    readTime: "6 min read",
    author: "KAALAMITHRA Team",
    category: "Technology",
  },
  {
    title: "Cloud Migration: A Step-by-Step Guide",
    excerpt: "A practical guide to migrating your business infrastructure to the cloud securely and efficiently.",
    date: "December 15, 2025",
    readTime: "10 min read",
    author: "KAALAMITHRA Team",
    category: "Cloud & DevOps",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Insights, strategies, and guides to help your business grow with technology
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center text-primary text-sm font-medium">
                  Read more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Want More Insights?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Subscribe to our newsletter and get the latest strategies delivered to your inbox.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 text-lg rounded-lg transition-all duration-300"
            >
              Subscribe Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
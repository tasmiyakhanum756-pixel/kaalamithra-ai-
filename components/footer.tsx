"use client"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-accent dark:bg-[#0A0B1E] border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="">
            <Link href="/" className="flex justify-start gap-3 items-center">
              <Image
                src="/animated-bg.gif"
                alt="KAALAMITHRA"
                width={180}
                height={40}
                className="h-12 md:h-16 rounded-xl w-auto"
                priority
              />
            <div className="flex flex-col justify-center select-none leading-none">
            <span className="text-[15px] md:text-[22px] font-extrabold tracking-wide text-primary font-sans">
              KAALA
            </span>
            <span className="text-[15px] md:text-[22px] font-extrabold tracking-wide text-secondary font-sans -mt-0.5 md:-mt-1">
              MITHRA
            </span>
            <span className="text-[7px] md:text-[10px] font-bold tracking-wider text-muted-foreground uppercase mt-0.5 md:mt-1">
              AI Tech Solution
            </span>
            </div>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-xs">
              AI-First Technology & Growth Company. Empowering businesses with intelligent automation, CRM, marketing, and technology solutions.
            </p>
            <div className="mt-6 space-y-3">
              <a href="mailto:tech@kaalamithra-ai.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4" />
                tech@kaalamithra-ai.com
              </a>
              <a href="tel:8884014055" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4" />
                8884014055
              </a>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                Tumkur, India
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-accent-foreground uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link href="/industries" className="text-muted-foreground hover:text-primary transition-colors text-sm">Industries</Link></li>
              <li><Link href="/case-studies" className="text-muted-foreground hover:text-primary transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/testimonials" className="text-muted-foreground hover:text-primary transition-colors text-sm">Testimonials</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-accent-foreground uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/lead-generation" className="text-muted-foreground hover:text-primary transition-colors text-sm">Lead Generation</Link></li>
              <li><Link href="/services/performance-marketing" className="text-muted-foreground hover:text-primary transition-colors text-sm">Performance Marketing</Link></li>
              <li><Link href="/services/ai-automation" className="text-muted-foreground hover:text-primary transition-colors text-sm">AI & Automation</Link></li>
              <li><Link href="/services/crm-software" className="text-muted-foreground hover:text-primary transition-colors text-sm">CRM Solutions</Link></li>
              <li><Link href="/services/cloud-devops" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cloud & DevOps</Link></li>
              <li><Link href="/services/ecommerce-growth" className="text-muted-foreground hover:text-primary transition-colors text-sm">E-Commerce Growth</Link></li>
              <li><Link href="/services/data-analytics" className="text-muted-foreground hover:text-primary transition-colors text-sm">Data & Analytics</Link></li>
            </ul>
          </div>
          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold text-accent-foreground uppercase tracking-wider mb-6">Let's Grow Together</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Ready to transform your business? Book a free consultation and discover how we can help you achieve your goals.
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 text-sm shadow-lg shadow-primary/20"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} KAALAMITHRA. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
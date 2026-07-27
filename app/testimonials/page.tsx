// app/privacy/page.tsx
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.06)_0%,transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: July 2026</p>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>
              At KAALAMITHRA, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fill out a consultation form</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us via email or phone</li>
              <li>Use our services</li>
            </ul>
            <p>This information may include your name, email address, phone number, company name, and business requirements.</p>
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Respond to your inquiries and consultation requests</li>
              <li>Improve our website and services</li>
              <li>Send relevant marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Data Protection</h2>
            <p>We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Third-Party Services</h2>
            <p>We may use third-party services for analytics, hosting, and communication. These services have their own privacy policies governing the use of your information.</p>
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <p>Email: tech@kaalamithra-ai.com<br />Phone: +91 88840 14055</p>
          </div>
        </div>
      </section>
    </main>
  )
}
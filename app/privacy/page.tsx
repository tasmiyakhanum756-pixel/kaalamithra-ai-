// app/terms/page.tsx
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.06)_0%,transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: July 2026</p>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>
              Welcome to KAALAMITHRA. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Acceptance of Terms</h2>
            <p>By using our services, you agree to these Terms of Service. If you do not agree, please do not use our services.</p>
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Services Description</h2>
            <p>KAALAMITHRA provides AI, automation, CRM, digital marketing, and technology solutions. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.</p>
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">User Obligations</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Use our services in compliance with applicable laws</li>
              <li>Not misuse or abuse our services</li>
              <li>Not engage in any activity that disrupts our services</li>
            </ul>
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Intellectual Property</h2>
            <p>All content, trademarks, and intellectual property on this website are owned by KAALAMITHRA unless otherwise stated. You may not reproduce, distribute, or create derivative works without our explicit permission.</p>
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Limitation of Liability</h2>
            <p>KAALAMITHRA shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.</p>
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Changes to Terms</h2>
            <p>We reserve the right to update these terms at any time. We will notify users of any material changes.</p>
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Contact</h2>
            <p>For questions about these terms, contact us at:</p>
            <p>Email: tech@kaalamithra-ai.com<br />Phone: +91 88840 14055</p>
          </div>
        </div>
      </section>
    </main>
  )
}
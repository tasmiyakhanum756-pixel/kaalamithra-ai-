import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 relative z-10">
      <div className="max-w-md text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-muted flex items-center justify-center">
          <span className="text-4xl font-bold text-muted-foreground">?</span>
        </div>
        <h1 className="text-5xl font-bold text-foreground">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
        <p className="text-muted-foreground">
          The page you are looking for doesn't exist or has been moved. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors"
          >
            Contact Us
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          Still lost? Call us at{" "}
          <a href="tel:+918884014055" className="text-primary hover:underline">
            +91 88840 14055
          </a>
        </p>
      </div>
    </main>
  )
}
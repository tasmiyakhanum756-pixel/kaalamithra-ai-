import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const industriesData: Record<string, { title: string; description: string; solutions: string[] }> = {
  healthcare: {
    title: "Healthcare",
    description: "Empowering healthcare organizations with innovative digital solutions that improve patient outcomes, streamline operations, and ensure compliance.",
    solutions: [
      "Electronic Health Records (EHR)",
      "Telemedicine Platforms",
      "Patient Portal Development",
      "Medical Billing Systems",
      "Healthcare Analytics",
      "HIPAA-Compliant Solutions",
    ],
  },
  finance: {
    title: "Finance",
    description: "Building secure, scalable financial technology solutions that drive innovation while maintaining the highest standards of security and compliance.",
    solutions: [
      "Digital Banking Platforms",
      "Payment Processing Systems",
      "Risk Management Tools",
      "Trading Platforms",
      "Regulatory Compliance",
      "Fraud Detection Systems",
    ],
  },
  ecommerce: {
    title: "E-commerce",
    description: "Creating powerful e-commerce experiences that drive conversions, enhance customer loyalty, and scale with your business growth.",
    solutions: [
      "Custom Online Stores",
      "Marketplace Development",
      "Inventory Management",
      "Payment Integration",
      "Order Fulfillment Systems",
      "Customer Analytics",
    ],
  },
  manufacturing: {
    title: "Manufacturing",
    description: "Driving digital transformation in manufacturing with smart solutions that optimize production, reduce costs, and improve quality.",
    solutions: [
      "IoT & Smart Factory",
      "Supply Chain Management",
      "Quality Control Systems",
      "Predictive Maintenance",
      "Production Planning",
      "Inventory Optimization",
    ],
  },
  education: {
    title: "Education",
    description: "Transforming education with technology solutions that enhance learning experiences and streamline administrative processes.",
    solutions: [
      "Learning Management Systems",
      "Virtual Classrooms",
      "Student Information Systems",
      "Assessment Platforms",
      "Educational Content Delivery",
      "Analytics & Reporting",
    ],
  },
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = industriesData[slug]

  if (!industry) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Industry Not Found</h1>
          <Link href="/industries" className="text-primary hover:underline">
            Back to Industries
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <Link
          href="/industries"
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Industries
        </Link>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {industry.title} <span className="text-primary">Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            {industry.description}
          </p>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Our Solutions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {industry.solutions.map((solution) => (
              <div
                key={solution}
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground">{solution}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg neon-glow transition-all duration-300"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

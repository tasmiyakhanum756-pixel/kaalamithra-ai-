// app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import { CheckCircle, ArrowLeft, ArrowRight, Zap, BarChart3, Target, Bot, Rocket, Building2, Cloud, ShoppingCart, PenTool, Funnel, PieChart, Sparkles, Star, Users, TrendingUp, Clock, Shield, Globe, Settings, Layers, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { use } from "react";
import BookConsultation from "@/components/bookConsultation";

// Comprehensive service data
const serviceDetails: Record<string, {
  title: string;
  tagline: string;
  overview: string;
  description: string;
  icon: any;
  features: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  stats: { value: string; label: string }[];
  ctaText: string;
  ctaLink: string;
  color: string;
}> = {
  "lead-generation": {
    title: "Lead Generation Engine",
    tagline: "Fill Your Pipeline with Qualified Leads",
    overview: "Generate qualified leads consistently through data-driven strategies and digital campaigns.",
    description: "Our lead generation engine combines data-driven targeting, optimized landing pages, and automated nurturing workflows to consistently deliver high-quality leads for your sales team. We use advanced audience segmentation, multi-channel outreach, and continuous A/B testing to maximize conversion rates and minimize cost per lead.",
    icon: Target,
    features: [
      { title: "Target Audience Research", description: "Deep demographic and behavioral analysis to identify your ideal customer profile and build precise targeting segments." },
      { title: "Multi-Stage Lead Funnel Creation", description: "Design and implement complete lead funnels from awareness to conversion, optimized for each stage of the buyer journey." },
      { title: "High-Converting Landing Pages", description: "Custom-designed landing pages with persuasive copy, social proof, and optimized conversion paths." },
      { title: "CRM Integration & Automation", description: "Seamless integration with your CRM system with automated lead scoring, routing, and follow-up sequences." },
      { title: "Lead Nurturing Workflows", description: "Automated email and SMS nurturing sequences that keep prospects engaged and move them through the sales pipeline." },
      { title: "Performance Analytics", description: "Real-time dashboards tracking lead quality, conversion rates, and ROI across all channels." },
    ],
    benefits: [
      { title: "More Qualified Leads", description: "Consistent flow of high-intent leads that match your ideal customer profile." },
      { title: "Higher Conversion Rates", description: "Optimized funnels and nurturing sequences that convert more prospects into customers." },
      { title: "Lower Acquisition Costs", description: "Data-driven targeting reduces wasted spend and improves cost per lead." },
      { title: "Scalable Growth", description: "Systems designed to scale with your business, from startups to enterprise." },
    ],
    process: [
      { step: "01", title: "Audit & Strategy", description: "We analyze your current lead generation efforts, identify gaps, and create a data-driven strategy." },
      { step: "02", title: "Campaign Setup", description: "We build and configure your campaigns across chosen channels with optimized targeting and creative." },
      { step: "03", title: "Optimization", description: "Continuous A/B testing and refinement to improve conversion rates and reduce costs." },
      { step: "04", title: "Scale & Grow", description: "Once optimized, we scale successful campaigns to maximize lead volume and ROI." },
    ],
    stats: [
      { value: "100K+", label: "Leads Generated" },
      { value: "3x", label: "Average ROAS" },
      { value: "40%", label: "Higher Conversion" },
      { value: "50+", label: "Businesses Served" },
    ],
    ctaText: "Get Your Lead Generation Audit",
    ctaLink: "/consultation",
    color: "#00D4FF",
  },
  "performance-marketing": {
    title: "Performance Marketing",
    tagline: "Maximize ROI with Data-Driven Advertising",
    overview: "Drive measurable business growth with ROI-focused digital advertising campaigns.",
    description: "Our performance marketing approach combines advanced targeting, creative optimization, and real-time analytics to deliver measurable results. We manage campaigns across Google, Meta, LinkedIn, and emerging platforms, continuously optimizing for the best possible return on your advertising investment.",
    icon: BarChart3,
    features: [
      { title: "Google Ads Management", description: "Full-funnel Google Ads campaigns including Search, Display, Shopping, and YouTube with advanced bidding strategies." },
      { title: "Meta Ads (Facebook/Instagram)", description: "Creative-driven campaigns with precise audience targeting, retargeting sequences, and lookalike audiences." },
      { title: "LinkedIn Advertising", description: "B2B-focused campaigns targeting decision-makers by job title, industry, company size, and more." },
      { title: "Campaign Optimization", description: "Continuous A/B testing of ad creative, copy, targeting, and landing pages to improve performance." },
      { title: "Conversion Tracking", description: "Advanced tracking setup including custom events, pixel implementation, and conversion attribution." },
      { title: "Reporting & Analytics", description: "Detailed performance reports with actionable insights and recommendations for ongoing improvement." },
    ],
    benefits: [
      { title: "Higher ROI", description: "Data-driven optimization ensures every dollar spent delivers maximum return." },
      { title: "Increased Brand Visibility", description: "Strategic presence across multiple platforms reaches your target audience wherever they are." },
      { title: "Consistent Growth", description: "Scalable campaigns that grow with your business and adapt to market changes." },
      { title: "Measurable Results", description: "Clear, transparent reporting on all metrics that matter to your business." },
    ],
    process: [
      { step: "01", title: "Audit & Research", description: "Comprehensive analysis of your market, competitors, and current advertising performance." },
      { step: "02", title: "Strategy Development", description: "Custom campaign strategy with platform selection, budget allocation, and targeting plan." },
      { step: "03", title: "Execution & Launch", description: "Campaign setup, creative development, and launch with careful monitoring." },
      { step: "04", title: "Optimization & Scale", description: "Continuous optimization based on performance data and scaling of winning campaigns." },
    ],
    stats: [
      { value: "10M+", label: "Reach Generated" },
      { value: "4x", label: "Avg. ROAS" },
      { value: "500+", label: "Campaigns Managed" },
      { value: "95%", label: "Client Retention" },
    ],
    ctaText: "Boost Your Ad Performance",
    ctaLink: "/consultation",
    color: "#38BDF8",
  },
  "ai-automation": {
    title: "AI & Automation Systems",
    tagline: "Automate, Optimize, and Scale with AI",
    overview: "Automate repetitive tasks and improve operational efficiency using intelligent workflows.",
    description: "Intelligent AI-powered automation systems that eliminate repetitive tasks, streamline operations, and free your team to focus on what matters most. From AI chatbots that handle customer inquiries 24/7 to complex workflow automations that connect your entire tech stack, we build systems that work tirelessly in the background.",
    icon: Bot,
    features: [
      { title: "AI Chatbots & Virtual Assistants", description: "Intelligent conversational agents that handle customer inquiries, qualify leads, and provide 24/7 support." },
      { title: "Workflow Automation", description: "Automate complex business processes across multiple applications with custom automation workflows." },
      { title: "CRM Automation", description: "Automated lead scoring, routing, follow-ups, and data synchronization across your CRM." },
      { title: "Lead Routing & Qualification", description: "AI-powered lead scoring and automatic routing to the right sales representative." },
      { title: "Task Automation", description: "Eliminate manual data entry, report generation, and repetitive administrative tasks." },
      { title: "Integration Hub", description: "Connect all your business tools and applications into a unified, automated ecosystem." },
    ],
    benefits: [
      { title: "Reduced Manual Work", description: "Automate up to 90% of repetitive tasks, freeing your team for high-value work." },
      { title: "Faster Response Times", description: "AI-powered systems respond to customer inquiries instantly, 24/7." },
      { title: "Improved Productivity", description: "Streamlined workflows and automation boost team productivity by 3-5x." },
      { title: "Cost Savings", description: "Reduce operational costs while improving service quality and consistency." },
    ],
    process: [
      { step: "01", title: "Process Audit", description: "We map your current workflows and identify the highest-impact automation opportunities." },
      { step: "02", title: "Solution Design", description: "Custom automation architecture designed to integrate seamlessly with your existing tools." },
      { step: "03", title: "Development & Testing", description: "Build and rigorously test automation workflows in a staging environment." },
      { step: "04", title: "Deployment & Training", description: "Deploy automation systems and train your team on managing and optimizing them." },
    ],
    stats: [
      { value: "90%", label: "Task Reduction" },
      { value: "24/7", label: "Automated Support" },
      { value: "5x", label: "Productivity Boost" },
      { value: "60%", label: "Cost Savings" },
    ],
    ctaText: "Automate Your Business Today",
    ctaLink: "/consultation",
    color: "#8B5CF6",
  },
  "startup-mvp": {
    title: "Startup / MVP Launch Kit",
    tagline: "Launch Your Startup Faster and Smarter",
    overview: "Launch your startup faster with technology, branding, and growth systems.",
    description: "From concept to launch, our startup kit provides everything you need — MVP development, branding, website, and growth strategy — to hit the market fast. We help startups validate their ideas, build minimum viable products, and establish a strong market presence from day one.",
    icon: Rocket,
    features: [
      { title: "MVP Development", description: "Rapid development of your minimum viable product using modern tech stacks and agile methodologies." },
      { title: "Brand Identity Creation", description: "Complete brand identity including logo, color palette, typography, and brand guidelines." },
      { title: "Website Development", description: "High-performance website that effectively communicates your value proposition and converts visitors." },
      { title: "Growth Strategy", description: "Data-driven growth strategy including acquisition channels, pricing, and go-to-market plan." },
      { title: "Product Validation", description: "User testing and market validation to ensure product-market fit before scaling." },
      { title: "Investor Preparation", description: "Pitch deck creation, financial modeling, and investor-ready documentation." },
    ],
    benefits: [
      { title: "Faster Market Entry", description: "Launch in weeks, not months, with our streamlined development process." },
      { title: "Lower Development Risk", description: "Validated approach reduces the risk of building features nobody wants." },
      { title: "Scalable Foundation", description: "Built on scalable architecture that grows with your user base." },
      { title: "Investor Ready", description: "Professional branding and documentation that attracts investors." },
    ],
    process: [
      { step: "01", title: "Idea Validation", description: "We validate your idea through market research, competitor analysis, and user interviews." },
      { step: "02", title: "MVP Design", description: "Design the minimum feature set needed to launch and start learning from real users." },
      { step: "03", title: "Rapid Development", description: "Agile development sprints to build and iterate on your MVP quickly." },
      { step: "04", title: "Launch & Iterate", description: "Launch to market, gather feedback, and iterate based on real user data." },
    ],
    stats: [
      { value: "2-4", label: "Weeks to MVP" },
      { value: "50+", label: "Startups Launched" },
      { value: "85%", label: "Funding Success" },
      { value: "3x", label: "Faster Launch" },
    ],
    ctaText: "Launch Your Startup",
    ctaLink: "/consultation",
    color: "#F59E0B",
  },
  "crm-software": {
    title: "Business Software & CRM",
    tagline: "Centralize, Automate, and Scale Your Operations",
    overview: "Build systems that streamline operations and improve customer management.",
    description: "Custom business software and CRM solutions designed to centralize your operations, automate workflows, and deliver a seamless customer experience. We build systems that give you a single source of truth for all your customer data, sales processes, and business operations.",
    icon: Building2,
    features: [
      { title: "Custom Software Development", description: "Tailored software solutions built specifically for your unique business processes and requirements." },
      { title: "CRM Setup & Customization", description: "Implementation and customization of leading CRM platforms including Salesforce, HubSpot, and Zoho." },
      { title: "Sales Automation", description: "Automate lead tracking, deal management, follow-ups, and sales reporting." },
      { title: "Customer Management", description: "360-degree customer view with interaction history, preferences, and engagement tracking." },
      { title: "Workflow Design", description: "Custom workflow automation that connects your CRM with other business tools." },
      { title: "Migration & Integration", description: "Seamless data migration from legacy systems and integration with existing tools." },
    ],
    benefits: [
      { title: "Better Team Productivity", description: "Streamlined workflows and automated tasks free your team to focus on selling." },
      { title: "Improved Customer Experience", description: "Complete customer history enables personalized, timely interactions." },
      { title: "Centralized Operations", description: "Single source of truth for all customer data, sales activities, and business processes." },
      { title: "Data-Driven Decisions", description: "Real-time reporting and analytics for informed business decisions." },
    ],
    process: [
      { step: "01", title: "Requirements Analysis", description: "Deep dive into your business processes, pain points, and system requirements." },
      { step: "02", title: "Solution Architecture", description: "Design the optimal system architecture, including platform selection and customization needs." },
      { step: "03", title: "Implementation", description: "System setup, customization, data migration, and integration with existing tools." },
      { step: "04", title: "Training & Support", description: "Team training, documentation, and ongoing support to ensure successful adoption." },
    ],
    stats: [
      { value: "200+", label: "CRM Implementations" },
      { value: "95%", label: "Adoption Rate" },
      { value: "40%", label: "Efficiency Gain" },
      { value: "30%", label: "Revenue Increase" },
    ],
    ctaText: "Transform Your Operations",
    ctaLink: "/consultation",
    color: "#0D9488",
  },
  "cloud-devops": {
    title: "Cloud & DevOps Infrastructure",
    tagline: "Build Secure, Scalable, and Reliable Infrastructure",
    overview: "Build secure, scalable, and reliable cloud environments.",
    description: "Enterprise-grade cloud infrastructure and DevOps pipelines that ensure your applications are secure, scalable, and always available. We design, implement, and manage cloud infrastructure that grows with your business while maintaining enterprise security and compliance standards.",
    icon: Cloud,
    features: [
      { title: "Cloud Deployment & Migration", description: "Seamless migration to AWS, Google Cloud, or Azure with minimal downtime and risk." },
      { title: "Server Management & Monitoring", description: "24/7 server monitoring, auto-scaling, and proactive issue resolution." },
      { title: "DevOps Automation", description: "CI/CD pipelines, infrastructure as code, and automated deployment workflows." },
      { title: "Security Optimization", description: "Security audits, vulnerability assessments, and implementation of best practices." },
      { title: "Containerization (Docker/K8s)", description: "Container orchestration with Docker and Kubernetes for scalable, portable deployments." },
      { title: "Disaster Recovery", description: "Automated backup systems, failover configurations, and disaster recovery planning." },
    ],
    benefits: [
      { title: "Scalable Infrastructure", description: "Auto-scaling infrastructure that handles traffic spikes without manual intervention." },
      { title: "Reduced Downtime", description: "High-availability architecture with 99.9%+ uptime guarantee." },
      { title: "Improved Performance", description: "Optimized infrastructure delivers fast load times and responsive applications." },
      { title: "Cost Optimization", description: "Right-sized resources and reserved instances minimize cloud costs." },
    ],
    process: [
      { step: "01", title: "Infrastructure Audit", description: "Assessment of current infrastructure, performance, security, and cost optimization opportunities." },
      { step: "02", title: "Architecture Design", description: "Design of scalable, secure cloud architecture tailored to your application needs." },
      { step: "03", title: "Implementation", description: "Infrastructure setup, migration, automation, and security hardening." },
      { step: "04", title: "Managed Operations", description: "Ongoing monitoring, maintenance, optimization, and 24/7 support." },
    ],
    stats: [
      { value: "99.9%", label: "Uptime Guarantee" },
      { value: "60%", label: "Cost Reduction" },
      { value: "10x", label: "Faster Deployments" },
      { value: "500+", label: "Servers Managed" },
    ],
    ctaText: "Optimize Your Infrastructure",
    ctaLink: "/consultation",
    color: "#3B82F6",
  },
  "ecommerce-growth": {
    title: "E-Commerce Growth System",
    tagline: "Accelerate Your Online Sales",
    overview: "Accelerate online sales through optimized e-commerce solutions.",
    description: "End-to-end e-commerce solutions from store development to marketplace integration and conversion optimization that drive measurable sales growth. We help online stores increase traffic, improve conversion rates, and maximize customer lifetime value.",
    icon: ShoppingCart,
    features: [
      { title: "Store Development", description: "Custom e-commerce store development on Shopify, WooCommerce, Magento, or custom platforms." },
      { title: "Marketplace Integration", description: "Integration with Amazon, Flipkart, and other marketplaces to expand your reach." },
      { title: "Conversion Optimization", description: "A/B testing, UX improvements, and checkout optimization to increase conversion rates." },
      { title: "Product Marketing", description: "Product listing optimization, pricing strategies, and promotional campaign management." },
      { title: "Abandoned Cart Recovery", description: "Automated email and SMS sequences to recover abandoned carts and increase revenue." },
      { title: "Customer Retention", description: "Loyalty programs, post-purchase follow-ups, and re-engagement campaigns." },
    ],
    benefits: [
      { title: "Higher Revenue", description: "Optimized stores and marketing campaigns drive significant revenue increases." },
      { title: "Improved Customer Experience", description: "Fast, intuitive shopping experiences that customers love." },
      { title: "Business Scalability", description: "Systems and processes designed to scale from hundreds to millions of orders." },
      { title: "Multi-Channel Growth", description: "Expanded reach across multiple sales channels and marketplaces." },
    ],
    process: [
      { step: "01", title: "Store Audit", description: "Comprehensive analysis of your current store, traffic, conversion rates, and revenue streams." },
      { step: "02", title: "Optimization Strategy", description: "Data-driven strategy for improving traffic, conversion, and customer retention." },
      { step: "03", title: "Implementation", description: "Execute optimization plan including store improvements, marketing campaigns, and automation." },
      { step: "04", title: "Monitor & Scale", description: "Continuous monitoring, testing, and scaling of successful strategies." },
    ],
    stats: [
      { value: "3x", label: "Revenue Growth" },
      { value: "40%", label: "Conversion Uplift" },
      { value: "25%", label: "Cart Recovery" },
      { value: "100K+", label: "Orders Processed" },
    ],
    ctaText: "Grow Your E-Commerce Store",
    ctaLink: "/consultation",
    color: "#EC4899",
  },
  "content-branding": {
    title: "Content & Branding System",
    tagline: "Build Authority and Trust Through Content",
    overview: "Build authority and trust through strategic content creation.",
    description: "Strategic content and personal branding systems that establish your authority, build trust, and create lasting engagement with your audience. We help you develop a powerful brand voice and content strategy that resonates with your target audience and drives business growth.",
    icon: PenTool,
    features: [
      { title: "Content Strategy Development", description: "Comprehensive content strategy aligned with your business goals and target audience needs." },
      { title: "Social Media Management", description: "Platform-specific content creation, scheduling, engagement, and growth strategies." },
      { title: "Personal Branding", description: "Build your personal brand as a thought leader with strategic content and positioning." },
      { title: "Video Content Production", description: "Professional video content including explainers, testimonials, and social media content." },
      { title: "Thought Leadership", description: "Authority-building content including articles, whitepapers, and industry insights." },
      { title: "Brand Guidelines", description: "Comprehensive brand guidelines ensuring consistency across all channels and content." },
    ],
    benefits: [
      { title: "Increased Visibility", description: "Strategic content distribution increases your brand's reach and visibility." },
      { title: "Stronger Brand Authority", description: "Thought leadership content establishes you as an authority in your industry." },
      { title: "Higher Engagement", description: "Compelling content drives higher engagement and deeper connections with your audience." },
      { title: "Sustainable Growth", description: "Content marketing delivers long-term, compound growth in traffic and leads." },
    ],
    process: [
      { step: "01", title: "Brand Discovery", description: "Deep dive into your brand, audience, competitors, and content opportunities." },
      { step: "02", title: "Content Strategy", description: "Develop a comprehensive content strategy with editorial calendar and distribution plan." },
      { step: "03", title: "Content Creation", description: "Professional content production across text, video, and visual formats." },
      { step: "04", title: "Distribution & Optimization", description: "Strategic distribution across channels with continuous optimization based on performance data." },
    ],
    stats: [
      { value: "10x", label: "Traffic Growth" },
      { value: "5x", label: "Engagement Rate" },
      { value: "200+", label: "Brands Built" },
      { value: "1M+", label: "Content Reach" },
    ],
    ctaText: "Build Your Brand Authority",
    ctaLink: "/consultation",
    color: "#F97316",
  },
  "sales-funnel": {
    title: "Sales Funnel & Closing System",
    tagline: "Create Predictable Revenue with Optimized Sales Processes",
    overview: "Create predictable revenue through optimized sales processes.",
    description: "Optimized sales funnels and closing systems that turn leads into customers with automated follow-ups, pipeline management, and conversion tracking. We build comprehensive sales systems that make your revenue predictable and scalable.",
    icon: Funnel,
    features: [
      { title: "Sales Funnel Design", description: "Multi-stage sales funnels optimized for each stage of the buyer's journey." },
      { title: "Lead Qualification System", description: "Automated lead scoring and qualification to prioritize high-value prospects." },
      { title: "Follow-Up Automation", description: "Automated email, SMS, and call sequences ensuring no lead falls through the cracks." },
      { title: "Pipeline Management", description: "Visual pipeline management with deal tracking, forecasting, and bottleneck identification." },
      { title: "Conversion Tracking", description: "End-to-end conversion tracking from first touch to closed deal." },
      { title: "Sales Scripting & Training", description: "Proven sales scripts and training programs for your sales team." },
    ],
    benefits: [
      { title: "Higher Closing Rates", description: "Optimized processes and proven scripts increase your closing rates significantly." },
      { title: "More Revenue", description: "Systematic approach to sales generates more consistent and predictable revenue." },
      { title: "Improved Sales Efficiency", description: "Automation and pipeline management help your team close more deals in less time." },
      { title: "Predictable Pipeline", description: "Clear visibility into your sales pipeline with accurate forecasting." },
    ],
    process: [
      { step: "01", title: "Sales Process Audit", description: "Analysis of your current sales process, conversion rates, and bottleneck areas." },
      { step: "02", title: "Funnel Design", description: "Design of optimized sales funnels tailored to your product and target market." },
      { step: "03", title: "Automation Setup", description: "Implementation of automated follow-ups, lead scoring, and pipeline management." },
      { step: "04", title: "Training & Optimization", description: "Team training and continuous optimization based on conversion data." },
    ],
    stats: [
      { value: "40%", label: "Higher Closing Rate" },
      { value: "3x", label: "Pipeline Velocity" },
      { value: "60%", label: "Time Saved" },
      { value: "25%", label: "Revenue Uplift" },
    ],
    ctaText: "Optimize Your Sales Process",
    ctaLink: "/consultation",
    color: "#10B981",
  },
  "data-analytics": {
    title: "Data & Analytics Intelligence",
    tagline: "Transform Data into Actionable Insights",
    overview: "Transform business data into actionable insights.",
    description: "Transform raw data into actionable intelligence with custom dashboards, BI tools, performance tracking, and predictive analytics for smarter decisions. We help you make data-driven decisions that drive business growth and operational efficiency.",
    icon: PieChart,
    features: [
      { title: "Custom Dashboard Creation", description: "Beautiful, intuitive dashboards that visualize your key metrics in real-time." },
      { title: "Business Intelligence Setup", description: "End-to-end BI infrastructure including data warehousing, ETL pipelines, and reporting." },
      { title: "Performance Tracking", description: "Track KPIs across all business functions with automated reporting and alerts." },
      { title: "Predictive Analytics", description: "ML-powered forecasting and predictive models for sales, demand, and trends." },
      { title: "Custom Report Generation", description: "Automated report generation and distribution to stakeholders on schedule." },
      { title: "Data Integration", description: "Unify data from multiple sources into a single source of truth." },
    ],
    benefits: [
      { title: "Better Decisions", description: "Data-driven insights enable faster, more accurate business decisions." },
      { title: "Improved Efficiency", description: "Identify bottlenecks and optimization opportunities across your operations." },
      { title: "Data-Driven Growth", description: "Use data to identify growth opportunities and optimize strategies." },
      { title: "Competitive Advantage", description: "Leverage data analytics to stay ahead of market trends and competitors." },
    ],
    process: [
      { step: "01", title: "Data Audit", description: "Assessment of your current data sources, quality, and analytics capabilities." },
      { step: "02", title: "Infrastructure Setup", description: "Build data pipeline, warehousing, and analytics infrastructure." },
      { step: "03", title: "Dashboard Development", description: "Create custom dashboards and reports tailored to your business needs." },
      { step: "04", title: "Insights & Optimization", description: "Ongoing analysis, insights generation, and optimization of analytics systems." },
    ],
    stats: [
      { value: "10x", label: "Faster Reporting" },
      { value: "95%", label: "Data Accuracy" },
      { value: "40%", label: "Cost Reduction" },
      { value: "500+", label: "Dashboards Built" },
    ],
    ctaText: "Unlock Your Data Potential",
    ctaLink: "/consultation",
    color: "#8B5CF6",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-background">
      {/* ===== CONSULTATION FORM - FIRST ===== */}
      <BookConsultation />

      {/* Service Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.06)_0%,transparent_50%)]" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full opacity-20 blur-3xl animate-float-slow" style={{ background: service.color }} />
        
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to all services
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: `${service.color}15` }}>
                <Icon className="w-8 h-8" style={{ color: service.color }} />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Service</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">{service.tagline}</p>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">{service.overview}</p>
            
            <div className="flex flex-wrap gap-4">
              <Link href={service.ctaLink} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 text-base shadow-lg hover:shadow-xl hover:scale-105">
                {service.ctaText} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-border hover:border-primary text-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base hover:scale-105">
                Contact Us <Phone className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Stats */}
      <section className="py-16 bg-muted/70 backdrop-blur-sm border-y border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {service.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: service.color }}>{stat.value}</div>
                <div className="text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">What We <span className="animated-gradient-text">Deliver</span></h2>
              <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: service.color }} />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-muted/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Core <span className="animated-gradient-text">Features</span></h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">Everything you need to succeed</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.features.map((feature, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: `${service.color}15` }}>
                  <Sparkles className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">{feature.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose <span className="animated-gradient-text">This Service</span></h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">Proven benefits that deliver real results</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1" style={{ background: `${service.color}15` }}>
                  <CheckCircle className="w-5 h-5" style={{ color: service.color }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-1">{benefit.title}</h3>
                  <p className="text-base text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How It <span className="animated-gradient-text">Works</span></h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">Our proven 4-step process</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {service.process.map((step, idx) => (
                <div key={idx} className="relative">
                  {idx < service.process.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] right-0 h-0.5 bg-gradient-to-r opacity-30" style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }} />
                  )}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4 text-2xl font-bold" style={{ background: `${service.color}15`, color: service.color }}>
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, ${service.color}08 0%, transparent 60%)` }} />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center mb-6" style={{ background: `${service.color}15` }}>
              <MessageCircle className="w-10 h-10" style={{ color: service.color }} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ready to Transform Your <span className="animated-gradient-text">Business</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free consultation with our experts and discover how our {service.title.toLowerCase()} can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={service.ctaLink} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105">
                {service.ctaText} <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+918884014055" className="inline-flex items-center gap-2 border-2 border-border hover:border-primary text-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg hover:scale-105">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

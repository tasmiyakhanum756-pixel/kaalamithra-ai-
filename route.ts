import { NextRequest, NextResponse } from "next/server"

const SYSTEM_PROMPT = `You are a KAALAMITHRA customer support AI. Answer questions using ONLY the info below. Be warm, concise, use emojis sparingly. Always end with a CTA (book consultation / call / email). Respond in the user's language.

COMPANY: KAALAMITHRA — AI-first tech & growth company. AI, Automation, CRM, Marketing, Software, Cloud, Data.
CONTACT: +91 88840 14055 (also 9972770266, 6361842299) | tech@kaalamithra-ai.com, info@kaalamithra.com | Tumkur, India
HOURS: Mon-Fri 9AM-6PM IST, Sat 10AM-4PM IST, Sun Closed
STATS: 100+ Projects, 50+ Clients, 100K+ Leads, 10M+ Reach

SERVICES:
1. Lead Generation — Data-driven leads, landing pages, CRM integration, nurturing
2. Performance Marketing — Google/Meta/LinkedIn Ads, optimization, conversion tracking
3. AI & Automation — AI chatbots, workflow automation (Zapier, Make, n8n), RPA, lead routing. Reduces manual work up to 80%
4. Startup/MVP Launch — MVP dev, branding, website, growth strategy, validation
5. Business Software & CRM — Custom dev, Salesforce/HubSpot/Zoho setup, sales automation
6. Cloud & DevOps — AWS/GCP/Azure, Docker/K8s, DevOps pipelines, security, monitoring
7. E-Commerce Growth — Store dev, marketplace integration, CRO, product marketing
8. Content & Branding — Strategy, social media, personal branding, video, thought leadership
9. Sales Funnel — Funnels, lead qualification, follow-up automation, pipeline mgmt
10. Data & Analytics — Dashboards, Power BI, Tableau, BI, forecasting, custom reports

TECH STACK: Google/Meta/LinkedIn Ads, Salesforce, HubSpot, Zoho, React/Next.js, Python/Django, Node.js, Flutter, AWS, GCP, Azure, Docker/K8s, Power BI, Tableau

PROCESS: 1.Discovery 2.Strategy 3.Build 4.Launch 5.Optimize 6.Scale (2-12 weeks)

WHY US: AI-First, End-to-End, Experienced Team, Fast Delivery, Scalable, Dedicated Support
PRICING: Custom per project — project-based, retainers, enterprise. Contact for quote.
SUPPORT: Ongoing maintenance & optimization with various packages
INDUSTRIES: Healthcare, E-commerce, Finance, Education, Manufacturing, Real Estate, Startups/SaaS

FAQ:
- Get started: Book free consultation & business audit
- Pricing: Custom per scope. Contact for quote.
- Timeline: 2-12 weeks
- Startups: Yes, dedicated MVP solutions

RULES:
1. Be warm, professional, enthusiastic
2. ONLY use info above. Don't make up facts
3. If unsure: "I don't have that info. Contact tech@kaalamithra-ai.com or +91 88840 14055"
4. End with CTA (consultation, call, email)
5. Bullet points for lists. 3-5 paragraphs max
6. Support: hi/hello, English, Hindi, or any language — respond in same language`

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      )
    }

    const apiKey = process.env.GROQ_API_KEY

    if (!apiKey) {
      return NextResponse.json({
        reply: "I'm here to help! However, my AI brain needs an API key to be activated. Please ask the website owner to add a **GROQ_API_KEY** environment variable. In the meantime, you can reach us directly at **tech@kaalamithra-ai.com** or call **+91 88840 14055** 📞",
      })
    }

    // Build conversation messages
    const messages = [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
    ]

    // Add previous conversation history (up to last 10 messages)
    if (history && Array.isArray(history)) {
      const recentHistory = history.slice(-10)
      for (const msg of recentHistory) {
        if (msg.role === "user" && msg.content) {
          messages.push({ role: "user", content: msg.content })
        } else if (msg.role === "bot" && msg.content) {
          messages.push({ role: "assistant", content: msg.content })
        }
      }
    }

    // Add the current user message
    messages.push({
      role: "user",
      content: message,
    })

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000) // 30s timeout

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages,
          temperature: 0.7,
          max_tokens: 800,
          top_p: 0.9,
        }),
        signal: controller.signal,
      }
    ).finally(() => clearTimeout(timeoutId))

    if (!response.ok) {
      const errorData = await response.text()
      console.error("Groq API error:", response.status, errorData)

      if (response.status === 429) {
        return NextResponse.json({
          reply: "I'm currently experiencing high traffic 😅. Please try again in a moment, or reach out to our team directly!\n\n📧 **Email:** tech@kaalamithra-ai.com\n📞 **Call:** +91 88840 14055\n\nOr **[book a free consultation here](/consultation)** 💡",
        })
      }

      return NextResponse.json({
        reply: "I'm sorry, I'm having trouble connecting right now. Please try again later, or contact us at **tech@kaalamithra-ai.com** or call **+91 88840 14055** 📞",
      })
    }

    const data = await response.json()

    let reply = ""
    if (data.choices && data.choices[0]?.message?.content) {
      reply = data.choices[0].message.content
    } else {
      reply = "I'm sorry, I couldn't generate a response. Please try asking in a different way, or contact us at **tech@kaalamithra-ai.com** 📧"
    }

    return NextResponse.json({ reply })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      {
        reply: "I apologize, but I'm experiencing a technical issue right now. Please reach out to us at **tech@kaalamithra-ai.com** or call **+91 88840 14055** and our team will be happy to help! 😊",
      },
      { status: 200 }
    )
  }
}
import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedName = name.trim().slice(0, 200)
    const sanitizedEmail = email.trim().toLowerCase().slice(0, 254)
    const sanitizedPhone = phone ? phone.trim().slice(0, 20) : "Not provided"
    const sanitizedMessage = message.trim().slice(0, 5000)

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "long",
    })

    // Try to send email via SMTP if configured
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "info@kaalamithra.com"

    let emailSent = false
    let emailError: string | null = null

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: parseInt(smtpPort || "587"),
          secure: smtpPort === "465",
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        })

        await transporter.sendMail({
          from: `"KAALAMITHRA Contact" <${smtpUser}>`,
          to: notificationEmail,
          replyTo: sanitizedEmail,
          subject: `New Contact Form Enquiry from ${sanitizedName}`,
          html: `
            <!DOCTYPE html>
            <html>
            <head><meta charset="utf-8"></head>
            <body style="font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5;">
              <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.1);">
                <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 24px; text-align: center;">
                  <h1 style="color: #fff; margin: 0; font-size: 24px;">📬 New Contact Enquiry</h1>
                </div>
                <div style="padding: 24px;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 12px; border-bottom: 1px solid #eee; color: #666; width: 100px;">Name</td>
                      <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: 600;">${sanitizedName}</td>
                    </tr>
                    <tr>
                      <td style="padding: 12px; border-bottom: 1px solid #eee; color: #666;">Email</td>
                      <td style="padding: 12px; border-bottom: 1px solid #eee;">
                        <a href="mailto:${sanitizedEmail}" style="color: #2563eb;">${sanitizedEmail}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px; border-bottom: 1px solid #eee; color: #666;">Phone</td>
                      <td style="padding: 12px; border-bottom: 1px solid #eee;">${sanitizedPhone}</td>
                    </tr>
                    <tr>
                      <td style="padding: 12px; border-bottom: 1px solid #eee; color: #666;">Time</td>
                      <td style="padding: 12px; border-bottom: 1px solid #eee;">${timestamp}</td>
                    </tr>
                  </table>
                  <div style="margin-top: 20px;">
                    <h3 style="color: #333; margin-bottom: 8px;">Message:</h3>
                    <div style="background: #f9fafb; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; white-space: pre-wrap; line-height: 1.6;">
                      ${sanitizedMessage}
                    </div>
                  </div>
                </div>
                <div style="background: #f9fafb; padding: 16px; text-align: center; border-top: 1px solid #e5e7eb;">
                  <p style="color: #999; font-size: 12px; margin: 0;">
                    KAALAMITHRA - AI, Automation & Technology Solutions<br>
                    <a href="mailto:info@kaalamithra.com" style="color: #2563eb;">info@kaalamithra.com</a> | +91 88840 14055
                  </p>
                </div>
              </div>
            </body>
            </html>
          `,
        })

        emailSent = true
      } catch (error: any) {
        console.error("Email send error:", error)
        emailError = error.message
      }
    }

    // Always log to console for visibility
    console.log("=== NEW CONTACT FORM SUBMISSION ===")
    console.log(`Name: ${sanitizedName}`)
    console.log(`Email: ${sanitizedEmail}`)
    console.log(`Phone: ${sanitizedPhone}`)
    console.log(`Message: ${sanitizedMessage}`)
    console.log(`Time: ${timestamp}`)
    console.log("===================================")

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully! We'll get back to you soon.",
      emailSent,
      ...(emailError && process.env.NODE_ENV === "development" ? { emailError } : {}),
    })
  } catch (error: any) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us at +91 88840 14055." },
      { status: 500 }
    )
  }
}
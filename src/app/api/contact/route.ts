import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { error: "Invalid request data." },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body;

    // 1. Validate required fields
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = typeof subject === "string" ? subject.trim() : "";
    const trimmedMessage = message.trim();

    // 2. Validate API key presence
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error(
        "[API/Contact] Missing RESEND_API_KEY environment variable. Please configure it in your environment or Vercel dashboard."
      );
      return NextResponse.json(
        { error: "TRANSMISSION FAILED. PLEASE TRY AGAIN." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_RECEIVER_EMAIL || "krishnampks07@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
    const emailSubject = trimmedSubject
      ? `Portfolio: ${trimmedSubject} (from ${trimmedName})`
      : `New Portfolio Message from ${trimmedName}`;

    // 3. Dispatch email via Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: trimmedEmail,
      subject: emailSubject,
      text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\nSubject: ${trimmedSubject || "N/A"}\n\nMessage:\n${trimmedMessage}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px; background-color: #0b0b0b; color: #f5f5f5; border: 1px solid #222222; border-radius: 8px;">
          <div style="border-bottom: 2px solid #FF2028; padding-bottom: 16px; margin-bottom: 24px;">
            <h2 style="color: #ffffff; margin: 0 0 4px 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">New Contact Message</h2>
            <p style="color: #FF2028; margin: 0; font-size: 11px; font-family: monospace; letter-spacing: 1.5px; text-transform: uppercase;">KRISHNA PORTFOLIO TRANSMISSION</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; color: #8A8A8A; width: 90px; font-size: 13px; font-family: monospace; text-transform: uppercase;">Name:</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 15px; font-weight: 600;">${trimmedName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8A8A8A; font-size: 13px; font-family: monospace; text-transform: uppercase;">Email:</td>
              <td style="padding: 10px 0; font-size: 15px;"><a href="mailto:${trimmedEmail}" style="color: #FF2028; text-decoration: none;">${trimmedEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8A8A8A; font-size: 13px; font-family: monospace; text-transform: uppercase;">Subject:</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 15px;">${trimmedSubject || "No Subject"}</td>
            </tr>
          </table>

          <div style="background-color: #121212; border: 1px solid #222222; border-left: 3px solid #FF2028; padding: 18px; margin-bottom: 24px; border-radius: 4px;">
            <p style="color: #8A8A8A; margin: 0 0 10px 0; font-size: 11px; text-transform: uppercase; font-family: monospace; letter-spacing: 1px;">Message:</p>
            <p style="color: #ffffff; margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${trimmedMessage.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          </div>

          <div style="border-top: 1px solid #1f1f1f; padding-top: 16px; font-size: 12px; color: #777777;">
            <p style="margin: 0;">Hit <strong>Reply</strong> in your email client to respond directly to <strong>${trimmedEmail}</strong>.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("[API/Contact] Resend service returned an error:", error);
      return NextResponse.json(
        { error: "TRANSMISSION FAILED. PLEASE TRY AGAIN." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "MESSAGE TRANSMITTED SUCCESSFULLY.",
      id: data?.id,
    });
  } catch (error) {
    console.error("[API/Contact] Unexpected server error:", error);
    return NextResponse.json(
      { error: "TRANSMISSION FAILED. PLEASE TRY AGAIN." },
      { status: 500 }
    );
  }
}

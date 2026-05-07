import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: "hello@alixali.com",
        reply_to: email,
        subject: `New message from ${name} — alixali.com`,
        html: `
          <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
            <h2 style="margin-bottom: 4px;">New Contact Form Submission</h2>
            <p style="color: #666; margin-top: 0;">From alixali.com</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <p style="background: #f5f5f5; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="color: #999; font-size: 12px;">Sent via alixali.com contact form</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}

import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, business, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Digital Kings <onboarding@resend.dev>",
      to: ["jas@digikings.net"],
      replyTo: email,
      subject: `New enquiry from ${name}${business ? ` — ${business}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0D0D0D; color: #F5F0E8; padding: 40px; border: 1px solid #2A2A2A;">
          <div style="border-bottom: 1px solid #C9A84C; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="margin: 0; font-size: 24px; color: #C9A84C;">New Client Enquiry</h1>
            <p style="margin: 6px 0 0; color: #888; font-size: 13px;">via digikings.net</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; width: 140px;">Name</td>
              <td style="padding: 10px 0; color: #F5F0E8;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Email</td>
              <td style="padding: 10px 0; color: #C9A84C;">${email}</td>
            </tr>
            ${business ? `
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Business</td>
              <td style="padding: 10px 0; color: #F5F0E8;">${business}</td>
            </tr>` : ""}
            ${budget ? `
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Budget</td>
              <td style="padding: 10px 0; color: #F5F0E8;">${budget}</td>
            </tr>` : ""}
          </table>

          <div style="margin-top: 30px; padding: 20px; background: #141414; border-left: 3px solid #C9A84C;">
            <p style="margin: 0 0 8px; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Message</p>
            <p style="margin: 0; color: #F5F0E8; line-height: 1.7;">${message.replace(/\n/g, "<br>")}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #2A2A2A; color: #555; font-size: 11px;">
            Reply directly to this email to respond to ${name}.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email", detail: error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error", detail: String(err) }, { status: 500 });
  }
}

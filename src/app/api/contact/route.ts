import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Send email to you
    const { error } = await resend.emails.send({
      from: "Project AETHER <onboarding@resend.dev>", // Change later after domain verification
      to: ["jha442749@gmail.com"], // <-- Replace with your email
      subject: `📩 ${subject}`,

      html: `
        <div style="font-family:Arial;padding:20px">
          <h2>📩 New Portfolio Message</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <hr/>

          <p>${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
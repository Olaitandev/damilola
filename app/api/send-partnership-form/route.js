import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, phone, brand, timeline, message, userType } = body;

    // ✅ Validate fields before sending
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // ✅ Save to Supabase partnership table
    const { error: dbError } = await supabaseAdmin.from("partnerships").insert([
      {
        full_name: name,
        email_address: email,
        phone_number: phone,
        brand_name: brand,
        timeline: timeline,
        what_best_describe_you: userType,
        message,
      },
    ]);

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json(
        { error: "Failed to save partnership data" },
        { status: 500 }
      );
    }

    // ✅ Build email content
    const htmlContent = `
      <div style="font-family: sans-serif; line-height: 1.6; padding: 10px;">
        <h2>New Partnership Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Brand:</strong> ${brand || "N/A"}</p>
        <p><strong>Partnership Type:</strong> ${userType || "N/A"}</p>
        <p><strong>Timeline:</strong> ${timeline || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
     
      </div>
    `;

    // ✅ Send email
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "New Partnership Form Submission OFFLINE TEST",
      html: htmlContent,
      reply_to: email,
    });

    return NextResponse.json(
      { success: true, messageId: data.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}

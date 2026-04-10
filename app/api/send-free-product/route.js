import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email } = await req.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Save subscriber to Supabase (using admin client to bypass RLS)
    const { error: dbError } = await supabaseAdmin.from("subscribers").insert([
      {
        full_name: name,
        email_address: email,
      },
    ]);

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json(
        { error: "Failed to save subscriber" },
        { status: 500 }
      );
    }

    // Send email notification
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Here's your free Guide from Dami Fayanjuola",
      html: `
        <h2>New Subscriber</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending form:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

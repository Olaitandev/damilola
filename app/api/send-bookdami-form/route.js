import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      organization,
      eventName,
      eventDate,
      eventLocation,
      engagementType,
      customEngagementType,
      audience,
      topic,
      customTopics,
      speakingBudget,
      message,
    } = body;

    // Validate required fields
    // if (
    //   !name ||
    //   !email ||
    //   !organization ||
    //   !eventName ||
    //   !eventLocation ||
    //   !engagementType
    // ) {
    //   return NextResponse.json(
    //     { error: "Missing required fields." },
    //     { status: 400 }
    //   );
    // }

      // Convert eventDate to Date object if present
      let eventDateValue = eventDate;
      if (eventDate) {
        // Accepts YYYY-MM-DD or ISO string
        eventDateValue = new Date(eventDate);
        if (isNaN(eventDateValue.getTime())) {
          return NextResponse.json(
            { error: "Invalid event date format." },
            { status: 400 }
          );
        }
      }

    // Save to Supabase event table (add all fields)
      const { error: dbError } = await supabaseAdmin.from("event").insert([
      {
        name: name,
        email: email,
        phone: phone,
        organization,
        eventName: eventName,
          eventDate: eventDateValue,
        eventLocation: eventLocation,
        engagementType: engagementType,
       customEngagementType: customEngagementType,
        audience,
        topic,
        customTopics: customTopics,
        speakingBudget: speakingBudget,
        message,
      },
    ]);

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json(
        { error: "Failed to save event booking" },
        { status: 500 }
      );
    }

    // Build email content with all fields
    const htmlContent = `
      <div style="font-family: sans-serif; line-height: 1.6; padding: 10px;">
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Event Name:</strong> ${eventName}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Event Location:</strong> ${eventLocation}</p>
        <p><strong>Engagement Type:</strong> ${engagementType}</p>
        <p><strong>Other Engagement Type:</strong> ${customEngagementType}</p>
        <p><strong>Audience:</strong> ${audience}</p>
        <p><strong>Topic:</strong> ${topic}</p>
        <p><strong>Custom Topics:</strong> ${customTopics}</p>
        <p><strong>Speaking Budget:</strong> ${speakingBudget}</p>
        <p><strong>Additional Details:</strong></p>
        <p>${message}</p>
      </div>
    `;

    // Send email
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "New Booking Request OFFLINE TEST",
      html: htmlContent,
      reply_to: process.env.EMAIL_FROM,
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

// import { NextResponse } from "next/server";
// import { Resend } from "resend";
// import { supabaseAdmin } from "@/lib/supabase";

// const resend = new Resend(process.env.RESEND_API_KEY);

// // Real messages have spaces and aren't pure random alphanum
// const isSpamMessage = (msg) => {
//   const hasNoSpaces = !/\s/.test(msg.trim());
//   const isRandomAlphanum = /^[A-Za-z0-9]+$/.test(msg.trim());
//   return hasNoSpaces && isRandomAlphanum && msg.length > 10;
// };

// // Detect excessive dots in Gmail addresses (bot pattern)
// const isSpamEmail = (email) => {
//   if (!email.endsWith("@gmail.com")) return false;
//   const local = email.split("@")[0];
//   const dotCount = (local.match(/\./g) || []).length;
//   return dotCount >= 3; // real users rarely have 3+ dots
// };

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     const { name, email, phone, message, _honey } = body;
//     if (_honey) return NextResponse.json({ success: true }, { status: 200 }); // fake success

//     // ✅ Validate fields before sending
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { error: "Missing required fields." },
//         { status: 400 },
//       );
//     }

//     if (isSpamEmail(email)) {
//       return NextResponse.json({ success: true }, { status: 200 }); // fake success
//     }

//     if (isSpamMessage(message)) {
//       return NextResponse.json({ success: true }, { status: 200 });
//     }

//     // ✅ Save to Supabase contact_us table
//     const { error: dbError } = await supabaseAdmin.from("contact_us").insert([
//       {
//         full_name: name,
//         email_address: email,
//         phone_number: phone,
//         message,
//       },
//     ]);

//     if (dbError) {
//       console.error("Supabase error:", dbError);
//       return NextResponse.json(
//         { error: "Failed to save contact form data" },
//         { status: 500 },
//       );
//     }

//     // ✅ Build email content
//     const htmlContent = `
//       <div style="font-family: sans-serif; line-height: 1.6; padding: 10px;">
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone || "N/A"}</p>

//         <p><strong>Message:</strong></p>
//         <p>${message}</p>

//       </div>
//     `;

//     // ✅ Send email
//     const data = await resend.emails.send({
//       from: process.env.EMAIL_FROM,
//       to: process.env.EMAIL_TO,
//       subject: "New Contact Form Submission OFFLINE TEST",
//       html: htmlContent,
//       reply_to: email,
//     });

//     return NextResponse.json(
//       { success: true, messageId: data.id },
//       { status: 200 },
//     );
//   } catch (error) {
//     console.error("Email send error:", error);
//     return NextResponse.json(
//       { error: "Failed to send email." },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Spam filters ─────────────────────────────────────────────────────────────

const BURNER_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "guerrillamailblock.com",
  "tempmail.com",
  "throwam.com",
  "sharklasers.com",
  "trashmail.com",
  "trashmail.me",
  "trashmail.net",
  "yopmail.com",
  "yopmail.fr",
  "dispostable.com",
  "fakeinbox.com",
  "maildrop.cc",
  "mailnull.com",
  "spamgourmet.com",
  "spamgourmet.net",
  "spamgourmet.org",
  "spamhereplease.com",
  "spamherelots.com",
  "tempr.email",
  "discard.email",
  "cfl.ws",
  "spamex.com",
  "getonemail.com",
  "mailnew.com",
  "throwam.com",
  "filzmail.com",
  "objectmail.com",
  "obobbo.com",
  "shiftmail.com",
  "spaml.com",
  "spamspot.com",
  "spamthisplease.com",
  "supergreatmail.com",
  "supermailer.jp",
  "thisisnotmyrealemail.com",
  "throwam.com",
  "trash-mail.com",
  "wegwerfmail.de",
  "wegwerfmail.net",
  "wegwerfmail.org",
]);

/**
 * Flags emails with 3+ dots in the local part (any domain),
 * or that use known burner/throwaway mail services.
 */
const isSpamEmail = (email) => {
  const atIndex = email.lastIndexOf("@");
  if (atIndex === -1) return false;

  const local = email.slice(0, atIndex);
  const domain = email.slice(atIndex + 1).toLowerCase();

  // Block known burner domains
  if (BURNER_DOMAINS.has(domain)) return true;

  // Block excessive dots in local part (bot pattern)
  const dotCount = (local.match(/\./g) || []).length;
  return dotCount >= 3;
};

/**
 * Flags messages that are pure random alphanumeric strings with no spaces —
 * a hallmark of automated bot submissions.
 */
const isSpamMessage = (msg) => {
  const trimmed = msg.trim();
  return (
    !/\s/.test(trimmed) && /^[A-Za-z0-9]+$/.test(trimmed) && trimmed.length > 10
  );
};

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, phone, message, _honey } = body;

    // 1. Honeypot — bots fill this, humans don't
    if (_honey) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 2. Required field check
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    // 3. Spam email check (dotted locals + burner domains)
    if (isSpamEmail(email)) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 4. Spam message check (random alphanumeric string)
    if (isSpamMessage(message)) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // ✅ Save to Supabase contact_us table
    const { error: dbError } = await supabaseAdmin.from("contact_us").insert([
      {
        full_name: name,
        email_address: email,
        phone_number: phone,
        message,
      },
    ]);

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json(
        { error: "Failed to save contact form data" },
        { status: 500 },
      );
    }

    // ✅ Build email content
    const htmlContent = `
      <div style="font-family: sans-serif; line-height: 1.6; padding: 10px;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `;

    // ✅ Send email
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission",
      html: htmlContent,
      reply_to: email,
    });

    return NextResponse.json(
      { success: true, messageId: data.id },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 },
    );
  }
}
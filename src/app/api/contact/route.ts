import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  eventType: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    // Validate required fields
    if (!body.name?.trim() || !body.email?.trim() || !body.eventType || !body.message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Log the contact submission server-side
    console.log("──────────────────────────────────");
    console.log("NEW CONTACT FORM SUBMISSION");
    console.log("──────────────────────────────────");
    console.log(`Name:       ${body.name}`);
    console.log(`Email:      ${body.email}`);
    console.log(`Event Type: ${body.eventType}`);
    console.log(`Message:    ${body.message}`);
    console.log(`Timestamp:  ${new Date().toISOString()}`);
    console.log("──────────────────────────────────");

    return NextResponse.json({
      success: true,
      message: "Thank you for your enquiry. I'll be in touch soon.",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}

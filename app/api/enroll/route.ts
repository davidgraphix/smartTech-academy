// app/api/enroll/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      experience,
      goals,
      selectedCourse, // we will send readable course title from client
    } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !selectedCourse) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure transporter using Gmail + App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Optional: verify connection (useful for debugging)
    await transporter.verify();

    const mailOptions = {
      from: `"SmartTech Academy" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL, // your inbox
      subject: `New Enrollment — ${selectedCourse}`,
      html: `
        <h2>New Enrollment</h2>
        <p><strong>Course:</strong> ${selectedCourse}</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Experience:</strong> ${experience || "N/A"}</p>
        <p><strong>Goals:</strong><br/>${goals || "N/A"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Enroll API error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                user: emailUser,
                pass: emailPass,
            },
    });

    const mailOptions = {
        from: emailUser,
        to: "innositetechsolutions@gmail.com",
        subject: `New Contact Form Submission from ${name}`,
        text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        
        Message:
        ${message}
      `,
        html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
        { message: "Email sent successfully!" },
        { status: 200 }
    );
} catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
    );
}
}

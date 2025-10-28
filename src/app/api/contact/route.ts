import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate input
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const result = await resend.emails.send({
      from: 'KwestAI Contact Form <onboarding@resend.dev>',
      to: 'kaushik.kumar@kwest-ai.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 20px; border-radius: 8px;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h2 style="color: #1f2937; margin-top: 0;">New Contact Form Submission</h2>
            
            <div style="border-left: 4px solid #4f46e5; padding-left: 16px; margin: 20px 0;">
              <p style="margin: 12px 0;"><strong style="color: #1f2937;">Name:</strong><br/><span style="color: #4b5563;">${escapeHtml(name)}</span></p>
              <p style="margin: 12px 0;"><strong style="color: #1f2937;">Email:</strong><br/><a href="mailto:${escapeHtml(email)}" style="color: #4f46e5; text-decoration: none;">${escapeHtml(email)}</a></p>
              <p style="margin: 12px 0;"><strong style="color: #1f2937;">Phone:</strong><br/><span style="color: #4b5563;">${escapeHtml(phone)}</span></p>
              <p style="margin: 12px 0;"><strong style="color: #1f2937;">Message:</strong></p>
              <div style="background-color: #f3f4f6; padding: 12px; border-radius: 4px; color: #4b5563; white-space: pre-wrap; word-wrap: break-word;">
                ${escapeHtml(message)}
              </div>
            </div>
            
            <p style="color: #6b7280; font-size: 12px; margin-top: 20px; border-top: 1px solid #e5e7eb; padding-top: 15px;">
              This email was sent from the KwestAI landing page contact form.
            </p>
          </div>
        </div>
      `,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: 'KwestAI <onboarding@resend.dev>',
      to: email,
      subject: 'We received your message - KwestAI',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 20px; border-radius: 8px;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h2 style="color: #1f2937; margin-top: 0;">Thank you for reaching out!</h2>
            <p style="color: #4b5563; line-height: 1.6;">Hi ${escapeHtml(name)},</p>
            
            <p style="color: #4b5563; line-height: 1.6;">
              We've received your message and will get back to you as soon as possible. Our team typically responds within 24 hours during business days.
            </p>
            
            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #10b981;">
              <p style="margin: 0 0 8px 0; color: #059669; font-weight: bold;">Your message:</p>
              <p style="margin: 0; color: #4b5563; white-space: pre-wrap; word-wrap: break-word;">${escapeHtml(message)}</p>
            </div>
            
            <p style="color: #4b5563; line-height: 1.6;">
              If you have any urgent matters, feel free to reach out directly at our office.
            </p>
            
            <p style="color: #4b5563; line-height: 1.6; margin-top: 25px;">
              Best regards,<br/>
              <strong>The KwestAI Team</strong>
            </p>
            
            <p style="color: #9ca3af; font-size: 12px; margin-top: 20px; border-top: 1px solid #e5e7eb; padding-top: 15px; margin-bottom: 0;">
              © 2025 KwestAI. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

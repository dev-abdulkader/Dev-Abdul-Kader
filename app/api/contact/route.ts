import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Contact from '@/models/contact';
import { sendContactMail } from '@/lib/mailer';

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    await connectDB();

    // Save to DB
    await Contact.create({ email, message });

    // Send email notification
    await sendContactMail(email, message);

    return NextResponse.json(
      { success: true, message: 'Message saved and email sent' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}

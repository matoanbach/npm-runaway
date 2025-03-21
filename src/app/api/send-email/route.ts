// src/app/api/send-email/route.ts
import { sendMail } from '@/services/mailService';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { from, to, subject, html, userCredentials } = await req.json();

  try {
    await sendMail(from, to, subject, html, userCredentials);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message || 'Error sending email' }, { status: 500 });
  }
}

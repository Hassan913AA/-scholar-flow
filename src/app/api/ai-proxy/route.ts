import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { apiKey, prompt } = await request.json();
  
  // هنا نقوم بالاتصال بـ OpenAI أو Anthropic باستخدام مفتاح المستخدم
  // ونعيد النتيجة للتطبيق.
  
  return NextResponse.json({ message: 'AI response based on user key' });
}

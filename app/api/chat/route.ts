import { NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY тохируулаагүй байна." },
      { status: 500 }
    );
  }

  const { messages } = (await request.json()) as { messages?: ChatMessage[] };
  if (!messages || !Array.isArray(messages)) {
    return NextResponse.json({ error: "Буруу хүсэлт." }, { status: 400 });
  }

  const systemPrompt =
    "Та бол Монгол хэл дээр үйлчилгээ үзүүлэх бизнесийн chatbot туслах. Богино, ойлгомжтой, найрсаг байдлаар зөвлөмж өг.";

  const payload = {
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt },
      ...messages.map((message) => ({
        role: message.role,
        content: message.content
      }))
    ],
    temperature: 0.6
  };

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json(
      { error: `OpenAI алдаа: ${errorText}` },
      { status: 500 }
    );
  }

  const data = (await response.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const reply = data.choices?.[0]?.message?.content?.trim() || "Хариу олдсонгүй.";

  return NextResponse.json({ reply });
}

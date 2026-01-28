import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createId, readDb, writeDb } from "../../../lib/storage";

type CreateBotPayload = {
  name?: string;
  description?: string;
  channel?: string;
  flowJson?: string;
  triggerJson?: string;
};

export async function GET(request: Request) {
  const sessionId = cookies().get("kdl_session")?.value;
  if (!sessionId) {
    return NextResponse.json({ error: "Нэвтрэх шаардлагатай." }, { status: 401 });
  }

  const db = await readDb();
  const bots = db.bots.filter((bot) => bot.ownerId === sessionId);
  return NextResponse.json({ bots });
}

export async function POST(request: Request) {
  const sessionId = cookies().get("kdl_session")?.value;
  if (!sessionId) {
    return NextResponse.json({ error: "Нэвтрэх шаардлагатай." }, { status: 401 });
  }

  const { name, description, channel, flowJson, triggerJson } =
    (await request.json()) as CreateBotPayload;

  if (!name) {
    return NextResponse.json({ error: "Нэр шаардлагатай." }, { status: 400 });
  }

  let flow: Record<string, unknown> | null = null;
  let trigger: Record<string, unknown> | null = null;

  try {
    if (flowJson) flow = JSON.parse(flowJson) as Record<string, unknown>;
    if (triggerJson) trigger = JSON.parse(triggerJson) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "JSON формат буруу байна." }, { status: 400 });
  }

  const db = await readDb();
  const bot = {
    id: createId(),
    ownerId: sessionId,
    name: name.trim(),
    description: description?.trim() || "",
    channel: channel?.trim() || "Web",
    flow,
    trigger,
    createdAt: new Date().toISOString()
  };

  db.bots.unshift(bot);
  await writeDb(db);

  return NextResponse.json({ bot });
}

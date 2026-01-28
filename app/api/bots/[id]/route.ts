import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readDb, writeDb } from "../../../../lib/storage";

type UpdateBotPayload = {
  name?: string;
  description?: string;
  channel?: string;
  flowJson?: string;
  triggerJson?: string;
};

export async function PATCH(
  request: Request,
  context: { params: { id: string } }
) {
  const sessionId = cookies().get("kdl_session")?.value;
  if (!sessionId) {
    return NextResponse.json({ error: "Нэвтрэх шаардлагатай." }, { status: 401 });
  }

  const { id } = context.params;
  const payload = (await request.json()) as UpdateBotPayload;
  const db = await readDb();
  const botIndex = db.bots.findIndex((item) => item.id === id && item.ownerId === sessionId);

  if (botIndex === -1) {
    return NextResponse.json({ error: "Бот олдсонгүй." }, { status: 404 });
  }

  let flow = db.bots[botIndex].flow ?? null;
  let trigger = db.bots[botIndex].trigger ?? null;

  try {
    if (payload.flowJson !== undefined && payload.flowJson !== "") {
      flow = JSON.parse(payload.flowJson) as Record<string, unknown>;
    }
    if (payload.triggerJson !== undefined && payload.triggerJson !== "") {
      trigger = JSON.parse(payload.triggerJson) as Record<string, unknown>;
    }
  } catch {
    return NextResponse.json({ error: "JSON формат буруу байна." }, { status: 400 });
  }

  const updated = {
    ...db.bots[botIndex],
    name: payload.name?.trim() || db.bots[botIndex].name,
    description:
      payload.description !== undefined ? payload.description.trim() : db.bots[botIndex].description,
    channel: payload.channel?.trim() || db.bots[botIndex].channel,
    flow,
    trigger
  };

  db.bots[botIndex] = updated;
  await writeDb(db);

  return NextResponse.json({ bot: updated });
}

export async function DELETE(
  _request: Request,
  context: { params: { id: string } }
) {
  const sessionId = cookies().get("kdl_session")?.value;
  if (!sessionId) {
    return NextResponse.json({ error: "Нэвтрэх шаардлагатай." }, { status: 401 });
  }

  const { id } = context.params;
  const db = await readDb();
  const botIndex = db.bots.findIndex((item) => item.id === id && item.ownerId === sessionId);

  if (botIndex === -1) {
    return NextResponse.json({ error: "Бот олдсонгүй." }, { status: 404 });
  }

  const [removed] = db.bots.splice(botIndex, 1);
  await writeDb(db);

  return NextResponse.json({ ok: true });
}

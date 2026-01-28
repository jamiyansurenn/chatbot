import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readDb } from "../../../../lib/storage";

export async function GET() {
  const cookieStore = cookies();
  const sessionId = cookieStore.get("kdl_session")?.value;

  if (!sessionId) {
    return NextResponse.json({ user: null });
  }

  const db = await readDb();
  const user = db.users.find((item) => item.id === sessionId);

  if (!user) {
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({
    user: { id: user.id, name: user.name, email: user.email }
  });
}

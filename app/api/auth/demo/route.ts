import { NextResponse } from "next/server";
import { createId, readDb, writeDb } from "../../../../lib/storage";

export async function POST() {
  const db = await readDb();
  let user = db.users.find((item) => item.email === "demo@kdl.mn");

  if (!user) {
    user = {
      id: createId(),
      name: "Demo User",
      email: "demo@kdl.mn",
      passwordHash: "",
      createdAt: new Date().toISOString()
    };
    db.users.push(user);
    await writeDb(db);
  }

  const response = NextResponse.json({
    user: { id: user.id, name: user.name, email: user.email }
  });
  response.cookies.set("kdl_session", user.id, {
    httpOnly: true,
    sameSite: "lax",
    path: "/"
  });
  return response;
}

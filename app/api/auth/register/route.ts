import { NextResponse } from "next/server";
import { createId, hashPassword, readDb, writeDb } from "../../../../lib/storage";

type RegisterPayload = {
  name?: string;
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  const { name, email, password } = (await request.json()) as RegisterPayload;

  if (!email || !password) {
    return NextResponse.json({ error: "Имэйл болон нууц үг шаардлагатай." }, { status: 400 });
  }

  const normalizedEmail = email.toLowerCase().trim();
  const db = await readDb();

  if (db.users.some((user) => user.email === normalizedEmail)) {
    return NextResponse.json({ error: "Энэ имэйл бүртгэлтэй байна." }, { status: 409 });
  }

  const user = {
    id: createId(),
    name: name?.trim() || "Хэрэглэгч",
    email: normalizedEmail,
    passwordHash: hashPassword(password),
    createdAt: new Date().toISOString()
  };

  db.users.push(user);
  await writeDb(db);

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

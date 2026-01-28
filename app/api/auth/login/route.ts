import { NextResponse } from "next/server";
import { hashPassword, readDb } from "../../../../lib/storage";

type LoginPayload = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  const { email, password } = (await request.json()) as LoginPayload;

  if (!email || !password) {
    return NextResponse.json({ error: "Имэйл болон нууц үг шаардлагатай." }, { status: 400 });
  }

  const normalizedEmail = email.toLowerCase().trim();
  const db = await readDb();
  const user = db.users.find((item) => item.email === normalizedEmail);

  if (!user || user.passwordHash !== hashPassword(password)) {
    return NextResponse.json({ error: "Нэвтрэх мэдээлэл буруу байна." }, { status: 401 });
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

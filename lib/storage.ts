import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

type UserRecord = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: string;
};

type BotRecord = {
  id: string;
  ownerId: string;
  name: string;
  description?: string;
  channel?: string;
  flow?: Record<string, unknown> | null;
  trigger?: Record<string, unknown> | null;
  createdAt: string;
};

type DbShape = {
  users: UserRecord[];
  bots: BotRecord[];
};

const dbPath = path.join(process.cwd(), "data", "db.json");

async function ensureDb(): Promise<DbShape> {
  try {
    const raw = await fs.readFile(dbPath, "utf-8");
    return JSON.parse(raw) as DbShape;
  } catch {
    await fs.mkdir(path.dirname(dbPath), { recursive: true });
    const initial: DbShape = { users: [], bots: [] };
    await fs.writeFile(dbPath, JSON.stringify(initial, null, 2), "utf-8");
    return initial;
  }
}

export async function readDb() {
  return ensureDb();
}

export async function writeDb(data: DbShape) {
  await fs.mkdir(path.dirname(dbPath), { recursive: true });
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2), "utf-8");
}

export function hashPassword(password: string) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

export function createId() {
  return crypto.randomUUID();
}

export type { UserRecord, BotRecord, DbShape };

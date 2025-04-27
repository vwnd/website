// src/db.ts
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

config({ path: ".env.local" }); // or .env.local

const sql = neon(process.env.DATABASE_URL!);

export const db = drizzle({ client: sql, schema });
export const tables = schema;

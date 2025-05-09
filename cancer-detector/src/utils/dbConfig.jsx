import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://cancer-detector_owner:npg_7HeZnRJdpB0h@ep-lucky-thunder-a4ebaf2l-pooler.us-east-1.aws.neon.tech/cancer-detector?sslmode=require"
);
export const db = drizzle(sql, { schema });

/*
    npx drizzle-kit generate
    npx drizzle-kit migrate
    npx drizzle-kit push
    npx drizzle-kit pull
*/

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
require("dotenv").config();

const client = postgres(process.env.DATABASE_URL!, { prepare: false });
export const db = drizzle(client);

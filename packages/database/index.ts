import "server-only";

import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import ws from "ws";
import { PrismaClient } from "./generated/client";
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = () =>
  createEnv({
    server: {
      DATABASE_URL: z.string().url(),
    },
    runtimeEnv: {
      DATABASE_URL: process.env.DATABASE_URL,
    },
  });

const globalForPrisma = global as unknown as { prisma: PrismaClient };

neonConfig.webSocketConstructor = ws;

const pool = new Pool({ connectionString: env().DATABASE_URL });
const adapter = new PrismaNeon(pool);

export const database = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = database;
}

export * from "./generated/client";

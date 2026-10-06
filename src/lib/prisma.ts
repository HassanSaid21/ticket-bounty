import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const adapter = new PrismaPg({ //
  connectionString: process.env.DIRECT_URL!,
});



const prismaClient = new PrismaClient({
  adapter,
});


const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
 export const prisma = globalForPrisma.prisma || prismaClient;
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma; //
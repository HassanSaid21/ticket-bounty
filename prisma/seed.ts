import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DIRECT_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

const tickets = [
  {
    title: "Implement user authentication",
    content:
      "Implement user authentication using JWT tokens and bcrypt for password hashing.",
  },
  {
    title: "Create REST API endpoints",
    content:
      "Create REST API endpoints for CRUD operations on the Ticket model.",
  },
  {
    title: "Set up database schema",
    content:
      "Define the database schema for the Ticket model and run migrations.",
  },
];

async function seed() {
  for (const ticket of tickets) {
    await prisma.ticket.create({
      data: ticket,
    });
  }
}

seed().then(() => {
  console.log("Seeding completed successfully.");
});

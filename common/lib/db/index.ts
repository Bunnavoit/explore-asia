import { drizzle } from "drizzle-orm/neon-http";
import { usersTable } from "./schema";
import { eq } from "drizzle-orm";
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}
export const db = drizzle(process.env.DATABASE_URL);

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: "John",
    age: 30,
    email: "john@example.com",
  };
  await db.insert(usersTable).values(user);
  console.log("New user created!");
  const users = await db.select().from(usersTable);
  console.log("Getting all users from the database: ", users);
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */
  await db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.email, user.email));
  console.log("User info updated!");
  await db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log("User deleted!");
}
main();

// import { drizzle } from "drizzle-orm/neon-http";
// import { users } from "./schema"; // ✅ must match better-auth expectations
// import { eq } from "drizzle-orm";
// import bcrypt from "bcrypt"; // Install: pnpm add bcrypt

// if (!process.env.DATABASE_URL) {
//   throw new Error("DATABASE_URL is not defined");
// }

// export const db = drizzle(process.env.DATABASE_URL);

// async function main() {
//   const email = "john@example.com";
//   const password = "secret123";

//   // Hash password
//   const hashedPassword = await bcrypt.hash(password, 10);

//   const user = {
//     id: crypto.randomUUID(), // UUID expected by better-auth
//     email,
//     hashedPassword,
//   };

//   // Delete existing user with the same email (so we can re-run)
//   await db.delete(users).where(eq(users.email, email));

//   // Insert new auth-compatible user
//   await db.insert(users).values(user);

//   console.log(`✅ User created for login:`);
//   console.log(`Email: ${email}`);
//   console.log(`Password: ${password}`);

//   // Confirm by listing users
//   const allUsers = await db.select().from(users);
//   console.log("📋 Current users in DB:", allUsers);
// }

// main();

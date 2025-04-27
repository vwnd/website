import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const UserRole = {
  ADMIN: "admin",
  USER: "user",
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  createdAt: text("created_at").notNull().default(new Date().toISOString()),
  updatedAt: text("updated_at").notNull().default(new Date().toISOString()),
  role: varchar("role", { length: 50 })
    .$type<UserRole>()
    .notNull()
    .default(UserRole.USER),
});

export const images = pgTable("images", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  userPrompt: text("user_prompt").notNull(),
  enhancedPrompt: text("enhanced_prompt"),
  imageUrl: text("image_url").notNull(),
  createdAt: text("created_at").notNull().default(new Date().toISOString()),
  updatedAt: text("updated_at").notNull().default(new Date().toISOString()),
});

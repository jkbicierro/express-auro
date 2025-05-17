import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const user_table = pgTable("users", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    role: text("role").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const ticket_table = pgTable("tickets", {
    id: text("id").primaryKey(),
    reference_id: text("reference_id").notNull(),
    reference_link: text("reference_link").notNull(),
    title: text("title").notNull(),
    type: text("type").notNull(),
    status: text("status").notNull(),
    remarks: text("remarks")
        .notNull()
        .default("There has no remarks at the moment"),
    department: text("department").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

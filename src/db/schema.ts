import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

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
    title: text("title").notNull(),
    type: text("type").notNull(),
    status: text("status").notNull(),
    department: text("department").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const ticketlogs_table = pgTable("ticket_logs", {
    id: serial("id").primaryKey(),
    ticket_id: text("ticket_id")
        .notNull()
        .references(() => ticket_table.id, { onDelete: "cascade" }),
    department: text("department").notNull(),
    action: text("action").notNull(),
    remarks: text("remarks"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

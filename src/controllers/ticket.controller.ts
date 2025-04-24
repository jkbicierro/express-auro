/*
    API Route: /api/ticket/*

        [POST] CreateTicket (reference_id, title, type, department)
        [PUT] ApproveTicket (ticket_id)
        [PUT] DeclineTicket (ticket_id)
        [GET] ShowTicket (ticket_id)
        [GET] ShowTicketAll (-)
*/

import { db } from "@/db";
import { ticket_table } from "@/db/schema";
import { eq } from "drizzle-orm";
import { RequestHandler } from "express";

// POST: Create Approval Ticket
export const CreateTicket: RequestHandler = async (req, res): Promise<void> => {
    try {
        const { reference_id, title, type, department } = req.body;

        if (!reference_id || !title || !type || !department) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }

        // Save to database
        await db.insert(ticket_table).values({
            reference_id: reference_id,
            title: title,
            type: type,
            status: "For Approval",
            department: department,
        });

        res.status(201).json({
            message: "Ticket created successfully",
        });
    } catch (err) {
        console.error("[POST] /ticket/create:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

// PUT: Approve Ticket
export const ApproveTicket: RequestHandler = async (
    req,
    res,
): Promise<void> => {
    try {
        // Status: 0: Declined | 1: Approved
        const { ticket_id } = req.body;

        if (!ticket_id) {
            res.status(400).json({ message: "All Fields are required" });
            return;
        }

        // Save to database
        await db
            .update(ticket_table)
            .set({ status: "Approved" })
            .where(eq(ticket_table.id, ticket_id));

        // Create Ticket Logs

        res.status(201).json({
            message: "Ticket approved successfully",
        });
    } catch (err) {
        console.error("[PUT] /ticket/approve:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

// PUT: Decline Ticket
export const DeclineTicket: RequestHandler = async (
    req,
    res,
): Promise<void> => {
    try {
        const { ticket_id } = req.body;

        if (!ticket_id) {
            res.status(400).json({ message: "All Fields are required" });
            return;
        }

        // Save to database
        await db
            .update(ticket_table)
            .set({ status: "Declined" })
            .where(eq(ticket_table.id, ticket_id));

        // Create Ticket Logs

        res.status(201).json({
            message: "Ticket declined successfully",
        });
    } catch (err) {
        console.error("[PUT] /ticket/decline:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

// POST: Show 1 ticket
export const ShowTicket: RequestHandler = async (req, res): Promise<void> => {
    try {
        const { ticket_id } = req.body;

        if (!ticket_id) {
            res.status(400).json({ message: "All Fields are required" });
            return;
        }
        const ticket = await db
            .select()
            .from(ticket_table)
            .where(eq(ticket_table.id, ticket_id));

        res.status(201).json({
            message: "Ticket retrieved successfully",
            ticket: ticket,
        });
    } catch (err) {
        console.error("[POST] /ticket/show:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

// GET: Show Tickets
export const ShowTicketAll: RequestHandler = async (
    req,
    res,
): Promise<void> => {
    try {
        const tickets = await db.select().from(ticket_table);
        res.status(201).json({
            message: "All ticket retrieved successfully",
            tickets,
        });
    } catch (err) {
        console.error("[GET] /ticket/show:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

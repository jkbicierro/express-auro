/*
    API Route: /api/ticket/*

        [POST] CreateTicket (reference_id, title, type, department)
        [PUT] ApproveTicket (ticket_id)
        [PUT] DeclineTicket (ticket_id)
        [GET] ShowTicket (ticket_id)
        [GET] ShowTicketAll (-)
*/

import { db } from "../db";
import { ticket_table } from "../db/schema";
import { eq } from "drizzle-orm";
import { RequestHandler } from "express";

// POST: Specific Department for Generating Ticket
export const CreateMeetingTicket: RequestHandler = async (
    req,
    res,
): Promise<void> => {
    try {
        const { reference_id, title } = req.body;

        if (!reference_id || !title) {
            res.status(400).json({
                message:
                    "All fields are required. Ask administrator for access.",
            });
            return;
        }

        const [ticket] = await db
            .insert(ticket_table)
            .values({
                reference_id: reference_id,
                title: title,
                type: "Meeting/Attendance",
                status: "For Approval",
                department: "Secretariat",
            })
            .returning();

        res.status(201).json({
            message: "Ticket created successfully",
            ticketId: ticket.id,
        });
    } catch (err) {
        console.error("[POST] /ticket/create:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

// POST: Create Default Ticket
/*export const CreateTicket: RequestHandler = async (req, res): Promise<void> => {
    try {
        const { reference_id, title, type, department } = req.body;

        if (!reference_id || !title || !type || !department) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }

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
};*/

// PUT: Approve Ticket
export const ApproveTicket: RequestHandler = async (
    req,
    res,
): Promise<void> => {
    try {
        const { ticket_id } = req.body;

        if (!ticket_id) {
            res.status(400).json({ message: "All Fields are required" });
            return;
        }

        await db
            .update(ticket_table)
            .set({ status: "Approved" })
            .where(eq(ticket_table.id, ticket_id));

        // Todo: Create Ticket Logs

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

        await db
            .update(ticket_table)
            .set({ status: "Declined" })
            .where(eq(ticket_table.id, ticket_id));

        // Todo: Create Ticket Logs

        res.status(201).json({
            message: "Ticket declined successfully",
        });
    } catch (err) {
        console.error("[PUT] /ticket/decline:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

// POST: Show ticket
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

// POST: Show Ticket Status
export const ShowTicketStatus: RequestHandler = async (
    req,
    res,
): Promise<void> => {
    try {
        const { reference_id } = req.body;

        if (!reference_id) {
            res.status(400).json({
                message: "Field are required. Ask administrator for access.",
            });
            return;
        }

        const ticket_status = await db
            .select({ status: ticket_table.status })
            .from(ticket_table)
            .where(eq(ticket_table.reference_id, reference_id));

        if (!ticket_status.length) {
            res.status(404).json({ message: "Ticket not found" });
            return;
        }

        res.status(201).json({
            message: "Ticket status retrieved successfully",
            ticket: ticket_status,
        });
    } catch (err) {
        console.error("[POST] /ticket/show:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

// DELETE: Delete Ticket
export const DeleteTicket: RequestHandler = async (req, res): Promise<void> => {
    try {
        const { reference_id } = req.body;

        if (!reference_id) {
            res.status(400).json({ message: "Field are required" });
            return;
        }

        const ticket = await db
            .select()
            .from(ticket_table)
            .where(eq(ticket_table.reference_id, reference_id))
            .limit(1);

        if (!ticket.length) {
            res.status(404).json({ message: "Ticket not found" });
            return;
        }

        await db
            .delete(ticket_table)
            .where(eq(ticket_table.reference_id, reference_id));

        res.status(200).json({
            message: "Ticket destroyed successfully",
        });
    } catch (err) {
        console.error("[GET] /ticket/delete:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

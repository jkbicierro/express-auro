import { db } from "@/db";
import { ticket_table } from "@/db/schema";
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

// PUT: Edit Ticket
export const EditTicket: RequestHandler = (req, res): void => {
    try {
        const { ticket_id, status } = req.body;

        if (!ticket_id || !status) {
            res.status(400).json({ message: "All Fields are required" });
            return;
        }

        // Save to database

        // Create Ticket Logs

        res.status(201).json({
            message: "Ticket edited successfully",
        });
    } catch (err) {
        console.error("[PUT] /ticket/edit:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

// GET: Show 1 ticket
export const ShowTicket: RequestHandler = (req, res): void => {
    try {
        res.status(201).json({
            message: "Ticket retrieved successfully",
        });
    } catch (err) {
        console.error("[GET] /ticket/show:", err);
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

import { Router } from "express";
import {
    ApproveTicket,
    CreateBudgetTicket,
    CreateMeetingTicket,
    DeclineTicket,
    DeleteTicket,
    ShowTicket,
    ShowTicketAll,
    ShowTicketStatus,
} from "../controllers/ticket.controller";
const router = Router();

// Specific Department for Generating Ticket
// router.post("/create", CreateTicket); // General Ticket
router.post("/create/mnas", CreateMeetingTicket);
router.post("/create/budget", CreateBudgetTicket);

router.put("/approve", ApproveTicket);
router.put("/decline", DeclineTicket);

router.post("/status", ShowTicketStatus);
router.post("/show", ShowTicket);
router.get("/showall", ShowTicketAll);

router.delete("/delete", DeleteTicket);

export default router;

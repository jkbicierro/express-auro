import { Router } from "express";
import {
    ApproveTicket,
    CreateMeetingTicket,
    CreateTicket,
    DeclineTicket,
    ShowTicket,
    ShowTicketAll,
} from "../controllers/ticket.controller";
const router = Router();

// Specific Department for Generating Ticket
// router.post("/create", CreateTicket); // General Ticket
router.post("/create/mnas", CreateMeetingTicket);

router.put("/approve", ApproveTicket);
router.put("/decline", DeclineTicket);

router.post("/show", ShowTicket);
router.get("/showall", ShowTicketAll);

export default router;

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

router.put("/approve", ApproveTicket);
router.put("/decline", DeclineTicket);
router.post("/show", ShowTicket);
router.get("/showall", ShowTicketAll);

// API for Developers
router.post("/create/mnas", CreateMeetingTicket);
router.post("/create/budget", CreateBudgetTicket);
router.post("/status", ShowTicketStatus);
router.delete("/delete", DeleteTicket);

export default router;

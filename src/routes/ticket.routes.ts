import { Router } from "express";
import {
    ApproveTicket,
    CreateTicket,
    DeclineTicket,
    ShowTicket,
    ShowTicketAll,
} from "@/controllers/ticket.controller";
const router = Router();

router.post("/create", CreateTicket);

router.put("/approve", ApproveTicket);
router.put("/decline", DeclineTicket);

router.post("/show", ShowTicket);
router.get("/showall", ShowTicketAll);

export default router;

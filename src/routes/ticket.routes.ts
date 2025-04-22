import { Router } from "express";
import {
    CreateTicket,
    EditTicket,
    ShowTicket,
    ShowTicketAll,
} from "@/controllers/ticket.controller";
const router = Router();

router.post("/create", CreateTicket);
router.put("/edit", EditTicket);
router.get("/show", ShowTicket);
router.get("/showall", ShowTicketAll);

export default router;

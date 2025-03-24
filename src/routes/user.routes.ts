import { GetUsers } from "@/controllers/user.controller";
import { Router } from "express";
const router = Router();

router.get("/", GetUsers);

export default router;

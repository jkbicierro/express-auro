import {
    AuthenticateToken,
    AuthorizeRoles,
} from "../middleware/auth.middleware";
import { GetAllUser, GetUser } from "../controllers/user.controller";
import { Router } from "express";
const router = Router();

router.get("/getalluser", AuthenticateToken, GetAllUser);
router.get("/getuser", AuthenticateToken, GetUser);

export default router;

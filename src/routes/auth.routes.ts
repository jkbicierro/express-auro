
import { Router } from "express";
const router = Router();

router.post("/auth/signup", (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const createUser = {
            id: Date.now(),
            name,
            email,
            password,  
            createdAt: new Date()
        };

        res.status(201).json({
            message: "User registered successfully",
            user: createUser
        });
    }
    catch(err)
    {
        console.error("[POST] router /auth/signup:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
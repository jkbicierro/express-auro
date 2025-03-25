/*
    Feature: Authentication
    Purpose: HTTP Request

    Issues (3/25/25):
        [POST] /auth/signup 
            - Change the simulated data to database integration
            - Hash the password before storing
        [POST] /auth/login
            - Compare req.body (email, password) in stored data (database) including hashing algorithm
            - Give session & token for security purposes
        
*/

import { Router } from "express";
const router = Router();

router.post("/auth/login", (req: Request, res: Response) => {
    try {
         const { email, password } = req.body;

         if(!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
         }


    }
    catch(err)
    {
        console.error("[POST] router /auth/login:", err);
        res.status(500).json({ message: "Internal server error" });
    }
})

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
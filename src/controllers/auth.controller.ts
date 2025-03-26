import { Request, RequestHandler, Response } from "express";

export const Login: RequestHandler = (req: Request, res: Response): void => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
    } catch (err) {
        console.error("[POST] router /auth/login:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const Register: RequestHandler = (req: Request, res: Response): void => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }

        const createUser = {
            id: Date.now(),
            name,
            email,
            password,
            createdAt: new Date(),
        };

        res.status(201).json({
            message: "User registered successfully",
            user: createUser,
        });
    } catch (err) {
        console.error("[POST] router /auth/signup:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

/*
    To-do: 
        [Register] Spamming prevention of request (e.g. 5 times in 1 minute)
*/
import { UserSchema } from "@/models/user.model";
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// Removed Request & Response data types because RequestHandler has already have it
export const Login: RequestHandler = (req, res): void => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
        // Compare fields (email, password) to actual data for validation
        const user = UserSchema.find(
            (i) => i.email === email && i.password === password,
        );
        if (!user) {
            res.status(401).json({
                message: "You have entered an invalid email or password",
            });
            return;
        }

        // Generate JWT token (session, token) for API security purposes
        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET!,
            { expiresIn: "1h" }, // Reduce the time for more secured
        );

        // Set a cookie in client side
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 3600000,
            sameSite: "lax",
        });

        // Successful info (Send a token and message to the client)
        res.status(201).json({
            message: "You successfully logged in",
        });
    } catch (err) {
        console.error("[POST] router /auth/login:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const Register: RequestHandler = (req, res): void => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }

        // To-do: Hash password using bcrypt algorithm

        // To-do: Integrate database
        const createUser = {
            id: Date.now(),
            name,
            email,
            password,
            createdAt: new Date(),
        };

        res.status(201).json({
            message: "User registered successfully",
        });
    } catch (err) {
        console.error("[POST] router /auth/signup:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

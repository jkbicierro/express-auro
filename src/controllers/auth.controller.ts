/*
    To-do: 
        [Register] Spamming prevention of request (e.g. 5 times in 1 minute)
*/
import { UserSchema } from "@/models/user.model";
import { db } from "../db/index";
import { user_table } from "../db/schema";
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { eq } from "drizzle-orm";
dotenv.config();

// Removed Request & Response data types because RequestHandler has already have it
export const Login: RequestHandler = async (req, res): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }

        // Compare fields (email, password) to actual data for validation
        const [user] = await db
            .select()
            .from(user_table)
            .where(eq(user_table.email, email))
            .limit(1);

        if (!user) {
            res.status(401).json({
                message: "You have entered an invalid email",
            });
            return;
        }

        // Use bcrypt here (Temporary)
        if (user.password != password) {
            res.status(401).json({
                message: "You have entered an password",
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

export const Register: RequestHandler = async (req, res): Promise<void> => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }

        // To-do: Hash password using bcrypt algorithm

        // To-do: Integrate database
        await db.insert(user_table).values({
            name: name,
            email: email,
            password: password,
            role: "User",
        });

        res.status(201).json({
            message: "User registered successfully",
        });
    } catch (err) {
        console.error("[POST] router /auth/signup:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

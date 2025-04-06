import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export interface AuthRequest extends Request {
    user?: {
        id: number;
        email: string;
        role: string;
    };
}

/*
    Sample Fetching using Validation Token:
        fetch("http://localhost:5000/api/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` // Send token for authentication
            }
        })
*/
export const AuthenticateToken = (
    req: AuthRequest,
    res: Response,
    next: NextFunction,
): void => {
    const token = req.cookies["token"];

    if (!token) {
        res.status(401).json({ message: "Access denied. No token provided." });
        return;
    }

    // Validation of token
    try {
        const jwt_decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
            id: number;
            email: string;
            role: string;
        };

        req.user = jwt_decoded;

        // Proceed to the callback
        next();
    } catch (err) {
        res.status(403).json({ message: "Invalid or expired token." });
    }
};

export const AuthorizeRoles = (...allowedRoles: string[]) => {
    return (req: AuthRequest, res: Response, next: NextFunction): void => {
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            res.status(403).json({
                message: "Forbidden. Insufficient permissions.",
            });
            return;
        }
        // Proceed to the callback
        next();
    };
};

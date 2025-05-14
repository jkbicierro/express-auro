/*

    Project name: Auro
    Project established: March 24, 2025
    Purpose: Integration API Testing Phase

    Features:
        - Authentication ()
        - Approval (Accept & Decline Data Integration)

    Authors:
        John Bicierro | https://github.com/jkbicierro

*/
require("dotenv").config();
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import ticketRoutes from "./routes/ticket.routes";

const SERVER_PORT = process.env.SERVER_PORT || 5000;

const app = express();
app.use(express.json());

const whitelist = [
    process.env.CLIENT_URL,
    "https://attendance-and-notes-system.netlify.app",
    "http://localhost:3000",
    "https://budget-allocation.onrender.com"
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (whitelist.indexOf(origin) !== -1 || !origin) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    }),
);

app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
    res.send("Server is currently running. Ask administrator for access.");
});

/*
    Software: Postman
    Purpose: API Test
        - For post http request you need fields to fill in (body/raw/json)
*/

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/ticket", ticketRoutes);

app.listen(SERVER_PORT, () =>
    console.log(`Server running on http://localhost:${SERVER_PORT}`),
);

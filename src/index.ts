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
import jwt from "jsonwebtoken";

import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

const SERVER_PORT = process.env.SERVER_PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.send("API is running");
});

/*
    Software: Postman
    Purpose: API Test
        - For post http request you need fields to fill in (body/raw/json)
*/

app.use("/api/users", userRoutes);
app.use("/auth", authRoutes);

app.listen(SERVER_PORT, () =>
    console.log(`Server running on http://localhost:${SERVER_PORT}`),
);

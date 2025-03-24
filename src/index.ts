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

import userRoutes from "@/routes/user.routes";

const SERVER_PORT = process.env.SERVER_PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world");
});

app.use("/api/users", userRoutes);

app.listen(SERVER_PORT, () =>
    console.log(`Server running on http://localhost:${SERVER_PORT}`),
);

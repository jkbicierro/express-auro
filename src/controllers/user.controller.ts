/*
    Email: jbicierro@gbox.adnu.edu.ph
    JWT Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwiZW1haWwiOiJqYmljaWVycm9AZ2JveC5hZG51LmVkdS5waCIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTc0Mjk2ODc3MCwiZXhwIjoxNzQyOTcyMzcwfQ.Ki6iS0uSuSva8x-DRtRNQCCKJ-CPBhv-PdSw4_WTim4
*/
import { User, UserSchema } from "../models/user.model";
import { Request, RequestHandler, Response } from "express";

export const GetAllUser: RequestHandler = (req, res): void => {
    res.json(UserSchema);
};

export const GetUser: RequestHandler = (req, res): void => {
    try {
        res.status(200).json({
            message: "User retrieved successfully",
        });
    } catch (err) {
        console.error("[POST] router /api/users:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

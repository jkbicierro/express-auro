"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = exports.GetAllUser = void 0;
/*
    [Sample Data]
    Email: jbicierro@gbox.adnu.edu.ph
    JWT Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwiZW1haWwiOiJqYmljaWVycm9AZ2JveC5hZG51LmVkdS5waCIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTc0Mjk2ODc3MCwiZXhwIjoxNzQyOTcyMzcwfQ.Ki6iS0uSuSva8x-DRtRNQCCKJ-CPBhv-PdSw4_WTim4
*/
const user_model_1 = require("../models/user.model");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const GetAllUser = (req, res) => {
    try {
        res.json(user_model_1.UserSchema);
        res.status(200).json({
            message: "Users retrieved successfully",
        });
    }
    catch (err) {
        console.error("[GET] router /api/users/getalluser:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.GetAllUser = GetAllUser;
const GetUser = (req, res) => {
    try {
        const user = req.user; // Middleware: AuthRequest
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        // Find the user in the database (or in this case, the array)
        const db_user = user_model_1.UserSchema.find((u) => u.id === user.id);
        if (!db_user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.status(200).json({
            message: "User retrieved successfully",
            user: {
                id: db_user.id,
                name: db_user.name,
                email: db_user.email,
                password: db_user.password,
                role: db_user.role,
            },
        });
    }
    catch (err) {
        console.error("[GET] router /api/users/getuser:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.GetUser = GetUser;

import { User } from "@/models/user.model";
import { Request, Response } from "express";

// Sample Data
const users: User[] = [
    {
        id: 0,
        name: "Test",
        email: "test@gmail.com",
    },
    {
        id: 1,
        name: "Test",
        email: "test@gmail.com",
    },
];

export const GetUsers = (req: Request, res: Response) => {
    res.json(users);
};

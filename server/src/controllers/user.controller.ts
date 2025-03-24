import { User } from "@/models/user.model";
import { Request, Response } from "express";

// Sample Data
const users: User[] = [
    {
        id: 0,
        name: "John Bicierro",
        email: "jbicierro@gbox.adnu.edu.ph",
    },
    {
        id: 1,
        name: "Karl Lumabi",
        email: "klumabi@gbox.adnu.edu.ph",
    },
];

export const GetUsers = (req: Request, res: Response) => {
    res.json(users);
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsers = void 0;
// Sample Data
const users = [
    {
        id: 0,
        name: "John Bicierro",
        email: "jbicierro@gbox.adnu.edu.ph",
        password: "aouhsaodhjoo",
    },
    {
        id: 1,
        name: "Karl Lumabi",
        email: "klumabi@gbox.adnu.edu.ph",
        password: "aouhsaodhjoo",
    },
    {
        id: 2,
        name: "Mark Jacinto",
        email: "mjacinto@gbox.adnu.edu.ph",
        password: "aouhsaodhjoo",
    },
];
const GetUsers = (req, res) => {
    res.json(users);
};
exports.GetUsers = GetUsers;

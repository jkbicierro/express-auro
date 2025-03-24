"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const SERVER_PORT = process.env.SERVER_PORT || 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Hello world");
});
app.use("/api/users", user_routes_1.default);
app.listen(SERVER_PORT, () => console.log(`Server running on http://localhost:${SERVER_PORT}`));

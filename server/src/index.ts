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

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SERVER_PORT = process.env.SERVER_PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.listen(SERVER_PORT, () =>
    console.log(`Server running on http://localhost:${SERVER_PORT}`),
);

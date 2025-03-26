/*
    Feature: Authentication
    Purpose: HTTP Request

    Issues (3/25/25):
        [POST] /auth/signup 
            - Change the simulated data to database integration
            - Hash the password before storing
        [POST] /auth/login
            - Compare req.body (email, password) in stored data (database) including hashing algorithm
            - Give session & token for security purposes
        
*/

import { Router } from "express";
import { Login, Register } from "../controllers/auth.controller";
const router = Router();

/*
    "email": "johndoe@example.com",
    "password": "securepassword",
*/
router.post("/login", Login);

/*
    "name": "test"
    "email": "johndoe@example.com",
    "password": "securepassword",
*/
router.post("/signup", Register);

export default router;

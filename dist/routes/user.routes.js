"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_middleware_1 = require("../middleware/auth.middleware");
const user_controller_1 = require("../controllers/user.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/getalluser", auth_middleware_1.AuthenticateToken, user_controller_1.GetAllUser);
router.get("/getuser", auth_middleware_1.AuthenticateToken, user_controller_1.GetUser);
exports.default = router;

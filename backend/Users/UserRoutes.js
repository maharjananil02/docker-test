import express from "express"
import { registerUser } from "./UserController.js";
const router = express.Router();

router.post("/register", registerUser);

export default router;
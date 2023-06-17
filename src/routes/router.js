import express from "express";
import { userController } from "../controllers/userController/userController.js";

const router = express.Router();

router.get("/user/:id", userController)

export { router };

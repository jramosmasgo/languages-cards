import {
  createUserController,
  getUserByField,
  updateUserController,
} from "@controllers/index";
import { Router } from "express";

const router = Router();

router.get("/", getUserByField);

router.post("/", createUserController);

router.put("/", updateUserController);

export default router;

import {
  createDeckController,
  deleteDeckController,
  getAllDecksController,
  getOneDeckController,
  updateDeckController,
} from "@controllers/index";
import { Router } from "express";

const router = Router();

router.post("/", createDeckController);

router.put("/:id", updateDeckController);

router.get("/", getOneDeckController);

router.get("/all", getAllDecksController);

router.delete("/:id", deleteDeckController);

export default router;

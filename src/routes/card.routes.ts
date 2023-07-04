import {
  createCardController,
  deleteCardController,
  getCardByIdController,
  getCardByUserIdController,
  updateCardController,
} from "@controllers/index";
import { Router } from "express";

const router = Router();

router.post("/", createCardController);
router.put("/id", updateCardController);
router.get("/:id", getCardByIdController);
router.get("/user/:userid", getCardByUserIdController);
router.delete("/:id", deleteCardController);

export default router;

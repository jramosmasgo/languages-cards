import { Router } from "express";
import userRoutes from "./user.routes";
import deckRoutes from "./deck.routes";
import cardRoutes from "./card.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/deck", deckRoutes);
router.use("/card", cardRoutes);

export default router;

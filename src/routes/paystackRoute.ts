import { Router } from "express";
import { verifyPaymentHandler } from "../controllers/paystackController";

const router = Router();

router.post("/verify-payment", verifyPaymentHandler);

export default router;

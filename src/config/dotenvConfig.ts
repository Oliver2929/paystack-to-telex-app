import dotenv from "dotenv";

dotenv.config();

export const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
export const PAYSTACK_WEBHOOK_URL = process.env.PAYSTACK_WEBHOOK_URL;
export const TELEX_RETURN_URL = process.env.TELEX_RETURN_URL;

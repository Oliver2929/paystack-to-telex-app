import dotenv from "dotenv";

dotenv.config();

export const config = {
  PAYSTACK_SECRET_KEY: process.env.PAYSTACK_SECRET_KEY,
  SERVER_PORT: process.env.PORT || 3000,
};

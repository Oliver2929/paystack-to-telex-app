import axios from "axios";
import { config } from "../config/config";
import { Payload } from "../types/paystackTypes";

const handleError = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred";
};
export const verifyPayment = async (reference: string) => {
  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${config.PAYSTACK_SECRET_KEY}`,
        },
      }
    );
    return response.data.data;
  } catch (error: unknown) {
    throw new Error(`Error verifying payment: ${handleError(error)}`);
  }
};

export const sendResultToReturnUrl = async (
  returnUrl: string,
  result: object
) => {
  try {
    await axios.post(returnUrl, result, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: unknown) {
    throw new Error(`Error verifying payment: ${handleError(error)}`);
  }
};

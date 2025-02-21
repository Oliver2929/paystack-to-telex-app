import { Request, Response } from "express";
import {
  verifyPayment,
  sendResultToReturnUrl,
} from "../services/paystackService";
import { Payload } from "../types/paystackTypes";

export const verifyPaymentHandler = async (req: Request, res: Response) => {
  const payload: Payload = req.body;

  if (
    !payload.channel_id ||
    !payload.return_url ||
    !payload.settings ||
    payload.settings.length === 0
  ) {
    return res
      .status(400)
      .json({ message: "Invalid payload, missing required fields." });
  }

  const referenceSetting = payload.settings.find(
    (setting) => setting.label === "reference"
  );
  if (!referenceSetting || !referenceSetting.default) {
    return res.status(400).json({ message: "Missing reference in settings." });
  }

  const reference = referenceSetting.default;

  try {
    const paymentStatus = await verifyPayment(reference);

    const result = {
      channel_id: payload.channel_id,
      status: paymentStatus.status,
      reference: reference,
      message:
        paymentStatus.status === "success"
          ? "Payment successful"
          : "Payment failed",
    };

    await sendResultToReturnUrl(payload.return_url, result);

    return res.json({
      message: "Payment verification processed and result sent to return_url.",
    });
  } catch (error: any) {
    console.error("Error processing payment:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

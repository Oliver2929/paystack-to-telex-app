import { Request, Response } from "express";
import dotenv from "dotenv";
import { sendNotificationToTelex } from "../services/paystackService";
import { fetchTransactionData } from "../services/paystackService";

export async function handleTelexRequest(req: Request, res: Response) {
  const { channel_id, return_url, settings } = req.body;

  // Validate incoming payload
  if (!channel_id || !return_url || !settings) {
    return res
      .status(400)
      .send("Missing necessary information in the payload!");
  }

  // Immediately acknowledge the request from Telex
  res.status(200).send("Request received and is being processed.");

  // Background processing of the request
  setTimeout(async () => {
    try {
      const transactionData = await fetchTransactionData(settings);

      const responseData = {
        message: "Processed the requested transaction data successfully",
        channel_id: channel_id,
        event_name: settings.event_type,
        status: "success",
        username: "PaystackBot",
        data: transactionData,
        return_url: return_url,
        settings: settings,
      };

      await sendNotificationToTelex(responseData, return_url);
    } catch (error) {
      console.error("Error processing request:", error);

      // If an error occurs, send failure response back to Telex
      const errorData = {
        message: "Failed to process the requested transaction data.",
        channel_id: channel_id,
        status: "failed",
        username: "PaystackBot",
        error: error instanceof Error ? error.message : "Unknown error",
        return_url: return_url,
        settings: settings,
      };
      await sendNotificationToTelex(errorData, return_url);
    }
  }, 0);
}

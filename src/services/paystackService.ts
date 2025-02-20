import axios from "axios";
import { PAYSTACK_SECRET_KEY } from "../config/dotenvConfig";

export async function fetchTransactionData(settings: any) {
  console.log("Fetching transaction data based on settings:", settings);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        transactions: [
          { id: 1, status: "success", amount: 1000 },
          { id: 2, status: "failed", amount: 500 },
        ],
      });
    }, 2000); // Simulate a 2-second delay for fetching data
  });
}

// Function to send the processed data back to Telex via the return_url
export async function sendNotificationToTelex(data: any, returnUrl: string) {
  try {
    const payload = {
      channel_id: data.channel_id,
      event_name: data.event_name,
      status: data.status,
      username: data.username,
      data: data.data,
      return_url: data.return_url,
      settings: data.settings,
    };

    // Send POST request to Telex return URL
    const response = await axios.post(returnUrl, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Notification sent to Telex return URL:", response.data);
  } catch (error) {
    console.error("Error sending notification to Telex:", error);
  }
}

import axios from "axios";
import { telexAppData } from "../config/telexConfig";

export async function sendNotificationToTelex(event: string, data: any) {
  const { target_url } = telexAppData.data;

  let message = "Basic";
  let eventType = "revenue-reports";

  // Update message and event type from settings if available
  for (const setting of telexAppData.data.settings) {
    if (setting.label === "message") {
      message = setting.default as string;
    }
    if (setting.label === "event type") {
      eventType = setting.default as string;
    }
  }

  try {
    const response = await axios.post(target_url, {
      event: eventType,
      data: {
        eventData: data,
        message: message,
      },
    });

    console.log("Notification sent to Telex:", response.data);
  } catch (error) {
    console.error("Error sending notification to Telex:", error);
  }
}

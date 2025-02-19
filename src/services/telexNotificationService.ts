// import axios from "axios";
// import { AxiosError } from "axios";
// import { telexAppData } from "../config/telexConfig";

// export async function sendNotificationToTelex(event: string, data: any) {
//   const { target_url } = telexAppData.data;

//   let message = "Basic";
//   let eventType = "revenue-reports";

//   for (const setting of telexAppData.data.settings) {
//     if (setting.label === "message") {
//       message = setting.default as string;
//     }
//     if (setting.label === "event type") {
//       eventType = setting.default as string;
//     }
//   }

//   try {
//     const response = await axios.post(target_url, {
//       event: eventType,
//       data: {
//         eventData: data,
//         message: message,
//       },
//     });

//     console.log("Notification sent to Telex:", response.data);
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       console.error(
//         "Error sending notification to Telex:",
//         error.response ? error.response.data : error.message
//       );
//     } else {
//       // Handle case where it's not an AxiosError
//       console.error("An unknown error occurred:", error);
//     }
//   }
// }

// // Function to initiate uptime check request
// export async function initiateUptimeCheck(
//   channelId: string,
//   returnUrl: string,
//   settings: any
// ) {
//   const { tick_url } = telexAppData.data;

//   const uptimePayload = {
//     channelId,
//     returnUrl,
//     settings,
//   };

//   try {
//     const response = await axios.post(tick_url, uptimePayload);

//     console.log("Uptime check request sent:", response.data);
//   } catch (error) {
//     console.error("Error initiating uptime check:", error);
//   }
// }

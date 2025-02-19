// import cron from "node-cron";
// import {
//   sendNotificationToTelex,
//   initiateUptimeCheck,
// } from "../services/telexNotificationService";

// export function scheduleNotifications() {
//   cron.schedule("*/5 * * * *", async () => {
//     console.log("Sending notification to Telex...");
//     try {
//       const data = {
//         amount: 5000,
//         transaction_id: "txn12345",
//       };
//       await sendNotificationToTelex("revenue-reports", data);
//     } catch (error) {
//       console.error("Error during scheduled notification:", error);
//     }
//   });
// }

// export async function initiateUptimeCheckHandler(
//   channelId: string,
//   returnUrl: string,
//   settings: any
// ) {
//   setImmediate(async () => {
//     try {
//       await initiateUptimeCheck(channelId, returnUrl, settings);
//     } catch (error) {
//       console.error("Error processing uptime check:", error);
//     }
//   });
// }

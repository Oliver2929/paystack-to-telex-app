import cron from "node-cron";
import { sendNotificationToTelex } from "../services/telexNotificationService";

export function scheduleNotifications() {
  cron.schedule("*/5 * * * *", () => {
    sendNotificationToTelex("revenue-reports", {
      amount: 5000,
      transaction_id: "txn12345",
    });
  });
}

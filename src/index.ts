import express, { Request, Response } from "express";
import { scheduleNotifications } from "./utils/timeIntervalHandler";
import { sendNotificationToTelex } from "./services/telexNotificationService";

const app = express();
const port = 3000;

app.use(express.json());

// Start scheduling notifications based on settings
scheduleNotifications();

app.post("/send-notification", async (req: Request, res: Response) => {
  const { event, data } = req.body;
  try {
    await sendNotificationToTelex(event, data);
    res.status(200).send("Notification sent successfully!");
  } catch (error) {
    res.status(500).send("Error sending notification");
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running. Notifications are scheduled!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

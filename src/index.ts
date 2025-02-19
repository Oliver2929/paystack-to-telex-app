// import express, { Request, Response } from "express";
// import {
//   scheduleNotifications,
//   initiateUptimeCheckHandler,
// } from "./utils/timeIntervalHandler";
// import { sendNotificationToTelex } from "./services/telexNotificationService";

// const app = express();
// const port = 3000;

// app.use(express.json());

// // Start scheduling notifications based on settings
// scheduleNotifications();

// app.post("/initiate-uptime-check", async (req: Request, res: Response) => {
//   const { channelId, returnUrl, settings } = req.body;

//   if (!channelId || !returnUrl || !settings) {
//     return res.status(400).send("Missing required fields");
//   }

//   try {
//     await initiateUptimeCheckHandler(channelId, returnUrl, settings);

//     res
//       .status(202)
//       .send(
//         "Uptime check initiated. Results will be sent to the return URL once complete."
//       );
//   } catch (error) {
//     res.status(500).send("Error processing uptime check");
//   }
// });

// app.get("/", (req: Request, res: Response) => {
//   res.send("Server is running. Notifications are scheduled!");
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/integration.json", (req: Request, res: Response) => {
  const baseUrl = req.protocol + "://" + req.get("host");

  const responseData = {
    data: {
      date: {
        created_at: "2025-02-18",
        updated_at: "2025-02-18",
      },
      descriptions: {
        app_name: "telex-paystack-notification",
        app_description:
          "A telex feature that entails getting notifications on revenue reports, chargebacks and failed payments",
        app_logo: "https://paystack-to-telex-app.onrender.com",
        app_url: baseUrl,
        background_color: "#fff",
      },
      is_active: true,
      integration_type: "interval",
      key_features: [
        "real time updates on revenue reports. chargebacks and failed payments",
      ],
      author: "Ademola",
      settings: [
        {
          label: "telex-channel",
          type: "text",
          required: true,
          default: "transaction-alerts",
        },
        {
          label: "time interval",
          type: "dropdown",
          required: true,
          default: "immediate",
          options: [
            "immediate",
            "Every 5-minutes",
            "Every 10-minutes",
            "Every 1-hour",
          ],
        },
        {
          label: "event type",
          type: "dropdown",
          required: true,
          default: "revenue-reports",
          options: ["revenue-reports", "chargebacks", "failed-payments"],
        },
        {
          label: "message",
          type: "text",
          required: true,
          default: "Basic",
        },
        {
          label: "include log",
          type: "checkbox",
          required: true,
          default: "true",
        },
        {
          label: "uptime-check-url",
          type: "text",
          required: true,
          default:
            "https://paystack-to-telex-app.onrender.com/initiate-uptime-check",
        },
      ],
      target_url: "https://paystack-url-webhook.onrender.com/paystack-webhook",
      tick_url: `${baseUrl}/initiate-uptime-check`,
    },
  };

  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

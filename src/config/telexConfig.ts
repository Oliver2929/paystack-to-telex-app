export const telexAppData = {
  data: {
    date: {
      created_at: "2025-02-17",
      updated_at: "2025-02-17",
    },
    descriptions: {
      app_name: "telex-paystack-payment ",
      app_description:
        "A  telex feature that entails getting notifications on revenue reports, chargebacks and chargebacks",
      app_logo: "http://ec2-54-163-5-31.compute-1.amazonaws.com",
      app_url: "http://ec2-54-163-5-31.compute-1.amazonaws.com",
      background_color: "#fff",
    },
    is_active: true,
    integration_type: "interval",
    key_features: [
      "real time updates on revenue reports",
      "chargebacks and failed payments",
    ],
    author: "Ademola",
    settings: [
      {
        label: "slack-channel",
        type: "text",
        required: true,
        default: "payments-alerts",
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
        options: ["revenue-reports", "chargebacks", "chargebacks"],
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
    ],
    target_url: "https://paystack-url-webhook.onrender.com",
    tick_url: "http://ec2-54-163-5-31.compute-1.amazonaws.com/telex-webhook",
  },
};

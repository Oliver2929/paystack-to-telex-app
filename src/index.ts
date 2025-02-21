import express from "express";
import cors from "cors";
import { config } from "./config/config";
import { getIntegrationJson } from "./config/telexConfig";
import paystackRoutes from "./routes/paystackRoute";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/paystack", paystackRoutes);

app.get("/integration.json", getIntegrationJson);

app._router.stack.forEach((route: any) => {
  if (route.route) {
    console.log(route.route.path);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

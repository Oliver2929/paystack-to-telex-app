import express, { Request, Response } from "express";
import cors from "cors";
import { getIntegrationJson } from "./config/telexConfig";
import { handleTelexRequest } from "./controllers/paystackController";

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.post("/paystack-payments", handleTelexRequest);

app.get("/integration.json", getIntegrationJson);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

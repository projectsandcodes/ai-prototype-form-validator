import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import bodyParser from "body-parser";
const cors = require("cors");

const app = express();
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname,"frontend")));
app.use(bodyParser.json());

app.post("/validate", (req, res) => {
  if (!req.body || typeof req.body !== "object") {
    return res.status(400).json({ valid: false, issues: ["Invalid request body."] });
  }

  const { name, email, message } = req.body;
  console.log("Received:", req.body);

  const issues = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
// Basic validation
  if (!name || name.length < 2) issues.push("Name seems too short.");
  if (!email || !emailRegex.test(email)) issues.push("Email format looks incorrect.");
  if (!message || message.length < 10) issues.push("Message appears incomplete.");

  res.json({ valid: issues.length === 0, issues });
});

app.use((err, req, res, next) => {
  console.error("Express error:", err);
  res.status(500).json({ valid: false, issues: ["Internal server error."] });
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught exception:", err);
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection:", reason);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));


import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname));
app.use(bodyParser.json());

app.post("/validate", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received:", req.body);

  const issues = [];

  if (!name || name.length < 2) issues.push("Name seems too short.");
  if (!email || !email.includes("@")) issues.push("Email format looks incorrect.");
  if (!message || message.length < 10) issues.push("Message appears incomplete.");

  res.json({ valid: issues.length === 0, issues });
});

//app.listen(3000, () => console.log("Server running on port 3000"));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


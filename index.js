const express = require("express");
const app = express();

app.use(express.json());

app.post("/log-booking", (req, res) => {
  console.log("📥 POST /log-booking hit");
  console.log("✅ Webhook received:");
  console.log(req.body);

  res.json({ status: "success", message: `Received booking for ${req.body.name}` });
});

app.get("/", (req, res) => {
  res.send("Vincecho Webhook is live!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

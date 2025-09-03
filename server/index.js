if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Allowed origins (pwede mong dagdagan kung kailangan)
const allowedOrigins = [
  "http://localhost:5173",             // Vite dev server (local)
  "https://i-love-you-v2.vercel.app"   // Your deployed frontend on Vercel
];

// ✅ Configure CORS
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json({ limit: "10mb" }));

// ✅ Root route (para hindi "Cannot GET /")
app.get("/", (req, res) => {
  res.send("🚀 Backend is running! Try POST /send-email");
});

// ✅ Health check route
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is healthy" });
});

// ✅ Main email-sending endpoint
app.post("/send-email", async (req, res) => {
  try {
    const { message, score, drawings } = req.body;

    if (!drawings || drawings.length !== 3) {
      return res.status(400).json({ message: "Provide me 3 drawings" });
    }

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const attachments = drawings.map((image, index) => ({
      filename: `drawing_${index + 1}.png`,
      content: image.split(";base64,")[1],
      encoding: "base64",
    }));

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: "delacruzorlando776@gmail.com", 
      subject: "Drawings and letter for you",
      text: `${message}\n\n${score}`,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
});

// ✅ Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

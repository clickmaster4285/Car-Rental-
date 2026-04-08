// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const path = require("path");

const connectDB = require("./config/db");

const errorHandler = require("./middleware/errorHandler");
const mainRouter = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later."
});

// Security & Middleware
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  credentials: true,
  methods: ["GET","POST","PUT","DELETE","PATCH","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization","X-Requested-With"]
}));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
// app.use(limiter); // optional

// Serve static files
app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server is running",
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API Routes
app.use("/api", mainRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Global error handler
app.use(errorHandler);

// Start server
const startServer = async () => {
  try {
   
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📊 Health check: http://localhost:${PORT}/health`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
};

// Graceful shutdown
["SIGINT","SIGTERM"].forEach(sig => {
  process.on(sig, () => {
    console.log(`${sig} received, shutting down gracefully`);
    process.exit(0);
  });
});

startServer();
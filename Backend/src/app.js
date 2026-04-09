import express from "express";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://localhost:5173", // in case
  // Add your Vercel domain here, e.g., "https://your-project.vercel.app"
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (origin.includes('localhost') || origin.includes('vercel.app')) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouter)

export default app

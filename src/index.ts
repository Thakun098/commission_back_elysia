import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { commissionRoute } from "./routes/commission.route";

// Read configuration from environment variables
const PORT = parseInt(process.env.PORT || "3000");
const CORS_ORIGINS = process.env.CORS_ORIGINS?.split(",").map(o => o.trim()) || ["http://localhost:3000", "http://localhost:5000"];

console.log("🔧 Environment:");
console.log("  PORT:", PORT);
console.log("  CORS_ORIGINS:", CORS_ORIGINS);

const app = new Elysia()
  .get("/", () => ({ status: "ok", message: "Commission Calculator API is running!" }))
  .use(cors({
    origin: CORS_ORIGINS,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }))
  .use(commissionRoute)
  .listen(PORT);

console.log(`🦊 Elysia is running at http://0.0.0.0:${PORT}`);

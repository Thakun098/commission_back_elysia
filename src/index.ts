import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { commissionRoute } from "./routes/commission.route";

// Read configuration from environment variables
const PORT = parseInt(process.env.PORT || "5000");
const HOST = process.env.HOST || "localhost";
const CORS_ORIGINS = process.env.CORS_ORIGINS?.split(",") || ["http://localhost:3000", "http://localhost:5000"];

const app = new Elysia()
  .use(cors({
    origin: CORS_ORIGINS,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }))
  .use(commissionRoute)
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${HOST}:${PORT}`
);

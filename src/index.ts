import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { commissionRoute } from "./routes/commission.route";

// Read configuration from environment variables
const PORT = parseInt(process.env.PORT || "3000");
const ORIGINS = process.env.CORS_ORIGINS?.split(",") ?? [];

const app = new Elysia()
  .use(
    cors({
      origin: ORIGINS,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    })
  )
  .options("*", () => new Response(null, { status: 204 }))
  .get("/", () => ({
    status: "ok",
    message: "Commission Calculator API is running!",
  }))
  .use(commissionRoute)
  .listen({
    port: PORT,
    hostname: "0.0.0.0",
  });


console.log(`🦊 Elysia is running at http://0.0.0.0:${PORT}`);

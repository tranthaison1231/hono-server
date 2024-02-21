import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono().basePath("/api");

app.use("*", logger());
app.use(
  "*",
  cors({
    origin: [
      "http://localhost:5173",
    ],
    credentials: true,
  }),
);

app.get("/", c => c.json({ message: "Welcome to Gym Master API" }));


app.notFound((c) => {
  return c.json(
    {
      message: "Not found",
      statusCode: 404,
    },
    404,
  );
});


serve(app, () => {
  console.log("Server is running on http://localhost:3000");
});

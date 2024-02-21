"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const node_server_1 = require("@hono/node-server");
const cors_1 = require("hono/cors");
const logger_1 = require("hono/logger");
const app = new hono_1.Hono().basePath("/api");
app.use("*", (0, logger_1.logger)());
app.use("*", (0, cors_1.cors)({
    origin: [
        "http://localhost:5173",
    ],
    credentials: true,
}));
app.get("/", c => c.json({ message: "Welcome to Gym Master API" }));
app.notFound((c) => {
    return c.json({
        message: "Not found",
        statusCode: 404,
    }, 404);
});
(0, node_server_1.serve)(app, () => {
    console.log("Server is running on http://localhost:3000");
});
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const node_server_1 = require("@hono/node-server");
const auth_controller_1 = require("./modules/auth/auth.controller");
const app = new hono_1.Hono().basePath("/api");
app.route("/", auth_controller_1.router);
app.post("/", async (c) => {
    const input = await c.req.json();
    return c.json(input);
});
(0, node_server_1.serve)(app, () => {
    console.log("Server is running on http://localhost:3000");
});
//# sourceMappingURL=index.js.map
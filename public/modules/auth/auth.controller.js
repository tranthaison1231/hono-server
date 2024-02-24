"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const hono_1 = require("hono");
exports.router = new hono_1.Hono();
exports.router.get("/sign-in", async (c) => {
    return c.json({ hello: "world" }, 200);
});
//# sourceMappingURL=auth.controller.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = require("fastify-plugin");
const websocket_1 = require("@fastify/websocket");
exports.default = (0, fastify_plugin_1.default)(async (fastify) => {
    await fastify.register(websocket_1.default);
});

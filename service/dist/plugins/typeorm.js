"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = require("fastify-plugin");
const typeorm_1 = require("typeorm");
const articleEntity_1 = require("../entities/articleEntity");
exports.default = (0, fastify_plugin_1.default)(async (fastify, opts) => {
    fastify.decorate('orm', await (0, typeorm_1.createConnection)({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "49184516",
        database: "serhii_db",
        entities: [articleEntity_1.Articles],
        synchronize: true,
        logging: ['error', 'info']
    }));
});

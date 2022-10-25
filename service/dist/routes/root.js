"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDataFromDb = void 0;
const articleEntity_1 = require("../entities/articleEntity");
const getAllDataFromDb = async (fastify) => {
    const dataFromDB = await fastify.orm
        .getRepository(articleEntity_1.Articles)
        .createQueryBuilder()
        .getMany();
    console.log(dataFromDB);
    return dataFromDB;
};
exports.getAllDataFromDb = getAllDataFromDb;
const root = async (fastify) => {
    fastify.get("/ws", {
        websocket: true,
        schema: {
            hide: true,
            description: 'WebSocket Address'
        }
    }, async (connection) => {
        fastify.websocketServer.clients.add(connection.socket);
        console.log('Here is connection...');
        (0, exports.getAllDataFromDb)(fastify).then(async (items) => {
            fastify.log.info(items);
            connection.socket.send(JSON.stringify({
                type: 'article',
                action: 'update',
                payload: items
            }));
        });
    });
};
exports.default = root;

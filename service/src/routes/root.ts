import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { Articles } from "../entities/articleEntity";

export const getAllDataFromDb = async (fastify: FastifyInstance): Promise<Articles[]> => {
    const dataFromDB = await fastify.orm
        .getRepository(Articles)
        .createQueryBuilder()
        .getMany();
    console.log(dataFromDB);
    return dataFromDB
}

const root: FastifyPluginAsync = async (fastify): Promise<void> => {
    fastify.get(
        "/ws",
        {
            websocket: true,
            schema: {
                hide: true,
                description: 'WebSocket Address'
            } as any
        },
        async (connection) => {
            //Add the new socket to the list of clients, so we can send data later
            fastify.websocketServer.clients.add(connection.socket as any);
            console.log('Here is connection...');
            //sending dataFromDb to the client
            getAllDataFromDb(fastify).then(async (items) => {
                fastify.log.info(items);
                (connection.socket as any).send(
                    JSON.stringify({
                        type: 'article',
                        action: 'update',
                        payload: items
                    })
                )
            });
        }
    )
}

export default root;

declare module 'fastify' {
    export interface FastifyInstance {
        closeWebsockifyServer: () => void;
    }
}
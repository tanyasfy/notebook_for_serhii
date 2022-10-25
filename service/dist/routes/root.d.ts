import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { Articles } from "../entities/articleEntity";
export declare const getAllDataFromDb: (fastify: FastifyInstance) => Promise<Articles[]>;
declare const root: FastifyPluginAsync;
export default root;
declare module 'fastify' {
    interface FastifyInstance {
        closeWebsockifyServer: () => void;
    }
}

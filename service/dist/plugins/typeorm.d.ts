import { Connection } from 'typeorm';
declare const _default: import("fastify").FastifyPluginAsync<import("fastify").FastifyPluginOptions, import("fastify").RawServerDefault, import("fastify").FastifyTypeProviderDefault>;
export default _default;
declare module 'fastify' {
    interface FastifyInstance {
        orm: Connection;
    }
}

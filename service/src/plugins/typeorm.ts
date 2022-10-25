import fp from 'fastify-plugin';
import { Connection, createConnection } from 'typeorm';
import { Articles } from '../entities/articleEntity';

export default fp(async (fastify, opts) => {
    fastify.decorate(
        'orm',

        await createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "49184516",
            database: "serhii_db",
            entities: [Articles],
            synchronize: true,
            logging: ['error', 'info']
        })
    )
})

declare module 'fastify' {
    export interface FastifyInstance {
        orm: Connection;
    }
}
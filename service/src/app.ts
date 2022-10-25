import { FastifyPluginAsync } from "fastify";
import { join } from "path";
import Autoload from '@fastify/autoload';

const app: FastifyPluginAsync = async (fastify, opts) => {

    //loads all plugins defined in plugins
    await fastify.register(Autoload, {
        dir: join(__dirname, 'plugins'),
        options: opts
    })

    //loads all plugins defined in routes
    //define your routes in one of these
    await fastify.register(Autoload, {
        dir: join(__dirname, 'routes'),
        options: opts
    })
}

export default app;
export { app };
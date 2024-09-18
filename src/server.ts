import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { routes } from "./routes";

const app = Fastify({ logger: true });
dotenv.config();

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  app.register(cors);
  app.register(routes);

  const port = 3333;

  try {
    await app.listen({ port: port, host: "0.0.0.0" });
    console.log(`Servidor rodando no http://localhost:${port}`);
  } catch (err) {
    console.log(err);
  }
};

start();

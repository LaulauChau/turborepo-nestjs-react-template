import { type FastifyReply, type FastifyRequest } from "fastify";

export function loggerMiddleware(
  request: FastifyRequest["raw"],
  response: FastifyReply["raw"],
  next: () => void,
): void {
  const { method, url } = request;
  const start = Date.now();

  response.on("finish", () => {
    const { statusCode } = response;
    const responseTime = Date.now() - start;

    console.log(`[${method}] ${url} ${statusCode} ${responseTime}ms`);
  });

  next();
}

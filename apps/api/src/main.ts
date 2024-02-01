import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { loggerMiddleware } from "~/common/middleware/logger.middleware";
import { env } from "~/lib/env";

import { AppModule } from "./app.module";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.enableCors({
    origin: env.CLIENT_URL,
  });
  app.setGlobalPrefix("api");
  app.use(loggerMiddleware);

  await app.listen(env.SERVER_PORT);
}

void bootstrap();

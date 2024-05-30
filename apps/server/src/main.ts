import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { AppModule } from "./app.module";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: process.env.NODE_ENV !== "production" }),
  );
  const configService = app.get(ConfigService);

  app.enableCors({ origin: configService.getOrThrow("CLIENT_URL") });
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(configService.getOrThrow("SERVER_PORT"), "0.0.0.0");
}

bootstrap();

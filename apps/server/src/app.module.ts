import { join } from "node:path";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      exclude: ["/api*"],
      rootPath: join(__dirname, "..", "..", "client", "dist"),
    }),
  ],
})
export class AppModule {}

import { Injectable, type OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@repo/database";

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }
}

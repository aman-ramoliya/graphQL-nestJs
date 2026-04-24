import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: ['query', 'error', 'warn'], // optional but helpful
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}

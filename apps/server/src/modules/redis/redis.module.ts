import { Module } from '@nestjs/common';
import Redis from 'redis';

import { env } from '@/shared/env';

import { REDIS } from './redis.constants';

@Module({
  providers: [
    {
      provide: REDIS,
      useValue: Redis.createClient({
        port: env.get('REDIS_DB_PORT'),
        host: env.get('REDIS_DB_HOST'),
      }),
    },
  ],
  exports: [REDIS],
})
export class RedisModule {}
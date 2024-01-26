import { ConfigModule } from '@nestjs/config';
import { PubSubModule } from './pubsub/pubsub.module';
import { PrismaModule } from './prisma/prisma.module';

export const GlobalModule = [
  ConfigModule.forRoot(),
  PubSubModule,
  PrismaModule,
];

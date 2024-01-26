import { ConfigModule } from '@nestjs/config';
import { PubSubModule } from './pubsub/pubsub.module';

export const GlobalModule = [ConfigModule.forRoot(), PubSubModule];

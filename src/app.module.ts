import { Module } from '@nestjs/common';
import { FeaturesModules } from './modules';
import { GlobalModule } from './modules/global';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [...GlobalModule, ...FeaturesModules, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}

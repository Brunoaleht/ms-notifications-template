import { Module } from '@nestjs/common';
import { FeaturesModules } from './modules';
import { GlobalModule } from './modules/global';

@Module({
  imports: [...GlobalModule, ...FeaturesModules],
  controllers: [],
  providers: [],
})
export class AppModule {}

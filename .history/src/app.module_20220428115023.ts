import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { AbxDryRunController } from './modules/abx---dry-run/abx---dry-run.controller';

@Module({
  imports: [],
  controllers: [AppController, CoffeesController, AbxDryRunController],
  providers: [AppService],
})
export class AppModule {}

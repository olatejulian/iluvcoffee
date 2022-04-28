import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import 

@Module({ controllers: [CoffeesController] })
export class CoffeesModule {

}

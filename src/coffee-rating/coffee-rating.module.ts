import { Module } from '@nestjs/common';
import { CoffeesModule } from 'src/coffees/coffee.module';
import { DatabaseModule } from 'src/database/database.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
    imports: [
        CoffeesModule,
        DatabaseModule.register({
            // 👈 passing in dynamic values
            type: 'postgres',
            username: 'postgres',
            password: 'postgres',
            host: 'localhost',
            port: 5432,
            database: 'postgres',
        }),
    ],
    providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}

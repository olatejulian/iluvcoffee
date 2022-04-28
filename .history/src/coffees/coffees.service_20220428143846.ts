import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/conffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [];
}

import { Injectable } from '@nestjs/common';
import { Coffee } from '.entities'

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [];
}

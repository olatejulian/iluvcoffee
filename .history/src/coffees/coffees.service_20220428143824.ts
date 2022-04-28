import { Injectable } from '@nestjs/common';
import { Coffee } 

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [];
}

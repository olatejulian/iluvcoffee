import { Injectable } from '@nestjs/common';
import { Coffee } from '.en'

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [];
}

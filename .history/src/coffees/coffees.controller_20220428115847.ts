import { Controller } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @get()
  findAll() {
    return 'This action returns all coffees';
  }
}

import { Module, Global } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Global() // Unlike Angular, modules are not globally scoped, @Global() decorator is required to make it accessible in global scope
@Module({
  controllers: [
    CatsController
  ],
  providers: [
    CatsService
  ],
  exports: [
    CatsService // allows module to be shared as singletons across other modules
  ]
})
export class CatsModule {}

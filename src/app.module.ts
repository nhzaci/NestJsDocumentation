import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware) // can be used to apply functions instead of a class as well 
      // for multiple middleware, simply separate with a comma, e.g.
      // .apply(LoggerMiddleware, logger)
      // .exclude could be used instead of forRoutes to exclude paths inside a controller
      .forRoutes('cats');
      // could additionally specify specific methods inside the route, e.g.
      // forRoutes({ path: 'cats', method: RequestMethod.GET });
      // path could also include wildcard routes
      // arguments could also be controllers
      // forRoutes(CatController)
  }
}

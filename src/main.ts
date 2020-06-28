import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // global middleware can be tied here using app.use() alike in express
  await app.listen(3000);
}
bootstrap();

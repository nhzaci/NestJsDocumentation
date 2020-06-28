import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // global middleware can be tied here using app.use(<middleware>) alike in express
  // global pipes can be declared with app.useGlobalPipes(<pipe>)
  await app.listen(3000);
}
bootstrap();

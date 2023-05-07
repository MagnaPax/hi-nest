import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// bootstrap 은 아무 이름이나 가능하다
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); // 앱은 3000번의 포트를 리스닝 하고 있다
}
bootstrap();

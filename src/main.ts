import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// bootstrap 은 아무 이름이나 가능하다
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 유효성 검사. expressJS의 미들웨어 같은 것.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 데코레이터가 없는 property의 object를 거른다.
      forbidNonWhitelisted: true, // 이상한 것 보내면 아예 리퀘스트 자체를 막아버린다.
      transform: true, // 유저들이 보낸것을 우리가 원하는 실제값(여기서는 entity의 Movie 클래스)로 바꿔준다.
    }),
  );

  await app.listen(7653); // 앱은 7653번의 포트를 리스닝 하고 있다
}

bootstrap();

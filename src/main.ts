import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // application 생성
  // 모든 모듈의 root module 이 AppModule
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

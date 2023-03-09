import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';

const serverConfig = config.get('server');

async function bootstrap() {
  const logger = new Logger();
  // application 생성
  // 모든 모듈의 root module 이 AppModule
  const app = await NestFactory.create(AppModule);
  const PORT = serverConfig['port'];

  await app
    .listen(PORT)
    .then(() => logger.log(`Application running on port: ` + PORT));
}
bootstrap();

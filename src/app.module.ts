import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import './utils/bigintHelpers';

@Module({
  // root 모듈 (AppModule) 이 부모
  // imports 대상 모듈이 자식 또는 참조 관계가 된다.
  imports: [BoardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/CreateBoard.dto';
import { CreateBoardVo } from './vo/CreateBoard.vo';
import { ReadAllBoardDto } from './dto/ReadAllBoard.dto';
import { UpdateBoardStatusVo } from './vo/UpdateBoardStatus.vo';
import { UpdateBoardStatusDto } from './dto/UpdateBoardStatus.dto';
import { BoardStatusValidationPipe } from './pipes/boardStatusValidation.pipe';

@Controller('boards')
export class BoardController {
  // Access modifier 를 constructor 내에 선언시
  // 접근 제한자가 사용된 파라미터는 암묵적으로 클래스 프로퍼티로 선언됨.
  constructor(private boardService: BoardService) {}

  @Get('/')
  getAllBoards(): ReadAllBoardDto[] {
    return this.boardService.getAllBoards();
  }

  @Get('/:id')
  getBoardById(@Param('id') id: bigint) {
    return this.boardService.getBoardById(id);
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardVo: CreateBoardVo): CreateBoardDto {
    return this.boardService.createBoard(createBoardVo);
  }

  @Patch('/:id')
  updateBoardStatus(
    @Param('id') id: bigint,
    @Body(BoardStatusValidationPipe) updateBoardStatusVo: UpdateBoardStatusVo,
  ): UpdateBoardStatusDto {
    return this.boardService.updateBoardStatus(id, updateBoardStatusVo);
  }

  @Delete('/:id')
  deleteBoardById(@Param('id') id: bigint) {
    return this.boardService.deleteById(id);
  }
}

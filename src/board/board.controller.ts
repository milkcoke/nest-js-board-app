import {Body, Controller, Get, Post} from '@nestjs/common';
import {BoardService} from "./board.service";
import {BoardStatus} from "./BoardStatus.model";
import {Board} from "./Board.model";
import {CreateBoardDto} from "./dto/create-board.dto";
import {CreateBoardVo} from "./vo/create-board.vo";

@Controller('boards')
export class BoardController {
    // Access modifier 를 constructor 내에 선언시
    // 접근 제한자가 사용된 파라미터는 암묵적으로 클래스 프로퍼티로 선언됨.
    constructor(private boardService: BoardService) {}

    @Get('/')
    getAllBoards() {
        return this.boardService.getAllBoards();
    }

    // ts 에서는 request body 어케할까?
    // 그.. VO 가 없는데?
    // typescript record 쓰나?

    // Spring 처럼 @Body 지림
    @Post('/')
    createBoard(
        @Body() createBoardVo: CreateBoardVo
    ) : CreateBoardDto {
        return this.boardService.createBoard(createBoardVo);
    }
}

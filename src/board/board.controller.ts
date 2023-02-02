import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {BoardService} from "./board.service";
import {CreateBoardDto} from "./dto/CreateBoard.dto";
import {CreateBoardVo} from "./vo/CreateBoard.vo";
import {ReadBoardVo} from "./vo/ReadBoard.vo";
import {ReadAllBoardDto} from "./dto/ReadAllBoard.dto";

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
    getBoardById(@Param() readBoardVo: ReadBoardVo) {
        return this.boardService.getBoardById(readBoardVo);
    }

    @Post('/')
    createBoard(
        @Body() createBoardVo: CreateBoardVo
    ) : CreateBoardDto {
        return this.boardService.createBoard(createBoardVo);
    }
}

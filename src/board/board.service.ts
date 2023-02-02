import { Injectable } from '@nestjs/common';
import {Board} from "./Board.model";
import {CreateBoardVo} from "./vo/CreateBoard.vo";
import {CreateBoardDto} from "./dto/CreateBoard.dto";
import {ReadBoardDto} from "./dto/ReadBoard.dto";
import {ReadAllBoardDto} from "./dto/ReadAllBoard.dto";
import {UpdateBoardStatusVo} from "./vo/UpdateBoardStatus.vo";
import {UpdateBoardStatusDto} from "./dto/UpdateBoardStatus.dto";

@Injectable()
export class BoardService {

    // # symbol is part of ECMAScript standard.
    // But it doesn't support all javascript runtime.
    // So use `private` access modifier instead of `#` symbol.
    private boards : Board[] = [];

    // return type BoardDTO 권장
    // Entity 혹은 일반 타입 넘기는것은 권장되지않음.
    getAllBoards(): ReadAllBoardDto[] {
        const allBoardDtos = [];

        for (const board of this.boards) {
            const {id, title, description, status} = board;
            allBoardDtos.push(new ReadAllBoardDto(id, title, description, status));
        }

        return allBoardDtos;
    }

    getBoardById(reqId : bigint): ReadBoardDto {

        // bigint 비교를 위해 == 사용
        const foundBoard = this.boards.find((board: Board) => board.id == reqId);
        const {id, title, description, status} = foundBoard;
        return new ReadBoardDto(id, title, description, status);
    }

    createBoard(createBoardVo: CreateBoardVo) {
        const {title, description, status} = createBoardVo;

        // property name 과 변수명이 같은경우 자동으로 값 할당.
        const newBoard : Board = {
            id: BigInt(this.boards.length + 1),
            title,
            description,
            status
        }

        this.boards.push(newBoard);

        return new CreateBoardDto(newBoard.id, newBoard.title, newBoard.description, newBoard.status);;
    }

    updateBoardStatus(reqId: bigint, updateBoardVo: UpdateBoardStatusVo) : UpdateBoardStatusDto {
        const foundBoard = this.boards.find((board: Board)=> board.id == reqId);
        foundBoard.status = updateBoardVo.status;
        const {id, title, description, status} = foundBoard;

        return new UpdateBoardStatusDto(id, title, description, status);
    }
    deleteById(reqId: bigint) {
        this.boards = this.boards.filter((board: Board)=>board.id != reqId);
    }
}

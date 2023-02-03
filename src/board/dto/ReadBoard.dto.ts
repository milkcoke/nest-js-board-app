import {BoardStatusType, BoardStatus} from "../BoardStatus.model";

export class ReadBoardDto {
    readonly id: bigint;
    title: string;
    description: string;

    status: BoardStatusType;

    constructor(id: bigint, title: string, description: string, status: BoardStatusType) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

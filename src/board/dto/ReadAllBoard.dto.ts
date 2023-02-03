import {BoardStatusType, BoardStatus} from "../BoardStatus.model";

export class ReadAllBoardDto {
    readonly id: bigint;
    readonly title: string;
    readonly description: string;

    readonly status: BoardStatusType;

    constructor(id: bigint, title: string, description: string, status: BoardStatusType) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

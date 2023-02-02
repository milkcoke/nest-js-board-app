import {BoardStatus} from "../BoardStatus.model";

export class CreateBoardDto {
    readonly id: bigint;
    title: string;
    description: string;

    status: keyof typeof BoardStatus;

    constructor(id: bigint, title: string, description: string, status: keyof typeof BoardStatus) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

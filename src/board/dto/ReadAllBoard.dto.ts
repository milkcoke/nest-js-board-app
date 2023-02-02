import {BoardStatus} from "../BoardStatus.model";

export class ReadAllBoardDto {
    readonly id: bigint;
    readonly title: string;
    readonly description: string;

    readonly status: keyof typeof BoardStatus;

    constructor(id: bigint, title: string, description: string, status: keyof typeof BoardStatus) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

import {BoardStatus} from "../BoardStatus.model";

export class CreateBoardVo {
    readonly title: string;
    readonly description: string;
    // 값 강제가 왜 안되지?
    readonly status: keyof typeof BoardStatus;

    constructor(title: string, description: string, status: keyof typeof BoardStatus) {
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

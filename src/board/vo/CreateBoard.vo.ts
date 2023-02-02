import {BoardStatus} from "../BoardStatus.model";
import {IsNotEmpty} from "class-validator";

export class CreateBoardVo {
    @IsNotEmpty()
    readonly title: string;
    readonly description: string;
    // 값 강제가 안됨.
    readonly status: keyof typeof BoardStatus;

    constructor(title: string, description: string, status: keyof typeof BoardStatus) {
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

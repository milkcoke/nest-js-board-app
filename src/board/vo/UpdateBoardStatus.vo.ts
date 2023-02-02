import {BoardStatus} from "../BoardStatus.model";

export class UpdateBoardStatusVo {
    readonly status: keyof typeof BoardStatus;
    constructor(status: keyof typeof BoardStatus) {
        this.status = status;
    }
}

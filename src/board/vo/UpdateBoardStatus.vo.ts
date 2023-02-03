import {BoardStatus, BoardStatusType} from "../BoardStatus.model";

export class UpdateBoardStatusVo {
    readonly status: BoardStatusType;
    constructor(status: BoardStatusType) {
        this.status = status;
    }
}

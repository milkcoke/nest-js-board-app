import {BoardStatus} from "./BoardStatus.model";

export interface Board {
    id: bigint;
    title: string;
    description: title;

    status: BoardStatus;
}

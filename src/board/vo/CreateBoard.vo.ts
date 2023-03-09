import { BoardStatus, BoardStatusType } from '../BoardStatus.model';
import { IsNotEmpty } from 'class-validator';

export class CreateBoardVo {
  @IsNotEmpty()
  readonly title: string;
  readonly description: string;
  // 값 강제가 안됨.
  readonly status: BoardStatusType;

  constructor(title: string, description: string, status: BoardStatusType) {
    this.title = title;
    this.description = description;
    this.status = status;
  }
}

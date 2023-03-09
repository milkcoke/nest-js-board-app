import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { isBoardStatus } from '../BoardStatus.model';

export class BoardStatusValidationPipe implements PipeTransform {
  // value: 처리된 인자의 값
  // metadata: 인자에 대한 메타데이터 포함.
  transform(value: any, metadata: ArgumentMetadata): any {
    console.dir(value); // {status: 'PRIVATE'}
    if (!isBoardStatus(value.status)) {
      throw new BadRequestException(`status: ${value.status} is not allowed`);
    }

    // {
    //   metatype: [class UpdateBoardStatusVo],
    //   type: 'body',
    //   data: undefined
    // }
    // console.dir(metadata);

    return value;
  }
}

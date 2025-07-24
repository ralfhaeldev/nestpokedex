import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParsePaginationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const limit = parseInt(value.limit, 10) || 10;
    const offset = parseInt(value.offset, 10) || 0;

    if (limit < 1 || offset < 0) {
      throw new BadRequestException('Invalid pagination values');
    }

    return {
      limit,
      offset,
    };
  }
}

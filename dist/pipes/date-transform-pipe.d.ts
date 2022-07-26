import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class DateTransformPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}

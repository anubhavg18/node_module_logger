import { PipeTransform } from '@nestjs/common';
export declare class UserValidationPipe implements PipeTransform {
    readonly allowedNameLength = 5;
    readonly allowedCharLength = 50;
    transform(value: any): any;
    private isLengthLess50;
    private userNameValidation;
}

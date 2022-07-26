import { BadRequestException, PipeTransform } from '@nestjs/common';

export class UserValidationPipe implements PipeTransform {
  readonly allowedNameLength = 5;

  readonly allowedCharLength = 50;

  transform(value: any) {
    const username = value.username.toUpperCase();
    const description = value.description.toUpperCase();
    console.log('value:', value);

    if (!this.userNameValidation(username)) {
      throw new BadRequestException(
        `"${username}": Length of username is greater than 5`,
      );
    }

    if (!this.isLengthLess50(description)) {
      throw new BadRequestException(`Description length is greater than 50`);
    }

    return value;
  }

  private isLengthLess50(description: string) {
    const lengthDesc = description.length;
    console.log('lengthDesc 1:', lengthDesc);
    if (lengthDesc > this.allowedCharLength) return false;
    console.log('description.length:', description.length);
    console.log('lengthDesc:', lengthDesc);
    return true;
  }

  private userNameValidation(username: string) {
    if (username.length > this.allowedNameLength) return false;
    return true;
  }
}

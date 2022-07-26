export class ApiError {
  // ApiError response body created
  code: string;

  message: string;

  target: string;

  details: Detail[];

  constructor(code: string, message: string, target: string) {
    this.code = code;
    this.message = message;
    this.target = target;
  }
}

class Detail {
  code: string;

  target: string;

  message: string;
}

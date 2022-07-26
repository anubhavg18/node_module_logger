import { Injectable } from '@nestjs/common';
import { ApiError } from './model/api-error';
import * as errorConfig from '../config/error-file';
export class ErrorHelperService {
  static getErrorByType(type: string) {
    // Here we are getting the error by its type.
    const err = errorConfig[type];
    return {
      status: err.httpStatus,
      error: {
        error: new ApiError(err.exceptionCode, err.message, err.target), // Returning the error repsonse on formatted way
      },
    };
  }
}

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from './config.service';

@Injectable()
export class ApiCallsService {
  constructor(private configservice: ConfigService) { }
  // It will call the all request from 3rd party apis

  getData(config: any) {
    if (config && config.headers) {
      config.headers['Ocp-Apim-Subscription-Key'] = this.configservice.getConfigConstantValue('baseUrlKey');
      config.headers['Ocp-Apim-Trace'] = true;
    }
    return axios(config)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        throw error.response;
      });
  }

}

import { Injectable, CanActivate } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    console.log('process.env.authKey', process.env.authKey);
    if (process.env.authKey == 'auth123') {
      return true;
    } else {
      return false;
    }
  }
}

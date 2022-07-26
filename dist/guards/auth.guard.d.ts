import { CanActivate } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class AuthGuard implements CanActivate {
    canActivate(): boolean | Promise<boolean> | Observable<boolean>;
}

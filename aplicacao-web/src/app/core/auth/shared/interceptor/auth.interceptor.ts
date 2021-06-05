import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (sessionStorage.getItem('token')) {
            const token = sessionStorage.getItem('token');
            const authReq = req.clone(
                {
                    headers: req.headers
                        .append('Authorization', token as string)
                }
            );
            return next.handle(authReq);
        }
        return next.handle(req);
    }
}

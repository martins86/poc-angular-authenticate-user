import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { AuthService } from '../services/auth.service';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (sessionStorage.getItem('token')) {
            const token = sessionStorage.getItem('token');
            const authReq = req.clone(
                {
                    headers: req.headers
                        .append('Authorization', token as string)
                }
            );
            return next.handle(authReq).pipe(
                catchError((error) => {
                    console.error(error);
                    if (error instanceof HttpErrorResponse) {
                        if (error.status === 401) {
                            this.authService.logoutUser();
                            this.router.navigateByUrl('login');
                        }
                    }
                    return throwError(error);
                })
            );
        }
        return next.handle(req);
    }
}

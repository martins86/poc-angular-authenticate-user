import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../../environments/environment';

import { DataUserSession } from '../models/data-user-session.model';

import { Observable, throwError, from } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly urlApi = environment.urlGitPod;

  constructor(private http: HttpClient) { }

  registerUser(user: DataUserSession): Observable<DataUserSession> {
    return this.http.post<DataUserSession>(`${this.urlApi}/auth/register`, user)
      .pipe(
        catchError(
          (e) => {
            console.error(e);
            return throwError(e);
          }
        )
      );
  }
}

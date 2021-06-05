import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../../environments/environment';

import { DataUserSession } from '../models/data-user-session.model';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly urlApi = environment.urlGitPod;

  private subjUser$: BehaviorSubject<DataUserSession> = new BehaviorSubject<any>(null);
  private subjLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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

  loginUser(credentials: { email: string, password: string }): Observable<DataUserSession> {
    return this.http.post<DataUserSession>(
      `${this.urlApi}/auth/login`, credentials
      )
      .pipe(
        tap((userSession: DataUserSession) => {
          sessionStorage.setItem('token', userSession.token);
          this.subjLoggedIn$.next(true);
          this.subjUser$.next(userSession);
        }),
        catchError(
          (e) => {
            console.error(e);
            return throwError(e);
          }
        )
      );
  }

  logoutUser(): void {
    sessionStorage.clear();
    this.subjLoggedIn$.next(false);
    this.subjUser$.next(null as unknown as DataUserSession);
  }

  isAuthenticated(): Observable<boolean> {
    return this.subjLoggedIn$.asObservable();
  }

  getUserSession(): Observable<DataUserSession> {
    return this.subjUser$.asObservable();
  }
}

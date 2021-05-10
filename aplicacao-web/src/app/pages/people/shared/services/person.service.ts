import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../../environments/environment';
import { DataPerson } from './../models/data-person.model';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PersonService {

readonly urlApi = 'api/';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<DataPerson[]> {
    return this.http.get<DataPerson[]>(`${this.urlApi}person`)
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

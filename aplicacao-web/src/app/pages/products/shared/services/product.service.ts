import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataProduct } from './../models/data-product.model';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {

readonly urlApi = 'api/';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<DataProduct[]> {
    return this.http.get<DataProduct[]>(`${this.urlApi}product`)
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

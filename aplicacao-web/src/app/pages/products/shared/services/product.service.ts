import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../../environments/environment';

import { DataProduct } from './../models/data-product.model';

import { Observable, throwError, from } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {

readonly urlApi = environment.urlGitPod;

  constructor(private http: HttpClient) { }

  getPeople(): Observable<DataProduct[]> {
    return this.http.get<DataProduct[]>(`${this.urlApi}/api/products`)
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

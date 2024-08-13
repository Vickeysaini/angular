import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminExpenseService {

  private _baseUrl: string;
  constructor(private http: HttpClient) {
    this._baseUrl = environment.apiURL;
  }
  // constructor() { }
  getAlladminExpense(): Observable<any> {
    return this.http
      .get(this._baseUrl + '/v1/employee/', {
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
        },
      })
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((err) => {
          console.error('Error is handled', err.message);
          return throwError('Error thrown from catchError');
        })
      );
  }
}

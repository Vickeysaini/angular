import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseSheetService {
  private _baseUrl: string;
  constructor(private http: HttpClient) {
    this._baseUrl = environment.apiURL;
  }
  // constructor() { }

  // getExpenseSheetByAdminId(empId: any): Observable<any> {
  //   return this.http.get(this._baseUrl + '/v1/myexpense/admin/' + empId, {
  //     headers: {
  //       'Cache-Control': 'no-cache',
  //       'Pragma': 'no-cache'
  //     }
  //   }).pipe(
  //     map((response: any) => {
  //       return response;
  //     }),
  //     catchError(err => {
  //       console.error("Error is handled", err.message);
  //       return throwError("Error thrown from catchError");
  //     })
  //   );
  // }

  getExpenseSheetByAdminId(empId: any, status:any): Observable<any> {
    return this.http.get(this._baseUrl + '/v1/myexpense/admin/' + empId+'?status='+status, {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(err => {
        console.error("Error is handled", err.message);
        return throwError("Error thrown from catchError");
      })
    );
  }
  updateExpenseById(data: any, adminId:any): Observable<any> {
    return this.http
      .put(this._baseUrl + '/v1/myexpense/'+ adminId, data, {
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
  updateExpenseSheetStatus( data:any, expId:any): Observable<any> {
    return this.http
      .patch(this._baseUrl + '/v1/myexpense/status/'+expId , data,  {
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
  getExpenseSheetStatusByAdminId(empId: any): Observable<any> {
    return this.http.get(this._baseUrl + '/v1/myexpense/status-count/' + empId, {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(err => {
        console.error("Error is handled", err.message);
        return throwError("Error thrown from catchError");
      })
    );
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MyTimeService {
  private _baseUrl: string;
  constructor(private http: HttpClient) {
    this._baseUrl = environment.apiURL;
  }

  createMytime(data: any, adminId: any): Observable<any> {
    return this.http
      .post(this._baseUrl + '/v1/mytime/create/' + adminId, data, {
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
  
  updateMytime(data: any, proId: any): Observable<any> {
    return this.http
      .put(this._baseUrl + '/v1/mytime/' + proId, data, {
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
  
  getAllMytime(empId:any): Observable<any> {
    return this.http
      .get(this._baseUrl + '/v1/mytime/'+empId, {
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
  getMyTimeSheetByWeek(empId: any): Observable<any> {
    return this.http.get(this._baseUrl + '/v1/mytime/filter/' + empId+'?showby=week', {
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
  getMyTimeSheetByMonth(empId: any): Observable<any> {
    return this.http.get(this._baseUrl + '/v1/mytime/filter/' + empId+'?showby=month', {
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

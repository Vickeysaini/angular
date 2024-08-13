import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TimeSheetService {

  private _baseUrl: string;
  constructor(private http: HttpClient) {
    this._baseUrl = environment.apiURL;
  }

  getAllEmployees(): Observable<any> {
    return this.http.get(this._baseUrl + '/v1/employee/', { 
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
  getTimeSheetByAdminId(empId: any, statusName:string): Observable<any> {
    return this.http.get(this._baseUrl + '/v1/mytime/admin/' + empId+'?status='+statusName, {
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
  getTimeSheetStatusByAdminId(empId: any): Observable<any> {
    return this.http.get(this._baseUrl + '/v1/mytime/status-count/' + empId, {
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
  updateTimeSheetById(data: any, adminId:any): Observable<any> {
    return this.http
      .put(this._baseUrl + '/v1/mytime/'+ adminId, data, {
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
  updateTimeSheetStatus( data:any, expId:any): Observable<any> {
    return this.http
      .patch(this._baseUrl + '/v1/mytime/status/'+expId , data,  {
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

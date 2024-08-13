import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimesheetSummaryService {

  private _baseUrl: string;
  constructor(private http: HttpClient) {
    this._baseUrl = environment.apiURL;
  }
  createTimeSheetSummary(data:any,id:any ): Observable<any> {
    return this.http
      .post(this._baseUrl + '/v1/reports/timesheetsummary/'+id ,data, {
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
  getAllTimeSheetSummary(Id:any): Observable<any> {
    return this.http
      .get(this._baseUrl + '/v1/reports/options/'+Id, {
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

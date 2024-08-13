import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BamboohrService {
  private _baseUrl: string;
  constructor(private http: HttpClient) {
    this._baseUrl = environment.apiURL;
  }
  createBambooHr(data: any, adminId: any ) {
    return this.http
      .post(this._baseUrl + '/v1/bamboohr/create/'+ adminId, data,{
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

  getBamBooHrById(id:any): Observable<any> {
    return this.http.get(this._baseUrl + '/v1/bamboohr/'+id, {
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

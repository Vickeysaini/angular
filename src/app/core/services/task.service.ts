import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _baseUrl: string;
  constructor(private http: HttpClient) {
    this._baseUrl = environment.apiURL;
  }
  
  createTask(data: any, adminId: any): Observable<any> {
    return this.http
      .post(this._baseUrl + '/v1/task/create/' + adminId, data, {
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

  updateTask(data: any, empId: any): Observable<any> {
    return this.http
      .put(this._baseUrl + '/v1/task/' + empId, data, {
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
  getTaskByAdminId(empId: any): Observable<any> {
    return this.http.get(this._baseUrl + '/v1/task/emp/' + empId, {
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

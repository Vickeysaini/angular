import { Injectable, Inject, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../models';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _baseUrl: string;
  user: User = {
    isAuthenticate: false,
    currentUser: {},
    loading: false
  }

  constructor(private http: HttpClient, private router:Router) {
    this._baseUrl = environment.apiURL;
  }
  getCurrentUser() {
    return this.user;
  }
   setCurrentUser(data: any) {
    const decoded = jwt_decode(data);
    this.user = {
      isAuthenticate: true,
      currentUser: decoded,
      loading: false
    }
    sessionStorage.setItem('user', JSON.stringify(this.user));
    return this.user;
  }
  singup(data: any): Observable<any> {
    return this.http
      .post(this._baseUrl + '/v1/auth/create', data, {
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

  login(data: any): Observable<any> {
    return this.http.post(this._baseUrl + '/v1/admin/login', data, {
      headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' },
    })
      .pipe(map((response: any) => {
        return response;
      }),
        catchError((err) => {
          console.error('Error is handled', err.message);
          return throwError('Error thrown from catchError');
        })
      );
  }
  // getUserToken() {
    
  // }

  public sign(): void {
    localStorage.setItem('token', 'token');
  }

  public signOut(): void {
    sessionStorage.clear();
    localStorage.clear();
    window.location.reload();
  }

  public getUser(id:any): Observable<any> {
    return this.http.post(this._baseUrl + '/v1/auth/login/'+`${id}`, {
      headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' },
    })
      .pipe(map((response: any) => {
        return response;
      }),
        catchError((err) => {
          console.error('Error is handled', err.message);
          return throwError('Error thrown from catchError');
        })
      );
  }
}


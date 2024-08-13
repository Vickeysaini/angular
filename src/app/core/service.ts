import { Injectable, Inject, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private _baseUrl: string;
  constructor(private http: HttpClient) {
    this._baseUrl = environment.apiURL;
    console.log('baseURL==>', this._baseUrl);
  }

  // singup(data: any): Observable<any> {
  //   return this.http
  //     .post(this._baseUrl + '/v1/auth/create', data, {
  //       headers: {
  //         'Cache-Control': 'no-cache',
  //         Pragma: 'no-cache',
  //       },
  //     })
  //     .pipe(
  //       map((response: any) => {
  //         return response;
  //       }),
  //       catchError((err) => {
  //         console.error('Error is handled', err.message);
  //         return throwError('Error thrown from catchError');
  //       })
  //     );
  // }
  // login(data: any): Observable<any> {
  //   return this.http
  //     .post(this._baseUrl + '/v1/auth/login', data, {
  //       headers: {
  //         'Cache-Control': 'no-cache',
  //         Pragma: 'no-cache',
  //       },
  //     })
  //     .pipe(
  //       map((response: any) => {
  //         return response;
  //       }),
  //       catchError((err) => {
  //         console.error('Error is handled', err.message);
  //         return throwError('Error thrown from catchError');
  //       })
  //     );
  // }

  //   getAllCourses(): Observable<any> {
  //     return this.http
  //       .get(this._baseUrl + '/v1/course/', {
  //         headers: {
  //           'Cache-Control': 'no-cache',
  //           Pragma: 'no-cache',
  //         },
  //       })
  //       .pipe(
  //         map((response: any) => {
  //           return response;
  //         }),
  //         catchError((err) => {
  //           console.error('Error is handled', err.message);
  //           return throwError('Error thrown from catchError');
  //         })
  //       );
  //   }

  //   getAllAssignments(): Observable<any> {
  //     return this.http
  //       .get(this._baseUrl + '/v1/assignment/', {
  //         headers: {
  //           'Cache-Control': 'no-cache',
  //           Pragma: 'no-cache',
  //         },
  //       })
  //       .pipe(
  //         map((response: any) => {
  //           return response;
  //         }),
  //         catchError((err) => {
  //           console.error('Error is handled', err.message);
  //           return throwError('Error thrown from catchError');
  //         })
  //       );
  //   }
  //   getTask(): Observable<any> {
  //     return this.http
  //       .get(this._baseUrl + '/v1/task/', {
  //         headers: {
  //           'Cache-Control': 'no-cache',
  //           Pragma: 'no-cache',
  //         },
  //       })
  //       .pipe(
  //         map((response: any) => {
  //           return response;
  //         }),
  //         catchError((err) => {
  //           console.error('Error is handled', err.message);
  //           return throwError('Error thrown from catchError');
  //         })
  //       );
  //   }

  //   createCourse(data: any): Observable<any> {
  //     return this.http
  //       .post(this._baseUrl + '/v1/course/create', data, {
  //         headers: {
  //           'Cache-Control': 'no-cache',
  //           Pragma: 'no-cache',
  //         },
  //       })
  //       .pipe(
  //         map((response: any) => {
  //           return response;
  //         }),
  //         catchError((err) => {
  //           console.error('Error is handled', err.message);
  //           return throwError('Error thrown from catchError');
  //         })
  //       );
  //   }
  // getQueueTeamLeadList(queueId:any): Observable<any> {
  //     return this.http.get(this._baseUrl + 'api/Teams/getQueueTeamLeadUsers/'+queueId, {
  //         headers: {
  //             'Cache-Control': 'no-cache',
  //             'Pragma': 'no-cache'
  //         }
  //     })
  //         .pipe(
  //             map((response: any) => {
  //                 return response;
  //             }),
  //             catchError(err => {
  //                 //if (err.status == 500) {
  //                 //    this.localSessionService.expireSession();
  //                 //}
  //                 //this.localSessionService.setExpireSessionOnError(err.status);
  //                 console.error("Error is handled", err.message);
  //                 return throwError("Error thrown from catchError");
  //             })
  //         );
  // }

  // getAllTeamsByQueueId(queueId:any): Observable<any> {
  //     return this.http.get(this._baseUrl + 'api/Teams/getAll/'+queueId, {
  //         headers: {
  //             'Cache-Control': 'no-cache',
  //             'Pragma': 'no-cache'
  //         }
  //     })
  //         .pipe(
  //             map((response: any) => {
  //                 return response;
  //             }),
  //             catchError(err => {
  //                 //if (err.status == 500) {
  //                 //    this.localSessionService.expireSession();
  //                 //}
  //                 //this.localSessionService.setExpireSessionOnError(err.status);
  //                 console.error("Error is handled", err.message);
  //                 return throwError("Error thrown from catchError");
  //             })
  //         );
  // }

  // getAllQueuesUsersData(teamId:any, queueId:any): Observable<any> {
  //     return this.http.get(this._baseUrl + 'api/Teams/getAllQueueUsers/'+teamId+'/'+queueId, {
  //         headers: {
  //             'Cache-Control': 'no-cache',
  //             'Pragma': 'no-cache'
  //         }
  //     })
  //         .pipe(
  //             map((response: any) => {
  //                 return response;
  //             }),
  //             catchError(err => {
  //                 //if (err.status == 500) {
  //                 //    this.localSessionService.expireSession();
  //                 //}
  //                 //this.localSessionService.setExpireSessionOnError(err.status);
  //                 console.error("Error is handled", err.message);
  //                 return throwError("Error thrown from catchError");
  //             })
  //         );
  // }

  // getAllQueueAndTeamUsersData(excludeTeamId:any): Observable<any> {
  //     return this.http.get(this._baseUrl + 'api/Teams/getAllQueueAndTeamUsers/'+excludeTeamId, {
  //         headers: {
  //             'Cache-Control': 'no-cache',
  //             'Pragma': 'no-cache'
  //         }
  //     })
  //         .pipe(
  //             map((response: any) => {
  //                 return response;
  //             }),
  //             catchError(err => {
  //                 //if (err.status == 500) {
  //                 //    this.localSessionService.expireSession();
  //                 //}
  //                 //this.localSessionService.setExpireSessionOnError(err.status);
  //                 console.error("Error is handled", err.message);
  //                 return throwError("Error thrown from catchError");
  //             })
  //         );
  // }

  // addUpdateUsersInTeam(data:any): Observable<any> {
  //     return this.http.post(this._baseUrl + 'api/Teams/addRemoveTeamUser', data, {
  //         headers: {
  //             'Cache-Control': 'no-cache',
  //             'Pragma': 'no-cache'
  //         }
  //     })
  //         .pipe(
  //             map((response: any) => {
  //                 return response;
  //             }),
  //             catchError(err => {
  //                 //if (err.status == 500) {
  //                 //    this.localSessionService.expireSession();
  //                 //}
  //                 //this.localSessionService.setExpireSessionOnError(err.status);
  //                 console.error("Error is handled", err.message);
  //                 return throwError("Error thrown from catchError");
  //             })
  //         );
  // }

  // addUpdateSecondSupervisorInTeam(data:any): Observable<any> {
  //     return this.http.post(this._baseUrl + 'api/Teams/updateRemoveSecondSupervisor', data, {
  //         headers: {
  //             'Cache-Control': 'no-cache',
  //             'Pragma': 'no-cache'
  //         }
  //     })
  //         .pipe(
  //             map((response: any) => {
  //                 return response;
  //             }),
  //             catchError(err => {
  //                 //if (err.status == 500) {
  //                 //    this.localSessionService.expireSession();
  //                 //}
  //                 //this.localSessionService.setExpireSessionOnError(err.status);
  //                 console.error("Error is handled", err.message);
  //                 return throwError("Error thrown from catchError");
  //             })
  //         );
  // }

  // getAllActiveTeamUser(teamId:any, queueId:any): Observable<any> {
  //     return this.http.get(this._baseUrl + 'api/Teams/getActiveUsers/'+teamId+'/'+queueId, {
  //         headers: {
  //             'Cache-Control': 'no-cache',
  //             'Pragma': 'no-cache'
  //         }
  //     })
  //         .pipe(
  //             map((response: any) => {
  //                 return response;
  //             }),
  //             catchError(err => {
  //                 //if (err.status == 500) {
  //                 //    this.localSessionService.expireSession();
  //                 //}
  //                 //this.localSessionService.setExpireSessionOnError(err.status);
  //                 console.error("Error is handled", err.message);
  //                 return throwError("Error thrown from catchError");
  //             })
  //         );
  // }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private _baseUrl: string;
  constructor(private http: HttpClient) {
    this._baseUrl = environment.apiURL;
  }
  getPdfData(id:any,): Observable<Blob> {
    return this.http.get(this._baseUrl + '/v1/reports/options/'+id, { responseType: 'blob' });
  }
}

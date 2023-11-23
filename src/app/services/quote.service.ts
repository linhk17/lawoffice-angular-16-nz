import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private prefixApi: String = '/quote-form';
  constructor(private httpClient: HttpClient) {}

  create(payload: any): Observable<any> {
    return this.httpClient.post<any>(
      environment['apiUrl'] + this.prefixApi + '/',
      payload,
      { headers: this.headers }
    );
  }

  getAll(): Observable<any> {
    return this.httpClient.get<any>(
      environment['apiUrl'] + this.prefixApi + '/'
    );
  }
  getById(id: string): Observable<any> {
    return this.httpClient.get<any>(
      environment['apiUrl'] + this.prefixApi + '/' + id
    );
  }

  update(payload: any, id: string): Observable<any> {
    return this.httpClient.put<any>(
      environment['apiUrl'] + this.prefixApi + '/' + id,
      payload,
      { headers: this.headers }
    );
  }
  sendMail(payload: any): Observable<any> {
    return this.httpClient.post<any>(
      environment['apiUrl'] + this.prefixApi + '/sendMail',
      payload,
      { headers: this.headers }
    );
  }

}

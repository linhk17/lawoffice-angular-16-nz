import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class TimeAppointmentService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  prefixApi: String = '/time-appointment';

  constructor(private httpClient: HttpClient) { }

  public getAllTime(): Observable<any>{
    return this.httpClient.get<any>(
      environment['apiUrl'] + this.prefixApi + '/'
    )
  }

  public create(payload: any): Observable<any>{
    return this.httpClient.post<any>(
      environment['apiUrl'] + this.prefixApi + '/', payload,
      {headers: this.headers}
    )
  }

  public getById(id: string): Observable<any>{
    return this.httpClient.get<any>(
      environment['apiUrl'] + this.prefixApi + '/' + id
    )
  }
}

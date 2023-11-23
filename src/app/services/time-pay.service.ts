import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class TimePayService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  prefixApi: String = '/time-pay';
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<any>{
    return this.httpClient.get<any>(
      environment['apiUrl'] + this.prefixApi + '/'
    )
  }}

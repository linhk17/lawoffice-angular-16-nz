import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryPhoneCodeService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  prefixApi: String = '/phone-code';

  constructor(private httpClient: HttpClient) { }

  public getPhoneCode(): Observable<any>{
    return this.httpClient.get<any>(
      environment['apiUrl'] + this.prefixApi,
    {headers: this.headers})
  }
}

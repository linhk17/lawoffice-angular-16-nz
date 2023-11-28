import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryPhoneCodeService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  public getPhoneCode(): Observable<any>{
    return this.httpClient.get<any>('http://country.io/phone.json',
    {headers: this.headers})
  }
}

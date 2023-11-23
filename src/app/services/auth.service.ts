import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../shared/models/user.interface';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  prefixApi: String = '/user';
  
  constructor(private httpClient: HttpClient) {}

  public login(account: any): Observable<any> {
    return this.httpClient.post<any>(
      environment['apiUrl'] + this.prefixApi + '/login', account,
      { headers: this.headers}
    )
  }

  
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user.interface';
import { environment } from 'src/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  prefixApi: String = '/user';
  constructor(
    private httpClient: HttpClient,
    private storage: StorageService
  ) { }

  getProfileUser(): Observable<User>{
    const user = this.storage.getUser();
    return this.httpClient.get<User>(
      environment['apiUrl'] + this.prefixApi + '/' + user.id
    )
  }
  getAllUser(): Observable<User>{
    return this.httpClient.get<User>(
      environment['apiUrl'] + this.prefixApi + '/'
    )
  }
}

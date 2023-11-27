import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../shared/models/user.interface';
import { environment } from 'src/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  prefixApi: String = '/user';
  user = new BehaviorSubject<any>(null);
  currentUser = this.user.asObservable();
  constructor(
    private httpClient: HttpClient,
    private storage: StorageService
  ) { }

  getProfileUser(){
    const user = this.storage.getUser();
    this.httpClient.get<User>(
      environment['apiUrl'] + this.prefixApi + '/' + user.id
    ).subscribe(res =>  this.user.next(res)
    )
  }
  getAllUser(): Observable<User>{
    return this.httpClient.get<User>(
      environment['apiUrl'] + this.prefixApi + '/'
    )
  }

  getByMatter(ids: string[]): Observable<User>{
    return this.httpClient.post<User>(
      environment['apiUrl'] + this.prefixApi + '/findByMatter',
      ids
    )
  }

  updateUser(user: any) {
    this.httpClient.patch<User>(
      environment['apiUrl'] + this.prefixApi + '/' + user._id, user
    ).subscribe(res => {
      this.user.next(res);
    })
  }
}

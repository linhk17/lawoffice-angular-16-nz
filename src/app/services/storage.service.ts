import { Inject, Injectable } from '@angular/core';
import { User } from '../shared/models/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private router: Router) {}

  clean(): void {
    window.sessionStorage.clear();
    this.router.navigate(['/login'])
  }

  public setAccessToken(token: string): void {
    return window.sessionStorage.setItem('access-token', token);
  }

  public setUser(user: any): void {
    return window.sessionStorage.setItem('info-user', JSON.stringify(user));
  }

  public getAccessToken(): string | null {
    return window.sessionStorage.getItem('access-token');
  }
  public getUser(): any {
    const user = window.sessionStorage.getItem('info-user');
    return JSON.parse(user ? user : '')
  }

  public isLoggedIn(): boolean {
    return window.sessionStorage.getItem('access-token') ? true : false;
  }

}

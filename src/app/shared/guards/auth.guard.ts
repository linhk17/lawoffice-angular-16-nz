import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Observable } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable()
export class AuthGuard {
  constructor(public auth: StorageService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    const user = this.auth.getUser();
    if (!this.auth.isLoggedIn()) {
      window.alert('Access Denied, Login is Required to Access This Page!');
      this.router.navigate(['login']);
      return false;
    } else if (user.role !== route.data['expectedRole']) {
      window.alert('Access Denied, You do not have access');
      this.router.navigate(['counselor']);
      return false;
    }
      return true;
  }
}

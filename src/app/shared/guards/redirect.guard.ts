import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from "src/app/services/storage.service";
@Injectable()
export class RedirectGuard{
    constructor(
        public auth: StorageService, private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | boolean | UrlTree {
        const user = this.auth.getUser();
        switch(user.role) {
            case 1:
                return this.router.createUrlTree(["admin"]);
            case 2:
                return this.router.createUrlTree(["law"]);
            case 3:
                return this.router.createUrlTree(["counselor"]);
            default:
                return this.router.createUrlTree(["assistant"]);
        }
    }
}
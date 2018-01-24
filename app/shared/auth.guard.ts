import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BookStoreService } from './bookstore.service';
import { CanActivateChild, CanLoad } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private service: BookStoreService, private router: Router) { }
    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivateRoute();
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivateRoute();
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivateRoute();
    }
    canActivateRoute() {
        if (this.service.LoggedInUser) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}

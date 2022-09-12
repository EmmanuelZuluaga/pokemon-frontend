import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  /**
   *
   * @param authService Service to use a CRUD of routes POST/GET/PUT/DELETE
   */
  constructor(private router: Router) {}

  /**
   * method that checks if the route can be activated
   */
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.guardHandler();
  }
  /**
   * method that checks if the route can be loaded
   */
  canLoad():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.guardHandler();
  }

  /**
   * method that checks if there´s an existing token
   */
  guardHandler() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      localStorage.clear();
       this.router.navigate([
        'login'
      ]);
      return false;
    }
  }
}

import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  /**
   *
   * @param router to manage the routing in the app
   */
  constructor(private router: Router) {}

  /**
   * Intercepts all the requests to add the token and handles the forbidden error
   * @param req request
   * @param next let pass the flow
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let reqClone;
    if (!req.headers.get('apiKey')) {
      // add the token
      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.token}`,
      });

      //clones the request
      reqClone = req.clone({
        headers,
      });
    } else {
      reqClone = req;
    }

    // send the clone of the request
    return next.handle(reqClone).pipe(
      //handles the errors
      catchError(this.handleError.bind(this))
    );
  }

  /**
   * Method that handles the forbidden error
   * @param error error object
   */
  handleError(error: any) {
    if (error.status === 401) {
      localStorage.clear();
      this.router.navigate([
        'login'
      ]);
    }
    return throwError(() => error);
  }

  /**
   * get the token
   */
  get token() {
    return localStorage.getItem('token') || '';
  }
}

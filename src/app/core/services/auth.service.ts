import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public login(
   user:any
  ): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/api/auth/login`, user);
  }
}

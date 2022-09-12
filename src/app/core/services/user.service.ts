import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public signUp(
   user:any
  ): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/api/user/`, user);
  }
}

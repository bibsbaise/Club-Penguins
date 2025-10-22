import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  url: string = environment.apiMemberCodespace + 'login/auth';

  constructor(private http: HttpClient) { }

  login(email: string | undefined | null,
    password: string | undefined | null) {

    return this.http.post(this.url, {
      "email": email,
      "password": password,
    }).pipe(take(1));
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }
}

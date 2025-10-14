// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { take } from 'rxjs/operators';
// import { environment } from '../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })

// export class AuthenticationService {

//   url: string = environment.apiAuth + 'login/auth/rede/corp/';
//   urlLogin: string = environment.apiAuth + 'login/';

//   constructor(private http: HttpClient) { }

//   login(email: string | undefined | null,
//     password: string | undefined | null ,
//     papel: string | undefined | null) {

//     return this.http.post(this.url, {
//       "email": email,
//       "password": password,
//       "role": papel
//     }).pipe(
//       take(1)
//     );

//   }

//   loginRedeCorp(email: string | undefined | null,
//     password: string | undefined | null ,
//     papel: string | undefined | null) {

//     return this.http.post(this.urlLogin, {
//       "email": email,
//       "password": password,
//       "role": papel
//     }).pipe(
//       take(1)
//     );

//   }

//   getToken() {
//     return localStorage.getItem('token');
//   }

//   getRole() {
//     return localStorage.getItem('role');
//   }

//   logOut() {

//     localStorage.removeItem('token');

//     localStorage.removeItem('role');

//     localStorage.removeItem('id');
//   }
// }

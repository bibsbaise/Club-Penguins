import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthenticationService } from './authentication.service';
// import { EncryptService } from '../_helpers/encrypt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    // private fb: FormBuilder,
    private router: Router,
    // private auth: AuthenticationService,
    // private encryptService: EncryptService
  ) {}

  public errorAuth: boolean = false;

  // loginForm = this.fb.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', Validators.required],
  //   papel: ['', Validators.required]
  // });

  // getError() {
  //   return this.errorAuth;
  // }

//   submitLogin() {

//     // try to authentication again
//     this.errorAuth = false;

//     if (this.loginForm.get('email')?.value == 'root@telefonica.com') {

//       this.auth.loginRedeCorp(
//         this.loginForm.get('email')?.value,
//         this.loginForm.get('password')?.value,
//         this.loginForm.get('papel')?.value
//       ).subscribe({

//         error: (err) => {
//           this.errorAuth = true
//         },
//         next: (res: any) => {

//           const user = this.loginForm.get('email')?.value;
//           const pwd = this.loginForm.get('password')?.value

//           if(user && pwd) {

//             localStorage.setItem('token', res.token);
//             localStorage.setItem('id', res.id);
//             localStorage.setItem('role', res.role);
//             localStorage.setItem('user', user);
//             // localStorage.setItem('pwd', pwd);

//             // redireciona para uma determinada tela (consultor ou gestor)
//             if (this.loginForm.get('papel')?.value == "consultor") {

//               this.router.navigate(['/consultor']);

//             } else if (this.loginForm.get('papel')?.value == "admin") {

//               this.router.navigate(['/admin']);

//             }

//           }
//         }
//       });

//     } else {

//       const user = this.loginForm.get('email')?.value;
//       const pwd = this.loginForm.get('password')?.value

//       if(user && pwd) {

//         const reEnc = this.encryptService.encrypt(user);
//         const senhaEnc = this.encryptService.encrypt(pwd);

//         this.auth.login(
//           reEnc,
//           senhaEnc,
//           this.loginForm.get('papel')?.value
//         ).subscribe({
//           error: (err) => {
//             this.errorAuth = true
//           },
//           next: (res: any) => {

//               localStorage.setItem('token', res.token);
//               localStorage.setItem('id', res.id);
//               localStorage.setItem('role', res.role);
//               localStorage.setItem('user', user);
//               // localStorage.setItem('pwd', pwd);

//               // redireciona para uma determinada tela (consultor ou gestor)
//               if (this.loginForm.get('papel')?.value == "consultor") {

//                 this.router.navigate(['/consultor']);

//               } else if (this.loginForm.get('papel')?.value == "admin") {

//                 this.router.navigate(['/admin']);

//               }
//           }
//         });
//       }

//     }

//   }

//   logOut() {
//     localStorage.removeItem('token');
//     localStorage.removeItem('role');
//     localStorage.removeItem('id');
//     localStorage.removeItem('user');
//     localStorage.removeItem('pwd');
//   }

}

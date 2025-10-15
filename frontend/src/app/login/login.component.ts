import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
// import { EncryptService } from '../_helpers/encrypt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthenticationService,
    // private encryptService: EncryptService
  ) {}

  public errorAuth: boolean = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  getError() {
    return this.errorAuth;
  }

  submitLogin() {
    this.errorAuth = false;

    this.auth.login(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value,
    ).subscribe({

      error: (err) => {
        this.errorAuth = true
      },
      next: (res: any) => {
        const user = this.loginForm.get('email')?.value;
        const pwd = this.loginForm.get('password')?.value

        if(user && pwd) {

          localStorage.setItem('token', res.token);
          localStorage.setItem('id', res.id);
          localStorage.setItem('user', user);
        }
      }
    });
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('user');
    localStorage.removeItem('pwd');
  }

}

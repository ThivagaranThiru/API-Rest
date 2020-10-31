import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';
import { AuthInfo } from '../auth/auth-info';

import { TokenStorageService } from '../auth/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  // userRole: string;
  // userRoles: string[] = ['ROLE_USER', 'ROLE_ADMIN'];
  templateUnchecked = 'ROLE_USER';
  templateChecked = 'ROLE_ADMIN';
  role = 'ROLE_ADMIN';
  form: any = {};
  signupInfo: SignUpInfo;
  authInfo: AuthInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  isAuth = false;
  isAuthFailed = false;
  errorMessage = '';
  isLoggedIn = false;
  roles = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.username,
      this.form.password,
      this.role
    );
    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log('data: ' + data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        console.log('role: ' + this.role);
        this.tokenStorage.saveAuthorities(this.role);
        console.log('role: ' + this.role);
        this.router.navigateByUrl('home');
      },
      error => {
        console.log(error);
        this.errorMessage = error.message;
        this.isSignUpFailed = true;
      }
    );
    this.authticate();
  }
  authticate() {
    console.log(this.form);
    this.authInfo = new AuthInfo(
        this.form.username,
        this.form.password,
    );
    this.authService.attemptAuth(this.authInfo).subscribe(
        data => {
          console.log('data: ' + data);
          this.isAuth = true;
          this.isAuthFailed = false;
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isAuthFailed = true;
        }
    );
  }
}

import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles = '';
  token = '';
  user = '';
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      console.log(this.tokenStorage);
      this.roles = this.tokenStorage.getAuthorities();
      this.token = this.tokenStorage.getToken();
      this.user = this.tokenStorage.getUsername();
      // this.router.navigateByUrl('home');
    }
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        console.log(data.token);
        this.tokenStorage.saveUsername(this.form.username);
          console.log(this.roles);
          console.log(this.tokenStorage);
          this.roles = this.tokenStorage.getAuthorities();
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.getInformation();
      },
      error => {
        console.log(error);
        console.log(error.error.message);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
    //  this.getInformation();
  }

    getInformation() {
        this.authService.connectAuth().subscribe(
            data => {
                this.tokenStorage.saveAuthorities(data.userRole);
                this.roles = data.userRole;
                console.log('--------------------------------------------SAAAAAAAAVE ID :', data.idUser.toString());
                this.tokenStorage.saveUserID(data.idUser.toString());
                console.log('---role:');
                console.log(data.userRole);
                this.router.navigateByUrl('home');
            },
            error => {
                console.log(error);
                console.log(error.error.message);
                this.router.navigateByUrl('login');
            }
        );
    }

  reloadPage() {
    window.location.reload();
  }
}

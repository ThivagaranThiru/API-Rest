import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { MeResponse } from './me-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { AuthInfo } from './auth-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8090/authenticate';
  private signupUrl = 'http://localhost:8090/register';
  private connectUrl = 'http://localhost:8090/me';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    console.log('###attempt: ' + credentials.username + ' ' + credentials.password);
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
  connectAuth(): Observable<MeResponse> {
    return this.http.get<MeResponse>(this.connectUrl, httpOptions);
  }
}

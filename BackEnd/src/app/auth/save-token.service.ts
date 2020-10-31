import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const ID_KEY = 'AuthId';

@Injectable({
  providedIn: 'root'
})
export class SaveTokenService {
  constructor() { }

   signOut() {
    window.sessionStorage.clear();
  }

    public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

    public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

    public saveId(id: string) {
      window.sessionStorage.removeItem(ID_KEY);
      window.sessionStorage.setItem(ID_KEY, id);
  }

    public getId(): string {
      return sessionStorage.getItem(ID_KEY);
  }

    public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

    public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

    public saveAuthorities(authorities: string) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

    public getAuthorities(): string {

    return sessionStorage.getItem(AUTHORITIES_KEY);
  }
}

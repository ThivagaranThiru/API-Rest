import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'role';
const ID = 'id';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: string;
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

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveAuthorities(authorities: string) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, authorities);
  }

  public saveUserID(id: string) {
    window.sessionStorage.removeItem(ID);
    window.sessionStorage.setItem(ID, id);
  }

  public getUserID(): string {
    console.log(sessionStorage.getItem(ID));
    return sessionStorage.getItem(ID);
  }

  public getAuthorities(): string {
    this.roles = '';
    // return sessionStorage.getItem(AUTHORITIES_KEY);
    if (sessionStorage.getItem(TOKEN_KEY)) {
      return sessionStorage.getItem(AUTHORITIES_KEY);
    }

    return this.roles;
  }
}
